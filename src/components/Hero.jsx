import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, MapPin, GraduationCap, Sparkles, Download, Copy, Check, Terminal, Code2 } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('profile');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('vasanta.mca@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0B1120]">
      {/* Subtle Tech Grid and Radial Blue Glow Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Bio, CTAs, Badges */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#151F32] border border-[#26344B] w-fit shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B82F6]"></span>
              </span>
              <span className="font-mono text-xs font-semibold text-[#A8B3C7] tracking-wider uppercase">
                MCA STUDENT · FULL STACK DEVELOPER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12]">
              Turning ideas into{' '}
              <span className="text-[#3B82F6] drop-shadow-[0_0_24px_rgba(59,130,246,0.35)]">
                practical digital solutions.
              </span>
            </h1>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-[#A8B3C7] leading-relaxed max-w-2xl font-normal">
              I'm <strong className="text-[#F8FAFC] font-semibold">Vasanta S Mathad</strong>, an MCA student with an interest in full-stack development. I enjoy building applications, exploring new technologies, and improving my programming skills through practical projects.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#3B82F6] text-white font-bold text-sm tracking-wide hover:bg-[#60A5FA] hover:shadow-[0_0_24px_rgba(59,130,246,0.4)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href="/resume.pdf"
                download="Vasanta_S_Mathad_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#151F32] border border-[#26344B] text-[#F8FAFC] font-medium text-sm hover:border-[#3B82F6]/60 hover:bg-[#1E293B] transition-all cursor-pointer"
                title="Download verified resume as Vasanta_S_Mathad_Resume.pdf"
              >
                <Download className="w-4 h-4 text-[#3B82F6]" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-md bg-[#111827] border border-[#26344B] text-[#A8B3C7] hover:text-[#3B82F6] hover:border-[#3B82F6]/40 transition-all font-mono text-xs"
              >
                <span>Quick View</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Information telemetry badges */}
            <div className="pt-4 border-t border-[#26344B]/70 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A8B3C7] bg-[#111827] px-3 py-2 rounded-md border border-[#26344B]">
                <MapPin className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                <span className="truncate">Hubli, Karnataka, India</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#A8B3C7] bg-[#111827] px-3 py-2 rounded-md border border-[#26344B]">
                <GraduationCap className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                <span className="truncate">MCA · 2025–2027</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#A8B3C7] bg-[#111827] px-3 py-2 rounded-md border border-[#26344B]">
                <Sparkles className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                <span className="truncate">Open to Internships</span>
              </div>
            </div>

          </div>

          {/* Right Column: Refined Code-Editor-Inspired Panel */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-[#26344B] bg-[#151F32] shadow-2xl overflow-hidden group hover:border-[#3B82F6]/50 transition-all duration-300">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#111827] border-b border-[#26344B]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-[#A8B3C7]">developer.workspace</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#3B82F6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Code Editor Tabs */}
              <div className="flex items-center bg-[#0B1120]/80 px-2 pt-2 border-b border-[#26344B] text-xs font-mono">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-3 py-1.5 rounded-t-md transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-[#151F32] text-[#60A5FA] border-t border-x border-[#26344B]'
                      : 'text-[#A8B3C7] hover:text-[#F8FAFC]'
                  }`}
                >
                  profile.ts
                </button>
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`px-3 py-1.5 rounded-t-md transition-colors ${
                    activeTab === 'stack'
                      ? 'bg-[#151F32] text-[#60A5FA] border-t border-x border-[#26344B]'
                      : 'text-[#A8B3C7] hover:text-[#F8FAFC]'
                  }`}
                >
                  tech_stack.json
                </button>
                <button
                  onClick={() => setActiveTab('status')}
                  className={`px-3 py-1.5 rounded-t-md transition-colors ${
                    activeTab === 'status'
                      ? 'bg-[#151F32] text-[#60A5FA] border-t border-x border-[#26344B]'
                      : 'text-[#A8B3C7] hover:text-[#F8FAFC]'
                  }`}
                >
                  system.log
                </button>
              </div>

              {/* Editor Content Area */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[300px]">
                {activeTab === 'profile' && (
                  <div className="space-y-1 text-[#A8B3C7]">
                    <p className="text-[#A8B3C7]/60">// Midnight Executive profile definition</p>
                    <p>
                      <span className="text-[#3B82F6]">const</span>{' '}
                      <span className="text-[#F8FAFC]">developer</span> = {'{'}
                    </p>
                    <p className="pl-4">
                      <span className="text-[#A8B3C7]">name:</span>{' '}
                      <span className="text-[#F8FAFC]">"Vasanta S Mathad"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#A8B3C7]">role:</span>{' '}
                      <span className="text-[#60A5FA]">"Full Stack Developer"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#A8B3C7]">coreStack:</span>{' '}
                      <span className="text-[#F8FAFC]">["Java", "React", "Spring Boot", "MongoDB"]</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#A8B3C7]">education:</span>{' '}
                      <span className="text-[#F8FAFC]">"MCA @ Chetan Business School"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#A8B3C7]">location:</span>{' '}
                      <span className="text-[#F8FAFC]">"Hubli, Karnataka, India"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#A8B3C7]">openToRoles:</span>{' '}
                      <span className="text-[#3B82F6]">true</span>
                    </p>
                    <p>{'}'};</p>
                    <div className="pt-3 flex items-center gap-1 text-[#3B82F6]">
                      <span>&gt; system_check: VERIFIED</span>
                      <span className="animate-blink font-bold">_</span>
                    </div>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="space-y-1 text-[#A8B3C7]">
                    <p className="text-[#A8B3C7]/60">// Verified technical capabilities</p>
                    <p className="text-[#F8FAFC]">{'{'}</p>
                    <p className="pl-4">
                      <span className="text-[#3B82F6]">"languages"</span>: ["Java", "Python", "JavaScript (Basics)"],
                    </p>
                    <p className="pl-4">
                      <span className="text-[#3B82F6]">"frontend"</span>: ["HTML5", "CSS3", "Bootstrap", "React.js (Basic)"],
                    </p>
                    <p className="pl-4">
                      <span className="text-[#3B82F6]">"backend"</span>: ["Spring Boot (Basic)", "Node.js (Basic)", "Flask (Basic)"],
                    </p>
                    <p className="pl-4">
                      <span className="text-[#3B82F6]">"databases"</span>: ["MySQL", "MongoDB", "XAMPP"],
                    </p>
                    <p className="pl-4">
                      <span className="text-[#3B82F6]">"tools"</span>: ["Git", "GitHub", "VS Code", "Eclipse", "Postman"]
                    </p>
                    <p className="text-[#F8FAFC]">{'}'}</p>
                  </div>
                )}

                {activeTab === 'status' && (
                  <div className="space-y-1.5 text-[#A8B3C7]">
                    <p className="text-[#A8B3C7]/60">// Runtime environment diagnostic</p>
                    <p className="text-[#60A5FA] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                      <span>[SYS_OK] BCA Completed with 8.05 CGPA</span>
                    </p>
                    <p className="text-[#60A5FA] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                      <span>[SYS_OK] Pursuing MCA (2025–2027)</span>
                    </p>
                    <p className="text-[#60A5FA] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                      <span>[SYS_OK] Full Stack Certification (April 6, 2026)</span>
                    </p>
                    <p className="text-[#3B82F6] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                      <span>[ACTIVE] Temple Seva Portal &amp; CNN Monument ML</span>
                    </p>
                    <p className="text-[#A8B3C7] pl-4">
                      - Spring Boot REST Controller: Bound
                    </p>
                    <p className="text-[#A8B3C7] pl-4">
                      - MongoDB Devotee Collection: Active
                    </p>
                  </div>
                )}
              </div>

              {/* Card Footer Bar */}
              <div className="px-4 py-2 bg-[#111827] border-t border-[#26344B] flex items-center justify-between text-[11px] font-mono text-[#A8B3C7]">
                <span className="text-[#F8FAFC]">Vasanta S Mathad</span>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 hover:text-[#3B82F6] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-[#3B82F6]" />
                      <span className="text-[#3B82F6]">copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>vasanta.mca@gmail.com</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
