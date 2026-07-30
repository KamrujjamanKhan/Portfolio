"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { easeOutExpo, Stagger, StaggerItem } from "./motion";

const photos = [
  "/gallery/IMG_0118.jpg",
  "/gallery/IMG_1282.jpg",
  "/gallery/IMG_2014.jpg",
  "/gallery/IMG_2703.jpg",
  "/gallery/IMG_2975.jpg",
  "/gallery/IMG_3014.jpg",
  "/gallery/IMG_3504.jpg",
  "/gallery/IMG_3564.jpg",
  "/gallery/IMG_3705.jpg",
  "/gallery/IMG_4306.jpg",
  "/gallery/IMG_4975.jpg",
  "/gallery/IMG_5081.jpg",
  "/gallery/IMG_6789.jpg",
  "/gallery/IMG_7502.jpg",
];

function ProgressiveImage({
  src,
  alt,
  priority = false,
  sizes,
  className = "",
  quality,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
  className?: string;
  quality?: number;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`absolute inset-0 ${loaded ? "" : "img-shimmer"}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        loading={priority ? undefined : "lazy"}
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          loaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[1.03] blur-sm"
        } ${className}`}
      />
    </div>
  );
}

export default function GalleryGrid() {
  const [selected, setSelected] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const selectedIndex = selected ? photos.indexOf(selected) : -1;

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(() => {
    if (selectedIndex < 0) return;
    setSelected(photos[(selectedIndex - 1 + photos.length) % photos.length]);
  }, [selectedIndex]);
  const next = useCallback(() => {
    if (selectedIndex < 0) return;
    setSelected(photos[(selectedIndex + 1) % photos.length]);
  }, [selectedIndex]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close, prev, next]);

  return (
    <>
      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((src, idx) => (
          <StaggerItem key={src}>
            <button
              type="button"
              onClick={() => setSelected(src)}
              className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-muted focus-visible:outline-none"
              aria-label={`Open gallery photo ${idx + 1}`}
            >
              <ProgressiveImage
                src={src}
                alt={`Gallery photo ${idx + 1}`}
                priority={idx < 3}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-70" />
            </button>
          </StaggerItem>
        ))}
      </Stagger>

      <AnimatePresence>
        {selected ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X size={22} weight="bold" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 sm:inline-flex"
              aria-label="Previous photo"
            >
              <CaretLeft size={24} weight="bold" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 sm:inline-flex"
              aria-label="Next photo"
            >
              <CaretRight size={24} weight="bold" />
            </button>

            <motion.div
              key={selected}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: easeOutExpo }}
              className="relative h-[70vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected}
                alt="Full size photo"
                fill
                className="object-contain"
                quality={95}
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
