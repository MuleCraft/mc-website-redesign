import { Linkedin, Twitter, Github } from 'lucide-react';

const navColumns = [
    {
        title: 'DEVELOPERS',
        links: [
            { text: 'Developer Hub', href: '#' },
            { text: 'Code Samples and Guides', href: '#' },
            { text: 'Blog posts', href: '#' },
            { text: 'MuleCraft Academy', href: '#' },
            { text: 'Resources', href: '#' },
        ],
    },
    {
        title: 'DOCUMENTATION',
        links: [
            { text: 'Articles', href: '#' },
            { text: 'Quickstarts', href: '#' },
            { text: 'APIs', href: '#' },
            { text: 'SDK Libraries', href: '#' },
            { text: 'Changelog', href: '#' },
            { text: 'Blog', href: '#' },
            { text: 'Reports', href: '#' },
            { text: 'Webinars', href: '#' },
        ],
    },
    {
        title: 'SUPPORT CENTER',
        links: [
            { text: 'Community', href: '#' },
            { text: 'Support', href: '#' },
            { text: 'Help', href: '#' },
            { text: 'FAQs', href: '#' },
            { text: 'Contact Us', href: '#' },
        ],
    },
    {
        title: 'COMPANY',
        links: [
            { text: 'Our Customers', href: '#' },
            { text: 'Compliance - Ensuring privacy and security', href: '#' },
            { text: 'Partners', href: '#' },
            { text: 'Careers', href: '#' },
            { text: 'About us', href: '#' },
        ],
    },
    {
        title: 'GET INVOLVED',
        links: [
            { text: 'Events', href: '#' },
            { text: 'MuleCraft Research Program', href: '#' },
        ],
    },
    {
        title: 'LEARNING',
        links: [
            { text: 'Learn', href: '#' },
            { text: 'Intro to Integration Platforms', href: '#' },
            { text: 'Blog', href: '#' },
        ],
    },
    {
        title: 'PLATFORM',
        links: [
            { text: 'MuleSoft Services', href: '#' },
            { text: 'SnapLogic Integration', href: '#' },
            { text: 'Digibee Solutions', href: '#' },
            { text: 'WSO2 API Management', href: '#' },
            { text: 'Access Management', href: '#' },
            { text: 'Security', href: '#' },
            { text: 'Cloud deployments', href: '#' },
            { text: 'Fine-Grained Authorization', href: '#' },
        ],
    },
    {
        title: 'FEATURES',
        links: [
            { text: 'Mule 4 Migration', href: '#' },
            { text: 'Mule B2B Integration', href: '#' },
            { text: 'Salesforce Integration', href: '#' },
            { text: 'API Development', href: '#' },
            { text: 'Machine to Machine', href: '#' },
            { text: 'Ops & Maintenance', href: '#' },
            { text: 'Managed Services', href: '#' },
            { text: 'Training & Certification', href: '#' },
        ],
    },
];

const legalLinks = [
    { text: 'Status', href: '#' },
    { text: 'Legal', href: '#' },
    { text: 'Privacy', href: '#' },
    { text: 'Terms', href: '#' },
];

const socialLinks = [
    { Icon: Twitter, href: '#', name: 'Twitter' },
    { Icon: Linkedin, href: '#', name: 'LinkedIn' },
    { Icon: Github, href: '#', name: 'GitHub' },
];

export const Footer = () => {
    return (
        <footer className="bg-black text-white font-sans">
            <div className="mx-auto max-w-[1400px] px-8 pt-16 pb-8 lg:pt-20 lg:pb-12">
                <div className="mb-16 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
                    {navColumns.map((column) => (
                        <div key={column.title}>
                            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">
                                {column.title}
                            </h4>
                            <ul className="space-y-2.5">
                                {column.links.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} className="text-sm leading-relaxed text-white transition-colors duration-200 hover:text-white/80 hover:underline">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
                {/* Social Media Icons */}
                <div className="mb-8 flex items-center gap-6">
                    {socialLinks.map(({ Icon, href, name }) => (
                        <a key={name} href={href} aria-label={name} target="_blank" rel="noopener noreferrer" className="text-white/60 transition-all hover:scale-110 hover:text-white">
                            <Icon className="h-5 w-5" />
                        </a>
                    ))}
                </div>
                
                {/* Bottom Footer Bar */}
                <div className="border-t border-white/20 pt-6">
                    <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
                        <div className="text-sm text-white/50">
                            © 2025 MuleCraft, Inc. All Rights Reserved.
                        </div>
                        <nav>
                            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:gap-x-6">
                                {legalLinks.map((link, index) => (
                                    <li key={link.text} className="flex items-center">
                                        <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                                            {link.text}
                                        </a>
                                        {index < legalLinks.length - 1 && (
                                            <span className="ml-4 select-none text-white/60 lg:ml-6" aria-hidden="true">|</span>
                                        )}
                                    </li>
                                ))}
                                <li className="flex items-center">
                                    <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                                        Your Privacy Choices
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};
