"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
        // src="/room-hero.png"
        src="/rooms/room-standard-01.jpg"
        alt="Room Background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={100}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute p-4 inset-0 sm:inset-3 flex flex-col justify-end">
        <div className="max-w-7xl mx-auto sm:px-4 pb-16 md:pb-24">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase text-4xl md:text-5xl font-semibold tracking-wider text-white"
            >
              Nasze pokoje
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed text-white/90 md:w-2/3"
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
              className="pt-2"
            >
              <Link href={roomsUrl}>
                <Button
                  size="lg"
                  className="bg-avangarda hover:bg-avangarda/90 text-white group"
                >
                  Szczegóły
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Rooms;
