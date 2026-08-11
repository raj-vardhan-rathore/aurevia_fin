const path = require("path");
require("dotenv").config();

// react-scripts 5 still supplies legacy dev-server hooks. The project uses
// webpack-dev-server 5, so normalize that config for a regular local server.
function makeDevServerV5Compatible(devServerConfig) {
  const {
    https,
    onAfterSetupMiddleware,
    onBeforeSetupMiddleware,
    onListening,
    setupMiddlewares,
    ...compatibleConfig
  } = devServerConfig;

  compatibleConfig.server = typeof https === "object"
    ? { type: "https", options: https }
    : https ? "https" : "http";

  compatibleConfig.setupMiddlewares = (middlewares, devServer) => {
    if (onBeforeSetupMiddleware) onBeforeSetupMiddleware(devServer);
    const result = setupMiddlewares ? setupMiddlewares(middlewares, devServer) : middlewares;
    if (onAfterSetupMiddleware) onAfterSetupMiddleware(devServer);
    return result;
  };
  compatibleConfig.onListening = onListening;
  return compatibleConfig;
}

const enableHealthCheck = process.env.ENABLE_HEALTH_CHECK === "true";
let WebpackHealthPlugin;
let setupHealthEndpoints;
let healthPluginInstance;

if (enableHealthCheck) {
  WebpackHealthPlugin = require("./plugins/health-check/webpack-health-plugin");
  setupHealthEndpoints = require("./plugins/health-check/health-endpoints");
  healthPluginInstance = new WebpackHealthPlugin();
}

module.exports = {
  webpack: {
    alias: { "@": path.resolve(__dirname, "src") },
    configure: (webpackConfig) => {
      webpackConfig.watchOptions = {
        ...webpackConfig.watchOptions,
        ignored: ["**/node_modules/**", "**/.git/**", "**/build/**", "**/dist/**", "**/coverage/**"],
      };
      if (healthPluginInstance) webpackConfig.plugins.push(healthPluginInstance);
      return webpackConfig;
    },
  },
  devServer: (devServerConfig) => {
    if (!enableHealthCheck || !setupHealthEndpoints || !healthPluginInstance) {
      return makeDevServerV5Compatible(devServerConfig);
    }
    const originalSetupMiddlewares = devServerConfig.setupMiddlewares;
    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      if (originalSetupMiddlewares) {
        middlewares = originalSetupMiddlewares(middlewares, devServer);
      }
      setupHealthEndpoints(devServer, healthPluginInstance);
      return middlewares;
    };
    return makeDevServerV5Compatible(devServerConfig);
  },
};
