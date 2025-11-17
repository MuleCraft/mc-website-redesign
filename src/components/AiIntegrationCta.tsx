export const AiIntegrationCta = () => {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl" style={{ backgroundColor: '#002144' }}>
          <div className="flex flex-col lg:flex-row lg:items-center px-4 sm:px-6 py-6 sm:py-8 lg:px-16 lg:py-10">
            <div className="lg:w-3/5 text-center lg:text-left">
              <h2 className="font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.2] mb-4 sm:mb-6">
                Fast-track integration and automation
              </h2>
              <p className="text-sm sm:text-base text-white/90 max-w-[550px] mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
                Unlock integration hyperproductivity with MuleCraft's expert MuleSoft, SnapLogic, Digibee, and WSO2 consulting services, helping you automate frictionless business processes with speed and reliability.
              </p>
              <div className="mt-6 sm:mt-8">
                <a
                  href="#"
                  className="inline-block bg-white font-semibold text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-10 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,255,255,0.3)]"
                  style={{ 
                    background: 'linear-gradient(to right, #00A1FF, #0066CC)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  Meet MuleCraft Solutions
                </a>
              </div>
            </div>
            <div className="mt-6 sm:mt-10 lg:mt-0 lg:w-2/5 lg:pl-10">
              <div className="relative">
                <img
                  src="/aipageimage.webp"
                  alt="Abstract illustration of MuleCraft integration capabilities"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
