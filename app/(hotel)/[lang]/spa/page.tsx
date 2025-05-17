import SpaHero from "@/components/modules/Spa/SpaHero";
import SpaIntro from "@/components/modules/Spa/SpaIntro";
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

      <SpaIntro dict={dict} lang={lang} />
    </>
  );
}
