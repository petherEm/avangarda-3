"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Music, Calendar, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ClubCoola() {
  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase text-4xl md:text-5xl font-semibold tracking-wider mb-8"
            >
              Klub Coola
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed mb-6"
            >
              Odkryj nasz ekskluzywny klub nocny, gdzie czeka na Ciebie
              niezapomniana rozrywka i wyjątkowa atmosfera. Profesjonalni DJ-e,
              doskonałe drinki i nowoczesny wystrój tworzą idealne miejsce na
              wieczorne wyjście. Nasz klub to połączenie eleganckiego designu z
              energetyczną muzyką, która porwie Cię do tańca.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Zarezerwuj
              </Button>
            </motion.div>

            {/* Quick Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="bg-pink-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium">Godziny otwarcia</h3>
                </div>
                <p className="text-sm">Czwartek - Sobota: 15:00 - 3:00</p>
                <p className="text-sm">Niedziela: 15:00 - 2:00</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium">Rezerwacje VIP</h3>
                </div>
                <p className="text-sm">+48 123 456 789</p>
                <p className="text-sm">coola@hotelavangarda.pl</p>
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
              src="/klub/klub-01.JPG"
              alt="Klub Nocny - wnętrze"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <Badge className="bg-pink-500 text-white border-none mb-2">
                Zapraszamy na kręgle
              </Badge>
              <h2 className="text-white text-xl font-semibold">
                Niezapomniane chwile w doborym towarzystwie
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Image Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-2xl font-semibold text-center">
              Galeria Klubu
            </h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image 2 - Larger */}
            <div className="md:col-span-2 relative aspect-[16/9] overflow-hidden">
              <Image
                src="/klub/klub-02.JPG"
                alt="Bilard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-medium">Bilard</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/klub/klub-03.JPG"
                alt="Inne gry"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-medium">Gry</p>
              </div>
            </div>

            {/* Image 4 */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/klub/klub-04.JPG"
                alt="Bowling"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-medium">Kręgle</p>
              </div>
            </div>

            {/* Image 1 - Larger */}
            <div className="md:col-span-2 relative aspect-[16/9] overflow-hidden">
              <Image
                src="/klub/klub-01.JPG"
                alt="Bowling"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-medium">Kręgielnia</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-2xl font-semibold text-center">Co oferujemy</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-6 rounded-lg">
              <Music className="h-10 w-10 text-avangarda mb-4" />
              <h3 className="text-xl font-medium mb-2">Najlepsza muzyka</h3>
              <p className="text-gray-600 leading-relaxed">
                Nasi DJ-e grają najnowsze hity oraz ponadczasowe klasyki. Każdy
                weekend to inny motyw muzyczny, od house i techno po R&B i
                hip-hop.
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg">
              <Users className="h-10 w-10 text-avangarda mb-4" />
              <h3 className="text-xl font-medium mb-2">Strefy VIP</h3>
              <p className="text-gray-600 leading-relaxed">
                Ekskluzywne loże VIP z prywatną obsługą, premium alkoholami i
                najlepszym widokiem na parkiet. Idealne na specjalne okazje i
                celebracje.
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg">
              <Calendar className="h-10 w-10 text-avangarda mb-4" />
              <h3 className="text-xl font-medium mb-2">Specjalne wydarzenia</h3>
              <p className="text-gray-600 leading-relaxed">
                Regularne wydarzenia tematyczne, występy gościnnych DJ-ów i
                artystów, konkursy z nagrodami oraz niezapomniane imprezy
                okolicznościowe.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
