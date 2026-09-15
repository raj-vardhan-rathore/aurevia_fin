import { ImageResponse } from "next/og";

export const alt = "Aurevia — Digital Growth Systems for Modern Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#f6f0e6",
          background: "radial-gradient(circle at 76% 18%, #674d25 0%, #16120c 35%, #090807 75%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: 27, letterSpacing: "8px" }}>
          <span style={{ color: "#d6af68" }}>✦</span>
          AUREVIA
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "920px" }}>
          <div style={{ color: "#d6af68", fontSize: 22, letterSpacing: "5px" }}>STRATEGY · DESIGN · TECHNOLOGY</div>
          <div style={{ fontSize: 68, lineHeight: 1.08, letterSpacing: "-2px" }}>Digital Growth Systems for Modern Businesses</div>
        </div>
        <div style={{ color: "#c9bfaf", fontSize: 24 }}>aureviastudio.uk</div>
      </div>
    ),
    size,
  );
}
