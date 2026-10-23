import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

const LinkedinIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0B1120] border-t border-[#26344B] text-[#A8B3C7] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#26344B]/60 items-center">
          
          {/* Brand Monogram & Info */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-7 h-7 rounded bg-[#3B82F6]/10 border border-[#3B82F6]/40">
                <span className="font-mono text-xs font-bold text-[#3B82F6]">VSM.</span>
              </div>
              <span className="font-display text-sm font-bold tracking-wider text-[#F8FAFC]">
                VASANTA S MATHAD
              </span>
            </div>
            <p className="text-xs text-[#A8B3C7] max-w-sm">
              MCA Student &amp; Aspiring Full Stack Developer. Dedicated to crafting reliable, scalable digital solutions with Java, React, and modern databases.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#60A5FA] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <div className="md:col-span-3 flex md:justify-end items-center gap-3">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#151F32] border border-[#26344B] text-xs font-mono text-[#F8FAFC] hover:border-[#3B82F6]/60 hover:text-[#60A5FA] transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#3B82F6]" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A8B3C7]">
          
          {/* Left: Built by */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] inline-block" />
            <span>Designed and built by <strong className="text-[#F8FAFC]">Vasanta S Mathad</strong></span>
          </div>

          {/* Center / Right: Social Links & Copyright */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/vasanta-mathad-009650395"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#60A5FA] transition-colors flex items-center gap-1"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/vasanta2004"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#60A5FA] transition-colors flex items-center gap-1"
              aria-label="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="mailto:vasanta.mca@gmail.com"
              className="hover:text-[#60A5FA] transition-colors flex items-center gap-1"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <span className="text-[#A8B3C7]/60">© {currentYear}</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
