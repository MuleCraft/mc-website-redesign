import { Share2, Bot, Database, Cable } from "lucide-react";

const capabilities = [
  {
    icon: Share2,
    title: "Connect everything faster",
    description: "The trusted and proven enterprise-grade solution to connect applications, data, and APIs across your hybrid multi-cloud landscape with speed and ease.",
    desktopPosition: "top-0 left-1/2 -translate-x-1/2",
    linePosition: "top-[180px] h-[45px] w-0.5 left-1/2 -translate-x-1/2",
    lineGradient: "bg-[repeating-linear-gradient(to_bottom,theme(colors.gray.300),theme(colors.gray.300)_4px,transparent_4px,transparent_10px)]"
  },
  {
    icon: Cable,
    title: "Built to scale—secure, governed, and agent-ready",
    description: "Design, secure, and govern APIs in minutes—AI-ready and built for agentic scale. Publish Anywhere. No lock-in. Total control.",
    desktopPosition: "top-1/2 right-0 -translate-y-1/2",
    linePosition: "right-[180px] w-[120px] h-0.5 top-1/2 -translate-y-1/2",
    lineGradient: "bg-[repeating-linear-gradient(to_right,theme(colors.gray.300),theme(colors.gray.300)_4px,transparent_4px,transparent_10px)]"
  },
  {
    icon: Database,
    title: "Move, sync, and trust your data",
    description: "Take control of your data with a simple, secure, and scalable foundation for trusted data to fuel operational, analytical, and AI initiatives.",
    desktopPosition: "bottom-0 left-1/2 -translate-x-1/2",
    linePosition: "bottom-[180px] h-[45px] w-0.5 left-1/2 -translate-x-1/2",
    lineGradient: "bg-[repeating-linear-gradient(to_bottom,theme(colors.gray.300),theme(colors.gray.300)_4px,transparent_4px,transparent_10px)]"
  },
  {
    icon: Bot,
    title: "Manage the full agent lifecycle",
    description: "Design, govern, and orchestrate all AI agents at scale—fast. No-code tools. Ethical guardrails. Full observability. Measurable impact.",
    desktopPosition: "top-1/2 left-0 -translate-y-1/2",
    linePosition: "left-[180px] w-[120px] h-0.5 top-1/2 -translate-y-1/2",
    lineGradient: "bg-[repeating-linear-gradient(to_right,theme(colors.gray.300),theme(colors.gray.300)_4px,transparent_4px,transparent_10px)]"
  }
];

const CapabilityCard = ({ item }: { item: typeof capabilities[0] }) => {
  const Icon = item.icon;
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex flex-col items-center text-center">
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-xl font-bold text-[#1A1A2E] mb-2 font-display">{item.title}</h3>
      <p className="text-muted-foreground text-base">{item.description}</p>
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section className="bg-[#F8F8F8] py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center">
          <h2 className="font-display font-bold text-[#1A1A2E] text-[32px] md:text-[40px] leading-tight mb-4">
            How it all works together
          </h2>
          <p className="text-lg text-[#666666] max-w-[800px] mx-auto leading-relaxed mb-16 lg:mb-24">
            MuleCraft brings integration, APIs, data, and AI together through MuleSoft expertise to power tomorrow's breakthroughs.
          </p>
        </div>

        {/* Desktop Diagram View */}
        <div className="hidden lg:block">
          <div className="relative mx-auto w-[900px] h-[750px] mb-12">
            {/* Center Platform Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-white border-2 border-[#6C4FE0] flex flex-col items-center justify-center p-8 text-center shadow-lg transition-transform hover:rotate-3 duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 54 44" fill="none" className="mb-4 text-[#6C4FE0]">
                <path d="M42.1797 22C42.1797 28.5284 36.9388 33.8571 30.5195 33.8571C24.1002 33.8571 18.8594 28.5284 18.8594 22C18.8594 15.4716 24.1002 10.1428 30.5195 10.1428C36.9388 10.1428 42.1797 15.4716 42.1797 22Z" stroke="currentColor" strokeWidth="3"></path>
                <path d="M22.959 2H38.0792L52 22L38.0792 42H22.959L9 22L22.959 2Z" stroke="currentColor" strokeWidth="3"></path>
                <path d="M12.0078 22H3.77344" stroke="currentColor" strokeWidth="3"></path>
              </svg>
              <h3 className="text-xl font-bold text-[#1A1A2E] font-display">MuleCraft Platform</h3>
            </div>

            {/* Connecting Lines */}
            {capabilities.map((item, index) => (
              <div key={index} className={`absolute ${item.linePosition} ${item.lineGradient}`} />
            ))}

            {/* Capability Circles */}
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`absolute w-[180px] h-[180px] rounded-full bg-white border border-[#E5E5E5] shadow-md flex flex-col items-center justify-center text-center p-4 transition-transform hover:scale-105 cursor-default ${item.desktopPosition}`}
                >
                  <Icon className="w-8 h-8 text-primary mb-2" />
                  <h4 className="font-bold text-sm text-[#1A1A2E] leading-snug">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Mobile/Tablet Stacked Card View */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {capabilities.map((item, index) => (
            <CapabilityCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
