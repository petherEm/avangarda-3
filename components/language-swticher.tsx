"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function LanguageSwitcher() {
  const pathname = usePathname();

  const languages = [
    { code: "pl", name: "PL" },
    { code: "en", name: "EN" },
  ];

  // Remove the current locale from the pathname
  const currentLocale = pathname.split("/")[1];
  const pathnameWithoutLocale = pathname.replace(`/${currentLocale}`, "");

  // Find the language to switch to (the non-selected language)
  const targetLanguage = languages.find((lang) => lang.code !== currentLocale);

  // If no target language is found (shouldn't happen with two languages), return null
  if (!targetLanguage) return null;

  return (
    <Link
      href={`/${targetLanguage.code}${pathnameWithoutLocale}`}
      className="px-4 py-2 font-alata text-white"
    >
      {targetLanguage.name}
    </Link>
  );
}
