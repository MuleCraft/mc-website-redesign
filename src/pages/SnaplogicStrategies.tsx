import { HeroCarousel } from "@/components/HeroCarousel";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SnaplogicStrategies = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroCarousel />
      
      {/* Hero Banner Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="flex flex-col gap-6 md:gap-8 order-1 md:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-white">
                Simplify Integration and Accelerate Automation
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                Experience the transformative synergy of Snaplogic, that empower
                your organization to simplify integration processes and expedite
                automation, unleashing newfound agility and empowering your team
                to focus on innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-black hover:bg-white/90 px-6 py-3 text-base font-semibold rounded-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Image */}
            <div className="flex justify-center items-center order-2 md:order-2">
              <img
                src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/snaplogicBannerThumb1.webp?ref_type=heads"
                alt="Snaplogic Strategies"
                className="w-full max-w-[600px] h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose MuleCraft for Snaplogic Strategies?
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Our expert team delivers innovative Snaplogic solutions to streamline your integration and automation processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Snaplogic Expertise",
                description: "Certified Snaplogic specialists with deep knowledge of integration patterns and automation workflows.",
              },
              {
                title: "Rapid Integration Solutions",
                description: "Accelerate your integration projects with our proven Snaplogic strategies and best practices.",
              },
              {
                title: "Automation Excellence",
                description: "Design and implement automated workflows that reduce manual effort and increase efficiency.",
              },
              {
                title: "Data Pipeline Optimization",
                description: "Build robust data pipelines that ensure reliable data flow across your enterprise systems.",
              },
              {
                title: "Cloud-Native Architecture",
                description: "Leverage Snaplogic's cloud capabilities for scalable, flexible integration solutions.",
              },
              {
                title: "Comprehensive Support",
                description: "End-to-end support from strategy development to implementation and ongoing maintenance.",
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

      {/* Second Banner Section - 3 Column Layout */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Title Column */}
            <div className="flex flex-col gap-6 md:gap-8 order-1 md:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-white">
                Driving Your Business Towards Revolutionary Success
              </h2>
            </div>
            
            {/* Image Column */}
            <div className="flex justify-center items-center order-2 md:order-2">
              <img
                src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/snaplogicBannerThumb2.webp?ref_type=heads"
                alt="Snaplogic Business Success"
                className="w-full max-w-[600px] h-auto object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Content Column */}
            <div className="flex flex-col gap-6 md:gap-8 order-3 md:order-3">
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                Our Snaplogic experts power up your business by leveraging
                cutting-edge integration solutions and automation strategies
                tailored to elevate your efficiency and productivity. We unleash
                the potential of your firm through seamless integration and
                automation, propelling you towards unparalleled success in the
                digital frontier.
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
          </div>
        </div>
      </section>

      {/* Service Team Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Snaplogic Experts
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Meet the skilled professionals who will transform your integration and automation capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                role: "Snaplogic Architect",
                description: "Strategic design and architecture for scalable integration and automation solutions.",
              },
              {
                role: "Integration Specialist",
                description: "Expert implementation of Snaplogic pipelines, snaps, and integration patterns.",
              },
              {
                role: "Automation Engineer",
                description: "Design and deployment of automated workflows and data processing pipelines.",
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
              Snaplogic Resources
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Explore our latest insights, guides, and best practices for Snaplogic integration and automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Integration Best Practices",
                description: "Learn essential strategies for building efficient and scalable Snaplogic integrations.",
              },
              {
                title: "Automation Patterns Guide",
                description: "Discover proven automation patterns for common business scenarios and workflows.",
              },
              {
                title: "Performance Optimization Tips",
                description: "Maximize the performance of your Snaplogic pipelines with our optimization guide.",
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
              We've successfully delivered Snaplogic solutions for numerous organizations, helping them streamline their integration processes.
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

export default SnaplogicStrategies;

