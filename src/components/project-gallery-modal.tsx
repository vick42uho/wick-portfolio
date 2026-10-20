"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  Images,
} from "lucide-react";

export interface ProjectImageItem {
  src: string;
  title: string;
  description?: string;
}

interface ProjectGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  images: readonly ProjectImageItem[];
  initialIndex?: number;
}

export function ProjectGalleryModal({
  isOpen,
  onClose,
  projectTitle,
  images,
  initialIndex = 0,
}: ProjectGalleryModalProps) {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const panStartRef = useRef({ x: 0, y: 0 });
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const thumbnailListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setZoom(1);
      setPan({ x: 0, y: 0 });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, initialIndex]);

  const handlePrev = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.35, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const nextZoom = Math.max(prev - 0.35, 1);
      if (nextZoom === 1) setPan({ x: 0, y: 0 });
      return nextZoom;
    });
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-") {
        handleZoomOut();
      } else if (e.key === "0") {
        handleResetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (!thumbnailListRef.current) return;
    const activeEl = thumbnailListRef.current.children[currentIndex] as HTMLElement | undefined;
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [currentIndex]);

  // Mouse drag when zoomed
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    panStartRef.current = { ...pan };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPan({
      x: panStartRef.current.x + dx,
      y: panStartRef.current.y + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch swipe support (prev/next when unzoomed, pan when zoomed)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      if (zoom > 1) {
        setIsDragging(true);
        dragStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        panStartRef.current = { ...pan };
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (zoom > 1 && isDragging && e.touches.length === 1) {
      const dx = e.touches[0].clientX - dragStartRef.current.x;
      const dy = e.touches[0].clientY - dragStartRef.current.y;
      setPan({
        x: panStartRef.current.x + dx,
        y: panStartRef.current.y + dy,
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (zoom <= 1 && touchStartRef.current && e.changedTouches.length === 1) {
      const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
      const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) handlePrev();
        else handleNext();
      }
    }
    setIsDragging(false);
    touchStartRef.current = null;
  };

  if (!mounted || !isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} screenshot gallery`}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="relative z-20 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-neutral-950/70 border-b border-white/10 backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 text-xs font-mono font-medium">
            <Images className="size-3.5" />
            <span>
              {currentIndex + 1} / {images.length}
            </span>
          </div>
          <div className="truncate">
            <h2 className="text-sm sm:text-base font-semibold text-white truncate">
              {projectTitle}
            </h2>
            <p className="text-xs text-blue-300/80 truncate">
              {currentImage.title}
            </p>
          </div>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Zoom controls (hidden on small mobile to avoid clutter) */}
          <div className="hidden sm:flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-0.5">
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={zoom <= 1}
              className="p-1.5 rounded-md hover:bg-white/10 text-white/80 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              title="Zoom out (-)"
              aria-label="Zoom out"
            >
              <ZoomOut className="size-4" />
            </button>
            <span className="px-2 text-xs font-mono text-white/70 min-w-11 text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              onClick={handleZoomIn}
              disabled={zoom >= 3}
              className="p-1.5 rounded-md hover:bg-white/10 text-white/80 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              title="Zoom in (+)"
              aria-label="Zoom in"
            >
              <ZoomIn className="size-4" />
            </button>
            {zoom > 1 && (
              <button
                type="button"
                onClick={handleResetZoom}
                className="p-1.5 rounded-md hover:bg-white/10 text-blue-400 hover:text-blue-300 transition-colors"
                title="Reset zoom (0)"
                aria-label="Reset zoom"
              >
                <RotateCcw className="size-4" />
              </button>
            )}
          </div>

          {/* Open original image in new tab */}
          <a
            href={currentImage.src}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-colors"
            title="Open original image in new tab"
            aria-label="Open original image"
          >
            <ExternalLink className="size-4" />
          </a>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-red-500/80 hover:text-white text-white/90 border border-white/15 transition-all"
            title="Close (Esc)"
            aria-label="Close gallery"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center overflow-hidden select-none p-2 sm:p-6"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={() => {
          if (zoom > 1) handleResetZoom();
          else setZoom(1.8);
        }}
      >
        {/* Previous Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-2 sm:left-6 z-20 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-blue-600 text-white border border-white/15 backdrop-blur-md shadow-2xl transition-all hover:scale-110 active:scale-95 group"
          aria-label="Previous screenshot (Left arrow)"
        >
          <ChevronLeft className="size-5 sm:size-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-2 sm:right-6 z-20 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-blue-600 text-white border border-white/15 backdrop-blur-md shadow-2xl transition-all hover:scale-110 active:scale-95 group"
          aria-label="Next screenshot (Right arrow)"
        >
          <ChevronRight className="size-5 sm:size-6 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Display Image */}
        <div
          className="relative max-w-full max-h-full flex items-center justify-center transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-[92vw] sm:max-w-[85vw] object-contain rounded-xl shadow-2xl border border-white/10"
            draggable={false}
          />
        </div>
      </div>

      {/* Bottom Area: Caption & Thumbnail Strip */}
      <div
        className="relative z-20 flex flex-col gap-2.5 px-4 sm:px-6 py-3 bg-neutral-950/80 border-t border-white/10 backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Caption text */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-xs font-semibold text-blue-400">
              {currentImage.title}
            </span>
            {currentImage.description && (
              <span className="hidden sm:inline text-xs text-white/50">•</span>
            )}
            {currentImage.description && (
              <span className="text-xs text-muted-foreground line-clamp-1">
                {currentImage.description}
              </span>
            )}
          </div>
          <span className="text-[11px] font-mono text-white/40">
            Click thumbnail to navigate • Double-click image to zoom
          </span>
        </div>

        {/* Thumbnail Carousel */}
        <div
          ref={thumbnailListRef}
          className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none no-scrollbar"
        >
          {images.map((img, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={img.src}
                type="button"
                onClick={() => {
                  setZoom(1);
                  setPan({ x: 0, y: 0 });
                  setCurrentIndex(idx);
                }}
                className={`relative shrink-0 rounded-lg overflow-hidden transition-all duration-200 border-2 ${
                  isActive
                    ? "border-blue-500 scale-105 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                    : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/40"
                }`}
                title={img.title}
                aria-label={`View screenshot ${idx + 1}: ${img.title}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.title}
                  className="h-12 w-20 sm:h-14 sm:w-24 object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/70 text-[9px] text-white/90 font-mono text-center truncate px-0.5">
                  {idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>,
    document.body
  );
}
