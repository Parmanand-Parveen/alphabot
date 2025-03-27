"use client"; 

import React from 'react';


const footerSections = [

    {
    title: 'Platform',
    links: [
      { text: 'Extended Warranty', href: '/extended-warranty' },
      { text: 'Registration', href: '/registration' },
      { text: 'Resolution', href: '/resolution' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { text: 'Documentation', href: 'https://docs.joinclyde.com/docs', external: true },
      { text: 'Blog', href: '/blog' },
      { text: 'Partnerships', href: '/partnerships' },
      { text: 'Referral Program', href: 'https://dash.partnerstack.com/handshake?next=%2Fclyde&nextApp=partner', external: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About', href: '/about' },
      { text: 'Careers', href: '/careers' },
      { text: 'Support', href: 'https://support.joinclyde.com/hc/en-us', external: true },
      { text: 'Book a Demo', href: '/connect' },
    ],
  },
  {
    title: 'Product',
    links: [
      { text: 'Merchant Login', href: 'https://app.joinclyde.com/login', external: true },
      { text: 'Customer Login', href: 'https://www.hiclyde.com/', external: true },
      { text: 'System Status', href: 'https://status.joinclyde.com', external: true },
    ],
  },
  {
    title: 'Social',
    links: [
      { text: 'LinkedIn', href: 'https://www.linkedin.com/company/joinclyde/', external: true },
      { text: 'Facebook', href: 'https://www.facebook.com/clydeprotection', external: true },
      { text: 'Twitter', href: 'https://twitter.com/join_clyde', external: true },
      { text: 'Instagram', href: 'https://www.instagram.com/joinclyde/', external: true },
    ],
  },
];


const FooterLink = ({ href, text, external = false, className = "" }) => (
  <a
    href={href}
    className={`text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200 ${className}`}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
  >
    {text}
    {external && <span className="ml-1">↗</span>}
  </a>
);


const Footer2 = () => {
  return (
    <footer className="bg-gradient-to-r from-white via-orange-400 to-red-500 text-gray-900 dark:text-gray-200">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Top section with link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 xl:gap-12 mb-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                 {/* Adjusted heading color */}
                <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wider mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <FooterLink href={link.href} text={link.text} external={link.external} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom section with logo, copyright, and privacy */}
          {/* Removed gradient from here */}
          {/* Adjusted border color for visibility */}
          <div className="mt-12 border-t border-orange-300/50 dark:border-gray-700 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Logo */}
             <div className="flex items-center justify-center md:justify-start">
                 {/* Adjusted logo color */}
                <svg viewBox="0 0 102 40" fill="currentColor" className="h-7 w-auto text-gray-900 dark:text-white">
                 {/* Paths remain the same */}
                 <path d="M15.2 26.3c-5.2 0-9.8-4.6-9.8-13 0-5.3 3.5-9.5 7.5-9.5 6.3 0 6 8 9.7 8 1.4 0 2.2-1 2.2-2.3 0-3.3-4.1-7.7-11.1-7.7C5.6 1.8 0 8.6 0 17a14 14 0 0 0 14 14.2c6.3 0 10-4.7 11.3-9.5v-.2l-.2-.2-1.1-.5h-.3c-.1 0-.2 0-.2.2a9.2 9.2 0 0 1-8.3 5.3Z" />
                 <path d="M28.5 6v25l.4.2H33s.2 0 .3-.2V.4a.4.4 0 0 0-.1-.3.4.4 0 0 0-.4 0l-5.5 2.5a.4.4 0 0 0-.2.2.4.4 0 0 0 0 .4l.5.7c.5.6.8 1.3.8 2Z" />
                 <path d="M50.8 12.8c.2.4.4 1 .4 1.5v9.3c0 3-2 5.6-4.6 5.6-2.5 0-4-2.3-4-6.4V10.5a.4.4 0 0 0-.1-.4.4.4 0 0 0-.4 0L37 11.2a.4.4 0 0 0-.3.2.4.4 0 0 0 0 .4l.5.9c.3.5.5 1 .5 1.7v7.8c0 5.7 3.4 9 7.6 9a7.4 7.4 0 0 0 5.8-2.6h.1v1c.1 6.3-2 8.6-4.5 8.6-5.6 0-4.2-6.5-7.6-6.5-1.2 0-2 .8-2 2 0 3 3.6 6.2 8.8 6.2 6.2 0 10.6-3.5 10.6-10.3V10.5a.4.4 0 0 0-.2-.4.4.4 0 0 0-.3 0l-5.3 1.1a.4.4 0 0 0-.3.2.4.4 0 0 0 0 .4l.5 1Z" />
                 <path d="m79.3 0-5.6 2.6a.4.4 0 0 0-.2.2.4.4 0 0 0 0 .4l.5.6c.5.6.8 1.5.8 2.3v6.2h-.1a.1.1 0 0 1-.1 0 7.8 7.8 0 0 0-5.8-2.3c-5.8 0-9.7 4.5-9.7 10.6 0 6 4 11.2 9.8 11.2a7.5 7.5 0 0 0 5.9-2.7.1.1 0 0 1 .1 0v.1l.2 1.6.1.3h4.5l.1-.3V.4a.4.4 0 0 0-.2-.3.4.4 0 0 0-.3 0Zm-4.5 24.2c0 3.5-2 5.5-4.6 5.5-3.5 0-5.9-4.6-5.9-10.4 0-4.4 2.4-7.5 5.2-7.5 3 0 5.3 3.2 5.3 6.6v5.8Z" />
                 <path d="M100.7 24.7h-.3l-.2.3c-.8 1.6-3 3.2-5.5 3.2-3.6 0-5.3-2-5.3-3.7 0-1.4.9-2.2 2.3-2.7l8.2-2.4a2 2 0 0 0 1-.9c.3-.4.4-.8.4-1.3a8.1 8.1 0 0 0-8.5-7.3c-6.2 0-10.3 4.6-10.3 10.7 0 6.5 4.1 11.2 10.3 11.2a9 9 0 0 0 9-6.5.4.4 0 0 0-.1-.3h-.2l-.8-.3Zm-12.5-2v.1a.1.1 0 0 1-.2 0l-.1-.3c-1.4-5 .2-10.7 4.1-10.7 2.5 0 4 2 4 4.7 0 1-.5 1.7-1.5 2.1l-3.8 1.6c-1.3.6-2.2 1.5-2.5 2.6Z" />
                </svg>
             </div>

            {/* Copyright & Privacy */}
             {/* Adjusted copyright text color */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 text-xs text-gray-700 dark:text-gray-400 uppercase tracking-wider mt-4 md:mt-0">
              {/* FooterLink already handles its colors */}
              <FooterLink href="/legal/data-privacy" text="Data & Privacy" className="text-xs uppercase tracking-wider" />
              <span>© {new Date().getFullYear()} Clyde Technologies, Inc</span>
            </div>
          </div>
       </div>
    </footer>
  );
};

export default Footer2;