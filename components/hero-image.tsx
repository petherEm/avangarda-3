import { Container } from "@/components/container";
import Image from "next/image";

export default function HeroImage({ image, title }) {
  return (
    <div className="relative w-full h-screen">
      {/* Full screen background image */}
      <Image
        src={image}
        alt="Gallery hero background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Optional: Dark overlay for better text contrast */}

      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Content container */}
      <div className="relative h-full w-full flex items-end justify-start">
        <Container className="text-left bg-black/30 text-white z-10  p-4 md:p-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 px-10">
            {title}
          </h1>
        </Container>
      </div>
    </div>
  );
}
