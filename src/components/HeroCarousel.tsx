import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Menu, ChevronDown, X } from 'lucide-react';
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
    src: '/logodata1.webp',
    alt: 'NVIDIA Logo',
  },
  {
    src: '/logodata2.webp',
    alt: 'TEKISTIC Logo',
  },
  {
    src: '/logodata3.webp',
    alt: 'Accionlabs Logo',
  },
  {
    src: '/logodata4.webp',
    alt: 'Zensark Logo',
  },
  {
    src: '/logodata5.webp',
    alt: 'Technoladders Logo',
  },
];

const AUTOPLAY_INTERVAL = 5000;

const servicesData = {
  popular: [
    { text: 'Mule 4 Migration', href: '#' },
    { text: 'Mulesoft Development', href: '#' },
    { text: 'Snaplogic Strategies', href: '#' },
  ],
  mulesoft: [
    { text: 'Mulesoft Development', href: '#' },
    { text: 'Mule 4 Migration', href: '#' },
    { text: 'Mule B2B Integration', href: '#' },
    { text: 'Ops & Maintenance', href: '#' },
  ],
  salesforce: [
    { text: 'Sales Cloud', href: '#' },
    { text: 'Data & Org Migration', href: '#' },
    { text: 'Managed Services', href: '#' },
  ],
  other: [
    { text: 'User Interface Design', href: '#' },
    { text: 'Integrated Web Design', href: '#' },
    { text: 'Snaplogic Strategies', href: '#' },
    { text: 'Apigee API Solutions', href: '#' },
  ],
};

const productsData = {
  recentlyLaunched: [
    { text: 'MuleSoftLP', href: 'https://mulesoft.dev/' },
    { text: 'SnapLogic', href: 'https://snaplogic.playground.mulecraft.in/' },
    { text: 'RAMLify Flow Agent', href: 'https://ramlify-flow-agent.lovable.app/' },
    { text: 'Goose', href: 'https://goosed.in/' },
  ],
  mulesoft: [
    { text: 'Community Anypoint Platform', href: '#' },
    { text: 'Active Mq', href: '#' },
    { text: 'MuleSoftLP', href: 'https://mulesoft.dev/' },
    { text: 'MuleCraft Academy', href: '#' },
  ],
  other: [
    { text: 'SnapLogic', href: 'https://snaplogic.playground.mulecraft.in/' },
    { text: 'RAMLify Flow Agent', href: 'https://ramlify-flow-agent.lovable.app/' },
    { text: 'AnypointLP', href: '#' },
    { text: 'Goose', href: 'https://goosed.in/' },
    { text: 'Mule Migration Nexus', href: '#' },
    { text: 'DataWeave Task Generator', href: '#' },
    { text: 'Datadog Integration Automation', href: '#' },
  ],
};

export const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'services' | 'products' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

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
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-scroll-container {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          overflow: hidden;
          position: relative;
        }
        .logo-scroll {
          display: flex;
          width: max-content;
          animation: scroll-left 30s linear infinite;
          will-change: transform;
        }
        .logo-scroll:hover {
          animation-play-state: paused;
        }
        .logo-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 180px;
          max-width: 200px;
        }
      `}</style>
      <div className="bg-white">
        {/* Fixed Navigation Bar */}
        <nav className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 bg-white ${
          isScrolled ? 'shadow-md' : ''
        }`}>
          <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <a href="/">
                  <img 
                    src="/mulecraftlogo.svg" 
                    alt="MuleCraft Logo" 
                    className="h-8 sm:h-10 w-auto"
                  />
                </a>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
                {/* Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                    className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${
                      isScrolled 
                        ? openDropdown === 'services' 
                          ? 'text-[#002144] border-b-2 border-[#002144] pb-1' 
                          : 'text-[#002144]/80 hover:text-[#002144]'
                        : openDropdown === 'services'
                          ? 'text-[#002144] border-b-2 border-[#002144] pb-1'
                          : 'text-[#002144]/80 hover:text-[#002144]'
                    }`}
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'services' && (
                    <div className="fixed top-16 left-0 right-0 bg-white shadow-xl border-t border-gray-100 overflow-hidden z-[99]">
                      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-4 p-6 gap-6">
                        {/* Popular Services */}
                        <div className="bg-[#E6F2F8] p-4 rounded-lg">
                          <h3 className="font-bold text-[#002144] text-sm mb-3">Popular Services</h3>
                          <ul className="space-y-2">
                            {servicesData.popular.map((item, idx) => (
                              <li key={idx}>
                                <a href={item.href} className="text-[#002144] text-sm hover:underline">
                                  {item.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Mulesoft */}
                        <div>
                          <h3 className="font-bold text-[#002144] text-sm mb-3">Mulesoft</h3>
                          <ul className="space-y-2">
                            {servicesData.mulesoft.map((item, idx) => (
                              <li key={idx}>
                                <a href={item.href} className="text-[#002144] text-sm hover:underline">
                                  {item.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Salesforce */}
                        <div>
                          <h3 className="font-bold text-[#002144] text-sm mb-3">Salesforce</h3>
                          <ul className="space-y-2">
                            {servicesData.salesforce.map((item, idx) => (
                              <li key={idx}>
                                <a href={item.href} className="text-[#002144] text-sm hover:underline">
                                  {item.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Other Services */}
                        <div>
                          <h3 className="font-bold text-[#002144] text-sm mb-3">Other Services</h3>
                          <ul className="space-y-2">
                            {servicesData.other.map((item, idx) => (
                              <li key={idx}>
                                <a href={item.href} className="text-[#002144] text-sm hover:underline">
                                  {item.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        </div>
                        <div className="bg-[#E6F2F8] px-6 py-4 flex items-center justify-between border-t border-gray-200">
                          <a href="#" className="bg-[#002144] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#002144]/90 transition-colors">
                            Let's Go
                          </a>
                          <div>
                            <h4 className="font-bold text-[#002144] text-sm mb-1">Request a Demo</h4>
                            <p className="text-[#002144]/70 text-xs">See how MuleCraft connects systems, automates workflows and powers smarter digital experiences.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Products Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'products' ? null : 'products')}
                    className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${
                      isScrolled 
                        ? openDropdown === 'products' 
                          ? 'text-[#002144] border-b-2 border-[#002144] pb-1' 
                          : 'text-[#002144]/80 hover:text-[#002144]'
                        : openDropdown === 'products'
                          ? 'text-[#002144] border-b-2 border-[#002144] pb-1'
                          : 'text-[#002144]/80 hover:text-[#002144]'
                    }`}
                  >
                    Products
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'products' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'products' && (
                    <div className="fixed top-16 left-0 right-0 bg-white shadow-xl border-t border-gray-100 overflow-hidden z-[99]">
                      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-3 p-6 gap-6">
                          {/* Recently Launched */}
                          <div className="bg-[#E6F2F8] p-4 rounded-lg">
                            <h3 className="font-bold text-[#002144] text-sm mb-3">Recently Launched</h3>
                            <ul className="space-y-2">
                              {productsData.recentlyLaunched.map((item, idx) => (
                                <li key={idx}>
                                  <a 
                                    href={item.href} 
                                    className="text-[#6C4FE0] text-sm hover:underline font-medium"
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  >
                                    {item.text}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Mulesoft */}
                          <div>
                            <h3 className="font-bold text-[#002144] text-sm mb-3">Mulesoft</h3>
                            <ul className="space-y-2">
                              {productsData.mulesoft.map((item, idx) => (
                                <li key={idx}>
                                  <a 
                                    href={item.href} 
                                    className="text-[#002144] text-sm hover:underline"
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  >
                                    {item.text}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Other Products */}
                          <div>
                            <h3 className="font-bold text-[#002144] text-sm mb-3">Other Products</h3>
                            <ul className="space-y-2">
                              {productsData.other.map((item, idx) => (
                                <li key={idx}>
                                  <a 
                                    href={item.href} 
                                    className="text-[#002144] text-sm hover:underline"
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  >
                                    {item.text}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="bg-[#E6F2F8] px-6 py-4 flex items-center justify-between border-t border-gray-200">
                          <a href="#" className="bg-[#002144] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#002144]/90 transition-colors">
                            Let's Go
                          </a>
                          <div>
                            <h4 className="font-bold text-[#002144] text-sm mb-1">Request a Demo</h4>
                            <p className="text-[#002144]/70 text-xs">See how MuleCraft connects systems, automates workflows and powers smarter digital experiences.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <a href="#about" className={`text-[15px] font-medium transition-colors ${
                  isScrolled ? 'text-[#002144]/80 hover:text-[#002144]' : 'text-[#002144]/80 hover:text-[#002144]'
                }`}>
                  About
                </a>
                <a href="#resources" className={`text-[15px] font-medium transition-colors ${
                  isScrolled ? 'text-[#002144]/80 hover:text-[#002144]' : 'text-[#002144]/80 hover:text-[#002144]'
                }`}>
                  Resources
                </a>
                <a href="#contact" className={`text-[15px] font-medium transition-colors ${
                  isScrolled ? 'text-[#002144]/80 hover:text-[#002144]' : 'text-[#002144]/80 hover:text-[#002144]'
                }`}>
                  Contact Us
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Button className={`hidden lg:flex font-semibold ${
                  isScrolled ? 'bg-[#002144] text-white hover:bg-[#002144]/90' : 'bg-[#002144] text-white hover:bg-[#002144]/90'
                }`}>
                  Book a Demo
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white">
              <div className="container mx-auto max-w-[1400px] px-4 py-4 space-y-4">
                <div>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                    className="flex items-center justify-between w-full text-[#002144] font-medium py-2"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'services' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <div>
                        <h4 className="font-semibold text-[#002144] text-sm mb-2">Popular Services</h4>
                        <ul className="space-y-1">
                          {servicesData.popular.map((item, idx) => (
                            <li key={idx}>
                              <a href={item.href} className="text-[#002144]/80 text-sm">{item.text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#002144] text-sm mb-2">Mulesoft</h4>
                        <ul className="space-y-1">
                          {servicesData.mulesoft.map((item, idx) => (
                            <li key={idx}>
                              <a href={item.href} className="text-[#002144]/80 text-sm">{item.text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'products' ? null : 'products')}
                    className="flex items-center justify-between w-full text-[#002144] font-medium py-2"
                  >
                    Products
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'products' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'products' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <div>
                        <h4 className="font-semibold text-[#002144] text-sm mb-2">Recently Launched</h4>
                        <ul className="space-y-1">
                          {productsData.recentlyLaunched.map((item, idx) => (
                            <li key={idx}>
                              <a 
                                href={item.href} 
                                className="text-[#002144]/80 text-sm"
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {item.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <a href="#about" className="block text-[#002144] font-medium py-2">About</a>
                <a href="#resources" className="block text-[#002144] font-medium py-2">Resources</a>
                <a href="#contact" className="block text-[#002144] font-medium py-2">Contact Us</a>
                <div className="pt-4 border-t border-gray-200">
                  <Button className="w-full bg-[#002144] text-white">Book a Demo</Button>
                </div>
              </div>
            </div>
          )}
        </nav>

        <section className="relative overflow-hidden bg-gradient-to-r from-[#E6F2F8] via-[#D4E8F2] to-[#C8E3F0] text-[#002144] [border-bottom-left-radius:50%_100px] [border-bottom-right-radius:50%_100px] pt-16">
          
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
                    Contact
                  </a>
                </div>
              </div>

              <div className="relative hidden w-full lg:block">
                <div className="float-animation">
                  <img
                    src="/heroanimation.webp"
                    alt="MuleCraft integration platform visualization"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Controls */}
            <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center justify-center gap-4 lg:flex">
              <button 
                onClick={prevSlide} 
                aria-label="Previous slide" 
                className="text-[#002144]/60 hover:text-[#002144] transition-colors"
              >
                <ChevronLeft className="h-5 w-5 stroke-2" />
              </button>
              {slideData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    activeIndex === index 
                      ? 'bg-[#002144]' 
                      : 'bg-[#002144]/30 hover:bg-[#002144]/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              <button 
                onClick={nextSlide} 
                aria-label="Next slide" 
                className="text-[#002144] hover:opacity-80 transition-opacity"
              >
                <ChevronRight className="h-5 w-5 stroke-2" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="mt-12 flex items-center justify-center gap-4 lg:hidden">
              <button 
                onClick={prevSlide} 
                aria-label="Previous slide" 
                className="text-[#002144]/60 hover:text-[#002144] transition-colors"
              >
                <ChevronLeft className="h-6 w-6 stroke-2" />
              </button>
              {slideData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    activeIndex === index 
                      ? 'bg-[#002144]' 
                      : 'bg-[#002144]/30 hover:bg-[#002144]/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              <button 
                onClick={nextSlide} 
                aria-label="Next slide" 
                className="text-[#002144] hover:opacity-80 transition-opacity"
              >
                <ChevronRight className="h-6 w-6 stroke-2" />
              </button>
            </div>
          </div>
        </section>
        <div className="bg-white overflow-hidden">
          <div className="logo-scroll-container">
            <div className="logo-scroll items-center min-h-[100px] md:min-h-[120px] py-6" style={{ gap: '2.5rem' }}>
              {/* First set of logos */}
              {logoData.map((logo, index) => (
                <div key={`logo-1-${index}`} className="logo-item">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-auto max-h-[60px] md:max-h-[70px] w-auto max-w-[180px] md:max-w-[200px] object-contain grayscale transition duration-300 hover:grayscale-0"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logoData.map((logo, index) => (
                <div key={`logo-2-${index}`} className="logo-item">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-auto max-h-[60px] md:max-h-[70px] w-auto max-w-[180px] md:max-w-[200px] object-contain grayscale transition duration-300 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
