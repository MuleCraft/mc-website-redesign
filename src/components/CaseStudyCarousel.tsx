import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Stat = {
  value: string;
  label: string;
};

type Testimonial = {
  quote: string;
  author: string;
  title: string;
};

type CaseStudy = {
  tag: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  stats: Stat[];
  testimonial: Testimonial;
  tabLogo: string | null;
  tabLogoAlt: string;
  logoForImage: string;
};

const caseStudiesData: CaseStudy[] = [
  {
    tag: "ENTERPRISE",
    headline: "Enterprise Transforms Its Integration Process With MuleSoft",
    description: "A leading enterprise has automated its order-to-cash process to handle a 3X increase in transaction volume while improving operational efficiency",
    ctaText: "Read customer story",
    ctaLink: "#",
    stats: [
      { value: "3x", label: "faster integration speed" },
      { value: "50%", label: "reduction in manual processes" },
    ],
    testimonial: {
      quote: "MuleCraft's MuleSoft expertise delivered outstanding value for our integration needs in a rapidly changing environment.",
      author: "John Smith",
      title: "Senior Integration Architect, Enterprise Corp",
    },
    tabLogo: null,
    tabLogoAlt: "Enterprise Logo",
    logoForImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/Smartsheet-Logo-67.svg",
  },
  {
    tag: "FINANCIAL",
    headline: "Financial Services Powers Data-Driven Decision-Making",
    description: "Leading financial institution realizes 70 percent reduction in integration time, speeding time-to-value while optimizing processes",
    ctaText: "Read customer story",
    ctaLink: "#",
    stats: [{ value: "70%", label: "reduction in integration time" }],
    testimonial: {
      quote: "We have grown our MuleSoft integration capabilities sustainably and without complexity.",
      author: "Financial Services Inc",
      title: "Leading Financial Institution",
    },
    tabLogo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/Origin-Menu-Case-Study-Logo-68.svg",
    tabLogoAlt: "Financial Services Logo",
    logoForImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/Origin-Menu-Case-Study-Logo-68.svg",
  },
  {
    tag: "TECHNOLOGY",
    headline: "Technology Company Doubles Integration Speed & Cuts Processing Time",
    description: "Global technology vendor realizes greater speed, agility, and cost-efficiency by leveraging MuleCraft's MuleSoft expertise",
    ctaText: "Read customer story",
    ctaLink: "#",
    stats: [{ value: "2x", label: "faster integration speed" }],
    testimonial: {
      quote: "MuleCraft is operationally efficient, cost-efficient, and scalable for our MuleSoft implementations.",
      author: "Tech Solutions Ltd",
      title: "Global Technology Vendor",
    },
    tabLogo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/riverbed-logo-104.svg",
    tabLogoAlt: "Technology Company Logo",
    logoForImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/riverbed-logo-104.svg",
  },
  {
    tag: "MANUFACTURING",
    headline: "Manufacturing Company Slashes API Development Time",
    description: "Leading industrial manufacturer's digital transformation prioritizes the modernization of legacy systems and new API-accessible digital workstreams with MuleSoft",
    ctaText: "Read customer story",
    ctaLink: "#",
    stats: [],
    testimonial: {
      quote: "The levels of quality, productivity, reliability, pace, and operational efficiency that we quickly gained with MuleCraft were crucial factors for our success.",
      author: "Manufacturing Corp",
      title: "Leading Industrial Manufacturer",
    },
    tabLogo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/ptc-logo-105.svg",
    tabLogoAlt: "Manufacturing Logo",
    logoForImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/ptc-logo-105.svg",
  },
];

export const CaseStudyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeCaseStudy = caseStudiesData[activeIndex];

  const changeSlide = useCallback((newIndex: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsTransitioning(false);
    }, 250);
  }, []);

  const handleNext = useCallback(() => {
    const newIndex = (activeIndex + 1) % caseStudiesData.length;
    changeSlide(newIndex);
  }, [activeIndex, changeSlide]);

  const handlePrev = useCallback(() => {
    const newIndex = (activeIndex - 1 + caseStudiesData.length) % caseStudiesData.length;
    changeSlide(newIndex);
  }, [activeIndex, changeSlide]);

  useEffect(() => {
    if (!isHovered && !isTransitioning) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 8000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, isTransitioning, handleNext]);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-8">
        <h2 className="text-center text-[#1A1A2E] font-bold text-2xl md:text-[40px] leading-tight mb-12">
          Leading organizations unlock possibility with MuleCraft
        </h2>
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`bg-[#F8F8F8] rounded-3xl p-8 md:p-12 min-h-[500px] transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-12">
              <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1 mt-8 lg:mt-0">
                <div>
                  <p className="text-[#6C4FE0] font-bold text-sm tracking-[0.1em] uppercase mb-4">
                    {activeCaseStudy.tag}
                  </p>
                  <h3 className="text-[#1A1A2E] font-bold text-[28px] leading-tight mb-6">
                    {activeCaseStudy.headline}
                  </h3>
                  <p className="text-[#666666] text-base leading-relaxed mb-8">
                    {activeCaseStudy.description}
                  </p>
                  <a
                    href={activeCaseStudy.ctaLink}
                    className="inline-block bg-[#6C4FE0] text-white font-semibold py-3.5 px-8 rounded-full hover:bg-purple-800 transition-colors duration-300 mb-10"
                  >
                    {activeCaseStudy.ctaText}
                  </a>
                </div>
                {activeCaseStudy.stats.length > 0 && (
                  <div className="border-t border-gray-200 pt-8 mt-auto">
                    {activeCaseStudy.stats.map((stat, index) => (
                      <div key={index} className={index < activeCaseStudy.stats.length - 1 ? "mb-6" : ""}>
                        <p className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                          {stat.value}
                        </p>
                        <p className="text-[#666666] text-base">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="bg-gradient-to-br from-[#002144] to-[#5046E5] rounded-2xl min-h-[300px] md:min-h-[450px] p-8 flex flex-col justify-between">
                  <div className="flex-grow flex items-center justify-center">
                    <img
                      src={activeCaseStudy.logoForImage}
                      alt={`${activeCaseStudy.tag} Logo`}
                      className={`object-contain max-w-[200px] max-h-[50px] ${activeCaseStudy.tag !== 'ENTERPRISE' ? 'brightness-0 invert' : ''}`}
                    />
                  </div>
                  <div className="mt-8">
                    <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/quote-icon-pink-99.svg"
                      alt="Quote icon"
                      className="w-10 h-8 mb-4"
                    />
                    <blockquote className="text-white/80 italic text-lg leading-relaxed">
                      "{activeCaseStudy.testimonial.quote}"
                    </blockquote>
                    <footer className="mt-4 text-white/60 text-sm">
                      <p className="font-semibold">{activeCaseStudy.testimonial.author}</p>
                      <p>{activeCaseStudy.testimonial.title}</p>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 shadow-md hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous case study"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 shadow-md hover:bg-gray-50 transition-colors z-10"
            aria-label="Next case study"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="mt-12">
          <div className="flex justify-center items-center gap-4 sm:gap-8 overflow-x-auto pb-4 -mx-8 px-8 sm:mx-0 sm:px-0 no-scrollbar">
            {caseStudiesData.map((study, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={`flex-shrink-0 transition-all duration-300 py-3 px-2 sm:px-4 ${
                  activeIndex === index ? 'border-b-[3px] border-[#6C4FE0]' : 'border-b-[3px] border-transparent'
                }`}
              >
                {study.tabLogo ? (
                  <img
                    src={study.tabLogo}
                    alt={study.tabLogoAlt}
                    className={`object-contain h-[30px] w-[120px] transition-all duration-300 ${
                      activeIndex !== index ? 'grayscale opacity-50' : 'opacity-100'
                    }`}
                  />
                ) : (
                  <span className={`font-semibold text-gray-700 transition-colors duration-300 h-[30px] flex items-center justify-center w-[120px] ${
                    activeIndex !== index ? 'opacity-50' : 'opacity-100'
                  }`}>
                    {study.tag}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

