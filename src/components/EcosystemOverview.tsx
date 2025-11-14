import { Link } from 'react-router-dom';
import { Headset, Rocket, Users, Handshake } from 'lucide-react';

interface ValueProp {
  icon: React.ElementType;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const valueProps: ValueProp[] = [
  {
    icon: Headset,
    title: 'World-class support',
    description: 'Personalized care throughout your journey.',
    ctaText: 'Explore customer support',
    ctaLink: '#',
  },
  {
    icon: Rocket,
    title: 'Expert acceleration',
    description: 'Leverage iPaaS expertise and best practices.',
    ctaText: 'Explore professional services',
    ctaLink: '#',
  },
  {
    icon: Users,
    title: 'Massive community',
    description: 'Join 310K+ users and 40k+ certified experts.',
    ctaText: 'Explore community',
    ctaLink: '#',
  },
  {
    icon: Handshake,
    title: 'Industry partnerships',
    description: 'Access 800+ premier partners to extend your investment value.',
    ctaText: 'Explore partner ecosystem',
    ctaLink: '#',
  },
];

const ValuePropCard = ({ icon: Icon, title, description, ctaText, ctaLink }: ValueProp) => (
  <div className="flex h-full flex-col items-center rounded-2xl border border-[#E5E5E5] bg-white p-10 text-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
    <Icon className="mb-6 h-16 w-16 text-[#6C4FE0]" strokeWidth={1.5} />
    <h3 className="mb-4 font-display text-[24px] font-bold text-[#1A1A2E]">{title}</h3>
    <p className="mb-8 flex-grow font-body text-base leading-[1.6] text-[#666666]">{description}</p>
    <Link
      to={ctaLink}
      className="mt-auto inline-block rounded-full border-2 border-[#6C4FE0] bg-transparent px-6 py-3 font-ui font-semibold text-[#6C4FE0] transition-colors duration-300 ease-in-out hover:bg-[#6C4FE0] hover:text-white"
    >
      {ctaText}
    </Link>
  </div>
);

export const EcosystemOverview = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="text-center">
          <h2 className="mb-4 font-display text-[32px] font-bold text-[#1A1A2E] md:text-[40px]">
            More than a platform
          </h2>
          <p className="mb-12 font-body text-lg text-[#666666]">
            We're a complete ecosystem to help you succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => (
            <ValuePropCard
              key={prop.title}
              icon={prop.icon}
              title={prop.title}
              description={prop.description}
              ctaText={prop.ctaText}
              ctaLink={prop.ctaLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

