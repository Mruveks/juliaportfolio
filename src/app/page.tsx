import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Reels from "@/components/Reels";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getPortfolioItems, getReelItems } from "@/lib/content";

export default function Home() {
  const portfolioItems = getPortfolioItems();
  const reelItems = getReelItems();

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Brands />
        <Stats />
        <About />
        <Portfolio items={portfolioItems} />
        <Reels items={reelItems} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
