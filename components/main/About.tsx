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

  return (
    <Container className="bg-white w-full text-primary py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section with Images */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Text Content */}
            <div className="lg:col-span-5 space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="uppercase text-4xl md:text-5xl font-semibold tracking-wider"
              >
                {dict.about.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg leading-relaxed"
              >
                {dict.about.description}
              </motion.p>
            </div>

            {/* Images Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative aspect-[4/3] w-full overflow-hidden shadow-sm group"
                >
                  <Image
                    src="/diver/hotel-01.jpeg"
                    alt={dict.about.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                  />
                </motion.div>

                {/* Second Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="relative aspect-[4/3] w-full overflow-hidden shadow-sm group"
                >
                  <Image
                    src="/diver/narew-03.jpeg"
                    alt="Scenic view"
                    fill
                    priority
                    className="object-cover transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - What Makes Us Different and Map */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - What Makes Us Different and Ratings Combined */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-6"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white p-6  shadow-sm border border-gray-100 h-full flex flex-col">
              {/* What Makes Us Different Section */}
              <div className="mb-5">
                <div className="flex items-center gap-3 mb-5">
                  <Badge className="bg-pink-100 text-avangarda hover:bg-pink-100">
                    Co nas wyróżnia
                  </Badge>
                  <div className="h-px flex-1 bg-gray-100"></div>
                </div>

                <ul className="space-y-4">
                  {/* Green Location */}
                  <li className="flex items-start gap-3">
                    <div className="bg-green-50 p-1.5 rounded-full text-green-600 flex-shrink-0 mt-0.5">
                      <TreePine className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-0.5">
                        Wyjątkowa lokalizacja
                      </h3>
                      <p className="text-gray-600 text-xs">
                        Położenie w zielonej okolicy tuż przy rzece, oferujące
                        spokój i kontakt z naturą.
                      </p>
                    </div>
                  </li>

                  {/* Wellness & Spa */}
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-50 p-1.5 rounded-full text-blue-600 flex-shrink-0 mt-0.5">
                      <Waves className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-0.5">
                        Wellness i SPA
                      </h3>
                      <p className="text-gray-600 text-xs">
                        Fantastyczna strefa relaksu z basenem, sauną i
                        profesjonalnymi zabiegami.
                      </p>
                    </div>
                  </li>

                  {/* Restaurant */}
                  <li className="flex items-start gap-3">
                    <div className="bg-amber-50 p-1.5 rounded-full text-amber-600 flex-shrink-0 mt-0.5">
                      <Utensils className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-0.5">
                        Wyjątkowa restauracja
                      </h3>
                      <p className="text-gray-600 text-xs">
                        Prawdziwie niesamowita kuchnia z lokalnymi specjałami i
                        sezonowym menu.
                      </p>
                    </div>
                  </li>

                  {/* Events & Meetings */}
                  <li className="flex items-start gap-3">
                    <div className="bg-pink-50 p-1.5 rounded-full text-pink-600 flex-shrink-0 mt-0.5">
                      <CalendarHeart className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-0.5">
                        Przestrzeń eventowa
                      </h3>
                      <p className="text-gray-600 text-xs">
                        Idealne miejsce na wesela i spotkania biznesowe z
                        profesjonalną obsługą.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Ratings Section - Compact with Google added */}
              <div className="mt-auto">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-pink-100 text-avangarda hover:bg-pink-100">
                    Oceny gości
                  </Badge>
                  <div className="h-px flex-1 bg-gray-100"></div>
                </div>

                <div className="flex flex-wrap justify-start gap-3">
                  {/* TripAdvisor */}
                  <div className="flex items-center gap-2 bg-white shadow-sm p-2 border border-gray-100">
                    <Image
                      src="/tripadvisor-2.png"
                      alt="TripAdvisor Reviews"
                      width={60}
                      height={16}
                      className="h-auto object-contain"
                    />
                    <div className="flex flex-col items-center">
                      <div className="flex mb-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-medium">4.8/5</span>
                    </div>
                  </div>

                  {/* Booking.com */}
                  <div className="flex items-center gap-2 bg-white shadow-sm p-2 border border-gray-100">
                    <Image
                      src="/booking.png"
                      alt="Booking.com"
                      width={50}
                      height={16}
                      className="h-auto object-contain"
                    />
                    <div className="flex flex-col items-center">
                      <div className="flex mb-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-blue-600 text-blue-600"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-medium">9.2/10</span>
                    </div>
                  </div>

                  {/* Google */}
                  <div className="flex items-center gap-2 bg-white shadow-sm p-2 border border-gray-100">
                    <Image
                      src="/google-logo-2.jpeg"
                      alt="Booking.com"
                      width={50}
                      height={16}
                      className="h-auto object-contain"
                    />
                    <div className="flex flex-col items-center">
                      <div className="flex mb-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-amber-500 text-amber-500"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-medium">4.7/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Map with Button Overlay */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden shadow-sm border border-gray-100 h-full">
              <div className="h-full">
                <Image
                  src="/map-scrshot.png"
                  alt="Map"
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Map Button Overlay */}
              <div className="absolute bottom-4 right-4">
                <Button
                  size="sm"
                  className="bg-avangarda hover:bg-avangarda/90 text-white transition-all"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dict.about.address)}`,
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  Otwórz w Google Maps
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default About;
