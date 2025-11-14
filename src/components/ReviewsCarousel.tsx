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
    title: "Boomi Developer Review",
    excerpt: "It is one of the best products compared to other integration tools, offering a more user friendly interface and easy to understand shapes. It also provides multiple options to connect with various trade partners.",
    reviewerName: "Ganesan C",
    platform: "g2",
    hasPhoto: true,
  },
  {
    title: "Boomi is a power house of an iPaaS",
    excerpt: "Boomi is an Integrated platform that i have used many times in the last 10 years, and implemented twice. It is a great tool that can be used by anyone with a fair degree of technical knowledge as it allows for building data processes without needing to code.",
    reviewerName: "Technology Director",
    platform: "gartner",
    hasPhoto: false,
  },
  {
    title: "The best integration platform",
    excerpt: "Boomi is one of the very light weight, easy to learn Integration platform which is just drag and drop. All the SDLC steps right from building to deployment are there in a single platform and it is very easy to use.",
    reviewerName: "Manikya Aravinda",
    platform: "g2",
    hasPhoto: true,
  },
  {
    title: "Leading IPaaS for seamless, user-friendly integration",
    excerpt: "The main reason is that Boomi is a powerful integratino plataform that excels at connecting applications and automating workflows across diverse environments. It statnds out due to its user-friendly interface and robust scalability.",
    reviewerName: "Solutions Consultant",
    platform: "g2",
    hasPhoto: false,
  },
  {
    title: "Best integration platform",
    excerpt: "Connect everything to everything without any platform influence",
    reviewerName: "Rishi Lad",
    platform: "g2",
    hasPhoto: true,
  },
  {
    title: "Boomi's Configurable Functionality Impresses",
    excerpt: "I am impressed with the functionality within Boomi. Processes that used to require custom programming are now configurable.",
    reviewerName: "Solutions Consultant",
    platform: "gartner",
    hasPhoto: false,
  },
  {
    title: "Boomi automates complex & impactful services",
    excerpt: "Boomi has allowed me to bring value to my company by automating Ecommerce, DTC, B2B processes and data flow at TKG. Integration & Automation platform has been crucial to have data flow to the right places at the right time, with listeners providing near realtime service for our web orders coming from Salesforce...",
    reviewerName: "Sung Kim",
    platform: "g2",
    hasPhoto: true,
  },
  {
    title: "Nearly Zero Issues with Boomi Product Functionality",
    excerpt: "Exceptional product support and account contact person. Never seen such dedication.",
    reviewerName: "IT Integration Manager",
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
            #1 trusted choice for integration and automation
          </h2>
          <p className="mx-auto mb-4 max-w-[900px] text-lg text-[#666666] leading-[1.7]">
            Discover why more customers choose Boomi than any other integration & automation solution. Join satisfied users and see how Boomi can transform your business.
          </p>
          <p className="mb-12 text-base text-gray-600">
            Read more reviews on{' '}
            <a href="#" className="text-[#6C4FE0] hover:underline">
              Gartner
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#6C4FE0] hover:underline">
              G2
            </a>
          </p>
        </div>
        <Carousel
          setApi={setApi}
          plugins={[autoplayPlugin.current]}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-8">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="basis-full pl-8 md:basis-1/2 lg:basis-1/3">
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

