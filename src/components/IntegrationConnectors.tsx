export const IntegrationConnectors = () => {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: '#002144' }}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-x-12">
          <div className="flex-shrink-0 lg:w-2/5 text-center lg:text-left z-10 relative mb-8 lg:mb-0">
            <h2 className="text-[24px] lg:text-[28px] font-bold text-white leading-[1.3] max-w-[500px] mx-auto lg:mx-0">
              Effortlessly integrate all your apps and data sources with MuleSoft, SnapLogic, Digibee, and WSO2
            </h2>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block bg-white text-[#002144] font-semibold px-6 py-3 rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-sm"
              >
                Explore all
              </a>
            </div>
          </div>
          <div className="flex-grow lg:w-3/5 mt-8 lg:mt-0 relative flex items-center justify-center">
            <div className="relative w-full max-w-[400px] mx-auto">
              <img
                src="/icimage.webp"
                alt="Integration connectors visualization"
                className="w-full h-auto max-h-[300px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
