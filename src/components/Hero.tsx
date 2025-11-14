import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-pink via-brand-purple to-brand-blue min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMCAzMnYtMiAyem0tMiAwaDJ6bTAtMzJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Your Digital Connectivity with MuleSoft Mastery!
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Our expertise in MuleSoft empowers us to provide comprehensive consulting services, 
              assisting organizations in defining integration strategies, optimizing existing integrations, 
              and implementing best practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                Connect With Us
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-300 text-xl">★</span>
                ))}
              </div>
              <span className="text-white/90 text-sm">Trusted by leading enterprises worldwide</span>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-white/10 backdrop-blur-sm rounded-full"></div>
              <div className="relative bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white/90 rounded-xl p-4 transform hover:scale-105 transition-transform">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Integration</p>
                      <p className="text-sm text-gray-600">Seamless connectivity</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/90 rounded-xl p-4 transform hover:scale-105 transition-transform">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Automation</p>
                      <p className="text-sm text-gray-600">AI-driven workflows</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
