import AnimateOnScroll from "@/components/animate-on-scroll";
import ClubCoola from "@/components/modules/Entertainment/ClubCoola";
import EntertainmentHero from "@/components/modules/Entertainment/EntertainmentHero";
import EntertainmentIntro from "@/components/modules/Entertainment/EntertainmentIntro";

import PoolSection from "@/components/pool-section";
import WorkInProgress from "@/components/work-in-progress";
import { getDictionary } from "@/lib/dictionary";

export default async function EntertainmentMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Rozrywka i atrakcje" : "Entertainment";

  return (
    <>
      <EntertainmentHero />

      <AnimateOnScroll>
        <EntertainmentIntro dict={dict} lang={lang} />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <ClubCoola dict={dict} lang={lang} />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <WorkInProgress dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
