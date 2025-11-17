import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Menu, ChevronDown, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const slideData = [
  {
    headline: 'Empowering Your Digital Connectivity with MuleSoft Mastery!',
    subheadline: 'Connect everything with one platform for Integration, Automation, API, Data, and AI Management.',
    image: '/heroanimation.webp',
  },
  {
    headline: '1000+ integrations delivering value',
    subheadline: 'Join hundreds of organizations worldwide who trust MuleCraft for their MuleSoft integration journey.',
    image: '/aipageimage.webp',
  },
  {
    headline: 'Transform your business with expert MuleSoft consulting',
    subheadline: 'Discover how MuleCraft delivers integration excellence and drives measurable business outcomes.',
    image: '/aipageimage1.webp',
  },
  {
    headline: 'MuleCraft: Your Trusted MuleSoft Partner',
    subheadline: 'Comprehensive consulting services for integration strategies, optimization, and best practices.',
    image: '/aipageimage.webp',
  },
  {
    headline: 'Accelerate your digital transformation with MuleSoft',
    subheadline: 'Leverage our expertise to build scalable, efficient integrations that drive innovation and growth.',
    image: '/heroanimation.webp',
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  // Removed click outside handler since we're using hover now

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (videoSectionRef.current) {
        const rect = videoSectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const section = videoSectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

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
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .logo-item img {
          mix-blend-mode: screen;
        }
        .logo-item img:hover {
          mix-blend-mode: normal;
        }
        .video-section {
          transition: box-shadow 0.5s ease-in-out;
        }
        .video-section:hover {
          box-shadow: 0 -80px 80px -30px rgba(135, 206, 235, 0.2), 
                      0 -120px 120px -50px rgba(135, 206, 235, 0.15),
                      inset 0 -60px 60px -20px rgba(135, 206, 235, 0.1);
        }
        .video-section:hover .blue-glow-overlay {
          opacity: 0.3;
        }
        .cursor-shadow {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(135, 206, 235, 0.4) 0%, rgba(135, 206, 235, 0.3) 40%, transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: left 0.1s ease-out, top 0.1s ease-out, opacity 0.3s ease-in-out;
          filter: blur(40px);
          z-index: 5;
        }
        .blur-overlay {
          position: absolute;
          inset: 0;
          backdrop-filter: blur(2px);
          z-index: 1;
          pointer-events: none;
        }
        nav a[href^="#"],
        nav .nav-link {
          border-bottom: none !important;
          text-decoration: none !important;
          box-shadow: none !important;
          outline: none !important;
        }
        nav a[href^="#"]:hover,
        nav .nav-link:hover {
          text-decoration: none !important;
          border-bottom: none !important;
          box-shadow: none !important;
        }
        nav a[href^="#"]:focus,
        nav .nav-link:focus {
          text-decoration: none !important;
          border-bottom: none !important;
          outline: none !important;
        }
      `}</style>
      <div className="bg-black">
        {/* Fixed Navigation Bar */}
        <nav className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 bg-black border-b border-white/10 ${
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
                <div 
                  className="relative"
                  onMouseEnter={() => {
                    if (dropdownTimeoutRef.current) {
                      clearTimeout(dropdownTimeoutRef.current);
                      dropdownTimeoutRef.current = null;
                    }
                    setOpenDropdown('services');
                  }}
                  onMouseLeave={() => {
                    dropdownTimeoutRef.current = setTimeout(() => {
                      setOpenDropdown(null);
                    }, 200);
                  }}
                >
                  <button
                    className={`flex items-center gap-1 text-[15px] font-medium transition-colors relative group ${
                      openDropdown === 'services' 
                        ? 'text-white' 
                        : 'text-white/80 hover:bg-gradient-to-r hover:from-[#00A1FF] hover:to-[#0066CC] hover:bg-clip-text hover:text-transparent'
                    }`}
                  >
                    Services
                    <ChevronDown className="h-4 w-4" />
                    {(openDropdown === 'services') && (
                      <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#00A1FF] to-[#0066CC] rounded-full"></span>
                    )}
                  </button>
                  {openDropdown === 'services' && (
                    <div 
                      className="services-dropdown fixed top-16 left-0 right-0 bg-black shadow-xl border-t border-white/10 overflow-hidden z-[99]"
                      onMouseEnter={() => {
                        if (dropdownTimeoutRef.current) {
                          clearTimeout(dropdownTimeoutRef.current);
                          dropdownTimeoutRef.current = null;
                        }
                        setOpenDropdown('services');
                      }}
                      onMouseLeave={() => {
                        dropdownTimeoutRef.current = setTimeout(() => {
                          setOpenDropdown(null);
                        }, 200);
                      }}
                      style={{ marginTop: '0px', paddingTop: '1px' }}
                    >
                      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-4 gap-8">
                        {/* Popular Services */}
                        <div>
                          <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-white/60">POPULAR SERVICES</h3>
                          <ul className="space-y-3">
                            {servicesData.popular.map((item, idx) => (
                              <li key={idx}>
                                <a href={item.href} className="text-white text-sm hover:text-white/80 transition-colors block">
                                  {item.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Mulesoft */}
                        <div>
                          <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-white/60">MULESOFT</h3>
                          <ul className="space-y-3">
                            {servicesData.mulesoft.map((item, idx) => (
                              <li key={idx}>
                                <a href={item.href} className="text-white text-sm hover:text-white/80 transition-colors block">
                                  {item.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Salesforce */}
                        <div>
                          <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-white/60">SALESFORCE</h3>
                          <ul className="space-y-3">
                            {servicesData.salesforce.map((item, idx) => (
                              <li key={idx}>
                                <a href={item.href} className="text-white text-sm hover:text-white/80 transition-colors block">
                                  {item.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Other Services */}
                        <div>
                          <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-white/60">OTHER SERVICES</h3>
                          <ul className="space-y-3">
                            {servicesData.other.map((item, idx) => (
                              <li key={idx}>
                                <a href={item.href} className="text-white text-sm hover:text-white/80 transition-colors block">
                                  {item.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                          <a href="#" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                            Let's Go
                          </a>
                          <div>
                            <h4 className="font-bold text-white text-sm mb-1">Request a Demo</h4>
                            <p className="text-white/70 text-xs">See how MuleCraft connects systems, automates workflows and powers smarter digital experiences.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Products Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => {
                    if (dropdownTimeoutRef.current) {
                      clearTimeout(dropdownTimeoutRef.current);
                      dropdownTimeoutRef.current = null;
                    }
                    setOpenDropdown('products');
                  }}
                  onMouseLeave={() => {
                    dropdownTimeoutRef.current = setTimeout(() => {
                      setOpenDropdown(null);
                    }, 200);
                  }}
                >
                  <button
                    className={`flex items-center gap-1 text-[15px] font-medium transition-colors relative group ${
                      openDropdown === 'products' 
                        ? 'text-white' 
                        : 'text-white/80 hover:bg-gradient-to-r hover:from-[#00A1FF] hover:to-[#0066CC] hover:bg-clip-text hover:text-transparent'
                    }`}
                  >
                    Products
                    <ChevronDown className="h-4 w-4" />
                    {(openDropdown === 'products') && (
                      <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#00A1FF] to-[#0066CC] rounded-full"></span>
                    )}
                  </button>
                  {openDropdown === 'products' && (
                    <div 
                      className="products-dropdown fixed top-16 left-0 right-0 bg-black shadow-xl border-t border-white/10 overflow-hidden z-[99]"
                      onMouseEnter={() => {
                        if (dropdownTimeoutRef.current) {
                          clearTimeout(dropdownTimeoutRef.current);
                          dropdownTimeoutRef.current = null;
                        }
                        setOpenDropdown('products');
                      }}
                      onMouseLeave={() => {
                        dropdownTimeoutRef.current = setTimeout(() => {
                          setOpenDropdown(null);
                        }, 200);
                      }}
                      style={{ marginTop: '0px', paddingTop: '1px' }}
                    >
                      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-3 gap-8">
                          {/* Recently Launched */}
                          <div>
                            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-white/60">RECENTLY LAUNCHED</h3>
                            <ul className="space-y-3">
                              {productsData.recentlyLaunched.map((item, idx) => (
                                <li key={idx}>
                                  <a 
                                    href={item.href} 
                                    className="text-white text-sm hover:text-white/80 transition-colors block"
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
                            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-white/60">MULESOFT</h3>
                            <ul className="space-y-3">
                              {productsData.mulesoft.map((item, idx) => (
                                <li key={idx}>
                                  <a 
                                    href={item.href} 
                                    className="text-white text-sm hover:text-white/80 transition-colors block"
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
                            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4 text-white/60">OTHER PRODUCTS</h3>
                            <ul className="space-y-3">
                              {productsData.other.map((item, idx) => (
                                <li key={idx}>
                                  <a 
                                    href={item.href} 
                                    className="text-white text-sm hover:text-white/80 transition-colors block"
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
                        <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                          <a href="#" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                            Let's Go
                          </a>
                          <div>
                            <h4 className="font-bold text-white text-sm mb-1">Request a Demo</h4>
                            <p className="text-white/70 text-xs">See how MuleCraft connects systems, automates workflows and powers smarter digital experiences.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <a 
                  href="#about" 
                  className="nav-link text-[15px] font-medium transition-colors relative text-white/80 hover:bg-gradient-to-r hover:from-[#00A1FF] hover:to-[#0066CC] hover:bg-clip-text hover:text-transparent group"
                >
                  About
                  <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#00A1FF] to-[#0066CC] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
                <a 
                  href="#resources" 
                  className="nav-link text-[15px] font-medium transition-colors relative text-white/80 hover:bg-gradient-to-r hover:from-[#00A1FF] hover:to-[#0066CC] hover:bg-clip-text hover:text-transparent group"
                >
                  Resources
                  <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#00A1FF] to-[#0066CC] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
                <a 
                  href="#contact" 
                  className="nav-link text-[15px] font-medium transition-colors relative text-white/80 hover:bg-gradient-to-r hover:from-[#00A1FF] hover:to-[#0066CC] hover:bg-clip-text hover:text-transparent group"
                >
                  Contact Us
                  <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#00A1FF] to-[#0066CC] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Button className={`hidden lg:flex font-semibold ${
                  isScrolled ? 'bg-white text-black hover:bg-white/90' : 'bg-white text-black hover:bg-white/90'
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
            <div className="lg:hidden border-t border-white/10 bg-black">
              <div className="container mx-auto max-w-[1400px] px-4 py-4 space-y-4">
                <div>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                    className="flex items-center justify-between w-full text-white font-medium py-2"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'services' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <div>
                        <h4 className="font-semibold text-white text-sm mb-2">Popular Services</h4>
                        <ul className="space-y-1">
                          {servicesData.popular.map((item, idx) => (
                            <li key={idx}>
                              <a href={item.href} className="text-white/80 text-sm">{item.text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm mb-2">Mulesoft</h4>
                        <ul className="space-y-1">
                          {servicesData.mulesoft.map((item, idx) => (
                            <li key={idx}>
                              <a href={item.href} className="text-white/80 text-sm">{item.text}</a>
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
                    className="flex items-center justify-between w-full text-white font-medium py-2"
                  >
                    Products
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'products' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'products' && (
                    <div className="pl-4 mt-2 space-y-2">
                      <div>
                        <h4 className="font-semibold text-white text-sm mb-2">Recently Launched</h4>
                        <ul className="space-y-1">
                          {productsData.recentlyLaunched.map((item, idx) => (
                            <li key={idx}>
                              <a 
                                href={item.href} 
                                className="text-white/80 text-sm"
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
                <a href="#about" className="block text-white font-medium py-2">About</a>
                <a href="#resources" className="block text-white font-medium py-2">Resources</a>
                <a href="#contact" className="block text-white font-medium py-2">Contact Us</a>
                <div className="pt-4 border-t border-white/10">
                  <Button className="w-full bg-white text-black">Book a Demo</Button>
                </div>
              </div>
            </div>
          )}
        </nav>

        <section 
          ref={videoSectionRef}
          className="video-section relative overflow-hidden text-white pt-16 min-h-[600px] sm:min-h-[700px] lg:h-screen"
        >
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-110 brightness-75"
              style={{ filter: 'blur(3px)' }}
            >
              <source src="/herovideo.mp4" type="video/mp4" />
            </video>
            {/* Blur overlay above video */}
            <div className="blur-overlay" style={{ zIndex: 1 }}></div>
            {/* Blue overlay for stronger blue effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00A1FF]/40 via-[#0080FF]/35 to-[#0066CC]/40 transition-opacity duration-500" style={{ zIndex: 2 }}></div>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E6F2F8]/10 via-[#D4E8F2]/8 to-[#C8E3F0]/10 transition-opacity duration-500" style={{ zIndex: 3 }}></div>
            {/* Blue glow overlay on hover */}
            <div className="blue-glow-overlay absolute inset-0 bg-gradient-to-r from-[#00A1FF]/30 via-[#0080FF]/25 to-[#0066CC]/30 opacity-0 transition-opacity duration-500 pointer-events-none" style={{ zIndex: 4 }}></div>
            {/* Cursor following shadow */}
            {isHovering && (
              <div
                className="cursor-shadow"
                style={{
                  left: `${mousePosition.x}px`,
                  top: `${mousePosition.y}px`,
                  opacity: 1,
                }}
              />
            )}
          </div>
          
          <div className="relative z-10 flex h-full flex-col">
            <div className="container mx-auto flex flex-grow flex-col items-center justify-center px-4 sm:px-4 lg:px-6 text-center lg:text-left py-8 sm:py-12 lg:py-0">
              <div className="max-w-[1400px] w-full">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="relative z-10 flex flex-col justify-center">
                <div className="relative min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] mb-3 sm:mb-4 overflow-hidden">
                  {slideData.map((slide, index) => (
                    <div
                      key={index}
                      role="tabpanel"
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                      aria-hidden={activeIndex !== index}
                    >
                      <h1 className="font-bold text-xl sm:text-2xl leading-tight md:text-3xl lg:text-4xl lg:leading-[1.2] text-white">
                        {slide.headline}
                      </h1>
                      <p className="mx-auto mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm text-white/80 lg:mx-0 lg:text-base lg:leading-[1.5]">
                        {slide.subheadline}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative z-20 mt-3 sm:mt-4 flex flex-col items-center gap-2 sm:gap-3 sm:flex-row sm:justify-center lg:justify-start w-full sm:w-auto">
                  <a
                    href="#"
                    className="inline-block whitespace-nowrap rounded-full bg-white px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-black transition-transform hover:scale-105 w-full sm:w-auto text-center"
                  >
                    Watch demo
                  </a>
                  <a
                    href="#"
                    className="inline-block whitespace-nowrap rounded-full border-2 border-white bg-transparent px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white/10 w-full sm:w-auto text-center"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="relative hidden w-full lg:block">
                <div className="float-animation relative w-full">
                  {slideData.map((slide, index) => (
                    <img
                      key={index}
                      src={slide.image}
                      alt="MuleCraft integration platform visualization"
                      className={`h-auto w-full transition-opacity duration-500 ease-in-out ${
                        activeIndex === index ? 'opacity-100 relative z-10' : 'opacity-0 absolute inset-0 z-0 pointer-events-none'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Controls */}
            <div className="absolute bottom-[140px] left-1/2 hidden -translate-x-1/2 items-center justify-center gap-4 lg:flex z-30">
              <button 
                onClick={prevSlide} 
                aria-label="Previous slide" 
                className="text-white/60 hover:text-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6 stroke-2" />
              </button>
              {slideData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    activeIndex === index 
                      ? 'bg-white' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              <button 
                onClick={nextSlide} 
                aria-label="Next slide" 
                className="text-white hover:opacity-80 transition-opacity"
              >
                <ChevronRight className="h-6 w-6 stroke-2" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4 lg:hidden">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
                className="text-white/60 hover:text-white transition-colors"
            >
                <ChevronLeft className="h-6 w-6 stroke-2" />
              </button>
              {slideData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    activeIndex === index 
                      ? 'bg-white' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              <button 
                onClick={nextSlide} 
                aria-label="Next slide" 
                className="text-white hover:opacity-80 transition-opacity"
              >
                <ChevronRight className="h-6 w-6 stroke-2" />
              </button>
            </div>
              </div>
            </div>
            
            {/* Logo Scrolling Section - At Bottom of Video */}
            {/* <div className="h-[100px] w-full flex-shrink-0 self-end relative z-20 flex items-center justify-center pb-8"> */}
              {/* <div className="relative h-full w-full max-w-[700px] mx-auto overflow-hidden"> */}
                {/* <div className="absolute top-1/2 left-0 -translate-y-1/2 flex w-max animate-[marquee_40s_linear_infinite] items-center gap-x-12"> */}
                  {/* First set of logos */}
                  {/* {logoData.map((logo, index) => (
                    <img
                      key={`logo-1-${index}`}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-10 md:h-12 w-auto flex-shrink-0 object-contain grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0 max-w-[120px]"
                      style={{ mixBlendMode: 'screen' }}
                    />
                  ))} */}
                  {/* Duplicate set for seamless loop */}
                  {/* {logoData.map((logo, index) => (
                    <img
                      key={`logo-2-${index}`}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-10 md:h-12 w-auto flex-shrink-0 object-contain grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0 max-w-[120px]"
                      style={{ mixBlendMode: 'screen' }}
                    />
                  ))} */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </section>
      </div>
    </>
  );
};
