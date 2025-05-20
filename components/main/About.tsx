"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Star,
  Waves,
  Utensils,
  CalendarHeart,
  TreePine,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

interface AboutProps {
  dict: {
    about: {
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

const About = ({ dict, lang }: AboutProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageHeight =
    typeof window !== "undefined" && window.innerWidth < 768
      ? "180px"
      : "240px";

  return (
    <Container className="w-full text-primary py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto sm:px-4 py-12">
        {/* Hero Section with Images */}
        <div className="mb-10 relative">
          <div className="grid grid-cols-12 gap-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="col-span-12 lg:col-span-6 relative z-10 bg-white/90 backdrop-blur-sm space-y-10"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="uppercase text-4xl md:text-5xl font-semibold tracking-wider"
              >
                {dict.about.title}
              </motion.h1>
              <p className="text-base md:text-lg leading-relaxed text-primary">
                {dict.about.description}
              </p>
            </motion.div>

            <div className="col-span-12 lg:col-span-6 lg:mt-6">
              <div className="grid grid-cols-12 gap-3 h-full">
                <div className="col-span-8 h-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative w-full h-full overflow-hidden shadow-md"
                    style={{ height: imageHeight }}
                  >
                    <Image
                      src="/diver/hotel-01.jpeg"
                      alt={dict.about.title}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={100}
                    />
                  </motion.div>
                </div>
                <div className="col-span-4 h-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="relative w-full h-full overflow-hidden shadow-md"
                    style={{ height: imageHeight }}
                  >
                    <Image
                      src="/diver/narew-03.jpeg"
                      alt="Scenic view"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={100}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features and Map Section */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Column - Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-6 h-full flex"
          >
            <div className="bg-white sm:p-6 shadow-md border border-gray-100 w-full h-full">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Co nas wyróżnia
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-avangarda/20 to-transparent"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Green Location */}
                <div className="group p-2 sm:p-4 bg-gradient-to-br from-green-50 to-green-100/30 hover:shadow-md transition-all duration-300">
                  <div className="bg-green-100 p-2 text-green-600 w-10 h-10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <TreePine className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-base mb-1 text-green-800">
                    Wyjątkowa lokalizacja
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Położenie w zielonej okolicy tuż przy rzece, oferujące
                    spokój i kontakt z naturą.
                  </p>
                </div>

                {/* Wellness & Spa */}
                <div className="group p-2 sm:p-4 bg-gradient-to-br from-blue-50 to-blue-100/30 hover:shadow-md transition-all duration-300">
                  <div className="bg-blue-100 p-2 text-blue-600 w-10 h-10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Waves className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-base mb-1 text-blue-800">
                    Wellness i SPA
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fantastyczna strefa relaksu z basenem, sauną i
                    profesjonalnymi zabiegami.
                  </p>
                </div>

                {/* Restaurant */}
                <div className="group p-2 sm:p-4 bg-gradient-to-br from-amber-50 to-amber-100/30 hover:shadow-md transition-all duration-300">
                  <div className="bg-amber-100 p-2 text-amber-600 w-10 h-10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-base mb-1 text-amber-800">
                    Wyjątkowa restauracja
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Prawdziwie niesamowita kuchnia z lokalnymi specjałami i
                    sezonowym menu.
                  </p>
                </div>

                {/* Events & Meetings */}
                <div className="group p-2 sm:p-4 bg-gradient-to-br from-pink-50 to-pink-100/30 hover:shadow-md transition-all duration-300">
                  <div className="bg-pink-100 p-2 text-pink-600 w-10 h-10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <CalendarHeart className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-base mb-1 text-pink-800">
                    Przestrzeń eventowa
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Idealne miejsce na wesela i spotkania biznesowe z
                    profesjonalną obsługą.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Map and Ratings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-6 h-full flex flex-col"
          >
            {/* Map */}
            <div
              ref={mapRef}
              className="relative overflow-hidden shadow-md border border-gray-100 flex-grow"
              style={{ minHeight: "220px" }}
            >
              <Image
                src="/map-scrshot-3.png"
                alt="Map"
                fill
                className="object-cover w-full h-full"
                priority
              />

              {/* Map Button Overlay */}
              <div className="absolute bottom-3 right-3">
                <Button
                  size="sm"
                  className="bg-avangarda hover:bg-avangarda/90 text-white transition-all shadow-md"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/2xc5CJ8Be6qof2we9",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  Otwórz w Google Maps
                </Button>
              </div>
            </div>

            {/* Ratings Section */}
            <div className="bg-white sm:p-5 shadow-md border border-gray-100 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-gray-900">Oceny gości</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-avangarda/20 to-transparent"></div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {/* TripAdvisor */}
                <div className="bg-gradient-to-br from-white to-gray-50 p-3 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                  <Image
                    src="/tripadvisor-2.png"
                    alt="TripAdvisor Reviews"
                    width={70}
                    height={20}
                    className="h-auto object-contain mb-2"
                  />
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-base font-bold">4.8/5</span>
                </div>

                {/* Booking.com */}
                <div className="bg-gradient-to-br from-white to-gray-50 p-3 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                  <Image
                    src="/booking.png"
                    alt="Booking.com"
                    width={70}
                    height={20}
                    className="h-auto object-contain mb-2"
                  />
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-blue-600 text-blue-600"
                      />
                    ))}
                  </div>
                  <span className="text-base font-bold">9.2/10</span>
                </div>

                {/* Google */}
                <div className="bg-gradient-to-br from-white to-gray-50 p-3 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                  <Image
                    src="/google-logo-2.jpeg"
                    alt="Google Reviews"
                    width={60}
                    height={20}
                    className="mt-3 h-auto object-contain mb-2"
                  />
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                  <span className="text-base font-bold">4.7/5</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default About;
