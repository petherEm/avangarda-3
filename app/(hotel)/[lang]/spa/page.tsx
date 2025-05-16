import AnimateOnScroll from "@/components/animate-on-scroll";
import SpaHero from "@/components/modules/Spa/SpaHero";
import SpaIntro from "@/components/modules/Spa/SpaIntro";
import WorkInProgress from "@/components/work-in-progress";
import { getDictionary } from "@/lib/dictionary";

export default async function SpaMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <>
      <SpaHero />
      <AnimateOnScroll>
        <SpaIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WorkInProgress dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
