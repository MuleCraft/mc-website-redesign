import { Link } from 'react-router-dom';

const connectors = [
  { name: 'Salesforce', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/Salesforce-Menu-Connector-Cards-Logo-Mark-31.svg', alt: 'Salesforce logo' },
  { name: 'SAP', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/SAP-Menu-Connector-Cards-Logo-Mark-29.svg', alt: 'SAP logo' },
  { name: 'NetSuite', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/oracle-netsuite-logo-new-33.svg', alt: 'NetSuite logo' },
  { name: 'Workday', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/Workday-Menu-Connector-Cards-Logo-Mark-35.svg', alt: 'Workday logo' },
  { name: 'Database', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/PlugsConnected-38.svg', alt: 'Database integration icon' },
  { name: 'Shopify', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/Homepage-Shopify-Card-Logomark-42.svg', alt: 'Shopify logo' },
  { name: 'Slack', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/Homepage-Slack-Card-Logomark-34.svg', alt: 'Slack logo' },
  { name: 'Stripe', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/Stripe-Wordmark-36.svg', alt: 'Stripe logo' },
  { name: 'Generic Connector', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/PlugsConnected-38.svg', alt: 'Generic connector icon' },
];

const ConnectionLines = () => (
  <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 350">
      <path d="M120 58 L 220 58" stroke="white" strokeWidth="2" strokeOpacity="0.2" fill="none" strokeDasharray="5 5" />
      <path d="M83 90 L 83 170" stroke="white" strokeWidth="2" strokeOpacity="0.2" fill="none" strokeDasharray="5 5" />
      <path d="M120 175 L 220 175" stroke="white" strokeWidth="2" strokeOpacity="0.2" fill="none" strokeDasharray="5 5" />
      <path d="M280 175 L 380 175" stroke="white" strokeWidth="2" strokeOpacity="0.2" fill="none" strokeDasharray="5 5" />
      <path d="M370 200 L 370 280" stroke="white" strokeWidth="2" strokeOpacity="0.2" fill="none" strokeDasharray="5 5" />
      <path d="M250 210 L 150 280" stroke="white" strokeWidth="2" strokeOpacity="0.2" fill="none" strokeDasharray="5 5" />
    </svg>
  </div>
);

export const IntegrationConnectors = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="bg-[#2B1B6D] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="lg:flex lg:items-center lg:justify-between lg:gap-x-20">
            <div className="flex-shrink-0 lg:w-2/5 text-center lg:text-left z-10 relative">
              <h2 className="text-[28px] lg:text-[32px] font-bold text-white leading-[1.3] max-w-[600px] mx-auto lg:mx-0">
                Effortlessly integrate all your apps and data sources
              </h2>
              <div className="mt-8">
                <Link
                  to="/connectors"
                  className="inline-block bg-white text-[#2B1B6D] font-semibold px-8 py-[14px] rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  Explore all
                </Link>
              </div>
            </div>
            <div className="flex-grow lg:w-3/5 mt-16 lg:mt-0 relative">
              <ConnectionLines />
              <div className="relative grid grid-cols-3 gap-y-8 gap-x-6 justify-items-center">
                {connectors.map((connector, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-full w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] flex items-center justify-center p-3 lg:p-4 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
                  >
                    <img
                      src={connector.src}
                      alt={connector.alt}
                      className="w-auto h-auto max-w-[40px] max-h-[40px] md:max-w-[50px] md:max-h-[50px] lg:max-w-[60px] lg:max-h-[60px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

