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
    gradient: 'from-[#903BFF]/20 to-[#38BDF8]/20',
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
    gradient: 'from-[#A855F7]/20 to-[#16A374]/20',
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
    gradient: 'from-[#6C5CE7]/20 to-[#22C55E]/20',
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
    gradient: 'from-[#903BFF]/20 to-[#38BDF8]/20',
    link: 'https://goosed.in/',
    techStack: 'DevOps Platform',
    processOfRelease: 'Enterprise DevOps platform for seamless deployment and scaling.',
  },
];

const ProductCard = ({ product }: { product: Product }) => {
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
      className={`relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 md:p-12 backdrop-blur-xl transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-50'
      }`}
      style={{ minHeight: '700px' }}
    >
      <div className={`absolute inset-0 z-0 bg-gradient-to-br ${product.gradient}`} />
      
      <div className="relative z-10 grid h-full grid-cols-1 items-start gap-12 lg:grid-cols-2">
        <div className="flex flex-col">
          <h3 className="font-display text-4xl font-medium text-white mb-4">{product.title}</h3>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">{product.description}</p>
          
          <div className="space-y-6">
            {product.features.map((feature, index) => (
              <div key={index}>
                <p className="font-mono text-xs uppercase tracking-wider text-white/60 mb-2">
                  {feature.label}
                </p>
                <p className="text-base text-white/90 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h4 className="font-body text-sm text-white/60 mb-3 uppercase tracking-wider">Featured capabilities</h4>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {product.capabilities.map((cap) => (
                <span key={cap} className="text-sm text-white/70 bg-white/5 px-3 py-1 rounded-md">
                  {cap}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="mb-5">
              <h4 className="font-body text-xs text-white/60 mb-2 uppercase tracking-wider">Tech Stack</h4>
              <p className="text-sm text-white/80 leading-relaxed">{product.techStack}</p>
            </div>
            <div>
              <h4 className="font-body text-xs text-white/60 mb-2 uppercase tracking-wider">Process of Release</h4>
              <p className="text-sm text-white/80 leading-relaxed">{product.processOfRelease}</p>
            </div>
          </div>
          
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-[#6C4FE0] px-6 py-3 font-medium text-white transition-colors hover:bg-[#5a3fc7] self-start"
          >
            Learn more
          </a>
        </div>
        
        <div className="flex items-center justify-center lg:sticky lg:top-32">
          <div className="relative w-full max-w-lg">
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/20">
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
    <section className="bg-black py-24 sm:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-[56px] font-bold leading-tight text-white mb-16">
          Built for what you're building
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          {/* Left Sidebar - Fixed */}
          <div className="lg:col-span-3 hidden lg:block">
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
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeProduct === product.id
                          ? 'bg-white/10 text-white font-semibold'
                          : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                      }`}
                    >
                      <span className="text-base font-medium">{product.label}</span>
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
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="mt-12 mb-8 border-b border-white/10 lg:hidden">
          <div className="mx-auto flex max-w-md justify-center" role="tablist">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => handleHeaderClick(product.id)}
                className={`relative h-12 px-6 font-body text-base font-medium transition-colors duration-300 ${
                  activeProduct === product.id
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                {product.label}
                {activeProduct === product.id && (
                  <span className="absolute bottom-[-1.5px] left-0 right-0 h-[3px] rounded-full bg-[#6C4FE0]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Content */}
        <div className="lg:hidden relative" style={{ minHeight: '700px' }}>
          {products.map((product) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                activeProduct === product.id
                  ? 'opacity-100'
                  : 'pointer-events-none opacity-0'
              }`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
