import About from "@/components/main/About";
import Business from "@/components/main/Business";

import Entertainment from "@/components/main/Entertainment";
import Hero from "@/components/modules/Hero/Hero";
import Offers from "@/components/main/Offers";
import Restaurant from "@/components/main/Restaurant";

import Spa from "@/components/main/Spa";
import Weddings from "@/components/main/Weddings";
import { getDictionary } from "@/lib/dictionary";
import { getAllOffers } from "@/sanity/lib/offers/getOffers";
import AnimateOnScroll from "@/components/animate-on-scroll";
import Rooms from "@/components/main/Rooms";
import CTAgeneric from "@/components/main/CTAgeneric";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");
  const offers = await getAllOffers();
  return (
    <>
      {/* Example content to enable scrolling */}
      <Hero />
      <AnimateOnScroll>
        <About dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Offers dict={dict} offers={offers} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Rooms lang={lang} dict={dict} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Restaurant dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Weddings dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Business lang={lang} dict={dict} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Spa dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Entertainment lang={lang} dict={dict} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTAgeneric />
      </AnimateOnScroll>
    </>
  );
}
