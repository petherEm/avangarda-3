"use client";

import { Container } from "@/components/container";
import Link from "next/link";
import Map from "@/components/map2";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Car, Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

interface AboutProps {
  dict: {
    clubDetails: {
      title: string;
      description: string;
      address: string;
      phone: string;
      email: string;
      directions: {
        car: string;
        public: string;
      };
      hours: string;
    };
  };
  lang: string;
}

const GastroPort = ({ dict, lang }: AboutProps) => {
  return (
    <div className="relative w-full overflow-hidden mb-14">
      {/* Image with reduced height */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full h-[50vh] md:h-[60vh] relative"
      >
        <Image
          src="/gastronomia-3.png"
          fill
          alt="Gastro"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content with blended background fixed to right edge */}
      <div className="absolute top-0 right-0 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-black/80 backdrop-blur-sm h-full w-full sm:w-[300px] md:w-[400px] lg:w-[500px] flex flex-col justify-center px-8 md:px-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider mb-6"
          >
            {dict.portDetails.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg leading-relaxed mb-8"
          >
            {dict.portDetails.description}
          </motion.p>

          <Button
            size="lg"
            variant="secondary"
            className="w-fit transition-all hover:scale-105 active:scale-95"
          >
            {dict.portDetails.button}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default GastroPort;
