import { useState } from "react";
import { Link } from "react-router-dom";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Footer } from "@/components/Footer";
import { ChevronRight, ChevronDown } from "lucide-react";

const PrivacyContent = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['information', 'cookies', 'service-providers', 'security', 'links', 'children']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Mobile Dropdown */}
      <div className="lg:hidden bg-white/5 backdrop-blur-sm border-b border-white/10 py-4 px-4">
        <div className="mb-2">
          <h3 className="text-sm font-semibold text-white">Legal</h3>
        </div>
        <div className="relative">
          <select 
            className="w-full text-xs text-white bg-white/10 border border-white/20 rounded px-3 py-2 outline-none"
            onChange={(e) => {
              if (e.target.value === '/privacy-policy') {
                window.location.href = '/privacy-policy';
              } else if (e.target.value === '/terms-of-use') {
                window.location.href = '/terms-of-use';
              }
            }}
            defaultValue="/privacy-policy"
          >
            <option value="/privacy-policy" className="bg-black text-white">Privacy Policy</option>
            <option value="/terms-of-use" className="bg-black text-white">Terms & Conditions</option>
          </select>
        </div>
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 sticky top-24"
              style={{
                boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1)',
              }}
            >
              <h2 className="text-lg font-semibold text-white mb-6">Legal</h2>
              <nav className="space-y-1">
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00A1FF] to-[#0066CC]"></div>
                  <div className="py-3 px-4 text-sm text-white font-medium">
                    Privacy Policy
                  </div>
                </div>
                <Link
                  to="/terms-of-use"
                  className="block py-3 px-4 text-sm text-white/60 hover:text-white transition-colors"
                >
                  Terms & Service
                </Link>
              </nav>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm text-white/60 mb-2">Questions?</p>
                <p className="text-sm text-white/60">7708443455</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
              Mulecraft built the Mulecraft app as [open
              source/free/freemium/ad-supported/commercial] app. This SERVICE is
              provided by Mulecraft at no cost and is intended for use as is. This
              page is used to inform visitors regarding our policies with the
              collection, use, and disclosure of Personal Information if anyone
              decided to use our Service. If you choose to use our Service, then you
              agree to the collection and use of information in relation to this
              policy. The Personal Information that we collect is used for providing
              and improving the Service. We will not use or share your information
              with anyone except as described in this Privacy Policy. The terms used
              in this Privacy Policy have the same meanings as in our Terms and
              Conditions, which are accessible at Mulecraft unless otherwise defined
              in this Privacy Policy.
            </p>

            {/* Information Collection Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('information')}
                className="w-full flex items-center justify-between text-xl sm:text-2xl font-semibold text-white py-3"
              >
                <span>Information Collection and Use</span>
                {expandedSections.includes('information') ? (
                  <ChevronDown className="h-5 w-5 text-white" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-white" />
                )}
              </button>
              {expandedSections.includes('information') && (
                <div className="pl-4 border-l-2 border-white/20 mt-4">
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    For a better experience, while using our Service, we may
                    require you to provide us with certain personally identifiable
                    information. The information that we request will be retained
                    by us and used as described in this privacy policy.
                  </p>
                </div>
              )}
            </div>

            {/* Cookies Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('cookies')}
                className="w-full flex items-center justify-between text-xl sm:text-2xl font-semibold text-white py-3"
              >
                <span>Cookies</span>
                {expandedSections.includes('cookies') ? (
                  <ChevronDown className="h-5 w-5 text-white" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-white" />
                )}
              </button>
              {expandedSections.includes('cookies') && (
                <div className="pl-4 border-l-2 border-white/20 mt-4">
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    Cookies are files with a small amount of data that are
                    commonly used as anonymous unique identifiers. These are sent
                    to your browser from the websites that you visit and are
                    stored on your device's internal memory. This Service does not
                    use these "cookies" explicitly. However, the app may use
                    third-party code and libraries that use "cookies" to collect
                    information and improve their services. You have the option to
                    either accept or refuse these cookies and know when a cookie
                    is being sent to your device. If you choose to refuse our
                    cookies, you may not be able to use some portions of this
                    Service.
                  </p>
                </div>
              )}
            </div>

            {/* Service Providers Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('service-providers')}
                className="w-full flex items-center justify-between text-xl sm:text-2xl font-semibold text-white py-3"
              >
                <span>Service Providers</span>
                {expandedSections.includes('service-providers') ? (
                  <ChevronDown className="h-5 w-5 text-white" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-white" />
                )}
              </button>
              {expandedSections.includes('service-providers') && (
                <div className="pl-4 border-l-2 border-white/20 mt-4">
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-4">
                    We may employ third-party companies and individuals due to the
                    following reasons:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-white/80 mb-4">
                    <li>To facilitate our Service;</li>
                    <li>To provide the Service on our behalf;</li>
                    <li>To perform Service-related services; or</li>
                    <li>To assist us in analyzing how our Service is used.</li>
                  </ul>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    We want to inform users of this Service that these third
                    parties have access to their Personal Information. The reason
                    is to perform the tasks assigned to them on our behalf.
                    However, they are obligated not to disclose or use the
                    information for any other purpose.
                  </p>
                </div>
              )}
            </div>

            {/* Security Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('security')}
                className="w-full flex items-center justify-between text-xl sm:text-2xl font-semibold text-white py-3"
              >
                <span>Security</span>
                {expandedSections.includes('security') ? (
                  <ChevronDown className="h-5 w-5 text-white" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-white" />
                )}
              </button>
              {expandedSections.includes('security') && (
                <div className="pl-4 border-l-2 border-white/20 mt-4">
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    We value your trust in providing us your Personal Information,
                    thus we are striving to use commercially acceptable means of
                    protecting it. But remember that no method of transmission
                    over the internet, or method of electronic storage is 100%
                    secure and reliable, and we cannot guarantee its absolute
                    security.
                  </p>
                </div>
              )}
            </div>

            {/* Links to Other Sites Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('links')}
                className="w-full flex items-center justify-between text-xl sm:text-2xl font-semibold text-white py-3"
              >
                <span>Links to Other Sites</span>
                {expandedSections.includes('links') ? (
                  <ChevronDown className="h-5 w-5 text-white" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-white" />
                )}
              </button>
              {expandedSections.includes('links') && (
                <div className="pl-4 border-l-2 border-white/20 mt-4">
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    This Service may contain links to other sites. If you click on
                    a third-party link, you will be directed to that site. Note
                    that these external sites are not operated by us. Therefore,
                    we strongly advise you to review the Privacy Policy of these
                    websites. We have no control over and assume no responsibility
                    for the content, privacy policies, or practices of any
                    third-party sites or services.
                  </p>
                </div>
              )}
            </div>

            {/* Children's Privacy Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('children')}
                className="w-full flex items-center justify-between text-xl sm:text-2xl font-semibold text-white py-3"
              >
                <span>Children's Privacy</span>
                {expandedSections.includes('children') ? (
                  <ChevronDown className="h-5 w-5 text-white" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-white" />
                )}
              </button>
              {expandedSections.includes('children') && (
                <div className="pl-4 border-l-2 border-white/20 mt-4">
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    We do not knowingly collect personally identifiable
                    information from children. We encourage all children to never
                    submit any personally identifiable information through the
                    Application and/or Services. We encourage parents and legal
                    guardians to monitor their children's Internet usage and to
                    help enforce this Policy by instructing their children never
                    to provide personally identifiable information through the
                    Application and/or Services without their permission. If you
                    have reason to believe that a child has provided personally
                    identifiable information to us through the Application and/or
                    Services, please contact us. You must also be at least 16
                    years of age to consent to the processing of your personally
                    identifiable information in your country (in some countries we
                    may allow your parent or guardian to do so on your behalf).
                  </p>
                </div>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-white mt-8 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
              We may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. We will
              notify you of any changes by posting the new Privacy Policy on this
              page. This policy is effective as of 2023-07-31
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-white mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              If you have any questions or suggestions about our Privacy Policy, do
              not hesitate to contact us at{" "}
              <a href="mailto:info@mulecraft.in" className="text-[#00A1FF] hover:underline">
                info@mulecraft.in.
              </a>
            </p>
          </main>
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroCarousel />
      <PrivacyContent />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

