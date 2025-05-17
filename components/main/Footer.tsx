"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";

interface MenuItemType {
  nameKey: string;
  href: string;
}

const MenuListing: MenuItemType[] = [
  { nameKey: "dining", href: "/restauracja" },
  { nameKey: "spa", href: "/spa" },
  { nameKey: "events", href: "/przyjecia" },
  { nameKey: "business", href: "/biznes" },
  { nameKey: "entertainment", href: "/rozrywka" },
  { nameKey: "rooms", href: "/pokoje" },
  { nameKey: "gallery", href: "/galeria" },
];

interface FooterProps {
  lang: string;
  dict: {
    nav: {
      [key: string]: string;
    };
  };
}

export function Footer({ lang, dict }: FooterProps) {
  const getLocalizedHref = (path: string) => `/${lang}${path}`;

  return (
    <footer className="bg-[#2D2D2D] text-white py-8 md:py-16">
      <Container>
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Top Section with Logo and Contacts */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and Social - Takes 3 columns on desktop */}
            <div className="md:col-span-3 flex flex-col items-center md:items-start gap-4 md:gap-6">
              <Link href={getLocalizedHref("/")} className="block">
                <Image
                  src="/avangarda-logo-lg-2.png"
                  alt="Hotel Avangarda"
                  width={200}
                  height={100}
                  className="h-auto w-[140px] sm:w-[160px] md:w-[180px]"
                />
              </Link>
              <div className="flex gap-4">
                <Link
                  href="https://facebook.com"
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="opacity-75 hover:opacity-100 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </div>
            </div>

            {/* Contact Sections - 9 columns total on desktop */}
            <div className="md:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Left Column - General Contact and Events */}
                <div className="space-y-6">
                  {/* General Contact */}
                  <div className="space-y-3 text-center sm:text-left">
                    <h2 className="font-medium text-base md:text-lg">
                      Kontakt
                    </h2>
                    <div className="space-y-2 text-xs md:text-sm">
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <Phone className="h-3 w-3 text-[#E31C79]" />
                        <p className="opacity-75">+48 29 752 50 34</p>
                      </div>
                      <div className="flex items-start justify-center sm:justify-start gap-2">
                        <Mail className="h-3 w-3 text-[#E31C79] mt-0.5" />
                        <Link
                          href="mailto:info@hotelavangarda.pl"
                          className="text-[#E31C79] hover:underline"
                        >
                          info@hotelavangarda.pl
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Events Contact */}
                  <div className="space-y-3 text-center sm:text-left">
                    <h2 className="font-medium text-base md:text-lg">
                      Przyjęcia
                    </h2>
                    <div className="space-y-2 text-xs md:text-sm">
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <Phone className="h-3 w-3 text-[#E31C79]" />
                        <p className="opacity-75">+48 505 158 200</p>
                      </div>
                      <div className="flex items-start justify-center sm:justify-start gap-2">
                        <Mail className="h-3 w-3 text-[#E31C79] mt-0.5" />
                        <Link
                          href="mailto:agnieszka.kobylinska@hotelavangarda.pl"
                          className="text-[#E31C79] hover:underline break-all"
                        >
                          agnieszka.kobylinska@hotelavangarda.pl
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Conference and Address */}
                <div className="space-y-6">
                  {/* Address */}
                  <div className="space-y-3 text-center sm:text-left">
                    <h2 className="font-medium text-base md:text-lg">Adres</h2>
                    <address className="not-italic text-xs md:text-sm">
                      <div className="flex items-start justify-center sm:justify-start gap-2">
                        <MapPin className="h-3 w-3 text-[#E31C79] mt-0.5" />
                        <div className="opacity-75">
                          <p>ul. Królowej Bony 3</p>
                          <p>Różan, 06-230, Polska</p>
                        </div>
                      </div>
                    </address>
                  </div>
                  {/* Conference Contact */}
                  <div className="space-y-3 text-center sm:text-left">
                    <h2 className="font-medium text-base md:text-lg">
                      Konferencje
                    </h2>
                    <div className="space-y-2 text-xs md:text-sm">
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <Phone className="h-3 w-3 text-[#E31C79]" />
                        <p className="opacity-75">+48 505 158 210</p>
                      </div>
                      <div className="flex items-start justify-center sm:justify-start gap-2">
                        <Mail className="h-3 w-3 text-[#E31C79] mt-0.5" />
                        <Link
                          href="mailto:konferencje@hotelavangarda.pl"
                          className="text-[#E31C79] hover:underline break-all"
                        >
                          konferencje@hotelavangarda.pl
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator between sections */}
          <Separator className="bg-white/30" />

          {/* Navigation */}
          <nav className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6">
            {MenuListing.map((item, index) => (
              <React.Fragment key={item.nameKey}>
                <Link
                  href={getLocalizedHref(item.href)}
                  className="uppercase text-xs md:text-sm tracking-wide opacity-75 hover:opacity-100 transition-opacity"
                >
                  {dict.nav[item.nameKey]}
                </Link>
                {index < MenuListing.length - 1 && (
                  <span className="hidden sm:inline opacity-50">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Bottom separator */}
          <Separator className="bg-white/30" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] md:text-xs opacity-75">
            <p className="text-center sm:text-left">
              Copyright © 2025 Hotel Avangarda. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href={getLocalizedHref("/regulamin")}
                className="hover:opacity-100 transition-opacity"
              >
                Regulamin
              </Link>
              <span className="opacity-50">|</span>
              <Link
                href={getLocalizedHref("/prywatnosc")}
                className="hover:opacity-100 transition-opacity"
              >
                Prywatność
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
