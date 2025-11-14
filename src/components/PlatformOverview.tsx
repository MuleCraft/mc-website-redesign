import { ArrowRight, Zap, Database, Lock, Bot } from 'lucide-react';

const capabilities = [
  {
    icon: Zap,
    gradient: 'bg-gradient-to-br from-[#F2F0FF] to-[#E9E6FF]',
    title: 'Integration and Automation',
    description: 'Connect your applications and data with MuleSoft.',
    linkText: 'Explore Integration',
    linkHref: '#',
  },
  {
    icon: Database,
    gradient: 'bg-gradient-to-br from-[#EBF5FF] to-[#E0F0FF]',
    title: 'Data Management',
    description: 'Get a synchronized 360-degree view of your data.',
    linkText: 'Explore Data management',
    linkHref: '#',
  },
  {
    icon: Lock,
    gradient: 'bg-gradient-to-br from-[#E0F8F8] to-[#D9F5F5]',
    title: 'API Management',
    description: 'Design, secure, and manage APIs with flexibility and scale.',
    linkText: 'Explore API Management',
    linkHref: '#',
  },
  {
    icon: Bot,
    gradient: 'bg-gradient-to-br from-[#FFEFF5] to-[#FFE8F0]',
    title: 'AI Agent Management',
    description: 'Design, govern, and orchestrate all AI agents at scale.',
    linkText: 'Explore MuleCraft AI',
    linkHref: '#',
  },
];

export const PlatformOverview = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-bold text-[32px] leading-tight md:text-[40px] text-[#1A1A2E] mb-4">
            MuleCraft Enterprise Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-[900px] mx-auto leading-[1.7] mb-12">
            Turn complexity into endless possibility with MuleCraft — comprehensive MuleSoft consulting that integrates applications, APIs, data, and AI agents, transforming businesses with expert-driven solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="bg-white border border-[#E5E5E5] rounded-2xl p-8 transition-all duration-300 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${cap.gradient}`}>
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{cap.title}</h3>
                <p className="text-base text-muted-foreground leading-[1.6] mb-6">{cap.description}</p>
                <a
                  href={cap.linkHref}
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-primary no-underline hover:text-primary"
                >
                  <span className="group-hover:underline">{cap.linkText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
