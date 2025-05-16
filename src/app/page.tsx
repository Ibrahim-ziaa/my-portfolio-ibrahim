import HomeSection from "@/components/sections/home-section";
import GradientBackground from "@/components/utils/gradient-background";

export default function Home() {
  return (
    <GradientBackground>
      <main className="relative min-h-screen">
        <HomeSection />
      </main>
    </GradientBackground>
  );
}
