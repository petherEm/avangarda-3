import AnimateOnScroll from "@/components/animate-on-scroll";
import HeroImage from "@/components/hero-image";
import BusinessHero from "@/components/modules/Business/BusinessHero";
import BusinessIntro from "@/components/modules/Business/BusinessIntro";
import ClubCoola from "@/components/modules/Entertainment/ClubCoola";
import WorkInProgress from "@/components/work-in-progress";

import { getDictionary } from "@/lib/dictionary";

export default async function BusinessMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Oferta dla biznesu" : "Business events";

  return (
    <>
      {/* <HeroImage image="/gallery-images/gal-06.png" title={title} /> */}
      <BusinessHero />

      <AnimateOnScroll>
        <BusinessIntro dict={dict} lang={lang} />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <ClubCoola dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
