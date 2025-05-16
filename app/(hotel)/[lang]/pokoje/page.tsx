import AnimateOnScroll from "@/components/animate-on-scroll";
import HeroImage from "@/components/hero-image";
import RoomsIntro from "@/components/modules/Rooms/RoomsIntro";
import WorkInProgress from "@/components/work-in-progress";
import { getDictionary } from "@/lib/dictionary";

export default async function RoomsMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Nasze pokoje" : "Our rooms";

  return (
    <>
      <HeroImage image="/gallery-images/gal-04.jpg" title={title} />

      <AnimateOnScroll>
        <RoomsIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
