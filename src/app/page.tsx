import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import MarqueeBar from "@/components/sections/marquee-bar";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Projects from "@/components/sections/projects-section";
import Skills from "@/components/sections/skills";
import UpworkSpotlight from "@/components/sections/upwork-spotlight";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBar />
        <About />
        <Services />
        <Projects />
        <Skills />
        <UpworkSpotlight />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
