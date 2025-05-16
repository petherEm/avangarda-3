import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Offers } from "../sanity.types";
import { imageUrl } from "@/lib/imageUrl";

const OfferThumb = ({ offer }: { offer: Offers }) => {
  const isOutOfStock = offer.stock != null && offer.stock <= 0;

  return (
    <Link
      href={`/pakiety/${offer.slug?.current}`}
      className="group block h-full"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className={`h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 ${
          isOutOfStock ? "opacity-50" : ""
        }`}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {offer.image && (
            <Image
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              src={imageUrl(offer.image).url() || "/placeholder.svg"}
              alt={offer.name || "Product Image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          )}

          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <span className="text-white font-bold text-xl px-6 py-3 border-2 border-white/30 rounded-full">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors">
            {offer.name}
          </h2>

          <p className="text-gray-600 line-clamp-3 mb-4 text-sm leading-relaxed">
            {offer.description
              ?.map((block) =>
                block._type === "block"
                  ? block.children?.map((child) => child.text).join("")
                  : ""
              )
              .join("") || "No description"}
          </p>

          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-primary">
              ${offer.price?.toFixed(2)}
            </p>
            <motion.span
              whileHover={{ x: 5 }}
              className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors flex items-center gap-2"
            >
              View Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default OfferThumb;
