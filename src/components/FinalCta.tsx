export const FinalCta = () => {
  return (
    <section className="relative bg-black py-12 sm:py-16 overflow-hidden">
      {/* Blue gradient effect at the top */}
      <div className="absolute top-0 left-0 right-0 h-32 z-[1] bg-gradient-to-b from-[#00A1FF]/30 via-[#0080FF]/20 to-transparent"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/fi1.png"
          alt="MuleCraft background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white mb-3 sm:mb-4 px-2">
            Empowering Your Digital Connectivity with MuleSoft Mastery!
          </h2>
          <p className="mx-auto max-w-3xl text-sm sm:text-base text-white/80 leading-relaxed mb-6 sm:mb-8 px-4">
            Connect everything with one platform for Integration, Automation, API, Data, and AI Management. Join hundreds of organizations worldwide who trust MuleCraft for their MuleSoft integration journey.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:scale-105 w-full sm:w-auto"
            >
              Watch demo
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:scale-105 w-full sm:w-auto"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

