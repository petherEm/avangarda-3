"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Waves,
  Trees,
  Ship,
  Footprints,
  FishIcon as Swimming,
  Clock,
  Baby,
  Gamepad2,
  PlayIcon as Playground,
  Leaf,
} from "lucide-react";

export default function OutdoorEntertainment() {
  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section - Beautiful Surroundings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase text-4xl md:text-5xl font-semibold tracking-wider mb-8"
            >
              Aktywnie i zielono
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed mb-6"
            >
              Różan położony jest na wysokiej skarpie, którą opływa rzeka Narew
              i dopływ Różanica. Rzeki są atrakcyjnymi szlakami, łączącymi
              jeziora mazurskie z Wisłą. Dookoła dużo jest lasów, łąk, strumieni
              i wąwozów, które zachęcają do wędrówek.
            </motion.p>

            {/* Nature Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-pink-50 p-4 flex items-start gap-3">
                <Trees className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Lasy i łąki</h3>
                  <p className="text-sm text-gray-600">
                    Idealne do spacerów i obserwacji przyrody
                  </p>
                </div>
              </div>
              <div className="bg-pink-50 p-4 flex items-start gap-3">
                <Waves className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Rzeki</h3>
                  <p className="text-sm text-gray-600">
                    Narew i Różanica - atrakcyjne szlaki wodne
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[4/3] w-full overflow-hidden"
          >
            <Image
              src="/outdoor/out-02.jpg"
              alt="Piękna okolica Różana"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
          </motion.div>
        </div>

        {/* Image Gallery - Nature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First column - stacked images */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/outdoor/out-01.jpg"
                  alt="Okolice Różana"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/outdoor/out-03.jpg"
                  alt="Rzeka Narew"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Second and third columns - larger image with full height */}
            <div className="md:col-span-2 relative h-full overflow-hidden">
              <Image
                src="/outdoor/out-04.jpg"
                alt="Panorama okolicy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Active Recreation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-semibold mb-4 tracking-wider">
                ZDROWIE I AKTYWNOŚĆ
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Nasza okolica to doskonały teren do spacerów, Nordic Walking,
                wycieczek rowerowych. W pobliżu znajdują się szlaki piesze i
                rowerowe, które prowadzą przez malownicze tereny nad rzeką
                Narew. Możemy rowniez pochwalić się:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <Ship className="h-6 w-6 text-avangarda mt-1" />
                  <span className="leading-relaxed">
                    Portem Różan z kajakami, łódkami, tawerną i plażą
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Footprints className="h-10 w-10 text-avangarda mt-1" />
                  <span className="leading-relaxed">
                    Trasą spacerową z hotelu do portu i odtworzonym starobrukiem
                    z zabytkowymi latarenkami. Już dzisiaj zapraszamy
                  </span>
                </li>
              </ul>
            </div>

            <div className="order-1 lg:order-2 relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/outdoor/out-06.jpg"
                alt="Aktywny wypoczynek"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </motion.div>

        {/* Water Relaxation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/outdoor/out-05.jpg"
                alt="Basen rekreacyjny"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-4 tracking-wider">
                WODNY RELAKS
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Zapraszamy Państwa na basen rekreacyjny z biczami wodnymi.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 leading-relaxed">
                <div className="bg-pink-50 p-4">
                  <Swimming className="h-6 w-6 text-avangarda mb-2" />
                  <h3 className="font-medium mb-1">Basen rekreacyjny</h3>
                  <p className="text-sm text-gray-600">
                    Komfortowy basen z atrakcjami wodnymi
                  </p>
                </div>
                <div className="bg-pink-50 p-4">
                  <Waves className="h-6 w-6 text-avangarda mb-2" />
                  <h3 className="font-medium mb-1">Bicze wodne</h3>
                  <p className="text-sm text-gray-600">
                    Relaksujący masaż wodny dla ciała
                  </p>
                </div>
              </div>

              {/* Opening Hours Information */}
              <div className="bg-pink-50 p-4 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium">Godziny otwarcia</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="font-medium">Poniedziałek - Piątek</p>
                    <p>8:00 - 21:00</p>
                  </div>
                  <div>
                    <p className="font-medium">Sobota - Niedziela</p>
                    <p>9:00 - 22:00</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  * Ostatnie wejście 1 godzinę przed zamknięciem
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Kids Attractions Section - NEW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          {/* <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-2xl font-semibold text-center">
              Atrakcje dla dzieci
            </h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-semibold mb-4 tracking-wider">
                RODZINNE PRZYGODY
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Nasze otoczenie oferuje wiele atrakcji dla najmłodszych gości.
                Dzieci mogą cieszyć się bezpieczną zabawą na świeżym powietrzu i
                odkrywać uroki natury pod opieką rodziców.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-pink-50 p-4">
                  <Playground className="h-6 w-6 text-avangarda mb-2" />
                  <h3 className="font-medium mb-1">Plac zabaw</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Nowoczesny plac zabaw z bezpiecznymi atrakcjami dla dzieci w
                    różnym wieku
                  </p>
                </div>
                <div className="bg-pink-50 p-4">
                  <Leaf className="h-6 w-6 text-avangarda mb-2" />
                  <h3 className="font-medium mb-1">Ścieżka edukacyjna</h3>
                  <p className="text-sm text-gray-600">
                    Poznawanie lokalnej flory i fauny poprzez zabawę
                  </p>
                </div>
              </div>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <Baby className="h-6 w-6 text-avangarda mt-1" />
                  <span>
                    Płytki brodzik dla najmłodszych w strefie basenowej
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Gamepad2 className="h-6 w-6 text-avangarda mt-1" />
                  <span>
                    Pokój gier z konsolami i grami planszowymi na wypadek
                    niepogody
                  </span>
                </li>
              </ul>

              <div className="bg-pink-100 p-4">
                <h3 className="font-medium mb-2">
                  Sezonowe atrakcje dla dzieci:
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Letnie animacje i zabawy na świeżym powietrzu</li>
                  <li>• Warsztaty przyrodnicze i artystyczne</li>
                  <li>
                    • Mini zoo z możliwością karmienia zwierząt (w sezonie)
                  </li>
                  <li>• Rodzinne spływy kajakowe z przewodnikiem</li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/outdoor/out-07.jpg"
                alt="Atrakcje dla dzieci"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
