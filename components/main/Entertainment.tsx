"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

interface EntertainmentProps {
  lang?: string;
  dict?: any;
}

const images = [
  { src: "/entertainment/11.JPG", alt: "Entertainment 11" },
  { src: "/entertainment/12.JPG", alt: "Entertainment 12" },
  { src: "/entertainment/13.JPG", alt: "Entertainment 13" },
  { src: "/entertainment/6.jpg", alt: "Entertainment 6" },
  { src: "/entertainment/8.jpeg", alt: "Entertainment 8" },
  { src: "/entertainment/9.jpeg", alt: "Entertainment 9" },
  { src: "/entertainment/10.jpeg", alt: "Entertainment 10" },
];

// Duplicate the array for a seamless loop
const duplicatedImages = [...images, ...images];

const Entertainment = ({ lang = "pl", dict }: EntertainmentProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Determine the entertainment URL based on language
  const entertainmentUrl = lang === "en" ? "/en/rozrywka" : "/pl/rozrywka";

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <section className="min-h-screen w-full text-primary py-8 md:py-16 overflow-hidden">
      <div className="bg-[#000000]/80 min-h-[800px] w-full py-8 md:py-12">
        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 space-y-6 py-16">
          <h1 className="uppercase text-4xl md:text-5xl font-semibold tracking-wider text-white">
            ROZRYWKA
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
            <p className="text-white text-base md:text-lg leading-relaxed md:w-2/3">
              Odkryj szeroką gamę atrakcji i aktywności, które sprawią, że Twój
              pobyt będzie pełen niezapomnianych wrażeń. W Avangarda każdy
              znajdzie coś dla siebie.
            </p>
            <Link href={entertainmentUrl}>
              <Button
                size="lg"
                variant="secondary"
                className="w-fit transition-all hover:scale-105 active:scale-95"
              >
                Szczegóły
              </Button>
            </Link>
          </div>
        </div>

        {/* Full-width Slider Container */}
        <div className="relative w-full">
          {/* First Row - Right to Left */}
          <div className="relative w-[100vw] overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              style={{ width: "fit-content" }}
              initial={{ x: "0%" }}
              animate={
                shouldAnimate
                  ? {
                      x: ["0%", "-50%"],
                    }
                  : {}
              }
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {duplicatedImages.map((image, index) => (
                <div
                  key={`row1-${index}`}
                  className="relative w-[280px] md:w-[300px] lg:w-[320px] aspect-square flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 300px, 280px"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Left to Right */}
          <div className="relative w-[100vw] overflow-hidden mt-6">
            <motion.div
              className="flex gap-4 md:gap-6"
              style={{ width: "fit-content" }}
              initial={{ x: "-50%" }}
              animate={
                shouldAnimate
                  ? {
                      x: ["-50%", "0%"],
                    }
                  : {}
              }
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...duplicatedImages].reverse().map((image, index) => (
                <div
                  key={`row2-${index}`}
                  className="relative w-[280px] md:w-[300px] lg:w-[320px] aspect-square flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 300px, 280px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entertainment;
