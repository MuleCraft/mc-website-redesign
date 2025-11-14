import { Navigation } from "@/components/Navigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import { PlatformOverview } from "@/components/PlatformOverview";
import { AiIntegrationCta } from "@/components/AiIntegrationCta";
import { StatsSection } from "@/components/StatsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <PlatformOverview />
      <AiIntegrationCta />
      <StatsSection />
      <HowItWorks />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
