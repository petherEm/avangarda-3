"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface RestaurantProps {
  dict: {
    restaurants: {
      title: string;
      description: string;
      details: string;
    };
  };
  lang?: string;
}

const Restaurant = ({ dict, lang }: RestaurantProps) => {
  // Determine the correct URL based on language
  const restaurantUrl = lang === "en" ? "/en/restauracja" : "/pl/restauracja";

  return (
    <Container className="w-full text-primary py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Main Section: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase text-4xl md:text-5xl font-semibold tracking-wider"
            >
              {dict.restaurants.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed text-primary"
            >
              {dict.restaurants.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-2"
            >
              <Link href={restaurantUrl}>
                <Button
                  size="lg"
                  className="bg-avangarda hover:bg-avangarda/90 text-white group"
                >
                  {dict.restaurants.details}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Main Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src="/restaurant/rest-03.jpg"
                alt="Restaurant Interior"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                quality={95}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Row - Two Additional Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* First Bottom Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative aspect-[16/10] w-full overflow-hidden"
          >
            <Image
              src="/restaurant/rest-10.jpg"
              alt="Restaurant Food"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={95}
            />
          </motion.div>

          {/* Second Bottom Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative aspect-[16/10] w-full overflow-hidden"
          >
            <Image
              src="/fort/fort-05.png"
              alt="Fort View"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={95}
            />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Restaurant;
