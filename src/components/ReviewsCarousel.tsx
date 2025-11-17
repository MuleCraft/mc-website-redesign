import * as React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const userPlaceholderIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/user-placeholder-icon-107.svg";
const g2Icon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/G2Icon-106.svg";
const gartnerIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/Gartner-peer-insights-108.svg";

type Review = {
  id: string;
  type: 'featured' | 'small';
  title: string;
  excerpt: string;
  reviewerName: string;
  reviewerTitle?: string;
  platform: 'g2' | 'gartner';
  hasPhoto: boolean;
  gradientClass?: string;
  column: 1 | 2;
};

const reviews: Review[] = [
  {
    id: 'mulesoft-1',
    type: 'featured',
    title: "MuleCraft MuleSoft Implementation Excellence",
    excerpt: "MuleCraft's expertise with MuleSoft has transformed our integration capabilities. Their team delivered a robust, scalable solution that connected our Salesforce, SAP, and NetSuite systems seamlessly.",
    reviewerName: "Sarah Johnson",
    platform: "g2",
    hasPhoto: true,
    gradientClass: 'from-[#6c5ce7]/20 via-transparent to-transparent',
    column: 1,
  },
  {
    id: 'snaplogic-1',
    type: 'small',
    title: "Outstanding SnapLogic Integration Services",
    excerpt: "MuleCraft helped us leverage SnapLogic for our data integration needs. Their deep understanding of the platform and best practices enabled us to reduce integration time by 60% while improving data quality across our enterprise systems.",
    reviewerName: "Michael Chen",
    reviewerTitle: "Integration Architect",
    platform: "gartner",
    hasPhoto: false,
    column: 1,
  },
  {
    id: 'digibee-1',
    type: 'small',
    title: "Digibee Platform Expertise Delivers Results",
    excerpt: "Working with MuleCraft on our Digibee implementation was a game-changer. They provided expert guidance on API management and workflow automation, helping us modernize our legacy systems and accelerate our digital transformation journey.",
    reviewerName: "David Martinez",
    reviewerTitle: "CTO",
    platform: "g2",
    hasPhoto: true,
    column: 2,
  },
  {
    id: 'wso2-1',
    type: 'small',
    title: "WSO2 API Management Excellence",
    excerpt: "MuleCraft's WSO2 consulting services helped us design, secure, and manage our APIs effectively. Their team's technical expertise and attention to detail ensured we had a scalable API strategy that supports our business growth.",
    reviewerName: "Jennifer Williams",
    reviewerTitle: "Engineering Manager",
    platform: "g2",
    hasPhoto: false,
    column: 2,
  },
  {
    id: 'comprehensive-1',
    type: 'featured',
    title: "Comprehensive Integration Platform Support",
    excerpt: "MuleCraft provides exceptional consulting across MuleSoft, SnapLogic, Digibee, and WSO2. Their platform-agnostic approach helped us choose the right solution for each use case, resulting in significant cost savings and improved efficiency.",
    reviewerName: "Robert Anderson",
    platform: "g2",
    hasPhoto: true,
    gradientClass: 'from-[#3b82f6]/20 via-transparent to-transparent',
    column: 2,
  },
  {
    id: 'mulesoft-2',
    type: 'small',
    title: "MuleSoft Anypoint Platform Mastery",
    excerpt: "The MuleCraft team's deep knowledge of MuleSoft Anypoint Platform enabled us to build complex integrations quickly. Their best practices and governance frameworks have been instrumental in our success.",
    reviewerName: "Lisa Thompson",
    reviewerTitle: "Senior Integration Director",
    platform: "gartner",
    hasPhoto: false,
    column: 2,
  },
  {
    id: 'end-to-end',
    type: 'small',
    title: "End-to-End Integration Solutions",
    excerpt: "MuleCraft delivered a complete integration solution using MuleSoft that connected our e-commerce, ERP, and CRM systems. Their expertise in API-led connectivity and reusable components accelerated our time-to-market significantly.",
    reviewerName: "James Wilson",
    reviewerTitle: "VP of Technology",
    platform: "g2",
    hasPhoto: true,
    column: 1,
  },
  {
    id: 'support',
    type: 'small',
    title: "Exceptional Technical Support and Consulting",
    excerpt: "MuleCraft's support team is outstanding. They provided expert guidance throughout our MuleSoft implementation and continue to help us optimize our integrations. Their dedication to client success is unmatched.",
    reviewerName: "IT Integration Director",
    reviewerTitle: "Enterprise Solutions",
    platform: "gartner",
    hasPhoto: false,
    column: 1,
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

const FeaturedCard = ({
  title,
  excerpt,
  reviewerName,
  platform,
  gradientClass,
}: {
  title: string;
  excerpt: string;
  reviewerName: string;
  platform: 'g2' | 'gartner';
  gradientClass?: string;
}) => (
  <div className="relative group rounded-2xl p-px transition-transform duration-300 ease-in-out hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
    <div className="relative flex flex-col p-12 rounded-[15px] bg-[#0F0F0F] min-h-[460px] overflow-hidden justify-between">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass || 'from-[#6c5ce7]/20 via-transparent to-transparent'} opacity-80`}></div>
      <div className="relative z-10">
        <img
          src={platform === 'g2' ? g2Icon : gartnerIcon}
          alt={platform === 'g2' ? 'G2' : 'Gartner'}
          className={`h-10 w-auto ${platform === 'g2' ? 'w-8' : 'w-20'}`}
        />
      </div>
      <div className="relative z-10">
        <h3 className="font-display text-[2.5rem] leading-tight text-white">{title}</h3>
        <p className="mt-4 text-lg text-white/70">{excerpt}</p>
        <div className="mt-6 flex items-center gap-3">
          <img
            src={userPlaceholderIcon}
            alt={reviewerName}
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="font-medium text-white text-base">{reviewerName}</p>
            <StarRating />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SmallCard = ({
  title,
  excerpt,
  reviewerName,
  reviewerTitle,
  platform,
}: {
  title: string;
  excerpt: string;
  reviewerName: string;
  reviewerTitle?: string;
  platform: 'g2' | 'gartner';
}) => (
  <div className="relative flex flex-col p-8 rounded-2xl bg-[#1a1a1a] border border-white/10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
    <div className="flex-shrink-0">
      <img
        src={platform === 'g2' ? g2Icon : gartnerIcon}
        alt={platform === 'g2' ? 'G2' : 'Gartner'}
        className={`h-6 w-auto ${platform === 'g2' ? 'w-8' : 'w-20'}`}
      />
    </div>
    <h3 className="text-lg font-bold text-white mt-6 mb-3">{title}</h3>
    <p className="text-base text-[#A0A0A0] flex-grow">{excerpt}</p>
    <div className="mt-8 flex items-center gap-3">
      <img
        src={userPlaceholderIcon}
        alt={reviewerName}
        className="h-10 w-10 rounded-full"
      />
      <div>
        <p className="font-medium text-white text-base">{reviewerName}</p>
        {reviewerTitle && <p className="text-sm text-[#A0A0A0]">{reviewerTitle}</p>}
        <StarRating />
      </div>
    </div>
  </div>
);

export const ReviewsCarousel = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const reviewsPerPage = 4;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  // Get current page reviews
  const startIndex = currentPage * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, endIndex);

  // Distribute reviews into two columns (2 per column)
  const column1Items = currentReviews.filter((_, index) => index % 2 === 0);
  const column2Items = currentReviews.filter((_, index) => index % 2 === 1);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const renderCard = (review: Review) => {
    if (review.type === 'featured') {
      return (
        <FeaturedCard
          key={review.id}
          title={review.title}
          excerpt={review.excerpt}
          reviewerName={review.reviewerName}
          platform={review.platform}
          gradientClass={review.gradientClass}
        />
      );
    }
    return (
      <SmallCard
        key={review.id}
        title={review.title}
        excerpt={review.excerpt}
        reviewerName={review.reviewerName}
        reviewerTitle={review.reviewerTitle}
        platform={review.platform}
      />
    );
  };

  return (
    <section className="bg-black py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="font-display text-[56px] leading-[1.1] font-bold text-white text-center mb-4">
            You're in great company
          </h2>
          <p className="mx-auto max-w-[900px] text-lg text-white/80 leading-[1.7]">
            Discover why more organizations trust MuleCraft for their integration needs across MuleSoft, SnapLogic, Digibee, and WSO2 platforms. Join satisfied clients and see how MuleCraft can transform your business.
          </p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-8">{column1Items.map(renderCard)}</div>
            <div className="flex flex-col gap-8">{column2Items.map(renderCard)}</div>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={handlePrevious}
              className="rounded-full border border-white/20 bg-black p-3 text-white shadow-sm transition-colors hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentPage === index
                      ? 'bg-[#6C4FE0] w-8'
                      : 'bg-transparent border border-white/40 w-2'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="rounded-full border border-white/20 bg-black p-3 text-white shadow-sm transition-colors hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

