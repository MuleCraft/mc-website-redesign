import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Star } from 'lucide-react';

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
        <section className="relative overflow-hidden bg-gradient-to-r from-[#B8438C] to-[#8B3A8B] text-white [border-bottom-left-radius:50%_100px] [border-bottom-right-radius:50%_100px]">
          <div className="container relative mx-auto max-w-[1400px] px-6 py-20 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative z-10 flex flex-col justify-center text-center lg:text-left">
                <div className="relative min-h-[280px] md:min-h-[220px] lg:min-h-[320px]">
                  {slideData.map((slide, index) => (
                    <div
                      key={index}
                      role="tabpanel"
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                      aria-hidden={activeIndex !== index}
                    >
                      <h1 className="font-bold text-[40px] leading-tight md:text-5xl lg:text-[56px] lg:leading-[1.2]">
                        {slide.headline}
                      </h1>
                      <p className="mx-auto mt-6 max-w-xl text-lg text-white/90 lg:mx-0 lg:text-xl lg:leading-[1.5]">
                        {slide.subheadline}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <a
                    href="#"
                    className="inline-block whitespace-nowrap rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#8B3A8B] transition-transform hover:scale-105"
                  >
                    Watch demo
                  </a>
                  <a
                    href="#"
                    className="inline-block whitespace-nowrap rounded-full border-2 border-white bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Start free trial
                  </a>
                </div>

                <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
                  <div className="flex items-center text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-white/80">Trusted by leading enterprises worldwide</p>
                </div>
              </div>

              <div className="relative hidden w-full lg:block">
                <div className="float-animation">
                  <div className="relative w-full h-[600px] flex items-center justify-center">
                    <div className="absolute w-full max-w-md">
                      <div className="absolute -inset-4 bg-white/10 backdrop-blur-sm rounded-full"></div>
                      <div className="relative bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 bg-white/90 rounded-xl p-4 transform hover:scale-105 transition-transform">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">Integration</p>
                              <p className="text-sm text-gray-600">Seamless connectivity</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 bg-white/90 rounded-xl p-4 transform hover:scale-105 transition-transform">
                            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">Automation</p>
                              <p className="text-sm text-gray-600">AI-driven workflows</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 left-1/2 hidden -translate-x-1/2 items-center justify-center gap-4 lg:flex">
              {slideData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${activeIndex === index ? 'bg-white/60' : 'bg-white/40 hover:bg-white/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              <button onClick={togglePause} className="ml-2" aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}>
                {isPaused ? <Play className="h-4 w-4 opacity-80" /> : <Pause className="h-4 w-4 opacity-80" />}
              </button>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 hidden -translate-y-1/2 lg:flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition-opacity hover:bg-white/30"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 hidden -translate-y-1/2 lg:flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition-opacity hover:bg-white/30"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            <div className="mt-12 flex items-center justify-center gap-4 lg:hidden">
              <button onClick={prevSlide} aria-label="Previous slide">
                <ChevronLeft className="h-6 w-6 opacity-80" />
              </button>
              {slideData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${activeIndex === index ? 'bg-white/60' : 'bg-white/40 hover:bg-white/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              <button onClick={nextSlide} aria-label="Next slide">
                <ChevronRight className="h-6 w-6 opacity-80" />
              </button>
              <button onClick={togglePause} className="ml-2" aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}>
                {isPaused ? <Play className="h-5 w-5 opacity-80" /> : <Pause className="h-5 w-5 opacity-80" />}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
