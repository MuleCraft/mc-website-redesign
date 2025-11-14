import { Linkedin, Facebook, Youtube, Twitter } from 'lucide-react';

const navColumns = [
    {
        title: 'PRODUCTS',
        links: [
            { text: 'Community Anypoint Platform', href: '#' },
            { text: 'MuleCraft Academy', href: '#' },
            { text: 'Active Mq', href: '#' },
            { text: 'Resources', href: '#' },
            { text: 'Blog', href: '#' },
        ],
    },
    {
        title: 'MULESOFT SERVICES',
        links: [
            { text: 'Mulesoft Expertise', href: '#' },
            { text: 'Mulesoft Development', href: '#' },
            { text: 'Mule-4 Migration', href: '#' },
            { text: 'Mule B2B Integration', href: '#' },
            { text: 'Ops & Maintenance', href: '#' },
        ],
    },
    {
        title: 'SALESFORCE SERVICES',
        links: [
            { text: 'Sales Cloud', href: '#' },
            { text: 'Data & Org Migration', href: '#' },
            { text: 'Managed Services', href: '#' },
        ],
    },
    {
        title: 'OTHER SERVICES',
        links: [
            { text: 'User Interface Design', href: '#' },
            { text: 'Integrated Web Design', href: '#' },
            { text: 'Snaplogic Strategies', href: '#' },
            { text: 'Apigee API Solutions', href: '#' },
            { text: 'Training & Certification', href: '#' },
        ],
    },
    {
        title: 'SUPPORT',
        links: [
            { text: 'Contact Us', href: '#' },
            { text: 'Privacy Policy', href: '#' },
            { text: 'Terms of Use', href: '#' },
        ],
    },
];

const legalLinks = [
    { text: 'Privacy', href: '#' },
    { text: 'Terms', href: '#' },
    { text: 'Cookie', href: '#' },
    { text: 'Settings', href: '#' },
];

const socialLinks = [
    { Icon: Facebook, href: '#', name: 'Facebook' },
    { Icon: Twitter, href: '#', name: 'Twitter' },
    { Icon: Linkedin, href: '#', name: 'LinkedIn' },
    { Icon: Youtube, href: '#', name: 'YouTube' },
];

export const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#002144' }} className="text-white font-sans">
            <div className="mx-auto max-w-[1400px] px-8 pt-12 pb-6 lg:pt-16 lg:pb-8">
                <div className="mb-12 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {navColumns.map((column) => (
                        <div key={column.title}>
                            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white/60">
                                {column.title}
                            </h4>
                            <ul className="space-y-0.5">
                                {column.links.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} className="text-[15px] leading-loose text-white/80 transition-colors duration-200 hover:text-white hover:underline">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-white/20 pt-8">
                    <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
                            <a href="/">
                                <img
                                    src="/mulecraftlogo.svg"
                                    alt="MuleCraft Logo"
                                    className="h-10 w-auto"
                                />
                            </a>
                        </div>
                        
                        <nav className="order-last lg:order-none">
                            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 lg:gap-x-6">
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
                            </ul>
                            <div className="mt-2 text-center">
                                <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                                    Your Privacy Choices
                                </a>
                            </div>
                        </nav>
                        
                        <div className="flex shrink-0 items-center gap-6">
                            <div className="flex items-center gap-6">
                                {socialLinks.map(({ Icon, href, name }) => (
                                    <a key={name} href={href} aria-label={name} target="_blank" rel="noopener noreferrer" className="text-white/60 transition-all hover:scale-110 hover:text-white">
                                        <Icon className="h-6 w-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-[13px] text-white/50 lg:mt-6 lg:text-left">
                        © Copyright 2023 Mulecraft All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};
