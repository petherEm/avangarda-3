"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { Container } from "@/components/container";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

const PoolSection = ({ dict, lang }) => {
  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-10"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">
          {t("spa.poolTitle") || "Swimming Pool"}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/spa/pool-01.jpg"
              alt={t("spa.poolTitle") || "Swimming Pool"}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">
              {t("spa.poolSubtitle") || "Relax and Rejuvenate"}
            </h3>
            <p className="mb-6 text-lg leading-relaxed">
              {t("spa.poolDescription") ||
                "Our luxurious swimming pool offers a perfect retreat for relaxation and recreation. Immerse yourself in the crystal-clear waters and enjoy a refreshing swim in a tranquil environment designed for your comfort and pleasure."}
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-avangarda mt-1" />
                </div>
                <p className="text-md leading-relaxed">
                  <span className="font-medium">
                    {t("spa.poolFeatures.temperature.title") ||
                      "Temperature Control"}
                  </span>{" "}
                  -{" "}
                  {t("spa.poolFeatures.temperature.description") ||
                    "Maintained at the perfect temperature year-round for your comfort."}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-avangarda mt-1" />
                </div>
                <p className="text-md leading-relaxed">
                  <span className="font-medium">
                    {t("spa.poolFeatures.facilities.title") ||
                      "Premium Facilities"}
                  </span>{" "}
                  -{" "}
                  {t("spa.poolFeatures.facilities.description") ||
                    "Comfortable loungers, fresh towels, and changing rooms available."}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-avangarda mt-1" />
                </div>
                <p className="text-md leading-relaxed">
                  <span className="font-medium">
                    {t("spa.poolFeatures.access.title") || "Easy Access"}
                  </span>{" "}
                  -{" "}
                  {t("spa.poolFeatures.access.description") ||
                    "Complimentary for hotel guests, with day passes available for visitors."}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-pink-50 p-4">
                <p className="font-medium">
                  {t("spa.poolPrices.adult.title") || "Adult Pass"}
                </p>
                <p className="text-secondary font-medium">
                  {t("spa.poolPrices.adult.price") || "50 PLN / 2h"}
                </p>
              </div>
              <div className="bg-pink-50 p-4">
                <p className="font-medium">
                  {t("spa.poolPrices.child.title") || "Child Pass"}
                </p>
                <p className="text-secondary font-medium">
                  {t("spa.poolPrices.child.price") || "30 PLN / 2h"}
                </p>
              </div>
              <div className="bg-pink-50 p-4">
                <p className="font-medium">
                  {t("spa.poolPrices.family.title") || "Family Pass"}
                </p>
                <p className="text-secondary font-medium">
                  {t("spa.poolPrices.family.price") || "120 PLN / 2h"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-medium mb-4">
              {t("spa.kidsPoolTitle") || "Kids Swimming Area"}
            </h3>
            <p className="mb-6 text-lg">
              {t("spa.kidsPoolDescription") ||
                "We've created a special swimming area just for our younger guests. Our kids' pool provides a safe and fun environment where children can splash and play under careful supervision."}
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-avangarda mt-1" />
                </div>
                <p className="text-md leading-relaxed">
                  <span className="font-medium">
                    {t("spa.kidsPoolFeatures.safety.title") || "Safety First"}
                  </span>{" "}
                  -{" "}
                  {t("spa.kidsPoolFeatures.safety.description") ||
                    "Shallow depth and non-slip surfaces designed with children's safety in mind."}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-avangarda mt-1" />
                </div>
                <p className="text-md leading-relaxed">
                  <span className="font-medium">
                    {t("spa.kidsPoolFeatures.fun.title") || "Fun Elements"}
                  </span>{" "}
                  -{" "}
                  {t("spa.kidsPoolFeatures.fun.description") ||
                    "Playful water features and toys to keep children entertained."}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-avangarda mt-1" />
                </div>
                <p className="text-md leading-relaxed">
                  <span className="font-medium">
                    {t("spa.kidsPoolFeatures.supervision.title") ||
                      "Supervision"}
                  </span>{" "}
                  -{" "}
                  {t("spa.kidsPoolFeatures.supervision.description") ||
                    "Trained staff on hand, though parental supervision is still required."}
                </p>
              </div>
            </div>

            {/* <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {t("spa.bookPoolSession") || "Book Pool Session"}
              </Button> */}
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden order-1 lg:order-2">
            <Image
              src="/spa/pool-kids.jpg"
              alt={t("spa.kidsPoolTitle") || "Kids Swimming Area"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PoolSection;
