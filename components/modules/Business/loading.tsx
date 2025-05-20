import Image from "next/image";

export default function HeroLoading() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/business-loading.png"
        alt="Hero background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={100}
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
