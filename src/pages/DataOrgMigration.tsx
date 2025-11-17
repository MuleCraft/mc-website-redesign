import { HeroCarousel } from "@/components/HeroCarousel";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const DataOrgMigration = () => {
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
                src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/salesforceDataorgBannerThumb1.svg?ref_type=heads"
                alt="Data & Org Migration"
                className="w-full max-w-[600px] h-auto object-contain"
                loading="lazy"
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col gap-6 md:gap-8 order-1 md:order-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-white">
                Effortless Transition, Unmatched Precision: Elevate Your Data with Salesforce Migration
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                Experience a frictionless shift as we expertly guide your data and organization to new heights with Salesforce Migration Mastery. Our seamless process ensures precision and efficiency, making your transition a breeze. Embark on a transformative Salesforce journey with our dedicated managed services.
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
                Elevate. Migrate. Excel.
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                Unlock the power of Salesforce with our top-tier data and organization migration services. Seamlessly transfer your valuable assets while preserving data integrity and maximizing operational efficiency. Trust in our expertise to navigate the complexities, ensuring a smooth journey to Salesforce excellence. Elevate your business potential while we manage the complexities, ensuring a seamless transformation.
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
                src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/salesforceDataorgBannerThumb2.webp?ref_type=heads"
                alt="Salesforce Migration"
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
              Migration Benefits
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Discover the advantages of professional Salesforce data and organization migration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Data Integrity",
                description: "Ensure complete data accuracy and integrity throughout the migration process.",
              },
              {
                title: "Zero Downtime",
                description: "Minimize business disruption with carefully planned migration strategies.",
              },
              {
                title: "Custom Mapping",
                description: "Custom data mapping and transformation to match your business requirements.",
              },
              {
                title: "Validation & Testing",
                description: "Comprehensive validation and testing to ensure successful migration.",
              },
              {
                title: "Historical Data Preservation",
                description: "Preserve all historical data and relationships during migration.",
              },
              {
                title: "Post-Migration Support",
                description: "Ongoing support and optimization after migration completion.",
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
              Why Choose MuleCraft for Data & Org Migration?
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Our expert team ensures seamless and accurate migration of your data and organization to Salesforce.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Migration Experts",
                description: "Certified Salesforce migration specialists with proven track records.",
              },
              {
                title: "Comprehensive Planning",
                description: "Detailed migration planning and strategy to minimize risks and downtime.",
              },
              {
                title: "Data Cleansing",
                description: "Thorough data cleansing and deduplication before migration.",
              },
              {
                title: "Automated Tools",
                description: "Leverage advanced migration tools for efficient and accurate data transfer.",
              },
              {
                title: "Rollback Strategy",
                description: "Comprehensive rollback plans to ensure business continuity.",
              },
              {
                title: "Training & Documentation",
                description: "Complete training and documentation for your team post-migration.",
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
              Our Migration Experts
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
              Meet the skilled professionals who will ensure your successful Salesforce migration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                role: "Migration Architect",
                description: "Strategic planning and architecture for complex data and org migrations.",
              },
              {
                role: "Data Migration Specialist",
                description: "Expert data extraction, transformation, and loading (ETL) processes.",
              },
              {
                role: "Quality Assurance Engineer",
                description: "Comprehensive testing and validation of migrated data and configurations.",
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
              Explore our latest insights, guides, and best practices for Salesforce data and organization migration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Migration Best Practices",
                description: "Learn essential strategies for successful Salesforce data and org migrations.",
              },
              {
                title: "Data Mapping Guide",
                description: "Discover how to effectively map and transform data during migration.",
              },
              {
                title: "Migration Checklist",
                description: "Comprehensive checklist to ensure nothing is missed during your migration.",
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
              We've successfully migrated data and organizations for numerous companies, ensuring smooth transitions to Salesforce.
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

export default DataOrgMigration;

