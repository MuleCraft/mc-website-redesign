import { useState, useEffect, useRef } from "react";

type ProductId = 'snpmapper' | 'mulesoftlp' | 'ramlify' | 'goose';

interface Product {
  id: ProductId;
  label: string;
  title: string;
  description: string;
  features: {
    label: string;
    description: string;
  }[];
  capabilities: string[];
  imageSrc: string;
  imageAlt: string;
  gradient: string;
  link: string;
  techStack: string;
  processOfRelease: string;
}

const products: Product[] = [
  {
    id: 'snpmapper',
    label: 'SnapMapper',
    title: 'SnapMapper',
    description: 'A SnapLogic playground providing a safe three-panel interface for testing and validating integration scripts with features like import/export, guided workflows, and real-time error handling.',
    features: [
      {
        label: 'Three-Panel Interface',
        description: 'Safe testing environment with Payload, Script, and Output panels for validation.',
      },
      {
        label: 'Import/Export',
        description: 'Easily import and export your integration scripts and configurations.',
      },
      {
        label: 'Real-Time Error Handling',
        description: 'Get instant feedback and error detection while developing your SnapLogic workflows.',
      },
    ],
    capabilities: ['Import/Export', 'Guided Workflows', 'Error Handling', 'Script Validation'],
    imageSrc: '/csi1.png',
    imageAlt: 'SnapMapper product interface',
    gradient: 'from-[#00A1FF]/20 to-[#0066CC]/20',
    link: 'https://snaplogic.playground.mulecraft.in/',
    techStack: 'Vite React Javascript, Chakra UI (No Backend)',
    processOfRelease: 'Released globally and showcased at the SnapLogic North America Meetup. Conducted live demos and feedback sessions before market rollout. Next we have planned for internal chatbot.',
  },
  {
    id: 'ramlify',
    label: 'RAMLify',
    title: 'RAMLify',
    description: 'An AI-based assistant that converts natural language to RAML specifications, helping developers design and optimize APIs faster with Anypoint integration.',
    features: [
      {
        label: 'Natural Language to RAML',
        description: 'Convert your API requirements from natural language to RAML specifications instantly.',
      },
      {
        label: 'Anypoint Integration',
        description: 'Seamlessly integrate with MuleSoft Anypoint Platform for faster API development.',
      },
      {
        label: 'AI-Powered Optimization',
        description: 'Get intelligent suggestions to optimize and improve your RAML specifications.',
      },
    ],
    capabilities: ['Natural Language Processing', 'RAML Generation', 'Anypoint Integration', 'API Optimization'],
    imageSrc: '/csi2.png',
    imageAlt: 'RAMLify product interface',
    gradient: 'from-[#00A1FF]/20 to-[#0066CC]/20',
    link: 'https://ramlify-flow-agent.lovable.app/',
    techStack: 'Vite React TypeScript, Shadcn, AI (Mistral), Supabase',
    processOfRelease: 'Released internally to MuleSoft developers; tested in production use cases to reduce RAML development time.',
  },
  {
    id: 'mulesoftlp',
    label: 'MuleSoftLP',
    title: 'MuleSoft Learning Platform',
    description: 'A learning and integration platform offering AI-powered task generation, transformation playground, and RAML assistant modules with progress tracking.',
    features: [
      {
        label: 'AI-Powered Task Generation',
        description: 'Generate personalized DataWeave challenges and learning tasks powered by AI.',
      },
      {
        label: 'Transformation Playground',
        description: 'Practice data transformations in a safe, interactive environment with real-time feedback.',
      },
      {
        label: 'Progress Tracking',
        description: 'Track your learning journey and monitor your progress across different modules.',
      },
    ],
    capabilities: ['AI Task Generation', 'Transformation Playground', 'RAML Assistant', 'Progress Tracking'],
    imageSrc: '/csi3.png',
    imageAlt: 'MuleSoftLP product interface',
    gradient: 'from-[#00A1FF]/20 to-[#0066CC]/20',
    link: 'https://mulesoft.dev/',
    techStack: 'Vite React TypeScript, Shadcn, Supabase, AI (Deepseek)',
    processOfRelease: 'Released publicly with growing adoption (400+ users). Next release will include a MuleSoft connection learning module.',
  },
  {
    id: 'goose',
    label: 'Goose',
    title: 'Deploy, Scale Dominate',
    description: 'The ultimate DevOps platform that transforms how you build, deploy, and scale applications. Zero complexity, maximum impact.',
    features: [
      {
        label: 'One-Click Deploy',
        description: 'Deploy your applications with a single click, eliminating complex deployment processes.',
      },
      {
        label: 'Auto-Scale',
        description: 'Automatically scale your applications based on demand without manual intervention.',
      },
      {
        label: 'Enterprise Security',
        description: 'Built-in enterprise-grade security features to protect your applications and data.',
      },
    ],
    capabilities: ['One-Click Deploy', 'Auto-Scale', 'Enterprise Security', 'Zero Complexity'],
    imageSrc: '/csi4.png',
    imageAlt: 'Goose DevOps platform interface',
    gradient: 'from-[#00A1FF]/20 to-[#0066CC]/20',
    link: 'https://goosed.in/',
    techStack: 'DevOps Platform',
    processOfRelease: 'Enterprise DevOps platform for seamless deployment and scaling.',
  },
];

const ProductCard = ({ product, isActive }: { product: Product; isActive: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.3,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative h-full overflow-hidden backdrop-blur-[16px] p-4 sm:p-5 md:p-6 lg:p-8 xl:p-12 transition-all duration-500 min-h-0 sm:min-h-[600px] md:min-h-[700px] ${
        isVisible ? 'opacity-100' : 'opacity-50'
      }`}
      style={{ 
        borderRadius: '2.4rem',
        background: isActive 
          ? 'linear-gradient(180deg, rgba(23, 23, 23, 0.3) 0%, rgba(23, 23, 23, 0.3) 60%, rgba(0, 161, 255, 0.2) 80%, rgba(0, 128, 255, 0.3) 100%)'
          : 'rgba(23, 23, 23, 0.3)',
        boxShadow: isActive 
          ? `rgba(255, 255, 255, 0.15) -1px 0px 0px 0px inset,
             rgba(255, 255, 255, 0.15) 0px -1px 0px 0px inset,
             rgb(255, 255, 255) -2px -2px 2px -3px inset,
             rgba(255, 255, 255, 0.3) 0px 1px 0px 0px inset,
             rgba(255, 255, 255, 0.2) 1px 0px 0px 0px inset,
             rgb(255, 255, 255) 4px 4px 1px -5px inset,
             rgba(0, 0, 0, 0.3) 0px 4px 12px 0px inset,
             rgba(0, 0, 0, 0.2) 0px 2px 6px 0px inset,
             rgba(0, 0, 0, 0.01) 0px 0px 0px 2px inset,
             rgba(0, 0, 0, 0.5) 8px -8px 24px 0px inset`
          : `rgba(255, 255, 255, 0.15) -1px 0px 0px 0px inset,
             rgba(255, 255, 255, 0.15) 0px -1px 0px 0px inset,
             rgb(255, 255, 255) -2px -2px 2px -3px inset,
             rgba(255, 255, 255, 0.3) 0px 1px 0px 0px inset,
             rgba(255, 255, 255, 0.2) 1px 0px 0px 0px inset,
             rgb(255, 255, 255) 4px 4px 1px -5px inset,
             rgba(0, 0, 0, 0.3) 0px 4px 12px 0px inset,
             rgba(0, 0, 0, 0.2) 0px 2px 6px 0px inset,
             rgba(0, 0, 0, 0.01) 0px 0px 0px 2px inset`
      }}
    >
      <div className="relative z-10 grid h-full grid-cols-1 items-start gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2">
        <div className="flex flex-col">
          <h3 className="font-display text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-white mb-2 sm:mb-3 md:mb-4">{product.title}</h3>
          <p className="text-white/70 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8 leading-relaxed">{product.description}</p>
          
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {product.features.map((feature, index) => (
              <div key={index}>
                <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-white/60 mb-1 sm:mb-2">
                  {feature.label}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-4 sm:mt-6 md:mt-8">
            <h4 className="font-body text-[10px] sm:text-xs md:text-sm text-white/60 mb-2 sm:mb-3 uppercase tracking-wider">Featured capabilities</h4>
            <div className="flex flex-wrap gap-x-1.5 sm:gap-x-2 md:gap-x-3 gap-y-1.5 sm:gap-y-2">
              {product.capabilities.map((cap) => (
                <span key={cap} className="text-[10px] sm:text-xs md:text-sm text-white/70 bg-white/5 px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-md">
                  {cap}
                </span>
              ))}
            </div>
          </div>
          
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-6 md:mt-8 inline-block rounded-lg bg-gradient-to-r from-[#00A1FF] to-[#0066CC] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base font-medium text-white transition-all hover:from-[#0080CC] hover:to-[#0052A3] self-start"
          >
            Learn more
          </a>
        </div>
        
        <div className="flex items-center justify-center lg:sticky lg:top-32">
          <div className="relative w-full max-w-lg">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CaseStudyCarousel = () => {
  const [activeProduct, setActiveProduct] = useState<ProductId>('snpmapper');
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const leftSidebarRef = useRef<HTMLDivElement>(null);
  const stickyWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let maxRatio = 0;
      let maxIndex = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1 && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            maxIndex = index;
          }
        }
      });

      if (maxRatio > 0.2) {
        setActiveProduct(products[maxIndex].id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleHeaderClick = (productId: ProductId) => {
    setActiveProduct(productId);
    const index = products.findIndex((p) => p.id === productId);
    const cardElement = cardRefs.current[index];
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Calculate total height for sticky wrapper dynamically
  useEffect(() => {
    const calculateTotalHeight = () => {
      let total = 0;
      let allCardsRendered = true;
      
      cardRefs.current.forEach((ref, index) => {
        if (ref && ref.offsetHeight > 0) {
          const cardHeight = ref.offsetHeight;
          total += cardHeight;
          // Add spacing between cards (space-y-8 = 32px)
          if (index < cardRefs.current.length - 1) {
            total += 32;
          }
        } else {
          allCardsRendered = false;
        }
      });
      
      // If all cards are rendered, use calculated height, otherwise use fallback
      if (allCardsRendered && total > 0) {
        return total;
      }
      // Fallback: 4 products * 700px + 3 gaps * 32px = 2896px
      return products.length * 700 + (products.length - 1) * 32;
    };

    const updateHeight = () => {
      if (stickyWrapperRef.current) {
        const height = calculateTotalHeight();
        stickyWrapperRef.current.style.height = `${height}px`;
      }
    };

    // Initial calculation with multiple attempts to ensure cards are rendered
    updateHeight();
    
    // Recalculate after delays to catch cards as they render
    const timeouts = [
      setTimeout(updateHeight, 100),
      setTimeout(updateHeight, 300),
      setTimeout(updateHeight, 500),
    ];

    // Recalculate on window resize
    window.addEventListener('resize', updateHeight);
    
    // Use ResizeObserver to watch for card size changes
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });
    
    cardRefs.current.forEach((ref) => {
      if (ref) {
        resizeObserver.observe(ref);
      }
    });

    return () => {
      window.removeEventListener('resize', updateHeight);
      timeouts.forEach(timeout => clearTimeout(timeout));
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="bg-black py-12 sm:py-16 md:py-24 lg:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-2">
          Built for what you're building
        </h2>
        
        {/* Mobile Tabs - Display First on Mobile */}
        <div className="mb-6 sm:mb-8 border-b border-white/10 lg:hidden overflow-x-auto">
          <div className="mx-auto flex min-w-max justify-center px-4" role="tablist">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => handleHeaderClick(product.id)}
                className={`relative h-10 sm:h-12 px-3 sm:px-6 font-body text-xs sm:text-sm md:text-base font-medium transition-colors duration-300 whitespace-nowrap ${
                  activeProduct === product.id
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                {product.label}
                {activeProduct === product.id && (
                  <span className="absolute bottom-[-1.5px] left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#00A1FF] to-[#0066CC]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Content - Display Second on Mobile */}
        <div className="lg:hidden relative mb-8" style={{ minHeight: '400px' }}>
          {products.map((product) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                activeProduct === product.id
                  ? 'opacity-100 relative z-10'
                  : 'pointer-events-none opacity-0 absolute z-0'
              }`}
            >
              <ProductCard product={product} isActive={activeProduct === product.id} />
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 relative">
          {/* Left Sidebar - Fixed */}
          <div className="lg:col-span-3">
            <div
              ref={stickyWrapperRef}
              className="relative"
              style={{ minHeight: `${products.length * 700 + (products.length - 1) * 32}px` }}
            >
              <div
                ref={leftSidebarRef}
                className="sticky"
                style={{ top: '128px' }}
              >
                <div className="space-y-2">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleHeaderClick(product.id)}
                      role="tab"
                      aria-selected={activeProduct === product.id}
                      tabIndex={activeProduct === product.id ? 0 : -1}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 relative ${
                        activeProduct === product.id
                          ? 'text-white font-semibold'
                          : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                      }`}
                    >
                      <p className="text-xs uppercase tracking-wider font-medium relative">
                        <span className="relative inline-block">
                          {product.label}
                          {activeProduct === product.id && (
                            <span 
                              className="absolute bottom-[-8px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#00A1FF] to-[#0066CC] rounded-full"
                              style={{
                                boxShadow: '0 2px 4px rgba(0, 161, 255, 0.3)'
                              }}
                            />
                          )}
                        </span>
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Scrollable Cards */}
          <div className="lg:col-span-9">
            <div className="space-y-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                >
                  <ProductCard product={product} isActive={activeProduct === product.id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
