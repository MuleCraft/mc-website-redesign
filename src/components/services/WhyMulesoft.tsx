import React from 'react';

const WhyMulesoft = () => {
  const benefits = [
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/Mulesoftservices/collaboration.png?ref_type=heads",
      title: "Seamless Synergy",
      description: "Integrating with Ease - MuleSoft ensures effortless connectivity, linking websites to diverse applications and data sources."
    },
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/Mulesoftservices/market-research.png?ref_type=heads",
      title: "Agile Expansion",
      description: "Scaling Boundlessly - With MuleSoft, your website adapts swiftly, effortlessly handling growth and changing market demands."
    },
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/Mulesoftservices/trust.png?ref_type=heads",
      title: "Secure Trust",
      description: "Compliant Confidence - MuleSoft prioritizes robust security, protecting sensitive data and ensuring compliance with industry standards."
    },
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/Mulesoftservices/effective.png?ref_type=heads",
      title: "Efficiency Unleashed",
      description: "Cost and Time Optimization - Utilizing MuleSoft's pre-built connectors and user-friendly interface, development becomes cost-effective, and efficient."
    },
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/Mulesoftservices/unity.png?ref_type=heads",
      title: "Unified Strength",
      description: "Supportive Community - Count on MuleSoft's dedicated support and vibrant community to troubleshoot challenges and gain valuable insights."
    },
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/Mulesoftservices/adoption.png?ref_type=heads",
      title: "Innovation Nexus",
      description: "Futuristic Advancements - MuleSoft empowers your website with cutting-edge solutions, keeping you ahead in the ever-evolving digital landscape."
    },
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/Mulesoftservices/harmony.png?ref_type=heads",
      title: "Data Harmony",
      description: "Uniting Insights - With MuleSoft, harness the power of integrated data to make informed decisions and optimize business processes."
    },
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/Mulesoftservices/loyal-customer.png?ref_type=heads",
      title: "Customer Bliss",
      description: "Experience Amplified - Enhance customer satisfaction through MuleSoft's integrations, creating a smooth and delightful user journey."
    }
  ];

  return (
    <>
      {/* Title Section */}
      <section className="bg-black py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center text-white leading-tight">
            Why choose MuleSoft ?
          </h2>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col gap-12 sm:gap-16">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-[350px] mx-auto">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    loading="lazy"
                  />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed text-center">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {benefits.slice(3, 6).map((benefit, index) => (
                <div key={index} className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-[350px] mx-auto">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    loading="lazy"
                  />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed text-center">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-[800px] mx-auto">
              {benefits.slice(6, 8).map((benefit, index) => (
                <div key={index} className="flex flex-col items-center gap-6 sm:gap-8 w-full max-w-[350px] mx-auto">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    loading="lazy"
                  />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed text-center">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyMulesoft;

