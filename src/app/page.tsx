import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Reels from "@/components/Reels";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getPortfolioItems, getReelItems, getSiteContent } from "@/lib/content";

export default function Home() {
  const content = getSiteContent();
  const portfolioItems = getPortfolioItems();
  const reelItems = getReelItems();

  return (
    <>
      <Navigation />
      <main>
        <Hero content={content} />
        <Brands content={content} />
        <Stats content={content} />
        <About content={content} />
        <Portfolio items={portfolioItems} />
        <Reels items={reelItems} />
        <Testimonials content={content} />
        <Pricing content={content} />
        <Contact content={content} />
      </main>
      <Footer />
    </>
  );
}
