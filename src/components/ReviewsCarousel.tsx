import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const userPlaceholderIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/user-placeholder-icon-107.svg";
const g2Icon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/G2Icon-106.svg";
const gartnerIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/Gartner-peer-insights-108.svg";

type Review = {
  title: string;
  excerpt: string;
  reviewerName: string;
  platform: 'g2' | 'gartner';
  hasPhoto: boolean;
};

const reviews: Review[] = [
  {
    title: "MuleCraft MuleSoft Implementation Excellence",
    excerpt: "MuleCraft's expertise with MuleSoft has transformed our integration capabilities. Their team delivered a robust, scalable solution that connected our Salesforce, SAP, and NetSuite systems seamlessly. The implementation was smooth and their support exceptional.",
    reviewerName: "Sarah Johnson",
    platform: "g2",
    hasPhoto: true,
  },
  {
    title: "Outstanding SnapLogic Integration Services",
    excerpt: "MuleCraft helped us leverage SnapLogic for our data integration needs. Their deep understanding of the platform and best practices enabled us to reduce integration time by 60% while improving data quality across our enterprise systems.",
    reviewerName: "Michael Chen",
    platform: "gartner",
    hasPhoto: false,
  },
  {
    title: "Digibee Platform Expertise Delivers Results",
    excerpt: "Working with MuleCraft on our Digibee implementation was a game-changer. They provided expert guidance on API management and workflow automation, helping us modernize our legacy systems and accelerate our digital transformation journey.",
    reviewerName: "David Martinez",
    platform: "g2",
    hasPhoto: true,
  },
  {
    title: "WSO2 API Management Excellence",
    excerpt: "MuleCraft's WSO2 consulting services helped us design, secure, and manage our APIs effectively. Their team's technical expertise and attention to detail ensured we had a scalable API strategy that supports our business growth.",
    reviewerName: "Jennifer Williams",
    platform: "g2",
    hasPhoto: false,
  },
  {
    title: "Comprehensive Integration Platform Support",
    excerpt: "MuleCraft provides exceptional consulting across MuleSoft, SnapLogic, Digibee, and WSO2. Their platform-agnostic approach helped us choose the right solution for each use case, resulting in significant cost savings and improved efficiency.",
    reviewerName: "Robert Anderson",
    platform: "g2",
    hasPhoto: true,
  },
  {
    title: "MuleSoft Anypoint Platform Mastery",
    excerpt: "The MuleCraft team's deep knowledge of MuleSoft Anypoint Platform enabled us to build complex integrations quickly. Their best practices and governance frameworks have been instrumental in our success.",
    reviewerName: "Lisa Thompson",
    platform: "gartner",
    hasPhoto: false,
  },
  {
    title: "End-to-End Integration Solutions",
    excerpt: "MuleCraft delivered a complete integration solution using MuleSoft that connected our e-commerce, ERP, and CRM systems. Their expertise in API-led connectivity and reusable components accelerated our time-to-market significantly.",
    reviewerName: "James Wilson",
    platform: "g2",
    hasPhoto: true,
  },
  {
    title: "Exceptional Technical Support and Consulting",
    excerpt: "MuleCraft's support team is outstanding. They provided expert guidance throughout our MuleSoft implementation and continue to help us optimize our integrations. Their dedication to client success is unmatched.",
    reviewerName: "IT Integration Director",
    platform: "gartner",
    hasPhoto: false,
  }
];

const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex items-center">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
      />
    ))}
  </div>
);

export const ReviewsCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#1A1A2E] lg:text-[40px] lg:leading-tight">
            #1 trusted choice for MuleSoft, SnapLogic, Digibee & WSO2 consulting
          </h2>
          <p className="mx-auto mb-4 max-w-[900px] text-lg text-[#666666] leading-[1.7]">
            Discover why more organizations trust MuleCraft for their integration needs across MuleSoft, SnapLogic, Digibee, and WSO2 platforms. Join satisfied clients and see how MuleCraft can transform your business.
          </p>
          {/* <p className="mb-12 text-base text-gray-600">
            Read more reviews on{' '}
            <a href="#" className="text-[#6C4FE0] hover:underline">
              Gartner
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#6C4FE0] hover:underline">
              G2
            </a>
          </p> */}
        </div>
        <Carousel
          setApi={setApi}
          plugins={[autoplayPlugin.current]}
          opts={{ align: "center", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="basis-[90%] pl-4 md:basis-[50%] md:pl-6 lg:basis-[35%]">
                <div className="flex h-full min-h-[320px] flex-col rounded-2xl border border-[#E5E5E5] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)]">
                  <h3 className="mb-4 text-lg font-bold leading-[1.4] text-[#1A1A2E]">
                    {review.title}
                  </h3>
                  <p className="mb-6 flex-grow text-base leading-[1.6] text-[#666666] line-clamp-5">
                    {review.excerpt}
                  </p>
                  <a href="#" className="mb-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[#6C4FE0] hover:underline">
                    Read the full review
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={userPlaceholderIcon}
                        alt={review.reviewerName}
                        className="h-12 w-12 rounded-full"
                      />
                      <div>
                        <p className="text-base font-bold text-[#1A1A2E]">{review.reviewerName}</p>
                        <StarRating />
                      </div>
                    </div>
                    <img
                      src={review.platform === 'g2' ? g2Icon : gartnerIcon}
                      alt={review.platform === 'g2' ? 'G2' : 'Gartner'}
                      className={`h-6 w-auto ${review.platform === 'g2' ? 'w-8' : 'w-20'}`}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={() => api?.scrollPrev()}
              className="rounded-full border border-gray-200 bg-white p-3 text-gray-600 shadow-sm transition-colors hover:bg-gray-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 w-2 rounded-full transition-all ${current === index ? 'bg-[#6C4FE0]' : 'bg-transparent border border-gray-400'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => api?.scrollNext()}
              className="rounded-full border border-gray-200 bg-white p-3 text-gray-600 shadow-sm transition-colors hover:bg-gray-100"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

