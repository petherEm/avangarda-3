"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, ChefHat, Utensils } from "lucide-react";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

const GastroCTA = ({ dict, lang }) => {
  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-black text-white p-8 md:p-12 "
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">
          {t("diningDetails.ctaTitle") || "Reserve Your Table Today"}
        </h2>

        <p className="text-lg mb-8 max-w-2xl mx-auto">
          {t("diningDetails.ctaDescription") ||
            "Experience our exceptional cuisine and atmosphere. Call us to book your table or download our menu to explore our delicious offerings."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            {t("diningDetails.callToBook") || "Call to Book"}
          </Button>

          <Link href={`/${lang}/menu`}>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto transition-all hover:scale-105 active:scale-95"
            >
              {t("diningDetails.downloadMenu") || "Download Menu"}
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default GastroCTA;
