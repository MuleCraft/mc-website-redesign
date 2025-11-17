import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    image: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/main/About/1.jpg?ref_type=heads",
    company: "Accion Labs",
    description: "Accion Labs is a global technology services firm with specialized focus on servicing enterprise and technology firms in the emerging technologies such as Web 2.0, SAAS, Cloud, eBusiness, open-source and BI/DW.",
    testimonial: "MuleCraft is a top-notch provider of MuleSoft services, offering exceptional solutions for seamless integration. Their expertise and commitment to delivering the best MuleSoft services set them apart.",
  },
  {
    id: 2,
    image: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/main/About/2.jpg?ref_type=heads",
    company: "NVIDIA",
    description: "Nvidia designs and sells GPUs for gaming, cryptocurrency mining, and professional applications, as well as chip systems for use in vehicles, robotics, and other tools.",
    testimonial: "We assist NVIDIA in integrating their APIs with their partner systems, facilitating seamless data exchange and enabling them to leverage their technologies effectively.",
  },
  {
    id: 3,
    image: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/About/4.jpg?ref_type=heads",
    company: "Tekistic IT Services",
    description: "Tekistic IT Service is a global Information solution & service company enabling large corporations by innovative development, support services across technologies",
    testimonial: "We collaborate with Tekistic IT Services to integrate their APIs with third-party platforms, enabling them to enhance their service offerings, streamline operations, and drive business growth.",
  },
];

const OnclickCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Real customers. Real success.
          </h2>
        </div>
        
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
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                      {/* Company Card */}
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
                        style={{
                          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.company}
                          className="w-full h-64 object-cover"
                          loading="lazy"
                        />
                        <div className="p-6">
                          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3">
                            {testimonial.company}
                          </h3>
                          <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
                            {testimonial.description}
                          </p>
                        </div>
                      </div>

                      {/* Testimonial Card - Desktop Only */}
                      <div className="hidden md:flex items-center">
                        <div className="bg-gradient-to-br from-[#E9F7FF] to-[#D4E8F2] rounded-lg p-6 lg:p-8 w-full"
                          style={{
                            boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
                          }}
                        >
                          <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                            {testimonial.testimonial}
                          </p>
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
            {testimonials.map((_, index) => (
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
    </section>
  );
};

export default OnclickCarousel;

