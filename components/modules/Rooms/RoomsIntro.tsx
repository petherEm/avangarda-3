"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Check,
  Bed,
  Bath,
  Tv,
  Wifi,
  Wind,
  Sofa,
  Refrigerator,
  Coffee,
  Home,
  Utensils,
  Maximize,
  Music,
  Droplets,
  Armchair,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ROOMS_DATA, RoomType } from "@/constants";

// Map feature icons to Lucide components
const featureIcons = {
  bed: Bed,
  bath: Bath,
  tv: Tv,
  wifi: Wifi,
  ac: Wind,
  sofa: Sofa,
  fridge: Refrigerator,
  coffee: Coffee,
  kitchen: Home,
  dining: Utensils,
  balcony: Maximize,
  audio: Music,
  shower: Droplets,
  lounge: Armchair,
  default: Check,
};

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

// Room Card Component
function RoomCard({
  room,
  index,
  dict,
  lang,
}: {
  room: RoomType;
  index: number;
  dict: any;
  lang: string;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const t = (key: string) => getNestedValue(dict, key) || key;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + room.images.length) % room.images.length
    );
  };

  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setShowGallery(true);
  };

  const nextGalleryImage = () => {
    setGalleryIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevGalleryImage = () => {
    setGalleryIndex(
      (prev) => (prev - 1 + room.images.length) % room.images.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * (index + 1) }}
      className="bg-white overflow-hidden shadow-lg border border-gray-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Main Image with Navigation */}
        <div className="relative h-64 md:h-auto md:col-span-1 group">
          <Image
            src={room.images[currentImageIndex] || "/placeholder.svg"}
            alt={`${t(room.nameKey)} - ${t("rooms.gallery.image")} ${currentImageIndex + 1}`}
            fill
            className="object-cover"
          />

          {/* Image Navigation */}
          <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => {
                e.preventDefault();
                prevImage();
              }}
              className="bg-white/80 rounded-full p-1 text-gray-800 hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                nextImage();
              }}
              className="bg-white/80 rounded-full p-1 text-gray-800 hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
            {currentImageIndex + 1} / {room.images.length}
          </div>

          {/* View All Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              openGallery(currentImageIndex);
            }}
            className="absolute bottom-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 flex items-center gap-1"
          >
            <ImageIcon className="h-3 w-3" />
            <span>{t("rooms.gallery.viewAll")}</span>
          </button>

          {/* Thumbnail Strip */}
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-1 p-2">
            {room.images.slice(0, 5).map((img, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentImageIndex(i);
                }}
                className={`relative w-10 h-10 overflow-hidden ${
                  i === currentImageIndex
                    ? "ring-2 ring-pink-500"
                    : "opacity-70"
                }`}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Miniatura ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
            {room.images.length > 5 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  openGallery(5);
                }}
                className="relative w-10 h-10 overflow-hidden bg-gray-100 flex items-center justify-center text-xs"
              >
                +{room.images.length - 5}
              </button>
            )}
          </div>
        </div>

        {/* Room Details */}
        <div className="p-6 md:col-span-2 mt-12 md:mt-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-2xl font-semibold">{t(room.nameKey)}</h3>
            <div className="text-right mt-2 md:mt-0">
              <p className="text-lg font-medium text-[#404042]">
                {t(room.priceKey)}
              </p>
              <p className="text-sm text-gray-500">{t(room.capacityKey)}</p>
            </div>
          </div>

          <p className="text-gray-600 mb-4">{t(room.descriptionKey)}</p>

          <div className="mb-6">
            <h4 className="font-medium mb-2">{t("rooms.amenities")}:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {room.features.map((feature, i) => {
                const IconComponent =
                  featureIcons[feature.icon as keyof typeof featureIcons] ||
                  featureIcons.default;
                return (
                  <li key={i} className="flex items-center gap-2">
                    <IconComponent className="h-4 w-4 text-pink-500" />
                    <span className="text-sm">{t(feature.nameKey)}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex justify-end">
            <Link href={`/${lang}/rooms/${room.id}`}>
              <Button variant="outline" className="mr-2">
                {t("rooms.details")}
              </Button>
            </Link>
            <Button>{t("rooms.bookNow")}</Button>
          </div>
        </div>
      </div>

      {/* Full Gallery Dialog */}
      <Dialog open={showGallery} onOpenChange={setShowGallery}>
        <DialogContent className="max-w-4xl bg-white">
          <DialogHeader>
            <DialogTitle>
              {t(room.nameKey)} - {t("rooms.gallery.title")}
            </DialogTitle>
            <DialogDescription>
              {t("rooms.gallery.image")} {galleryIndex + 1}{" "}
              {t("rooms.gallery.of")} {room.images.length}
            </DialogDescription>
          </DialogHeader>

          <div className="relative aspect-[16/9] w-full overflow-hidden my-4">
            <Image
              src={room.images[galleryIndex] || "/placeholder.svg"}
              alt={`${t(room.nameKey)} - ${t("rooms.gallery.image")} ${galleryIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              quality={100}
            />

            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prevGalleryImage}
                className="bg-white/80 rounded-full p-2 text-gray-800 hover:bg-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextGalleryImage}
                className="bg-white/80 rounded-full p-2 text-gray-800 hover:bg-white"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 mt-4">
            {room.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setGalleryIndex(i)}
                className={`relative aspect-square w-full overflow-hidden ${
                  i === galleryIndex
                    ? "ring-2 ring-pink-500"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Miniatura ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}

interface RoomsIntroProps {
  dict: any;
  lang: string;
}

export default function RoomsIntro({ dict, lang }: RoomsIntroProps) {
  // Helper function to get nested dictionary values
  const t = (key: string) => getNestedValue(dict, key) || key;

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Introduction Section with Building Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase text-4xl font-alata md:text-5xl font-semibold tracking-wider mb-8"
            >
              {t("rooms.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed mb-4"
            >
              {t("rooms.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg mb-2">{t("rooms.everyRoomHas")}</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Wind className="h-5 w-5 text-avangarda mr-2 mt-0.5" />
                  <span>{t("rooms.roomAmenities.ac")}</span>
                </li>
                <li className="flex items-start">
                  <Tv className="h-5 w-5 text-avangarda mr-2 mt-0.5" />
                  <span>{t("rooms.roomAmenities.tv")}</span>
                </li>
                <li className="flex items-start">
                  <Bath className="h-5 w-5 text-avangarda mr-2 mt-0.5" />
                  <span>{t("rooms.roomAmenities.bathroom")}</span>
                </li>
                <li className="flex items-start">
                  <Coffee className="h-5 w-5 text-avangarda mr-2 mt-0.5" />
                  <span>{t("rooms.roomAmenities.beverages")}</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Building Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[4/3] w-full overflow-hidden shadow-sm"
          >
            <Image
              src="/diver/hotel-01.jpeg"
              alt={lang === "pl" ? "Budynek Główny" : "Main Building"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
            />
          </motion.div>
        </div>

        {/* Room Selection Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">
            {t("rooms.chooseRoom")}
          </h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8 bg-white rounded-lg p-1 ">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-avangarda rounded-none"
              >
                {t("rooms.tabs.all")}
              </TabsTrigger>
              <TabsTrigger
                value="standard"
                className="data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-avangarda rounded-none"
              >
                {t("rooms.tabs.standard")}
              </TabsTrigger>
              <TabsTrigger
                value="family"
                className="data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-avangarda rounded-none"
              >
                {t("rooms.tabs.family")}
              </TabsTrigger>
              <TabsTrigger
                value="apartment"
                className="data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-avangarda rounded-none"
              >
                {t("rooms.tabs.apartment")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              {ROOMS_DATA.map((room, index) => (
                <RoomCard
                  key={room.id}
                  room={room}
                  index={index}
                  dict={dict}
                  lang={lang}
                />
              ))}
            </TabsContent>

            <TabsContent value="standard" className="space-y-8">
              {ROOMS_DATA.filter((room) => room.id === "standard").map(
                (room, index) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    index={index}
                    dict={dict}
                    lang={lang}
                  />
                )
              )}
            </TabsContent>

            <TabsContent value="family" className="space-y-8">
              {ROOMS_DATA.filter((room) => room.id === "family").map(
                (room, index) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    index={index}
                    dict={dict}
                    lang={lang}
                  />
                )
              )}
            </TabsContent>

            <TabsContent value="apartment" className="space-y-8">
              {ROOMS_DATA.filter((room) => room.id === "apartment").map(
                (room, index) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    index={index}
                    dict={dict}
                    lang={lang}
                  />
                )
              )}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </Container>
  );
}
