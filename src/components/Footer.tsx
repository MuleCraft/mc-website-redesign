import { Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const navColumns = [
    {
        title: 'PRODUCTS',
        links: [
            { text: 'Community Anypoint Platform', href: 'https://community.platform.mulecraft.in/', external: true },
            { text: 'MuleCraft Academy', href: 'https://training.mulecraft.in/', external: true },
            { text: 'MuleSoftLP', href: 'https://mulesoft.dev/', external: true },
            { text: 'SnapMapper', href: 'https://snaplogic.playground.mulecraft.in/', external: true },
  ],
    },
    {
        title: 'MULESOFT SERVICES',
        links: [
            { text: 'Mulesoft Expertise', href: '/mulesoft-expertise', external: false },
            { text: 'Mulesoft Development', href: '/mulesoft-development', external: false },
            { text: 'Mule-4 Migration', href: '/mule-4-migration', external: false },
            { text: 'Mule B2B Integration', href: '/mule-b2b-integration', external: false },
            { text: 'Ops & Maintenance', href: '/ops-maintenance', external: false },
  ],
    },
    {
        title: 'SALESFORCE SERVICES',
        links: [
            { text: 'Sales Cloud', href: '/sales-cloud', external: false },
            { text: 'Data & Org Migration', href: '/data-org-migration', external: false },
            { text: 'Managed Services', href: '/managed-services', external: false },
  ],
    },
    {
        title: 'OTHER SERVICES',
        links: [
            { text: 'User Interface Design', href: '/ui-design', external: false },
            { text: 'Integrated Web Design', href: '/integrated-web-design', external: false },
            { text: 'Snaplogic Strategies', href: '/snaplogic-strategies', external: false },
            { text: 'Apigee API Solutions', href: '/apigee-api-solutions', external: false },
            { text: 'Training & Certification', href: '#', external: false },
  ],
    },
    {
        title: 'SUPPORT',
        links: [
            { text: 'Contact Us', href: '/contact', external: false },
            { text: 'Privacy Policy', href: '/privacy-policy', external: false },
            { text: 'Terms of Use', href: '/terms-of-use', external: false },
  ],
    },
    {
        title: 'RESOURCES',
        links: [
            { text: 'Blog', href: 'https://blogs.mulecraft.in/', external: true },
            
        ],
    },
];

const legalLinks = [
    { text: 'Privacy', href: '/privacy-policy' },
    { text: 'Terms', href: '/terms-of-use' },
    
];

const socialLinks = [
    { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100095449842036', name: 'Facebook' },
    { Icon: Twitter, href: 'https://twitter.com/mulecraft_in', name: 'Twitter' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/mulecraft/', name: 'LinkedIn' },
    { Icon: Youtube, href: 'https://www.youtube.com/@MuleCraft-mc', name: 'YouTube' },
];

export const Footer = () => {
  return (
        <footer className="bg-black text-white font-sans">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8 lg:pt-20 lg:pb-12">
                <div className="mb-8 sm:mb-12 md:mb-16 grid grid-cols-2 gap-x-3 sm:gap-x-4 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {navColumns.map((column) => (
                        <div key={column.title}>
                            <h4 className="mb-3 sm:mb-4 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/60">
                                {column.title}
                            </h4>
                            <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
                                {column.links.map((link) => (
                                    <li key={link.text}>
                                        {link.external ? (
                                            <a 
                                                href={link.href} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs sm:text-sm leading-relaxed text-white transition-colors duration-200 hover:text-white/80 hover:underline"
                                            >
                                                {link.text}
                                            </a>
                                        ) : (
                                            <Link 
                                                to={link.href} 
                                                className="text-xs sm:text-sm leading-relaxed text-white transition-colors duration-200 hover:text-white/80 hover:underline"
                                            >
                                                {link.text}
                                            </Link>
                                        )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
                {/* Bottom Footer Bar */}
                <div className="border-t border-white/20 pt-4 sm:pt-6">
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:flex-row lg:items-start lg:justify-between">
                        {/* Left Side - Social Icons and Copyright */}
                        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                            {/* Social Media Icons */}
                            <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
                                {socialLinks.map(({ Icon, href, name }) => (
                                    <a key={name} href={href} aria-label={name} target="_blank" rel="noopener noreferrer" className="text-white/60 transition-all hover:scale-110 hover:text-white">
                                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </a>
                                ))}
                            </div>
                            {/* Copyright */}
                            <div className="text-[10px] sm:text-xs md:text-sm text-white/50 leading-tight">
                                © Copyright 2023 Mulecraft All rights reserved.
              </div>
            </div>
            
                        {/* Right Side - Legal Links */}
                        <nav className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-1.5 sm:gap-y-2">
                            {legalLinks.map((link, index) => (
                                <div key={link.text} className="flex items-center">
                                    {link.href === '#' ? (
                                        <a href={link.href} className="text-[10px] sm:text-xs md:text-sm text-white/60 transition-colors hover:text-white">
                                            {link.text}
                                        </a>
                                    ) : (
                                        <Link to={link.href} className="text-[10px] sm:text-xs md:text-sm text-white/60 transition-colors hover:text-white">
                                            {link.text}
                                        </Link>
                                    )}
                                    {index < legalLinks.length - 1 && (
                                        <span className="ml-1.5 sm:ml-2 md:ml-4 select-none text-white/60 text-[10px] sm:text-xs" aria-hidden="true">|</span>
                                    )}
                                </div>
                            ))}
                            {/* <div className="flex items-center">
                                <span className="ml-1.5 sm:ml-2 md:ml-4 select-none text-white/60 text-[10px] sm:text-xs" aria-hidden="true">|</span>
                                <a href="#" className="ml-1.5 sm:ml-2 md:ml-4 text-[10px] sm:text-xs md:text-sm text-white/60 transition-colors hover:text-white">
                                    Your Privacy Choices
              </a>
                            </div> */}
                        </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
