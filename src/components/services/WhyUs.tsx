import React from 'react';

const WhyUs = () => {
  const benefits = [
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/bestIcon.png?ref_type=heads",
      title: "Best-in-industry",
      description: "We are committed to providing our clients with the best-in-class services, exceeding expectations and delivering exceptional results every step of the way."
    },
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/expertiseIcon.png?ref_type=heads",
      title: "Elite Skills",
      description: "Our team of highly skilled specialists is dedicated to handling projects with expertise, ensuring top-notch execution and delivering superior outcomes for our clients."
    },
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/synergyIcon.png?ref_type=heads",
      title: "Synergy",
      description: "By fostering a strong communication and synergy with our clients, we drive collaborative innovation, unlock shared insights, and achieve transformative results together."
    },
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/timeIcon.png?ref_type=heads",
      title: "Delay? Never!",
      description: "Partnering with us, clients experience the benefits of timely project delivery, enabling them to stay on track, seize opportunities, and achieve their business goals efficiently."
    },
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/securityIcon.png?ref_type=heads",
      title: "Invulnerable",
      description: "MuleCraft specializes in developing highly secure projects, providing clients with peace of mind and safeguarding their valuable data in an ever-evolving threat landscape."
    },
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/flexibilityIcon.png?ref_type=heads",
      title: "Highly Flexible",
      description: "We meticulously code with flexibility in mind, allowing for seamless adaptability and enabling the efficient reuse of components, saving time and resources for our clients."
    },
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/walletIcon.png?ref_type=heads",
      title: "Efficiently priced",
      description: "We excel in combining cost-effective solutions with superior quality services to meet all your technological to ensure maximum value and satisfaction while optimizing resources."
    },
    {
      icon: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Services/supportIcon.png?ref_type=heads",
      title: "Stellar assistance",
      description: "We deliver exceptional customer support, ensuring clients to receive expert assistance as it builds trust, enhances satisfaction, and fosters long-term relationships."
    }
  ];

  return (
    <>
      {/* Title Section */}
      <section className="bg-black py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center text-white leading-tight">
            Why choose MuleCraft ?
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

export default WhyUs;

