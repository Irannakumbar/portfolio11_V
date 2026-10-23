import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileDown, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1120]/90 backdrop-blur-md border-b border-[#26344B] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-[#0B1120]/60 backdrop-blur-sm border-b border-[#26344B]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Left: Brand Monogram & Name */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
            aria-label="Vasanta S Mathad Home"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded bg-[#3B82F6]/10 border border-[#3B82F6]/40 group-hover:border-[#3B82F6] group-hover:bg-[#3B82F6]/20 transition-all duration-200 shadow-[0_0_12px_rgba(59,130,246,0.2)]">
              <span className="font-mono text-xs font-bold text-[#3B82F6] tracking-tight">VSM.</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-wider text-[#F8FAFC] group-hover:text-white transition-colors">
                VASANTA S MATHAD
              </span>
              <span className="font-mono text-[10px] text-[#A8B3C7] tracking-widest uppercase">
                FULL STACK DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`relative px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#60A5FA] bg-[#151F32] border border-[#26344B]'
                      : 'text-[#A8B3C7] hover:text-[#F8FAFC] hover:bg-[#111827]'
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#26344B] bg-[#111827] text-[#A8B3C7] hover:text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-all text-xs font-mono"
              title="Preview / Download Resume"
            >
              <FileDown className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-md bg-[#3B82F6] text-white font-semibold text-xs tracking-wide hover:bg-[#60A5FA] hover:shadow-[0_0_18px_rgba(59,130,246,0.4)] transition-all cursor-pointer"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-[#151F32] border border-[#26344B] text-[#A8B3C7] hover:text-[#F8FAFC] hover:border-[#3B82F6]/40 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#3B82F6]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#26344B] bg-[#0B1120]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#26344B]/60 text-[11px] font-mono text-[#A8B3C7]">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
              NAVIGATION_INDEX
            </span>
            <span className="text-[#3B82F6]">ONLINE</span>
          </div>

          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#60A5FA] bg-[#151F32] border border-[#26344B]'
                    : 'text-[#A8B3C7] hover:text-[#F8FAFC] hover:bg-[#111827]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  {isActive && <span className="font-mono text-xs text-[#3B82F6]">ACTIVE</span>}
                </div>
              </a>
            );
          })}

          <div className="pt-3 border-t border-[#26344B]/60 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-[#26344B] bg-[#111827] text-[#F8FAFC] font-mono text-xs"
            >
              <FileDown className="w-4 h-4 text-[#3B82F6]" />
              <span>Preview &amp; Download Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#3B82F6] text-white font-bold text-xs tracking-wide shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
