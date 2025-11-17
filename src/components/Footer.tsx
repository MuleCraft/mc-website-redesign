import { Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';

const navColumns = [
    {
        title: 'PRODUCTS',
        links: [
            { text: 'Community Anypoint Platform', href: '#' },
            { text: 'MuleCraft Academy', href: '#' },
            { text: 'Active Mq', href: '#' },
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
    {
        title: 'RESOURCES',
        links: [
            { text: 'Blog', href: '#' },
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
        <footer className="bg-black text-white font-sans">
            <div className="mx-auto max-w-[1400px] px-8 pt-16 pb-8 lg:pt-20 lg:pb-12">
                <div className="mb-16 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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
                
                {/* Bottom Footer Bar */}
                <div className="border-t border-white/20 pt-6">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        {/* Left Side - Social Icons and Copyright */}
                        <div className="flex flex-col gap-4">
                            {/* Social Media Icons */}
                            <div className="flex items-center gap-4">
                                {socialLinks.map(({ Icon, href, name }) => (
                                    <a key={name} href={href} aria-label={name} target="_blank" rel="noopener noreferrer" className="text-white/60 transition-all hover:scale-110 hover:text-white">
                                        <Icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                            {/* Copyright */}
                            <div className="text-sm text-white/50">
                                © Copyright 2023 Mulecraft All rights reserved.
                            </div>
                        </div>
                        
                        {/* Right Side - Legal Links */}
                        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            {legalLinks.map((link, index) => (
                                <div key={link.text} className="flex items-center">
                                    <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                                        {link.text}
                                    </a>
                                    {index < legalLinks.length - 1 && (
                                        <span className="ml-4 select-none text-white/60" aria-hidden="true">|</span>
                                    )}
                                </div>
                            ))}
                            <div className="flex items-center">
                                <span className="ml-4 select-none text-white/60" aria-hidden="true">|</span>
                                <a href="#" className="ml-4 text-sm text-white/60 transition-colors hover:text-white">
                                    Your Privacy Choices
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};
