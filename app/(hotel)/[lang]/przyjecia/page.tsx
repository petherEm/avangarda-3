import AnimateOnScroll from "@/components/animate-on-scroll";
import HeroImage from "@/components/hero-image";
import EventsHero from "@/components/modules/Events/EventsHero";
import EventsIntro from "@/components/modules/Events/EventsIntro";
import { getDictionary } from "@/lib/dictionary";

export default async function EventsMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Przyjęcia i wesela" : "Weddings and events";

  return (
    <>
      <EventsHero />
      <AnimateOnScroll>
        <EventsIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
