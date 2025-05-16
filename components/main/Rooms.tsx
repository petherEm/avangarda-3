"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface RoomsProps {
  lang: string;
  dict?: any;
}

const Rooms = ({ lang }: RoomsProps) => {
  // Determine the rooms URL based on language
  const roomsUrl = lang === "en" ? "/en/pokoje" : "/pl/pokoje";

  return (
    <Container className="relative h-screen w-full mb-4">
      <Image
        src="/room-hero.png"
        alt="Room Background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={100}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16">
        <div className="max-w-2xl space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-alata md:text-5xl font-semibold uppercase text-white tracking-wider"
          >
            Nasze pokoje
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/90"
          >
            Oferujemy szeroki wybór komfortowych pokoi i apartamentów,
            dopasowanych do potrzeb każdego gościa – od przytulnych wnętrz dla
            par po przestronne apartamenty idealne na rodzinny wypoczynek.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href={roomsUrl}>
              <Button
                size="lg"
                variant="secondary"
                className="w-fit transition-all hover:scale-105 active:scale-95"
              >
                Szczegóły
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Rooms;
