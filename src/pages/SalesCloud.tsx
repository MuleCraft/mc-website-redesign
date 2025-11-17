import { HeroCarousel } from "@/components/HeroCarousel";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SalesCloud = () => {
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
                src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/cloudBannerThumb1.webp?ref_type=heads"
                alt="Sales Cloud"
                className="w-full max-w-[600px] h-auto object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col gap-6 md:gap-8 order-1 md:order-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-white">
                Accelerating Growth, Maximizing Impact - Salesforce as Catalyst
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                Salesforce Cloud Services provide leading-edge solutions and tools that empower businesses to scale rapidly and stay ahead in a competitive market. With Salesforce as a catalyst, organizations can drive meaningful customer interactions, improve operational efficiency, and achieve unparalleled success in their sales and service endeavors.
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

      {/* Second Banner Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="flex flex-col gap-6 md:gap-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-white">
                Igniting Your Potential, Every Step of the Way
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                With Salesforce Service as your beacon, proceed confidently, knowing your potential is nurtured at every turn. Experience the spark of Salesforce Service, guiding you towards boundless possibilities and unparalleled success. From inception to expansion, we ignite your potential, paving the way for sustainable growth and lasting impact that will help you to achieve new heights of success with our expert guidance.
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
                src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/salesforceCloudThumb2.svg?ref_type=heads"
                alt="Salesforce Service"
                className="w-full max-w-[600px] h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Salesforce Benefits Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Salesforce Cloud Benefits
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Discover the advantages of leveraging Salesforce Cloud Services for your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Enhanced Sales Performance",
                description: "Boost sales productivity with AI-powered insights and automation tools.",
              },
              {
                title: "360-Degree Customer View",
                description: "Get a complete view of your customers across all touchpoints and interactions.",
              },
              {
                title: "Scalable Cloud Infrastructure",
                description: "Scale your business operations seamlessly with Salesforce's robust cloud platform.",
              },
              {
                title: "Real-time Analytics",
                description: "Make data-driven decisions with real-time analytics and reporting capabilities.",
              },
              {
                title: "Mobile Accessibility",
                description: "Access your sales data and tools from anywhere, on any device.",
              },
              {
                title: "Integration Capabilities",
                description: "Connect Salesforce with your existing systems and applications effortlessly.",
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

      {/* Why Us Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose MuleCraft for Sales Cloud?
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Our expert team delivers comprehensive Salesforce Sales Cloud solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Salesforce Certified Experts",
                description: "Certified Salesforce consultants with extensive experience in Sales Cloud implementation.",
              },
              {
                title: "Custom Sales Processes",
                description: "Design and implement sales processes that align with your business objectives.",
              },
              {
                title: "Lead Management",
                description: "Streamline lead capture, qualification, and conversion with automated workflows.",
              },
              {
                title: "Opportunity Management",
                description: "Track and manage sales opportunities through the entire sales cycle.",
              },
              {
                title: "Sales Forecasting",
                description: "Accurate sales forecasting with AI-powered predictions and analytics.",
              },
              {
                title: "Ongoing Support",
                description: "Continuous support and optimization to ensure maximum ROI from your Sales Cloud investment.",
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

      {/* Service Team Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Salesforce Experts
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Meet the skilled professionals who will transform your sales operations with Salesforce.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                role: "Salesforce Architect",
                description: "Strategic design and architecture for scalable Sales Cloud solutions.",
              },
              {
                role: "Sales Cloud Consultant",
                description: "Expert implementation of Sales Cloud features and customizations.",
              },
              {
                role: "Sales Operations Specialist",
                description: "Optimize sales processes and workflows for maximum efficiency.",
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
              Sales Cloud Resources
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Explore our latest insights, guides, and best practices for Salesforce Sales Cloud.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Sales Cloud Best Practices",
                description: "Learn essential strategies for maximizing your Sales Cloud implementation.",
              },
              {
                title: "Sales Process Optimization",
                description: "Discover how to optimize your sales processes with Sales Cloud features.",
              },
              {
                title: "Lead Management Guide",
                description: "Master lead management and conversion with our comprehensive guide.",
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
              We've successfully delivered Sales Cloud solutions for numerous organizations, helping them accelerate their sales growth.
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

export default SalesCloud;

