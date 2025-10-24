'use client';

import { useState } from 'react';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const navigationLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/codesaathi',
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:hello@codesaathi.com',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/codesaathi',
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/codesaathi',
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden" role="contentinfo">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" aria-hidden="true">
        <svg
          className="relative block w-full h-12 sm:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-purple-50"
          ></path>
        </svg>
      </div>

      <div className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Left: Navigation Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-3">
                  {navigationLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="inline-block text-gray-300 hover:text-white transition-all duration-300 relative group"
                      >
                        <span className="relative z-10">{link.name}</span>
                        <span
                          className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                            hoveredLink === link.name ? 'w-full' : 'w-0'
                          }`}
                        ></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Center: Brand & Copyright */}
            <div className="text-center flex flex-col justify-center">
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  CodeSaathi
                </h2>
                <p className="text-gray-400 text-sm mt-2">
                  Empowering the next generation of coders
                </p>
              </div>
              
              {/* Copyright with Accent Line */}
              <div className="mt-4">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
                  <div className="text-gray-400 text-sm font-medium">
                    © {new Date().getFullYear()} CodeSaathi
                  </div>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500"></div>
                </div>
                <p className="text-gray-500 text-xs">All rights reserved.</p>
              </div>

              {/* Legal Links - Desktop Inline */}
              <div className="hidden sm:flex items-center justify-center gap-4 mt-4">
                {legalLinks.map((link, index) => (
                  <span key={link.name} className="flex items-center gap-4">
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-xs font-medium transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </a>
                    {index < legalLinks.length - 1 && (
                      <span className="text-gray-600">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Social Icons */}
            <div className="flex md:justify-end justify-center items-start">
              <div>
                <h3 className="text-lg font-bold text-white mb-4 text-center md:text-right">
                  Connect With Us
                </h3>
                <div className="flex gap-4" role="list">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      onMouseEnter={() => setHoveredSocial(social.name)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-500 ${
                        hoveredSocial === social.name
                          ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/50'
                          : 'text-gray-400 hover:text-white'
                      }`}
                      aria-label={`Visit our ${social.name} page`}
                      target="_blank"
                      rel="noopener noreferrer"
                      role="listitem"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links - Mobile Stacked */}
          <div className="sm:hidden border-t border-gray-800 pt-6">
            <nav aria-label="Legal links">
              <ul className="flex flex-col items-center gap-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Bottom Divider */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
              <p>Built with ❤️ for developers everywhere</p>
              <p className="flex items-center gap-2">
                <span>Made in India 🇮🇳</span>
                <span className="text-gray-700">•</span>
                <a
                  href="#top"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-1 group"
                >
                  Back to top
                  <svg
                    className="w-3 h-3 transform group-hover:-translate-y-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" aria-hidden="true"></div>
    </footer>
  );
}
