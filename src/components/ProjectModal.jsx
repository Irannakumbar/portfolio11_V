import React from 'react';
import { X, ExternalLink, GitBranch, Layers, CheckCircle2, Terminal, Cpu } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1120]/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl rounded-xl bg-[#151F32] border border-[#26344B] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#111827] border border-[#26344B] text-[#A8B3C7] hover:text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pb-6 border-b border-[#26344B]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#3B82F6] tracking-wider uppercase font-semibold">
              {project.category}
            </span>
            <span className="text-[#26344B]">/</span>
            <span className="font-mono text-xs text-[#A8B3C7]">TECHNICAL_SPEC</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm text-[#A8B3C7] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="py-5 border-b border-[#26344B]">
          <span className="font-mono text-xs text-[#A8B3C7] uppercase block mb-2.5">
            COMPONENTS &amp; TECHNOLOGIES
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-[#111827] border border-[#26344B] font-mono text-xs text-[#F8FAFC]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architectural Features */}
        <div className="py-5 border-b border-[#26344B] space-y-3">
          <span className="font-mono text-xs text-[#A8B3C7] uppercase block">
            IMPLEMENTED MODULES &amp; WORKFLOW
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-3 rounded-md bg-[#111827] border border-[#26344B]/80 flex items-start gap-2.5 text-xs text-[#F8FAFC]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture Notes */}
        <div className="py-5 space-y-3">
          <span className="font-mono text-xs text-[#A8B3C7] uppercase block">
            ENGINEERING DECISIONS
          </span>
          <div className="p-4 rounded-lg bg-[#111827] border border-[#26344B] font-mono text-xs text-[#A8B3C7] space-y-2">
            {project.id === 'temple-portal' ? (
              <>
                <p className="text-[#F8FAFC]">
                  • <strong className="text-[#3B82F6]">REST API Architecture:</strong> Clean decoupling of the React frontend from the Java Spring Boot backend via JSON REST endpoints.
                </p>
                <p>
                  • <strong className="text-[#F8FAFC]">Flexible Schema with MongoDB:</strong> Devotee records, custom seva offerings, and booking receipts stored in dynamic document structures.
                </p>
                <p>
                  • <strong className="text-[#F8FAFC]">Authentication &amp; Role-Based Access:</strong> Administrative controllers are segregated from public devotee booking workflows to safeguard records.
                </p>
              </>
            ) : (
              <>
                <p className="text-[#F8FAFC]">
                  • <strong className="text-[#3B82F6]">Convolutional Neural Network:</strong> Utilized convolutional filter layers and spatial pooling to extract invariant spatial features from monument imagery.
                </p>
                <p>
                  • <strong className="text-[#F8FAFC]">Mathematical Foundations:</strong> Leveraged linear algebra (matrix convolutions, dot products) and data mining distribution checks.
                </p>
                <p>
                  • <strong className="text-[#F8FAFC]">Model Diagnostics:</strong> Analyzed sample distribution patterns and confusion matrices across training and testing splits.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#26344B]">
          <div className="text-[11px] font-mono text-[#A8B3C7]">
            STATUS: <span className="text-[#3B82F6]">ACADEMIC_PORTFOLIO_BUILD</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/vasanta2004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#111827] border border-[#26344B] text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-colors font-mono text-xs"
            >
              <GitBranch className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>GitHub Profile</span>
            </a>
            
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-[#3B82F6] text-white font-bold text-xs hover:bg-[#60A5FA] transition-colors"
            >
              Close Specification
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
