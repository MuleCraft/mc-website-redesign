const profileImages = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/icons/Sales-Profile-Image-1-6.jpg", alt: "Sales expert 1" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/icons/Sales-Profile-Image-2-7.jpg", alt: "Sales expert 2" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/icons/Sales-Profile-Image-3-5.jpg", alt: "Sales expert 3" },
];

export const FinalCta = () => {
  return (
    <section className="mx-auto max-w-[1400px] px-4 lg:px-8 mb-12">
      <div className="bg-gradient-to-r from-[#4C3FE0] to-[#7C3FE0] rounded-3xl py-16 px-4 lg:px-8">
        <div className="max-w-[900px] mx-auto flex flex-col items-center text-center">
          <h2 className="font-bold text-white text-[2rem] lg:text-[2.5rem] leading-[1.2] mb-4">
            Connect everything to achieve anything.™
          </h2>
          <p className="text-white/90 text-[1.125rem] lg:text-[1.25rem] leading-[1.5] mb-8">
            Join 25K+ organizations already unlocking possibility with Boomi.
          </p>
          
          <a 
            href="#" 
            className="group inline-flex items-center bg-white text-[#6C4FE0] rounded-full py-3 lg:py-[1.125rem] pl-2 pr-6 lg:pl-3 lg:pr-12 transition-all duration-300 ease-in-out hover:shadow-[0_8px_32px_rgba(255,255,255,0.4)] hover:scale-105"
          >
            <div className="flex shrink-0 -space-x-3 lg:-space-x-4">
              {profileImages.map((img, index) => (
                <div key={index} className="relative transition-transform duration-300 ease-in-out hover:scale-110">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="rounded-full border-[3px] border-white w-12 h-12 lg:w-16 lg:h-16 object-cover"
                    style={{ zIndex: index + 1 }}
                  />
                </div>
              ))}
            </div>
            <span className="ml-3 lg:ml-4 font-semibold text-base lg:text-[1.125rem]">
              Talk to an expert
            </span>
          </a>
          <p className="text-white/80 text-base mt-6">
            The #1 intelligent iPaaS for digital transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

