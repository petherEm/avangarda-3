"use client";

import { Container } from "@/components/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, ChefHat, Utensils } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { SPECIALTIES_DATA } from "@/constants";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface GastroIntroProps {
  dict: any;
  lang: string;
}

const GastroIntro = ({ dict, lang }: GastroIntroProps) => {
  const [activeImage, setActiveImage] = useState(0);

  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  const restaurantImages = [
    {
      src: "/restaurant/rest-01.jpg",
      alt: "Eleganckie wnętrze restauracji",
    },
    {
      src: "/restaurant/rest-10.jpg",
      alt: "Eleganckie wnętrze restauracji 2",
    },
    {
      src: "/restaurant/rest-03.jpg",
      alt: "Bar restauracyjny",
    },
    {
      src: "/restaurant/rest-09.jpg",
      alt: "Prywatna sala restauracyjna",
    },
  ];

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase text-4xl md:text-5xl font-semibold tracking-wider mb-10"
            >
              {t("diningDetails.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              {t("diningDetails.description")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-8 bg-pink-50 p-2 sm:p-6"
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-2">
                  {t("diningDetails.hours.weekdays")}
                </h3>
                <p>{t("diningDetails.hours.weekdaysTime")}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">
                  {t("diningDetails.hours.weekend")}
                </h3>
                <p>{t("diningDetails.hours.weekendTime")}</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <Link href={`/${lang}/menu`}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-fit transition-all hover:scale-105 active:scale-95"
                >
                  {t("diningDetails.menu")}
                </Button>
              </Link>

              <div className="flex items-center gap-2 text-lg">
                <Phone className="w-5 h-5 text-avangarda" />
                <Link href="#">{t("diningDetails.phone")}</Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Restaurant Gallery Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">
            {t("diningDetails.restaurantTitle")}
          </h2>

          <div className="relative aspect-[16/9] w-full overflow-hidden mb-4">
            <Image
              src={restaurantImages[activeImage].src || "/placeholder.svg"}
              alt={restaurantImages[activeImage].alt}
              fill
              className="object-cover transition-all duration-500"
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {restaurantImages.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-[4/3] cursor-pointer overflow-hidden border-2 ${
                  activeImage === index
                    ? "border-avangarda"
                    : "border-transparent"
                }`}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Specialties Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <ChefHat className="h-8 w-8 text-avangarda" />
            <h2 className="text-3xl font-semibold text-center">
              {t("diningDetails.specialtiesTitle")}
            </h2>
          </div>

          <p className="text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            {t("diningDetails.specialtiesIntro")}
          </p>

          <Tabs defaultValue="polish" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8 bg-white rounded-lg p-1">
              <TabsTrigger
                value="polish"
                className="data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-avangarda rounded-none"
              >
                {t("gastro.tabs.traditional")}
              </TabsTrigger>

              <TabsTrigger
                value="seasonal"
                className="data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-avangarda rounded-none"
              >
                {t("gastro.tabs.seasonal")}
              </TabsTrigger>
              <TabsTrigger
                value="kids"
                className="data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-avangarda rounded-none"
              >
                {t("gastro.tabs.kids")}
              </TabsTrigger>
              <TabsTrigger
                value="desserts"
                className="data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-avangarda rounded-none"
              >
                {t("gastro.tabs.desserts")}
              </TabsTrigger>
            </TabsList>

            {SPECIALTIES_DATA.map((specialty) => (
              <TabsContent
                key={specialty.id}
                value={specialty.id}
                className="mt-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={specialty.image || "/placeholder.svg"}
                      alt={t(specialty.nameKey)}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">
                      {t(specialty.nameKey)}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {specialty.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-pink-50 border-none"
                        >
                          {t(tag)}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-lg leading-relaxed">
                      {t(specialty.descriptionKey)}
                    </p>

                    {specialty.priceKey && (
                      <p className="text-lg font-medium">
                        {t("diningDetails.priceRange")}{" "}
                        <span className="text-avangarda">
                          {t(specialty.priceKey)}
                        </span>
                      </p>
                    )}

                    <div className="pt-4">
                      <Link href={`/${lang}/menu#${specialty.id}`}>
                        <Button
                          className="mt-2 w-fit transition-all hover:scale-105 active:scale-95"
                          size="lg"
                          variant="secondary"
                        >
                          <Utensils className="mr-2 h-4 w-4" />
                          {t("diningDetails.seeInMenu")}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </Container>
  );
};

export default GastroIntro;
