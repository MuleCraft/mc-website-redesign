import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Youtube, Instagram } from 'lucide-react';

const navColumns = [
    {
        title: 'WHY BOOMI',
        links: [
            { text: 'The Boomi Difference', href: '#' },
            { text: 'What is iPaaS?', href: '#' },
            { text: 'Pricing & Editions', href: '#' },
            { text: 'Boomi vs Mulesoft', href: '#' },
            { text: 'Boomi vs Workato', href: '#' },
            { text: 'Migrate from TIBCO to Boomi', href: '#' },
        ],
    },
    {
        title: 'CAPABILITIES',
        links: [
            { text: 'Boomi Platform Overview', href: '#' },
            { text: 'Integration & Automation', href: '#' },
            { text: 'AI Management', href: '#' },
            { text: 'Data Management', href: '#' },
            { text: 'API Management', href: '#' },
            { text: 'Product Updates', href: '#' },
        ],
    },
    {
        title: 'RESOURCES',
        links: [
            { text: 'Resource Center', href: '#' },
            { text: 'Blog', href: '#' },
            { text: 'Events & Webinars', href: '#' },
            { text: 'Training', href: '#' },
            { text: 'Community', href: '#' },
            { text: 'Documentation', href: '#' },
        ],
    },
    {
        title: 'SUPPORT',
        links: [
            { text: 'Help Docs', href: '#' },
            { text: 'Submit a Ticket', href: '#' },
            { text: 'System Status', href: '#' },
            { text: 'Developer Docs', href: '#' },
        ],
    },
    {
        title: 'COMPANY',
        links: [
            { text: 'About', href: '#' },
            { text: 'Careers', href: '#' },
            { text: 'Team', href: '#' },
            { text: 'Newsroom', href: '#' },
            { text: 'Innovation', href: '#' },
            { text: 'Contact us', href: '#' },
        ],
    },
    {
        title: 'GET STARTED',
        links: [
            { text: 'Start Free Trial', href: '#' },
            { text: 'Watch Demo', href: '#' },
            { text: 'Request a Demo', href: '#' },
            { text: 'Explore Marketplace', href: '#' },
        ],
    },
];

const legalLinks = [
    { text: 'Privacy', href: '#' },
    { text: 'Compliance', href: '#' },
    { text: 'Terms of Service', href: '#' },
    { text: 'Cookie Preference', href: '#' },
];

const socialLinks = [
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/boomi-inc', name: 'LinkedIn' },
    { Icon: Facebook, href: 'https://www.facebook.com/Boomi/', name: 'Facebook' },
    { Icon: Youtube, href: 'https://www.youtube.com/channel/UC-nL33a5I3a_CEh22iTuXqA', name: 'YouTube' },
    { Icon: Instagram, href: 'https://www.instagram.com/boomi_inc/', name: 'Instagram' },
];

export const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#002144' }} className="text-white font-sans">
            <div className="mx-auto max-w-[1400px] px-8 pt-12 pb-6 lg:pt-16 lg:pb-8">
                <div className="mb-12 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    {navColumns.map((column) => (
                        <div key={column.title}>
                            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white/60">
                                {column.title}
                            </h4>
                            <ul className="space-y-0.5">
                                {column.links.map((link) => (
                                    <li key={link.text}>
                                        <Link to={link.href} className="text-[15px] leading-loose text-white/80 transition-colors duration-200 hover:text-white hover:underline">
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-white/20 pt-8">
                    <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
                            <Link to="/">
                                <img
                                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/Boomi-Logo-White-Footer-109.svg"
                                    alt="Boomi Logo"
                                    className="h-10 w-auto"
                                />
                            </Link>
                            <p className="max-w-xs text-sm text-white/60">
                                The #1 intelligent iPaaS for digital transformation.
                            </p>
                        </div>
                        
                        <nav className="order-last lg:order-none">
                            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 lg:gap-x-6">
                                {legalLinks.map((link, index) => (
                                    <li key={link.text} className="flex items-center">
                                        <Link to={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                                            {link.text}
                                        </Link>
                                        {index < legalLinks.length - 1 && (
                                            <span className="ml-4 select-none text-white/60 lg:ml-6" aria-hidden="true">|</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        
                        <div className="flex shrink-0 items-center gap-6">
                            <div className="flex items-center gap-6">
                                {socialLinks.map(({ Icon, href, name }) => (
                                    <a key={name} href={href} aria-label={name} target="_blank" rel="noopener noreferrer" className="text-white/60 transition-all hover:scale-110 hover:text-white">
                                        <Icon className="h-6 w-6" />
                                    </a>
                                ))}
                            </div>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/svgs/G2-Review-Footer-1-1-110.svg"
                                    alt="G2 Review Badge"
                                    className="h-9 w-auto"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-[13px] text-white/50 lg:mt-6 lg:text-left">
                        © 2025 Copyright Boomi, LP. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};
