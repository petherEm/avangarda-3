import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllOffers = async () => {
  const ALL_OFFERS_QUERY = defineQuery(
    `*[_type == "offers"] | order(name asc)`
  );
  try {
    const offers = await sanityFetch({
      query: ALL_OFFERS_QUERY,
    });
    return offers.data || [];
  } catch (error) {
    console.error("Error fetching all products", error);

    return [];
  }
};
