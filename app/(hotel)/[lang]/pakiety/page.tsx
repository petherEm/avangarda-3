import { Container } from "@/components/container";
import OfferGrid from "@/components/offer-grid";

import { getAllOffers } from "@/sanity/lib/offers/getOffers";

const Pakiety = async () => {
  const offers = await getAllOffers();

  return (
    <main className="bg-gray-50 min-h-screen font-raleway">
      <section className="relative h-[40vh] bg-gradient-to-r from-primary/90 to-primary flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
        <Container className="relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Packages
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium offerings
              designed to meet your needs
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-12 md:py-20">
        <OfferGrid offers={offers} />
      </Container>
    </main>
  );
};

export default Pakiety;
