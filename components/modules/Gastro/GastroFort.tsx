"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutProps {
  dict: {
    fortDetails: {
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

const GastroFort = ({ dict, lang }: AboutProps) => {
  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-16 items-start mb-12">
          {/* Left Column: Content and Info Box */}
          <div className="flex flex-col space-y-8 order-2 lg:order-1 lg:col-span-3">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="uppercase text-4xl md:text-5xl font-semibold tracking-wider mb-8"
              >
                {dict.fortDetails.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg leading-relaxed"
              >
                {dict.fortDetails.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg leading-relaxed"
              >
                {dict.fortDetails.description}
              </motion.p>
            </div>
          </div>

          {/* Main Image - Now larger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 lg:col-span-4"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md">
              <Image
                src="/fort/fort-05.png"
                alt="Fort główne zdjęcie"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                quality={90}
              />
            </div>
          </motion.div>
        </div>

        {/* Image Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-3xl font-semibold text-center">Galeria Fort</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          {/* Desktop Layout - Updated grid without fort-03.jpg */}
          <div className="hidden md:grid grid-cols-12 gap-4">
            {/* First row - 2 images */}
            <div className="col-span-6 relative aspect-[4/3] overflow-hidden shadow-md">
              <Image
                src="/fort/fort-02.jpg"
                alt="Fort zdjęcie 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-6 relative aspect-[4/3] overflow-hidden shadow-md">
              <Image
                src="/fort/fort-04.jpg"
                alt="Fort zdjęcie 4"
                fill
                className="object-cover"
              />
            </div>

            {/* Second row - one image */}
            <div className="col-span-6 relative aspect-[4/3] overflow-hidden shadow-md">
              <Image
                src="/fort/fort-01.jpg"
                alt="Gastro"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-6 relative aspect-[4/3] overflow-hidden shadow-md">
              <Image
                src="/fort/fort-06.jpg"
                alt="Gastro"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mobile Layout - Simpler grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            <div className="relative aspect-[4/3] overflow-hidden shadow-md">
              <Image
                src="/fort/fort-02.jpg"
                alt="Fort zdjęcie 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden shadow-md">
              <Image
                src="/fort/fort-04.jpg"
                alt="Fort zdjęcie 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden shadow-md">
              <Image
                src="/fort/fort-01.jpg"
                alt="Gastro"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default GastroFort;
