import { HeroCarousel } from "@/components/HeroCarousel";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import WhyUs from "@/components/services/WhyUs";
import WhyMulesoft from "@/components/services/WhyMulesoft";
import ServiceTeam from "@/components/services/ServiceTeam";
import BlogCards from "@/components/services/BlogCards";

const MulesoftExpertise = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroCarousel />
      
      {/* Hero Banner Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center items-center order-2 md:order-1">
              <img
                src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/expertiseBannerThumb1.webp?ref_type=heads"
                alt="MuleSoft Expertise"
                className="w-full max-w-[600px] h-auto object-contain"
                loading="lazy"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col gap-6 md:gap-8 order-1 md:order-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-white">
                Future-Proof Your Business to Stay Ahead of the Curve.
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                We take pride in delivering the best MuleSoft consulting
                services, offering unrivaled expertise in integration strategy,
                implementation, and optimization. With our proven track record
                of success, we empower businesses to achieve seamless
                connectivity, maximize efficiency, and unlock their full
                potential in today's digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-black hover:bg-white/90 px-6 py-3 text-base font-semibold rounded-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <WhyUs />

      {/* Second Banner Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                Comprehensive Expertise in MuleSoft's Tools
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                We proceed a thorough understanding of your business objectives
                and IT landscape to design an effective integration strategy
                using MuleSoft. We provide expert guidance and support in
                implementing MuleSoft's integration platform, tailored to meet
                the unique needs of businesses, ensuring seamless integration,
                optimized workflows, and accelerated digital transformation. We
                also ensure seamless implementation, optimization, and ongoing
                support for clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    className="border-2 border-white/20 text-white hover:bg-white/10 px-6 py-3 text-base font-semibold rounded-lg"
                  >
                    Book Demo
                  </Button>
                </Link>
              </div>
            </div>
            {/* Image */}
            <div className="flex justify-center items-center order-1 md:order-2">
              <img
                src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/expertiseBannerThumb2.webp?ref_type=heads"
                alt="MuleSoft Tools Expertise"
                className="w-full max-w-[600px] h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why MuleSoft Section */}
      <WhyMulesoft />

      {/* Service Team Section */}
      <ServiceTeam />

      {/* Blog Cards Section */}
      <BlogCards />

      {/* Clients Section */}
      <ReviewsCarousel />

      <Footer />
    </div>
  );
};

export default MulesoftExpertise;
