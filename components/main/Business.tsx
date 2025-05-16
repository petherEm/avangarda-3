"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

interface BusinessProps {
  lang?: string;
  dict?: any;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

const Business = ({ lang = "pl", dict }: BusinessProps) => {
  // State to track window resize
  const [windowWidth, setWindowWidth] = useState(0);

  // Determine the business URL based on language
  const businessUrl = lang === "en" ? "/en/biznes" : "/pl/biznes";

  // Effect to handle window resize
  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container className="w-full text-[#404042] py-8 md:py-14 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Content Section - Reduced width to make more room for images */}
          <motion.div
            className="md:col-span-4 flex flex-col justify-center space-y-6 md:space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-semibold uppercase tracking-wider"
            >
              Biznes
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg"
            >
              Hotel Avangarda oferuje nowoczesne sale konferencyjne idealne na
              spotkania biznesowe, szkolenia i eventy firmowe. Zapewniamy pełne
              zaplecze techniczne, w tym projektory, nagłośnienie i szybki
              internet.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <Link href={businessUrl}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-fit transition-all hover:scale-105 active:scale-95"
                >
                  Dostępna oferta
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Images Section - Increased width and added smooth transitions */}
          <motion.div
            className="md:col-span-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={{
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div
              className="grid grid-cols-12 gap-4 md:gap-6"
              style={{
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Main image - larger and with smooth resize transition */}
              <motion.div
                variants={fadeInScale}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-7 relative"
                style={{
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform:
                    windowWidth > 0
                      ? `translateX(${Math.min((1024 - windowWidth) * 0.03, 15)}px)`
                      : "translateX(0)",
                }}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/conference/theater-01.jpg"
                    alt="Sala konferencyjna"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 35vw"
                    style={{
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                </div>
              </motion.div>

              {/* Second image - larger and with smooth resize transition */}
              <motion.div
                variants={fadeInScale}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="col-span-5 relative"
                style={{
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform:
                    windowWidth > 0
                      ? `translateX(${Math.max((windowWidth - 1024) * 0.02, -10)}px)`
                      : "translateX(0)",
                }}
              >
                <div className="relative aspect-[5/4] w-full overflow-hidden">
                  <Image
                    src="/conference/cozy-01.jpg"
                    alt="Kameralna sala konferencyjna"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 25vw"
                    style={{
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Business;
