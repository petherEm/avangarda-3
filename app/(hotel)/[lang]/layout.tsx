import { locales } from "@/middleware";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway, Alata } from "next/font/google";
import "@/styles/tailwind.css";
import { SanityLive } from "@/sanity/lib/live";
import { getDictionary } from "@/lib/dictionary";
import { Navbar } from "@/components/main/Navbar";
import { Footer } from "@/components/main/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alata = Alata({
  variable: "--font-alata",
  weight: ["400"],
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: "Hotel Avangarda",
  description: "Hotel Avangarda - Różan",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${alata.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar lang={lang} dict={dict} />
        {children}
        <Footer lang={lang} dict={dict} />
      </body>
      <SanityLive />
    </html>
  );
}
