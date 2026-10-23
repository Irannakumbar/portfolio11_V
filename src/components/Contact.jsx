import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Copy,
  Check,
  Send,
  Download,
  FileText,
  Sparkles,
} from 'lucide-react';

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Contact({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const emailAddress = 'vasanta.mca@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/vasanta-mathad-009650395';
  const githubUrl = 'https://github.com/vasanta2004';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(subject || 'Inquiry / Opportunity for Vasanta S Mathad');
    const encodedBody = encodeURIComponent(
      message
        ? `${message}\n\nSent from Vasanta S Mathad Portfolio`
        : 'Hello Vasanta,\n\nI reviewed your portfolio and would like to discuss an opportunity regarding...'
    );
    window.location.href = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-14">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase font-semibold">
              06 / CONTACT
            </span>
            <div className="h-px w-12 bg-[#26344B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Let's build something meaningful.
          </h2>
          <p className="text-sm sm:text-base text-[#A8B3C7] max-w-2xl font-normal">
            I'm always interested in learning, collaborating, and exploring opportunities to grow as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Profile Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-xl bg-[#151F32] border border-[#26344B] hover:border-[#3B82F6]/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#A8B3C7] uppercase flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-[#3B82F6]" />
                  EMAIL
                </span>
                <span className="font-mono text-[10px] text-[#60A5FA]">PRIMARY</span>
              </div>
              <p className="font-mono text-sm sm:text-base font-semibold text-[#F8FAFC] break-all mb-4">
                {emailAddress}
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#3B82F6] text-white font-bold text-xs hover:bg-[#60A5FA] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Me</span>
                </a>
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#111827] border border-[#26344B] text-[#A8B3C7] hover:text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-colors font-mono text-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#3B82F6]" />
                      <span className="text-[#60A5FA]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-xl bg-[#151F32] border border-[#26344B] hover:border-[#3B82F6]/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#A8B3C7] uppercase flex items-center gap-1.5">
                  <LinkedinIcon className="w-4 h-4 text-[#3B82F6]" />
                  PROFESSIONAL NETWORK
                </span>
                <span className="font-mono text-[10px] text-[#A8B3C7]">LINKEDIN</span>
              </div>
              <p className="text-xs text-[#A8B3C7] mb-4">
                Connect on LinkedIn for networking, professional discussions, and recruitment inquiries.
              </p>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#111827] border border-[#26344B] text-[#F8FAFC] hover:text-[#3B82F6] hover:border-[#3B82F6]/50 transition-colors font-mono text-xs"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* GitHub & Location Card */}
            <div className="p-6 rounded-xl bg-[#151F32] border border-[#26344B] hover:border-[#3B82F6]/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#A8B3C7] uppercase flex items-center gap-1.5">
                  <GithubIcon className="w-4 h-4 text-[#3B82F6]" />
                  CODE REPOSITORY
                </span>
                <span className="font-mono text-[10px] text-[#A8B3C7]">GITHUB</span>
              </div>
              <p className="text-xs text-[#A8B3C7] mb-4">
                Browse code repositories, practice projects, and open-source contributions.
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#111827] border border-[#26344B] text-[#F8FAFC] hover:text-[#3B82F6] hover:border-[#3B82F6]/50 transition-colors font-mono text-xs"
                >
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location Indicator */}
            <div className="p-4 rounded-lg bg-[#111827] border border-[#26344B] flex items-center gap-3 text-xs font-mono text-[#A8B3C7]">
              <MapPin className="w-4 h-4 text-[#3B82F6] shrink-0" />
              <span>Location: Hubli, Karnataka, India</span>
            </div>

          </div>

          {/* Right Column: Direct Message Composer & Verified Resume Card */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Direct Message Composer */}
            <div className="rounded-xl bg-[#151F32] border border-[#26344B] p-6 sm:p-8 hover:border-[#3B82F6]/50 transition-all duration-300">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#26344B]">
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4 text-[#3B82F6]" />
                  <span className="font-display text-base font-bold text-[#F8FAFC]">
                    Direct Message Dispatcher
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#A8B3C7]">
                  MAILTO PROTOCOL
                </span>
              </div>

              <p className="text-xs text-[#A8B3C7] mb-5 leading-relaxed">
                Draft a message below to instantly launch your system email client addressed directly to <strong className="text-[#F8FAFC]">vasanta.mca@gmail.com</strong>.
              </p>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label htmlFor="email-subject" className="block text-xs font-mono text-[#A8B3C7] mb-1.5 uppercase">
                    Subject Line
                  </label>
                  <input
                    id="email-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g., Software Development Internship Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111827] border border-[#26344B] text-sm text-[#F8FAFC] placeholder-[#A8B3C7]/50 focus:outline-none focus:border-[#3B82F6] transition-colors font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="email-message" className="block text-xs font-mono text-[#A8B3C7] mb-1.5 uppercase">
                    Your Message
                  </label>
                  <textarea
                    id="email-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Vasanta, I saw your portfolio and would like to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111827] border border-[#26344B] text-sm text-[#F8FAFC] placeholder-[#A8B3C7]/50 focus:outline-none focus:border-[#3B82F6] transition-colors font-sans resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-[11px] font-mono text-[#A8B3C7]/80 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                    Direct mailto protocol (transparent &amp; functional)
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#3B82F6] text-white font-bold text-xs tracking-wide hover:bg-[#60A5FA] transition-all cursor-pointer shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  >
                    <span>Launch Email Client</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </form>
            </div>

            {/* Verified Resume Card */}
            <div className="rounded-xl bg-[#151F32] border border-[#26344B] p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#3B82F6]" />
                  <span className="font-display text-sm font-bold text-[#F8FAFC]">
                    Curriculum Vitae / Resume
                  </span>
                </div>
                <p className="text-xs text-[#A8B3C7]">
                  Download the authentic, verified resume as <span className="font-mono text-[#F8FAFC]">Vasanta_S_Mathad_Resume.pdf</span>.
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={onOpenResume}
                  className="px-3.5 py-2 rounded-md bg-[#111827] border border-[#26344B] text-[#A8B3C7] hover:text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-colors font-mono text-xs"
                >
                  Quick Preview
                </button>

                <a
                  href="/resume.pdf"
                  download="Vasanta_S_Mathad_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#3B82F6] text-white font-bold text-xs hover:bg-[#60A5FA] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
