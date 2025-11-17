import { HeroCarousel } from "@/components/HeroCarousel";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const MuleB2BIntegration = () => {
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
                src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/b2bBannerThumb1.webp?ref_type=heads"
                alt="Mule B2B Integration"
                className="w-full max-w-[600px] h-auto object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col gap-6 md:gap-8 order-1 md:order-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-white">
                Linking Businesses Where Connections Thrive: Mule B2B Integration
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                Forge seamless alliances and drive growth with Mule B2B
                Integration, the catalyst for harmonious collaboration and
                accelerated business success. Harness the power of connectivity
                and elevate your B2B interactions with Mule B2B Integration,
                revolutionizing the way businesses connect, communicate, and
                thrive.
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
              Why Choose MuleCraft for Mule B2B Integration?
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Our expert team delivers secure and efficient B2B integration solutions to connect your business with partners seamlessly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "B2B Integration Expertise",
                description: "Certified MuleSoft specialists with extensive experience in B2B integration patterns and protocols.",
              },
              {
                title: "Secure Data Exchange",
                description: "Implement robust security measures ensuring safe and reliable data exchange with business partners.",
              },
              {
                title: "EDI & Protocol Support",
                description: "Support for various EDI standards and B2B protocols including AS2, SFTP, and more.",
              },
              {
                title: "Partner Onboarding",
                description: "Streamlined partner onboarding processes to quickly establish B2B connections.",
              },
              {
                title: "Real-time Monitoring",
                description: "Comprehensive monitoring and alerting for B2B transactions and integrations.",
              },
              {
                title: "Scalable Architecture",
                description: "Build scalable B2B integration solutions that grow with your business needs.",
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
                Simplifying Business Collaborations for Optimal Growth
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                Our best-in-class Mule B2B integration services empower your
                enterprise to achieve peak efficiency, ensuring secure and
                efficient data exchange with your partners. With our top-tier
                Mule services, streamline your business collaborations for
                consistent success. Witness the pinnacle of integrating your
                business ecosystem.
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
                src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/b2bBannerThumb2.webp?ref_type=heads"
                alt="B2B Business Collaborations"
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
              Our B2B Integration Experts
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Meet the skilled professionals who will establish secure B2B connections for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                role: "B2B Integration Architect",
                description: "Strategic design and architecture for secure B2B integration solutions.",
              },
              {
                role: "EDI Specialist",
                description: "Expert implementation of EDI standards and B2B protocols.",
              },
              {
                role: "Integration Developer",
                description: "Development and deployment of B2B integration flows and connectors.",
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
              B2B Integration Resources
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Explore our latest insights, guides, and best practices for Mule B2B integration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "B2B Integration Best Practices",
                description: "Learn essential strategies for building secure and efficient B2B integrations.",
              },
              {
                title: "EDI Standards Guide",
                description: "Discover how to implement various EDI standards in your B2B integrations.",
              },
              {
                title: "Partner Onboarding Strategies",
                description: "Streamline your partner onboarding process with our proven methodologies.",
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
              We've successfully delivered B2B integration solutions for numerous organizations, helping them connect with partners seamlessly.
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

export default MuleB2BIntegration;

