import { useState, useEffect, useRef } from 'react';

const expertiseBlocks = [
  {
    tag: 'Our Expertise',
    headline: 'Powering the Future of Connected Experiences',
    description: 'MuleCraft blends integration, intelligence and modern engineering to build connected platforms. From MuleSoft and SnapLogic to React-based apps, we deliver scalable, high-performance solutions with exceptional user experiences.',
    gif: '/hiwb1.gif',
  },
  {
    tag: 'Smarter solutions',
    headline: 'Seamless Integrations, Smarter Connections',
    description: 'We combine automation, scalability and intelligent design to unify complex systems—ensuring seamless data flow, stronger connectivity and lasting digital transformation.',
    gif: '/hiwb2.gif',
  },
  {
    tag: 'Seamless solutions',
    headline: 'Transformative Business Solutions',
    description: 'Accelerate your digital growth with solutions built for scalability. Implement API gateways, orchestration patterns and real-time event processing to future-proof your enterprise architecture.',
    gif: '/hiwb3.gif',
  },
  {
    tag: 'Effortless solutions',
    headline: 'Integration Made Effortless',
    description: 'Achieve faster project turnaround with minimal technical overhead. Harness event-driven architecture, reusable connectors and micro services for agile integration delivery.',
    gif: '/hiwb4.gif',
  },
];

export const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the block with the highest intersection ratio that's currently in view
      let maxRatio = 0;
      let maxIndex = activeIndex;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = blockRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1 && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            maxIndex = index;
          }
        }
      });

      // Update if we found a block with significant intersection
      if (maxRatio > 0.15 && maxIndex !== activeIndex) {
        setActiveIndex(maxIndex);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    blockRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [activeIndex]);

  return (
    <>
      <style>{`
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(50px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @keyframes slideOutToLeft {
          0% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50px) scale(0.9);
          }
        }
        .gif-active {
          animation: slideInFromRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .gif-inactive {
          animation: slideOutToLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
      <section 
        ref={sectionRef}
        className="bg-black py-16 lg:py-20 relative"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Container with Left and Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative items-start">
            {/* Left Column - All Content Blocks Stacked Vertically */}
            <div className="lg:pr-8">
              {expertiseBlocks.map((block, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    blockRefs.current[index] = el;
                  }}
                  className={index === expertiseBlocks.length - 1 ? 'mb-0' : 'mb-16 lg:mb-20'}
                  style={{ minHeight: '450px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
                >
                  <div className="text-[#6C4FE0] font-bold text-sm tracking-[0.1em] uppercase mb-4">
                    {block.tag}
                  </div>
                  <h2 className="font-bold text-white text-3xl md:text-4xl lg:text-[44px] leading-tight mb-6">
                    {block.headline}
                  </h2>
                  <p className="text-lg text-white/70 leading-relaxed max-w-[600px]">
                    {block.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column - Sticky Wrapper that contains the sticky container */}
            <div className="hidden lg:block">
              {/* This wrapper ensures the sticky container has enough space to stick */}
              <div 
                ref={stickyWrapperRef}
                className="relative"
                style={{ 
                  height: `${(expertiseBlocks.length * 450) + ((expertiseBlocks.length - 1) * 80)}px`
                }}
              >
                {/* Single Sticky Container - Stays fixed until all blocks complete */}
                <div 
                  className="sticky"
                  style={{ 
                    top: '60px',
                    height: '450px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    paddingTop: '0px'
                  }}
                >
                  {/* Single Container for All GIFs */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {expertiseBlocks.map((block, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 w-full h-full flex items-center justify-center ${
                          activeIndex === index
                            ? 'opacity-100 gif-active z-10'
                            : 'opacity-0 gif-inactive z-0 pointer-events-none'
                        }`}
                      >
                        <div className="relative w-full h-full max-w-[500px] mx-auto flex items-center justify-center">
                          <img
                            src={block.gif}
                            alt={block.headline}
                            className="w-full h-auto max-h-[450px] object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile GIF - Show below each content block */}
            <div className="lg:hidden">
              {expertiseBlocks.map((block, index) => (
                <div
                  key={index}
                  className="mb-12"
                >
                  <img
                    src={block.gif}
                    alt={block.headline}
                    className="w-full h-auto max-h-[400px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
    </>
  );
};
