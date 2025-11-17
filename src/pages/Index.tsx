import { HeroCarousel } from "@/components/HeroCarousel";
import { AiIntegrationCta } from "@/components/AiIntegrationCta";
import { StatsSection } from "@/components/StatsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { CaseStudyCarousel } from "@/components/CaseStudyCarousel";
import { IntegrationConnectors } from "@/components/IntegrationConnectors";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroCarousel />
      {/* <AiIntegrationCta /> */}
      <StatsSection />
      <HowItWorks />
      <CaseStudyCarousel />
      {/* <IntegrationConnectors /> */}
      <ReviewsCarousel />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Index;
