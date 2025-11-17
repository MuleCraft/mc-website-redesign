import React from 'react';

interface BlogItem {
  subtitle: string;
  title: string;
  content: string;
  path: string;
}

const BlogCards = () => {
  // Sample blog data - you can replace this with actual data from a JSON file or API
  const blogData: BlogItem[] = [
    {
      subtitle: "MuleSoft",
      title: "Understanding the Basics of GraphQL",
      content: "GraphQL is a modern, efficient query language for APIs that revolutionizes how we interact with data. Unlike traditional REST APIs, GraphQL enables clients to request only the data they need...",
      path: "understanding-the-basics-of-graphql"
    },
    {
      subtitle: "Salesforce",
      content: "If you're working with Salesforce, chances are you're dealing with a lot of records and performing multiple operations on them. Whether it's creating, updating, or deleting records...",
      title: "Unlocking Efficiency with Salesforce Composite API",
      path: "unlocking-efficiency-with-salesforce-composite-api"
    },
    {
      subtitle: "MuleSoft",
      title: "Expose External Data to Salesforce via OData in MuleSoft",
      content: "What is OData? OData (Open Data Protocol) is a protocol that allows the creation and consumption of RESTful APIs. It is designed for querying and manipulating data through HTTP-based requests...",
      path: "expose-external-data-to-salesforce-via-odata-in-mulesoft"
    }
  ];

  const cardColours = ["#fcc003", "#0176d3", "#5867e8"];

  return (
    <>
      {/* Title Section */}
      <section className="bg-black py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center text-white leading-tight">
            Explore Our Blog for Expert Perspectives and Inspiration
          </h2>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {blogData.map((blog, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden w-full sm:w-[290px] md:w-[360px]"
                style={{
                  boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Colored Top Bar */}
                <div
                  className="w-full h-2"
                  style={{ backgroundColor: cardColours[index] || cardColours[0] }}
                ></div>
                
                <div className="p-6 sm:p-8 flex flex-col justify-between min-h-[350px]">
                  <div className="flex flex-col gap-4 mb-6">
                    <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wide">
                      {blog.subtitle}
                    </p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-tight">
                      {blog.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed line-clamp-4">
                      {blog.content}
                    </p>
                  </div>
                  
                  <a
                    href={`https://blogs.mulecraft.in/${blog.path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border-2 border-white/20 text-white hover:bg-white/10 px-4 py-2 text-sm sm:text-base font-semibold rounded-lg transition-colors w-fit"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCards;

