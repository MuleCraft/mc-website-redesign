import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-white">
              Elevating Businesses with Inspiring Solutions : Explore Our Vision
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
              MuleCraft is the go-to partner for organizations seeking
              cutting-edge IT solutions and services that propel their
              growth and success. "Our vision" is to craft excellence, by
              being at the forefront of innovation. By leveraging our
              expertise, passion, and forward-thinking approach, we unlock
              new opportunities to achieve your strategic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/team">
                <Button className="bg-white text-black hover:bg-white/90 px-6 py-3 text-base font-semibold rounded-lg">
                  Our Team
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-white/20 text-white hover:bg-white/10 px-6 py-3 text-base font-semibold rounded-lg"
                >
                  Unlock Our Expertise
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/About/aboutBannerThumb1.svg"
              alt="About MuleCraft"
              className="w-full max-w-[600px] h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

