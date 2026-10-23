import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B1120]/85 backdrop-blur-md overflow-hidden">
      <div 
        className="relative w-full max-w-4xl h-[90vh] rounded-2xl bg-[#151F32] border border-[#26344B] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-5 py-3.5 bg-[#111827] border-b border-[#26344B] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-[#3B82F6]" />
            <span className="font-display text-sm font-bold text-[#F8FAFC]">
              Vasanta S Mathad — Resume Preview
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] text-[#60A5FA] px-2 py-0.5 rounded bg-[#3B82F6]/10 border border-[#3B82F6]/30">
              VERIFIED_PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Vasanta_S_Mathad_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#3B82F6] text-white font-bold text-xs hover:bg-[#60A5FA] transition-colors"
              title="Download as Vasanta_S_Mathad_Resume.pdf"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md bg-[#151F32] border border-[#26344B] text-[#A8B3C7] hover:text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md bg-[#151F32] border border-[#26344B] text-[#A8B3C7] hover:text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Frame */}
        <div className="flex-1 bg-[#0B1120] relative">
          <iframe
            src="/resume.pdf"
            title="Vasanta S Mathad Resume"
            className="w-full h-full border-none"
          />
        </div>

        {/* Footer info bar */}
        <div className="px-5 py-2.5 bg-[#111827] border-t border-[#26344B] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#A8B3C7] gap-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Vasanta_S_Mathad_Resume.pdf · MCA Student &amp; Full Stack Developer</span>
          </div>
          <span>Hubli, Karnataka, India · vasanta.mca@gmail.com</span>
        </div>

      </div>
    </div>
  );
}
