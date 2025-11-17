import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const DigibeeTeam = () => {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center items-center order-2 md:order-1">
            <img
              src="/digibeePartnerThumb2.webp"
              alt="Digibee Team"
              className="w-full max-w-[600px] h-auto object-contain"
              loading="lazy"
            />
          </div>
          {/* Content */}
          <div className="flex flex-col gap-6 md:gap-8 order-1 md:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              Architects of Versatile Connectivity
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
              Our integration experts sculpt seamless collaboration, transforming complexity into cohesive solutions.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
              Crafting pathways of dynamic connectivity, our integration experts, armed with Digibee expertise, redefine versatility in every solution. From complexity to cohesion, they architect a network that adapts and thrives.
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

export default DigibeeTeam;

