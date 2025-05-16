"use client";

import { motion } from "framer-motion";
import type { Offers } from "../sanity.types";
import OfferThumb from "./offer-thumb";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function OfferGrid({ offers }: { offers: Offers[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
    >
      {offers?.map((offer) => (
        <motion.div key={offer._id} variants={item} layout>
          <OfferThumb offer={offer} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default OfferGrid;
