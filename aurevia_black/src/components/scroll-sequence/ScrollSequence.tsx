"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { useImageSequence } from "@/hooks/useImageSequence";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export interface SequenceHandle {
  setFrame: (frame: number) => void;
  frameCount: number;
}

interface ScrollSequenceProps {
  basePath: string;
  frameCount: number;
  label: string;
  className?: string;
  /** Defer loading frames until the sequence is nearly in view. */
  lazy?: boolean;
}

/**
 * Renders a numbered JPG frame-sequence to a canvas. Entirely passive — the
 * parent section (which owns the ScrollTrigger) pushes frames in via the
 * imperative `setFrame` handle. Never autoplays, never loops.
 */
export const ScrollSequence = forwardRef<SequenceHandle, ScrollSequenceProps>(
  function ScrollSequence({ basePath, frameCount, label, className, lazy }, ref) {
    const gateRef = useRef<HTMLDivElement>(null);
    const isNear = useInView(gateRef, "150% 0px");
    const enabled = lazy ? isNear : true;

    const { canvasRef, containerRef, setFrame } = useImageSequence({
      basePath,
      frameCount,
      enabled,
    });

    useImperativeHandle(ref, () => ({ setFrame, frameCount }), [setFrame, frameCount]);

    return (
      <div ref={gateRef} className={cn("relative", className)}>
        <div ref={containerRef} className="h-full w-full">
          <canvas
            ref={canvasRef}
            role="img"
            aria-label={label}
            className="h-full w-full"
          />
        </div>
      </div>
    );
  }
);
