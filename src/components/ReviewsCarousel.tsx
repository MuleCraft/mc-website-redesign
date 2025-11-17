import * as React from "react";

type Client = {
  id: string;
  name: string;
  logo: string;
  testimonial: string;
  author?: string;
  authorTitle?: string;
};

const clients: Client[] = [
  {
    id: 'nvidia',
    name: 'NVIDIA',
    logo: 'https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Common%20Images/nvidia.webp?ref_type=heads',
    testimonial: 'We assist NVIDIA in integrating their APIs with their partner systems, facilitating seamless data exchange and enabling them to leverage their technologies effectively.',
    author: 'NVIDIA Integration Team',
  },
  {
    id: 'tekistic',
    name: 'Tekistic IT Services',
    logo: 'https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Common%20Images/tekistic.webp?ref_type=heads',
    testimonial: 'We collaborate with Tekistic IT Services to integrate their APIs with third-party platforms, enabling them to enhance their service offerings, streamline operations, and drive business growth.',
    author: 'Tekistic IT Services',
    authorTitle: 'Global Solutions',
  },
  {
    id: 'accion-labs',
    name: 'Accion Labs',
    logo: 'https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/develop/Common%20Images/accionLabs.webp?ref_type=heads',
    testimonial: 'MuleCraft is a top-notch provider of MuleSoft services, offering exceptional solutions for seamless integration. Their expertise and commitment to delivering the best MuleSoft services set them apart.',
    author: 'Accion Labs Team',
    authorTitle: 'Technology Services',
  },
];

const ClientCard = ({ client }: { client: Client }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="relative backdrop-blur-[16px] overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 flex flex-col group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderRadius: '2.4rem',
        background: isHovered 
          ? 'linear-gradient(135deg, rgba(0, 161, 255, 0.2) 0%, rgba(0, 128, 255, 0.3) 50%, rgba(0, 102, 204, 0.2) 100%)'
          : 'rgba(23, 23, 23, 0.3)',
        boxShadow: `rgba(255, 255, 255, 0.15) -1px 0px 0px 0px inset,
          rgba(255, 255, 255, 0.15) 0px -1px 0px 0px inset,
          rgb(255, 255, 255) -2px -2px 2px -3px inset,
          rgba(255, 255, 255, 0.3) 0px 1px 0px 0px inset,
          rgba(255, 255, 255, 0.2) 1px 0px 0px 0px inset,
          rgb(255, 255, 255) 4px 4px 1px -5px inset,
          rgba(0, 0, 0, 0.3) 0px 4px 12px 0px inset,
          rgba(0, 0, 0, 0.2) 0px 2px 6px 0px inset,
          rgba(0, 0, 0, 0.01) 0px 0px 0px 2px inset`
      }}
    >
      <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
        {/* Logo */}
        <div className="mb-6 flex items-center justify-between">
          <img
            src={client.logo}
            alt={client.name}
            className="h-8 w-auto"
            loading="lazy"
          />
          <svg
            className="w-5 h-5 text-white/60 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
        
        {/* Testimonial */}
        <div className="flex-grow">
          <p className="text-base text-white/90 leading-relaxed mb-6">
            "{client.testimonial}"
          </p>
        </div>
        
        {/* Author Attribution */}
        {client.author && (
          <div className="pt-4 border-t border-white/10">
            <p className="text-sm font-medium text-white">
              {client.author}
            </p>
            {client.authorTitle && (
              <p className="text-sm text-white/60 mt-1">
                {client.authorTitle}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export const ReviewsCarousel = () => {
  return (
    <section className="bg-black py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.1] font-bold text-white text-center mb-4">
            You're in great company
          </h2>
          <p className="mx-auto max-w-[900px] text-base text-white/80 leading-[1.7]">
            Discover how MuleCraft has helped leading organizations transform their integration capabilities and achieve remarkable results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

