import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/About/mulelogo.svg?ref_type=heads",
    title: "Mulesoft Expertise",
    description: "We deliver robust API development, data integration, and system optimization, helping businesses maximize their operational efficiency. Our commitment to excellence and client satisfaction sets us apart as the ultimate partner for MuleSoft implementations, empowering organizations to unlock their full potential in the digital landscape.",
  },
  {
    icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/About/apigee.svg?ref_type=heads",
    title: "Apigee API Solutions",
    description: "We are known for delivering precise API design, security, and analytics, ensuring seamless integration and enhanced developer experience. Our dedication to exceptional and deep understanding of Apigee's capabilities makes us the optimal choicer for businesses looking to optimize their API strategies.",
  },
  {
    icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/About/snap.svg?ref_type=heads",
    title: "Snaplogic Strategies",
    description: "We offer rapid implementation and pipeline development with real-time data synchronization, enabling organizations to streamline their workflows and accelerate business growth. Our unmatched expertise and customer-centric approach makes us the preferred choice for firms seeking strategic Snaplogic services.",
  },
  {
    icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/About/java.svg?ref_type=heads",
    title: "Java Spring Boot Framework",
    description: "We deliver reliable and scalable Java Spring Boot solutions carefully tailored to meet your specific needs. Our proficiency in Java Spring Boot ensures productive development, seamless integration, and reliable performance for enterprise-level applications.",
  },
  {
    icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/About/javascript.svg?ref_type=heads",
    title: "Integrated Web Development",
    description: "We provide top-notch integrated web development services, specializing in Angular and React frameworks. Our specialization ensures competent implementation, stunning UI designs, and optimal performance for clients across various industries.",
  },
  {
    icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/About/application.svg?ref_type=heads",
    title: "Application Vulnerability Management",
    description: "As a trusted provider of elite application vulnerability management services, we offer comprehensive assessments to identify and mitigate vulnerabilities in software applications. Our meticulous approach and tailored solutions ensure that your systems are protected against potential threats, making you an industry leader in application security.",
  },
];

const AboutService = () => {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Equipping Ventures With Our Diverse Competence
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-all duration-300"
              style={{
                boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
              }}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="h-12 w-auto mb-4 object-contain"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Thought Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="flex justify-center items-center order-2 md:order-1">
              <img
                src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/main/About/aboutBannerThumb3.svg?ref_type=heads"
                alt="Thought Leadership"
                className="w-full max-w-[300px] h-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-4 order-1 md:order-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                Thought Leadership and Insights
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                MuleCraft's thought leadership initiatives offer invaluable
                insights, industry trends, and best practices, empowering
                businesses to navigate the complex integration landscape
                with confidence and innovation.
              </p>
            </div>
          </div>

          {/* Customer Satisfaction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="flex flex-col gap-4 order-1 md:order-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                Customer Satisfaction and Support
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                Ask about MuleCraft products, pricing, implementation, or
                anything else. Our highly trained reps are ready to partner
                with you.
              </p>
              <div className="mt-4">
                <Link to="/contact">
                  <Button className="bg-white text-black hover:bg-white/90 px-6 py-3 text-base font-semibold rounded-lg">
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center order-2 md:order-2">
              <img
                src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/About/aboutBannerThumb4.svg"
                alt="Customer Support"
                className="w-full max-w-[300px] h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <ReviewsCarousel />
      </div>
    </section>
  );
};

export default AboutService;

