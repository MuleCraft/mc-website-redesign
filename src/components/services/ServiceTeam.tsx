import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ServiceTeamProps {
  image?: string;
  title?: string;
  description1?: string;
  description2?: string;
  buttonText?: string;
  buttonLink?: string;
}

const ServiceTeam: React.FC<ServiceTeamProps> = ({
  image = "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/serviceTeamBannerThumb.svg?ref_type=heads",
  title = "Unveiling the MuleSoft Maestros",
  description1 = "MuleCraft's exceptional team of MuleSoft developers combines their expertise and ingenuity to deliver seamless integration solutions, revolutionizing the world of enterprise connectivity.",
  description2 = "With their mastery of MuleSoft's cutting-edge technologies, MuleCraft's developers craft innovative solutions that propel businesses forward with unmatched efficiency and agility.",
  buttonText = "Our Team",
  buttonLink = "/team"
}) => {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center items-center order-2 md:order-1">
            <img
              src={image}
              alt="Service Team"
              className="w-full max-w-[600px] h-auto object-contain"
              loading="lazy"
            />
          </div>
          {/* Content */}
          <div className="flex flex-col gap-6 md:gap-8 order-1 md:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              {title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
              {description1}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
              {description2}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={buttonLink}>
                <Button className="bg-white text-black hover:bg-white/90 px-6 py-3 text-base font-semibold rounded-lg">
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTeam;

