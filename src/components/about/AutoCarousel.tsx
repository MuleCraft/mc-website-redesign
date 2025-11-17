import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Mule-b2b-integration",
    description: "With Mulesoft's integration tools, we offer seamless connectivity and data flow between various systems, applications, and APIs to achieve enhanced agility, efficiency, and scalability.",
    image: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/About/mule.svg",
    link: "/mule-b2b-integration",
  },
  {
    id: 2,
    title: "Mule-4-migration",
    description: "Migration to Mule-4 empowers businesses to leverage the latest features, security enhancements, and industry best practices, paving the way for improved efficiency and future-proof integration solutions.",
    image: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/About/aboutSlide2.svg?ref_type=heads",
    link: "/mule-4-migration",
  },
  {
    id: 3,
    title: "Mulesoft-development",
    description: "To enable robust integration and streamlining complex workflows, we excel in crafting APIs, thus empowering firms to accelerate innovation, improve customer experiences, and drive digital transformation.",
    image: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/About/aboutSlide3.svg?ref_type=heads",
    link: "/mulesoft-development",
  },
];

const AutoCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
        <div className="relative">
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Left Arrow - Desktop Only */}
            <button
              onClick={handlePrevSlide}
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Carousel Content */}
            <div className="flex-1 overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {services.map((service) => (
                  <div key={service.id} className="min-w-full flex-shrink-0">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300"
                      style={{
                        boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Content */}
                        <div className="p-6 lg:p-8 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4">
                              {service.title}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed hidden md:block">
                              {service.description}
                            </p>
                          </div>
                          <div className="mt-6">
                            <Link to={service.link}>
                              <Button 
                                variant="outline" 
                                className="border-2 border-white/20 text-white hover:bg-white/10 px-6 py-3 text-base font-semibold rounded-lg"
                              >
                                Explore
                              </Button>
                            </Link>
                          </div>
                        </div>

                        {/* Image - Desktop Only */}
                        <div className="hidden md:block">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow - Desktop Only */}
            <button
              onClick={handleNextSlide}
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Background */}
      <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-b from-[#E9F7FF]/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default AutoCarousel;

