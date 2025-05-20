"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

const ctaOptions = [
  "Najlepsze ceny",
  "Elastyczne warunki",
  "Wyjątkowe doświadczenia",
];

const CallToAction = () => {
  return (
    <Container className="w-full text-primary py-2 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
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
              src="/outdoor/out-02.jpg"
              alt="Luksusowy pokój hotelowy"
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
              src="/spa/spa-14.jpg"
              alt="Pakiet spa w prezencie"
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
            className="text-4xl md:text-5xl font-semibold uppercase tracking-wider mb-6"
          >
            Nie czekaj, zarezerwuj już{" "}
            <span className="text-avangarda">dziś!</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg mb-8 leading-relaxed text-primary"
          >
            Zapewnij sobie niezapomniane chwile w naszym hotelu lub podaruj
            wyjątkowy pakiet w prezencie dla najbliższych. Oferujemy:
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center items-center gap-2 mb-8"
          >
            {ctaOptions.map((option, index) => (
              <motion.div
                key={option}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center"
              >
                <span className="text-lg md:text-lg">{option}</span>
                {index < ctaOptions.length - 1 && (
                  <span className="mx-3 text-avangarda text-4xl">•</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="w-fit transition-all hover:scale-105 active:scale-95"
              >
                Zarezerwuj pobyt
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="w-fit transition-all hover:scale-105 active:scale-95"
              >
                Podaruj pakiet w prezencie
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CallToAction;
