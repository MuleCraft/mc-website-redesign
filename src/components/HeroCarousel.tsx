import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const slideData = [
  {
    headline: 'Empowering Your Digital Connectivity with MuleSoft Mastery!',
    subheadline: 'Connect everything with one platform for Integration, Automation, API, Data, and AI Management.',
  },
  {
    headline: '1000+ integrations delivering value',
    subheadline: 'Join hundreds of organizations worldwide who trust MuleCraft for their MuleSoft integration journey.',
  },
  {
    headline: 'Transform your business with expert MuleSoft consulting',
    subheadline: 'Discover how MuleCraft delivers integration excellence and drives measurable business outcomes.',
  },
  {
    headline: 'MuleCraft: Your Trusted MuleSoft Partner',
    subheadline: 'Comprehensive consulting services for integration strategies, optimization, and best practices.',
  },
  {
    headline: 'Accelerate your digital transformation with MuleSoft',
    subheadline: 'Leverage our expertise to build scalable, efficient integrations that drive innovation and growth.',
  },
];

const logoData = [
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/ServiceNow-Logo-Overlay-92.svg',
    alt: 'ServiceNow Logo',
    width: 140,
    height: 36,
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/cisco-logo-dark-93.svg',
    alt: 'Cisco Logo',
    width: 80,
    height: 42,
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/Moderna-Logo-94.svg',
    alt: 'Moderna Logo',
    width: 140,
    height: 30,
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/Cargill_logo-95.svg',
    alt: 'Cargill Logo',
    width: 130,
    height: 36,
  },
  {
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/Alaska_Airlines_logo-96.svg',
    alt: 'Alaska Airlines Logo',
    width: 160,
    height: 18,
  },
];

const AUTOPLAY_INTERVAL = 5000;

export const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slideData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slideData.length) % slideData.length);
  }, []);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  return (
    <>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      <div className="bg-white">
        <section className="relative overflow-hidden bg-gradient-to-r from-[#E6F2F8] via-[#D4E8F2] to-[#C8E3F0] text-[#002144] [border-bottom-left-radius:50%_100px] [border-bottom-right-radius:50%_100px]">
          {/* Navigation integrated into hero section */}
          <nav className="container mx-auto max-w-[1400px] px-6 lg:px-8 pt-6 pb-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <img 
                  src="/mulecraftlogo.svg" 
                  alt="MuleCraft Logo" 
                  className="h-10 w-auto"
                />
              </div>
              
              <div className="hidden md:flex items-center gap-8">
                <a href="#about" className="text-[#002144]/80 hover:text-[#002144] transition-colors text-[15px] font-medium">About</a>
                <a href="#services" className="text-[#002144]/80 hover:text-[#002144] transition-colors text-[15px] font-medium">Services</a>
                <a href="#mulesoft" className="text-[#002144]/80 hover:text-[#002144] transition-colors text-[15px] font-medium">MuleSoft</a>
                <a href="#salesforce" className="text-[#002144]/80 hover:text-[#002144] transition-colors text-[15px] font-medium">Salesforce</a>
                <a href="#blog" className="text-[#002144]/80 hover:text-[#002144] transition-colors text-[15px] font-medium">Blog</a>
              </div>
              
              <div className="flex items-center gap-3">
                <Button variant="ghost" className="hidden md:flex text-[#002144] hover:bg-[#002144]/10 border border-[#002144]/30">Contact Us</Button>
                <Button className="hidden md:flex bg-[#002144] text-white hover:bg-[#002144]/90 font-semibold">Book Demo</Button>
                <Button variant="ghost" size="icon" className="md:hidden text-[#002144] hover:bg-[#002144]/10">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </nav>
          
          <div className="container relative mx-auto max-w-[1400px] px-6 py-12 md:py-16 lg:py-20 lg:pl-16 lg:pr-16">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="relative z-10 flex flex-col justify-center text-center lg:text-left pr-0 lg:pr-4">
                <div className="relative min-h-[180px] md:min-h-[160px] lg:min-h-[200px] mb-8 overflow-hidden">
                  {slideData.map((slide, index) => (
                    <div
                      key={index}
                      role="tabpanel"
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                      aria-hidden={activeIndex !== index}
                    >
                      <h1 className="font-bold text-[32px] leading-tight md:text-4xl lg:text-[44px] lg:leading-[1.2] text-[#002144]">
                        {slide.headline}
                      </h1>
                      <p className="mx-auto mt-4 max-w-xl text-base text-[#002144]/80 lg:mx-0 lg:text-lg lg:leading-[1.5]">
                        {slide.subheadline}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative z-20 mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <a
                    href="#"
                    className="inline-block whitespace-nowrap rounded-full bg-[#002144] px-8 py-3.5 text-base font-semibold text-white transition-transform hover:scale-105"
                  >
                    Watch demo
                  </a>
                  <a
                    href="#"
                    className="inline-block whitespace-nowrap rounded-full border-2 border-[#002144] bg-transparent px-8 py-3.5 text-base font-semibold text-[#002144] transition-colors hover:bg-[#002144]/10"
                  >
                    Start free trial
                  </a>
                </div>
              </div>

              <div className="relative hidden w-full lg:block">
                <div className="float-animation">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/images/boomi-hero-brand-display-16.png"
                    alt="Abstract 3D sphere with floating bubbles and a device"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center justify-center gap-4 lg:flex">
              {slideData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${activeIndex === index ? 'bg-[#002144]/60' : 'bg-[#002144]/40 hover:bg-[#002144]/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              <button onClick={togglePause} className="ml-2 text-[#002144]" aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}>
                {isPaused ? <Play className="h-4 w-4 opacity-80" /> : <Pause className="h-4 w-4 opacity-80" />}
              </button>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 hidden -translate-y-1/2 lg:flex h-10 w-10 items-center justify-center rounded-full bg-[#002144]/20 transition-opacity hover:bg-[#002144]/30 text-[#002144] z-30"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 hidden -translate-y-1/2 lg:flex h-10 w-10 items-center justify-center rounded-full bg-[#002144]/20 transition-opacity hover:bg-[#002144]/30 text-[#002144] z-30"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            
            <div className="mt-12 flex items-center justify-center gap-4 lg:hidden">
              <button onClick={prevSlide} aria-label="Previous slide" className="text-[#002144]">
                <ChevronLeft className="h-6 w-6 opacity-80" />
              </button>
              {slideData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${activeIndex === index ? 'bg-[#002144]/60' : 'bg-[#002144]/40 hover:bg-[#002144]/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              <button onClick={nextSlide} aria-label="Next slide" className="text-[#002144]">
                <ChevronRight className="h-6 w-6 opacity-80" />
              </button>
              <button onClick={togglePause} className="ml-2 text-[#002144]" aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}>
                {isPaused ? <Play className="h-5 w-5 opacity-80" /> : <Pause className="h-5 w-5 opacity-80" />}
              </button>
            </div>
          </div>
        </section>
        <div className="bg-white">
          <div className="container mx-auto flex h-auto min-h-[80px] max-w-[1240px] flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 py-4 md:h-[100px] md:flex-nowrap md:justify-around md:py-0">
            {logoData.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto max-h-[36px] w-auto max-w-[180px] object-contain grayscale transition duration-300 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
