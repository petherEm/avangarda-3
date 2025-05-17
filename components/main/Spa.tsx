"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../container";
import { Button } from "../ui/button";
import Link from "next/link";

const attractions = ["Basen", "Jacuzzi", "Masaże", "Grota Solna"];

interface SpaProps {
  lang?: string;
  dict?: any;
}

const Spa = ({ lang = "pl", dict }: SpaProps) => {
  // Determine the spa URL based on language
  const spaUrl = lang === "en" ? "/en/spa" : "/pl/spa";

  return (
    <Container className="min-h-screen w-full text-[#404042] py-2 md:py-16 bg-white">
      <div className="flex flex-col items-center">
        {/* Images Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          {/* First Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[16/10] w-full"
          >
            <Image
              src="/spa-1.png"
              alt="Spa 1"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
            />
          </motion.div>

          {/* Second Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-[16/10] w-full"
          >
            <Image
              src="/spa/spa-13.jpg"
              alt="Spa 2"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-alata md:text-5xl font-semibold uppercase tracking-wider mb-6"
          >
            SPA & Wellness
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg mb-8"
          >
            Odkryj oazę spokoju w naszym SPA, gdzie ciało i umysł znajdują pełne
            odprężenie. Hotel Avangarda oferuje wyjątkowe atrakcje:
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center items-center gap-2 mb-8"
          >
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center"
              >
                <span className="text-lg md:text-lg">{attraction}</span>
                {index < attractions.length - 1 && (
                  <span className="mx-3 text-avangarda text-4xl">•</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
          >
            <Link href={spaUrl}>
              <Button
                size="lg"
                variant="secondary"
                className="w-fit transition-all hover:scale-105 active:scale-95"
              >
                Dowiedz się więcej
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Spa;
