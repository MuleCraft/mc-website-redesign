const AboutBody = () => {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Unlocking Integration Excellence and Data Transformation Capabilities
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3">
                Transforming Possibilities into Reality
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
                Transform your data and unleash its full potential.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3">
                Simplify, Optimize, and Scale
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
                Streamline your operations with powerful integration solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3">
                Building Innovation Through Expertise
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
                Experience seamless connectivity and optimized workflows.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/About/aboutBannerThumb2.svg"
              alt="Integration Excellence"
              className="w-full max-w-[600px] h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBody;

