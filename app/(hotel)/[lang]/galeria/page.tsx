import AnimateOnScroll from "@/components/animate-on-scroll";
import HeroImage from "@/components/hero-image";
import GalleryIntro from "@/components/modules/Gallery/GalleryIntro";
import WorkInProgress from "@/components/work-in-progress";
import { getDictionary } from "@/lib/dictionary";

export default async function GaleriaMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Galeria zdjęć" : "Images gallery";

  return (
    <>
      <HeroImage image="/gallery-images/gal-02.jpg" title={title} />

      <AnimateOnScroll>
        <GalleryIntro dict={dict} lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WorkInProgress dict={dict} lang={lang} />
      </AnimateOnScroll>
    </>
  );
}
