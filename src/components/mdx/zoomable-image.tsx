"use client";

import { useState, useEffect } from "react";
import { ZoomIn, ZoomOut, RotateCcw, X, ExternalLink, Maximize2 } from "lucide-react";

interface ZoomableImageProps {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
}

export function ZoomableImage({
  src,
  alt = "",
  caption,
  className = "",
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      setScale(1);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const zoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.3, 3));
  };

  const zoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.max(prev - 0.3, 0.6));
  };

  const resetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(1);
  };

  return (
    <figure className="my-8 w-full select-none">
      {/* Thumbnail Container with Zoom Indicator */}
      <div
        onClick={() => setIsOpen(true)}
        className={`group relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900/40 cursor-zoom-in transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[540px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
          loading="lazy"
        />

        {/* Hover Overlay Hint */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-medium tracking-wide shadow-xl border border-white/20">
            <Maximize2 className="size-4 text-blue-400" />
            คลิกเพื่อดูภาพขนาดเต็ม & ขยาย (Click to Zoom)
          </span>
        </div>
      </div>

      {/* Caption & Direct Open Link */}
      {(caption || alt) && (
        <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground px-1">
          <span>{caption || alt}</span>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-400 hover:underline hover:text-blue-300 transition-colors"
          >
            เปิดรูปต้นฉบับในแท็บใหม่ <ExternalLink className="size-3" />
          </a>
        </figcaption>
      )}

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between animate-in fade-in duration-200"
        >
          {/* Top Control Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full flex items-center justify-between px-6 py-4 bg-black/60 border-b border-white/10 z-10"
          >
            <div className="text-white text-sm font-medium truncate max-w-[50vw]">
              {caption || alt || "ดูภาพขนาดเต็ม"}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={zoomOut}
                title="ย่อขนาด"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ZoomOut className="size-4" />
              </button>
              <button
                type="button"
                onClick={resetZoom}
                title="รีเซ็ตขนาด"
                className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors"
              >
                {Math.round(scale * 100)}%
              </button>
              <button
                type="button"
                onClick={zoomIn}
                title="ขยายขนาด"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ZoomIn className="size-4" />
              </button>

              <div className="h-4 w-px bg-white/20 mx-1" />

              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                title="เปิดในแท็บใหม่"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ExternalLink className="size-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="ปิด (Esc)"
                className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-300 transition-colors ml-1"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          {/* Image Container with Dynamic Scale */}
          <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              style={{
                transform: `scale(${scale})`,
                transition: "transform 0.15s ease-out",
                maxHeight: scale === 1 ? "82vh" : "none",
                maxWidth: scale === 1 ? "92vw" : "none",
              }}
              className="object-contain shadow-2xl rounded-md cursor-default select-none"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Bottom Hint */}
          <div className="w-full text-center py-2 text-xs text-white/50 bg-black/40">
            กดปุ่ม + / - เพื่อซูมขยาย หรือกด Esc / คลิกพื้นที่ว่างเพื่อปิด
          </div>
        </div>
      )}
    </figure>
  );
}
