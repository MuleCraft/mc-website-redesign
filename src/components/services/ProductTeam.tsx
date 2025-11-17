import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ProductTeam = () => {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center items-center order-2 md:order-1">
            <img
              src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/productTeamBannerThumb.svg?ref_type=heads"
              alt="Product Team"
              className="w-full max-w-[600px] h-auto object-contain"
              loading="lazy"
            />
          </div>
          {/* Content */}
          <div className="flex flex-col gap-6 md:gap-8 order-1 md:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              Craftsmen Designing the User Experience
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
              Our UI developers are the architects of digital experiences, crafting visually engaging and intuitive interfaces that captivate users.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
              Our full stack web developers, on the other hand, are the maestros behind the scenes, seamlessly integrating front-end elegance with back-end functionality to bring dynamic and responsive web solutions to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/team">
                <Button className="bg-white text-black hover:bg-white/90 px-6 py-3 text-base font-semibold rounded-lg">
                  Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTeam;

