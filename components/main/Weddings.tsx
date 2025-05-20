"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../container";
import { Button } from "../ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
};

const Weddings = () => {
  return (
    <Container className="w-full text-primary py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Content Section */}
        <div className="mb-8 md:mb-12">
          <motion.h2
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-4xl font-alata md:text-5xl font-semibold uppercase tracking-wider mb-6"
          >
            Sala Weselna
          </motion.h2>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8">
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg max-w-2xl leading-relaxed text-primary"
            >
              Zorganizuj niezapomniane chwile w wyjątkowej atmosferze! Oferujemy
              profesjonalną obsługę i przestrzenie idealne na wesela, komunie,
              chrzciny oraz inne uroczystości okolicznościowe. Twój wyjątkowy
              dzień w najlepszym stylu!
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.8 }}>
              <Button
                size="lg"
                variant="secondary"
                className="w-fit transition-all hover:scale-105 active:scale-95"
              >
                Dostępna oferta
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Images Grid - Keep existing layout but remove the calculated height */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Left side images - full width on mobile */}
          <div className="col-span-12 md:col-span-8 grid grid-rows-2 gap-1 md:gap-6">
            <motion.div
              {...fadeInScale}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full h-[250px] md:h-[250px] lg:h-[350px]"
            >
              <Image
                src="/wedding/wed-room-04.jpg"
                alt="Słodki stół weselny"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </motion.div>
            <motion.div
              {...fadeInScale}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full h-[250px] md:h-[250px] lg:h-[350px]"
            >
              <Image
                src="/wedding/table-02.jpg"
                alt="Nakrycie stołu weselnego"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </motion.div>
          </div>

          {/* Right side - vertical images (hidden on mobile) */}
          <div className="hidden md:grid col-span-4 grid-cols-2 gap-4 md:gap-6">
            <motion.div
              {...fadeInScale}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative w-full h-[520px] lg:h-[720px]"
            >
              <Image
                src="/wedding/wed-room-06.jpg"
                alt="Żyrandol i dekoracje"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
            <motion.div
              {...fadeInScale}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative w-full h-[520px] lg:h-[720px]"
            >
              <Image
                src="/wedding/wed-room-10.jpg"
                alt="Sala weselna"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Weddings;
