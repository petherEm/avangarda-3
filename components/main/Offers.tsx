"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Offers as OffersType } from "../../sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Tag,
  Calendar,
  Clock,
  Users,
} from "lucide-react";
import { useRef, useState } from "react";

interface OfferType {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface OffersProps {
  dict: {
    offers: {
      title: string;
      description: string;
      details: string;
      items: OfferType[];
      from: string; // Added for price label
    };
  };
  lang: string;
  offers: OffersType[];
}

const Offers = ({ dict, lang, offers }: OffersProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to scroll the container
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector("div")?.offsetWidth || 0;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Update active index
      setTimeout(() => {
        const newPosition = container.scrollLeft;
        const newIndex = Math.round(newPosition / cardWidth);
        setScrollPosition(newPosition);
        setActiveIndex(newIndex);
      }, 300);
    }
  };

  // Handle scroll event to update indicators
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector("div")?.offsetWidth || 0;
      const newPosition = container.scrollLeft;
      const newIndex = Math.round(newPosition / cardWidth);

      setScrollPosition(newPosition);
      setActiveIndex(newIndex);
    }
  };

  // Function to get localized content
  const getLocalizedContent = (offer: OffersType) => {
    const name = lang === "pl" ? offer.plname : offer.enname;
    const description =
      lang === "pl" ? offer.pldescription : offer.endescription;
    const currency = "PLN";

    // Format price with currency
    const formattedPrice = offer.price
      ? new Intl.NumberFormat(lang === "pl" ? "pl-PL" : "en-US", {
          style: "currency",
          currency: currency,
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        }).format(offer.price)
      : null;

    return {
      name: name || "No title available",
      description:
        description
          ?.map((block) =>
            block._type === "block"
              ? block.children?.map((child) => child.text).join("")
              : ""
          )
          .join("") || "No description available",
      price: formattedPrice,
    };
  };

  // Generate random offer features for visual appeal
  const getRandomFeatures = (index: number) => {
    const featureSets = [
      { icon: Calendar, text: "3 dni / 2 noce" },
      { icon: Users, text: "Dla 2 osób" },
      { icon: Clock, text: "Dostępne cały rok" },
      { icon: Calendar, text: "5 dni / 4 noce" },
      { icon: Users, text: "Dla rodziny" },
      { icon: Clock, text: "Sezon letni" },
    ];

    // Return 2 features based on index
    return [featureSets[index % 3], featureSets[(index + 3) % 6]];
  };

  return (
    <Container className="w-full text-primary bg-gradient-to-b from-white to-gray-50">
      <div className="relative max-w-7xl mx-auto p-4 py-12">
        <div className="mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-alata md:text-5xl font-semibold uppercase tracking-wider mb-6"
          >
            {dict.offers.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl"
          >
            {dict.offers.description}
          </motion.p>
        </div>

        {/* Navigation Controls */}
        <div className="hidden md:flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Previous offer"
            disabled={scrollPosition <= 10}
          >
            <ChevronLeft
              className={`h-5 w-5 ${scrollPosition <= 10 ? "text-gray-300" : "text-gray-700"}`}
            />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Next offer"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Offers Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {offers.map((offer, index) => {
              const localizedContent = getLocalizedContent(offer);
              const features = getRandomFeatures(index);

              return (
                <motion.div
                  key={offer._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-none w-[85%] md:w-[48%] lg:w-[32%] snap-start group"
                >
                  <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    {/* Image container with price badge */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={imageUrl(offer.image!).url() || "/placeholder.svg"}
                        alt={localizedContent.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 85vw, (max-width: 1200px) 48vw, 32vw"
                        priority
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>

                      {/* Price badge */}
                      {localizedContent.price && (
                        <div className="absolute bottom-4 right-4 bg-white text-pink-600 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 font-medium">
                          <Tag className="h-4 w-4" />
                          <span>
                            {dict.offers.from || "From"}:{" "}
                            {localizedContent.price}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content container */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-avangarda transition-colors">
                        {localizedContent.name}
                      </h3>

                      {/* Features */}
                      <div className="flex gap-4 mb-4">
                        {features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1.5 text-sm text-gray-600"
                          >
                            <feature.icon className="h-4 w-4 text-avangarda" />
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-gray-600 text-sm md:text-base line-clamp-3 mb-4 flex-grow">
                        {localizedContent.description}
                      </p>

                      <Link
                        href={`/${lang}/pakiety/${offer.slug?.current}`}
                        className="mt-auto"
                      >
                        <Button
                          size="default"
                          className="w-full bg-avangarda hover:bg-avangarda/90 text-white group-hover:shadow-md transition-all"
                        >
                          {dict.offers.details}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {offers.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-pink-500" : "w-2 bg-gray-300"
                }`}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const cardWidth =
                      container.querySelector("div")?.offsetWidth || 0;
                    container.scrollTo({
                      left: cardWidth * index,
                      behavior: "smooth",
                    });
                    setActiveIndex(index);
                  }
                }}
                aria-label={`Go to offer ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile scroll hint */}
          <div className="md:hidden flex items-center justify-center mt-4 text-sm text-gray-500">
            <ChevronLeft className="h-4 w-4" />
            <span className="mx-1">Przewiń w lewo i prawo</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Offers;
