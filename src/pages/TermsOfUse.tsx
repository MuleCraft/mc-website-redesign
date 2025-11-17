import { useState } from "react";
import { Link } from "react-router-dom";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Footer } from "@/components/Footer";
import { ChevronRight, ChevronDown } from "lucide-react";

const TermsContent = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['service', 'security']);

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
            defaultValue="/terms-of-use"
          >
            <option value="/terms-of-use" className="bg-black text-white">Terms & Conditions</option>
            <option value="/privacy-policy" className="bg-black text-white">Privacy Policy</option>
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
                <Link
                  to="/privacy-policy"
                  className="block py-3 px-4 text-sm text-white/60 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00A1FF] to-[#0066CC]"></div>
                  <div className="py-3 px-4 text-sm text-white font-medium">
                    Terms & Service
                  </div>
                </div>
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
              Terms & Conditions
            </h1>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
              By downloading or using the app, these terms will automatically apply
              to you – you should make sure therefore that you read them carefully
              before using the app. You're not allowed to copy or modify the app,
              any part of the app, or our trademarks in any way. You're not allowed
              to attempt to extract the source code of the app, and you also
              shouldn't try to translate the app into other languages or make
              derivative versions. The app itself, and all the trademarks,
              copyright, database rights, and other intellectual property rights
              related to it, still belong to Mulecraft.
            </p>

            {/* Service Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('service')}
                className="w-full flex items-center justify-between text-xl sm:text-2xl font-semibold text-white py-3"
              >
                <span>Service</span>
                {expandedSections.includes('service') ? (
                  <ChevronDown className="h-5 w-5 text-white" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-white" />
                )}
              </button>
              {expandedSections.includes('service') && (
                <div className="pl-4 border-l-2 border-white/20 space-y-4 mt-4">
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    Mulecraft is committed to ensuring that the app is as useful
                    and efficient as possible. For that reason, we reserve the
                    right to make changes to the app or to charge for its
                    services, at any time and for any reason. We will never
                    charge you for the app or its services without making it
                    very clear to you exactly what you're paying for.
                  </p>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    The Mulecraft app stores and processes personal data that
                    you have provided to us, to provide our Service. It's your
                    responsibility to keep your phone and access to the app
                    secure. We therefore recommend that you do not jailbreak or
                    root your phone, which is the process of removing software
                    restrictions and limitations imposed by the official
                    operating system of your device. It could make your phone
                    vulnerable to malware/viruses/malicious programs, compromise
                    your phone's security features and it could mean that the
                    Mulecraft app won't work properly or at all.
                  </p>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    You should be aware that there are certain things that
                    Mulecraft will not take responsibility for. Certain
                    functions of the app will require the app to have an active
                    internet connection. The connection can be Wi-Fi or provided
                    by your mobile network provider, but Mulecraft cannot take
                    responsibility for the app not working at full functionality
                    if you don't have access to Wi-Fi, and you don't have any of
                    your data allowance left.
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
                <div className="pl-4 border-l-2 border-white/20 space-y-4 mt-4">
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    If you're using the app outside of an area with Wi-Fi, you
                    should remember that the terms of the agreement with your
                    mobile network provider will still apply. As a result, you
                    may be charged by your mobile provider for the cost of data
                    for the duration of the connection while accessing the app,
                    or other third-party charges. In using the app, you're
                    accepting responsibility for any such charges, including
                    roaming data charges if you use the app outside of your home
                    territory (i.e. region or country) without turning off data
                    roaming. If you are not the bill payer for the device on
                    which you're using the app, please be aware that we assume
                    that you have received permission from the bill payer for
                    using the app.
                  </p>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    Along the same lines, Mulecraft cannot always take
                    responsibility for the way you use the app i.e. You need to
                    make sure that your device stays charged – if it runs out of
                    battery and you can't turn it on to avail the Service,
                    Mulecraft cannot accept responsibility.
                  </p>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    With respect to Mulecraft's responsibility for your use of
                    the app, when you're using the app, it's important to bear
                    in mind that although we endeavor to ensure that it is
                    updated and correct at all times, we do rely on third
                    parties to provide information to us so that we can make it
                    available to you. Mulecraft accepts no liability for any
                    loss, direct or indirect, you experience as a result of
                    relying wholly on this functionality of the app. At some
                    point, we may wish to update the app. The app is currently
                    available on – the requirements for the system(and for any
                    additional systems we decide to extend the availability of
                    the app to) may change, and you'll need to download the
                    updates if you want to keep using the app. Mulecraft does
                    not promise that it will always update the app so that it is
                    relevant to you and/or works with the version that you have
                    installed on your device. However, you promise to always
                    accept updates to the application when offered to you, We
                    may also wish to stop providing the app, and may terminate
                    use of it at any time without giving notice of termination
                    to you. Unless we tell you otherwise, upon any termination,
                    (a) the rights and licenses granted to you in these terms
                    will end; (b) you must stop using the app, and (if needed)
                    delete it from your device.
                  </p>
                </div>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-white mt-8 mb-4">
              Changes to This Terms and Conditions
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
              We may update our Terms and Conditions from time to time. Thus, you
              are advised to review this page periodically for any changes. We will
              notify you of any changes by posting the new Terms and Conditions on
              this page. These terms and conditions are effective as of 2023-07-31
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

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroCarousel />
      <TermsContent />
      <Footer />
    </div>
  );
};

export default TermsOfUse;

