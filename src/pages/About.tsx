import { HeroCarousel } from "@/components/HeroCarousel";
import { Footer } from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import OnclickCarousel from "@/components/about/OnclickCarousel";
import AboutBody from "@/components/about/AboutBody";
import AboutService from "@/components/about/AboutService";
import AutoCarousel from "@/components/about/AutoCarousel";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroCarousel />
      <AboutHero />
      <OnclickCarousel />
      <AboutBody />
      <AboutService />
      <AutoCarousel />
      <Footer />
    </div>
  );
};

export default About;

