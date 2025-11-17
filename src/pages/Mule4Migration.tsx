import { HeroCarousel } from "@/components/HeroCarousel";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Mule4Migration = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroCarousel />
      
      {/* Hero Banner Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center items-center order-2 md:order-1">
              <img
                src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/migrationBannerThumb1.webp?ref_type=heads"
                alt="Mule 4 Migration"
                className="w-full max-w-[600px] h-auto object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col gap-6 md:gap-8 order-1 md:order-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-white">
                Seamless Evolution Powered By Mule-4 Migration
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                Embrace the transformative journey of Mule 4 migration, where
                outdated limitations give way to a new era of seamless
                connectivity, accelerated workflows and boundless possibilities,
                open doors to a world of enhanced scalability, agility, and
                performance, enabling businesses to innovate, simplify
                integrations, and unleash the true power of their digital
                ecosystems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-black hover:bg-white/90 px-6 py-3 text-base font-semibold rounded-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose MuleCraft for Mule 4 Migration?
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Our expert team ensures a smooth, efficient migration process with minimal disruption to your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Expert Migration Team",
                description: "Experienced MuleSoft architects and developers with proven track records in successful migrations.",
              },
              {
                title: "Zero Downtime Strategy",
                description: "Minimal disruption to your business operations with carefully planned migration phases.",
              },
              {
                title: "Comprehensive Testing",
                description: "Rigorous testing at every stage to ensure data integrity and system reliability.",
              },
              {
                title: "Performance Optimization",
                description: "Enhanced performance and scalability with Mule 4's improved architecture and features.",
              },
              {
                title: "Ongoing Support",
                description: "Continuous support and maintenance to ensure your migrated systems run smoothly.",
              },
              {
                title: "Cost-Effective Solutions",
                description: "Optimized migration strategies that maximize ROI and minimize total cost of ownership.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-all duration-300"
                style={{
                  boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Banner Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="flex flex-col gap-6 md:gap-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-white">
                Embracing Mule-4 & Unlocking the Power of Connectivity
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                Experience the next level of integration by unveiling the
                advantages of Mule 4 migration - Enhanced connectivity,
                streamlined workflows, and boundless potential for your
                business. Ensure a paradigm shift in your integration
                capabilities with unprecedented connectivity and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    className="border-2 border-white/20 text-white hover:bg-white/10 px-6 py-3 text-base font-semibold rounded-lg"
                  >
                    Book Demo
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Image */}
            <div className="flex justify-center items-center">
              <img
                src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/migrationBannerThumb2.webp?ref_type=heads"
                alt="Mule 4 Connectivity"
                className="w-full max-w-[600px] h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Team Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Migration Experts
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Meet the skilled professionals who will guide you through your Mule 4 migration journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                role: "MuleSoft Architect",
                description: "Strategic planning and architecture design for seamless migration.",
              },
              {
                role: "Integration Developer",
                description: "Expert implementation and code migration with best practices.",
              },
              {
                role: "QA Specialist",
                description: "Comprehensive testing and quality assurance throughout the process.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 sm:p-8 text-center hover:bg-white/10 transition-all duration-300"
                style={{
                  boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3 sm:mb-4">
                  {member.role}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Resources Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Migration Resources
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Explore our latest insights, guides, and best practices for Mule 4 migration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Migration Best Practices",
                description: "Learn the essential strategies for a successful Mule 4 migration.",
              },
              {
                title: "Common Challenges & Solutions",
                description: "Discover how to overcome typical migration obstacles.",
              },
              {
                title: "Performance Optimization Guide",
                description: "Maximize the benefits of Mule 4 with our optimization tips.",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                style={{
                  boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3 sm:mb-4">
                  {resource.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              We've successfully migrated numerous organizations to Mule 4, helping them achieve their digital transformation goals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
            {[
              { name: "NVIDIA", logo: "/logodata1.webp" },
              { name: "TEKISTIC", logo: "/logodata2.webp" },
              { name: "Accionlabs", logo: "/logodata3.webp" },
              { name: "Zensark", logo: "/logodata4.webp" },
              { name: "Technoladders", logo: "/logodata5.webp" },
            ].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 sm:p-6 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                  style={{ mixBlendMode: 'screen' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mule4Migration;

