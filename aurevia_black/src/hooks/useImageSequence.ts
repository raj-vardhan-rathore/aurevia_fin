"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ImageSequenceOptions } from "@/types";

interface UseImageSequenceOptions extends ImageSequenceOptions {
  /**
   * When false, frames are not fetched yet. Used to defer heavy sequences
   * (e.g. the panther) until their section is about to enter view.
   * Defaults to true (load immediately).
   */
  enabled?: boolean;
}

interface UseImageSequenceResult {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  isReady: boolean;
  progress: number;
  /** Draw the nearest integer frame for a fractional index in [0, frameCount - 1]. */
  setFrame: (frame: number) => void;
}

/**
 * Preloads a numbered JPG sequence (e.g. 0001.jpg ... NNNN.jpg) and exposes a
 * canvas + setFrame(index) API so the sequence can be scrubbed by an external
 * driver (GSAP ScrollTrigger) rather than played back on a timer.
 *
 * Frames are drawn at "cover" scale (like CSS background-size: cover), so
 * the sequence always fills its container edge-to-edge regardless of the
 * frame's native resolution or the viewport's aspect ratio, cropping
 * whichever axis overflows.
 */
export function useImageSequence({
  basePath,
  frameCount,
  padLength = 4,
  extension = "jpg",
  enabled = true,
}: UseImageSequenceOptions): UseImageSequenceResult {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const sizeRef = useRef({ width: 0, height: 0 });

  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = sizeRef.current;
    if (width === 0 || height === 0) return;

    // Cover-fit: scale the frame up (or down) so it always fills the full
    // width and height of the section, cropping whichever axis overflows —
    // the same behavior as CSS `background-size: cover`. Frames are 1280x720;
    // without this, larger screens showed the frame at native size, leaving
    // empty space around a small floating panther instead of a full-bleed
    // section.
    const coverScale = Math.max(
      width / img.naturalWidth,
      height / img.naturalHeight
    );

    const drawWidth = img.naturalWidth * coverScale;
    const drawHeight = img.naturalHeight * coverScale;
    const offsetX = (width - drawWidth) / 2;
    const offsetY = (height - drawHeight) / 2;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  const setFrame = useCallback(
    (frame: number) => {
      const clamped = Math.min(frameCount - 1, Math.max(0, Math.round(frame)));
      if (clamped === currentFrameRef.current && imagesRef.current[clamped]?.complete) {
        return;
      }
      currentFrameRef.current = clamped;
      drawFrame(clamped);
    },
    [drawFrame, frameCount]
  );

  // Preload every frame, once enabled.
  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.decoding = "async";
      const frameNumber = String(i + 1).padStart(padLength, "0");
      img.src = `${basePath}/${frameNumber}.${extension}`;
      img.onload = () => {
        if (cancelled) return;
        loaded += 1;
        setProgress(loaded / frameCount);
        if (loaded === 1) drawFrame(currentFrameRef.current);
        if (loaded === frameCount) {
          setIsReady(true);
          drawFrame(currentFrameRef.current);
        }
      };
      img.onerror = () => {
        if (cancelled) return;
        loaded += 1;
        setProgress(loaded / frameCount);
        if (loaded === frameCount) {
          setIsReady(true);
          drawFrame(currentFrameRef.current);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, [basePath, frameCount, padLength, extension, drawFrame, enabled]);

  // Keep canvas sized to its container, accounting for device pixel ratio.
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext("2d");
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { width: rect.width, height: rect.height };

      drawFrame(currentFrameRef.current);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    window.addEventListener("orientationchange", resize);

    return () => {
      observer.disconnect();
      window.removeEventListener("orientationchange", resize);
    };
  }, [drawFrame]);

  return { canvasRef, containerRef, isReady, progress, setFrame };
}
