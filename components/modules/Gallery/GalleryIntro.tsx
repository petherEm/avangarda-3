"use client";

import type React from "react";

import { Container } from "@/components/container";
import { useState, useEffect, KeyboardEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/gallery-images/gal-01.jpg", alt: "Gallery image 1" },
  { id: 2, src: "/gallery-images/gal-02.jpg", alt: "Gallery image 2" },
  { id: 3, src: "/gallery-images/gal-03.jpg", alt: "Gallery image 3" },
  { id: 4, src: "/gallery-images/gal-04.jpg", alt: "Gallery image 4" },
  { id: 5, src: "/gallery-images/gal-05.png", alt: "Gallery image 5" },
  { id: 6, src: "/gallery-images/gal-06.png", alt: "Gallery image 6" },
  { id: 7, src: "/gallery-images/gal-07.png", alt: "Gallery image 7" },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Add keyboard event listener for the entire window
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent | any) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };

    window.addEventListener("keydown", handleKeyDown);

    // Remove listener when component unmounts or selected image changes
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return;

    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    } else {
      setSelectedImage(
        (selectedImage - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-[#404042] lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-[90vw] max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  width={1200}
                  height={800}
                  className="object-contain max-h-[90vh]"
                  priority
                />

                {/* Close button - fixed position and larger hit area */}
                <button
                  className="absolute top-2 right-2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeLightbox();
                  }}
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === selectedImage ? "bg-white" : "bg-white/40"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(index);
                      }}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation buttons */}
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("prev");
                  }}
                  aria-label="Previous image"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("next");
                  }}
                  aria-label="Next image"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
}
