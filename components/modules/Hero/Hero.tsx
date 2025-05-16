import { Suspense } from "react";
import { Container } from "@/components/container";
import HeroLoading from "./loading";

// Using async component for better streaming support
const VideoPlayer = (async () => {
  // Add a small delay to ensure smooth transition
  await new Promise((resolve) => setTimeout(resolve, 100));
  const VideoComponent = (await import("./video-player")).default;
  return <VideoComponent />;
})();

export default function Hero() {
  return (
    <Container className="relative h-screen w-full overflow-hidden">
      <Suspense fallback={<HeroLoading />}>{VideoPlayer}</Suspense>
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </Container>
  );
}
