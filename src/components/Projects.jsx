import React, { useState } from 'react';
import {
  ExternalLink,
  GitBranch,
  Layers,
  Database,
  Server,
  Code2,
  Cpu,
  Eye,
  CheckCircle2,
  Calendar,
  Users,
  BarChart3,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'temple-portal',
      category: 'FULL-STACK APPLICATION',
      title: 'Temple Seva Portal',
      technologies: ['Java', 'Spring Boot', 'React', 'MongoDB', 'HTML5', 'CSS3', 'REST API'],
      description:
        'A full-stack application designed for online seva booking and devotee management, streamlining temple pooja scheduling and administrative workflows.',
      features: [
        'React-based user interface with dynamic booking slots',
        'Java and Spring Boot enterprise RESTful backend',
        'RESTful API integration with robust request validation',
        'MongoDB for storing temple, devotee, and booking records',
        'User registration, authentication, and role-based access control',
      ],
      type: 'fullstack',
    },
    {
      id: 'monument-prediction',
      category: 'MACHINE LEARNING / DATA MINING',
      title: 'Indian Monument Prediction System',
      technologies: ['CNN', 'Data Mining', 'Linear Algebra', 'HTML', 'CSS', 'Bootstrap', 'Python'],
      description:
        'A monument prediction project developed using concepts from data mining and linear algebra. The project uses a CNN-based approach to build, train, and test a prediction model.',
      features: [
        'CNN-based model development for image feature extraction',
        'Systematic training and testing workflow using image tensors',
        'Confusion matrix and data-distribution analysis for diagnostic validation',
        'Clean, responsive web evaluation interface built using HTML, CSS, and Bootstrap',
      ],
      type: 'ml',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#111827] border-b border-[#26344B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-14">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase font-semibold">
              03 / SELECTED WORK
            </span>
            <div className="h-px w-12 bg-[#26344B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Selected projects.
          </h2>
          <p className="text-sm sm:text-base text-[#A8B3C7] max-w-2xl font-normal">
            Prominent software applications developed through hands-on practice, combining full-stack architecture with machine learning explorations.
          </p>
        </div>

        {/* Project 1: Temple Seva Portal (Large Horizontal Feature Card) */}
        <div className="mb-14 rounded-2xl bg-[#151F32] border border-[#26344B] hover:border-[#3B82F6]/50 transition-all duration-300 overflow-hidden group shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#26344B]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#60A5FA] tracking-wider uppercase bg-[#3B82F6]/10 px-2.5 py-1 rounded-md border border-[#3B82F6]/30">
                    FULL-STACK APPLICATION
                  </span>
                  <span className="font-mono text-xs text-[#A8B3C7]">PROJECT_01</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight group-hover:text-white">
                  Temple Seva Portal
                </h3>

                <p className="text-sm sm:text-base text-[#A8B3C7] leading-relaxed">
                  A full-stack application designed for online seva booking and devotee management, streamlining pooja administration and devotee service records.
                </p>

                {/* Key Architectural Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-[#F8FAFC] uppercase tracking-wide block">
                    Core Capabilities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#A8B3C7]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-0.5">•</span>
                      <span><strong className="text-[#F8FAFC]">React Interface:</strong> Interactive seva booking console with slot scheduling and forms.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-0.5">•</span>
                      <span><strong className="text-[#F8FAFC]">Java &amp; Spring Boot:</strong> Robust backend handling RESTful routing, authentication, and services.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-0.5">•</span>
                      <span><strong className="text-[#F8FAFC]">MongoDB Storage:</strong> Schema for storing temple info, devotee profiles, and booking logs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-0.5">•</span>
                      <span><strong className="text-[#F8FAFC]">Access Control:</strong> Segregated user registration and administrative privileges.</span>
                    </li>
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {['Java', 'Spring Boot', 'React', 'MongoDB', 'HTML', 'CSS', 'REST API'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-[#0B1120] border border-[#26344B] text-[11px] font-mono text-[#A8B3C7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#26344B] flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedProject(projects[0])}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#3B82F6] text-white font-bold text-xs hover:bg-[#60A5FA] transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Architecture</span>
                </button>

                <a
                  href="https://github.com/vasanta2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#0B1120] border border-[#26344B] text-[#A8B3C7] hover:text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-colors font-mono text-xs"
                >
                  <GitBranch className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>View Source (GitHub)</span>
                </a>
              </div>
            </div>

            {/* Right Visual Preview: Technical Seva Booking Mockup in Midnight Navy */}
            <div className="lg:col-span-6 bg-[#0B1120] p-5 sm:p-7 flex flex-col justify-center">
              <div className="rounded-xl border border-[#26344B] bg-[#151F32] p-4 shadow-2xl relative overflow-hidden">
                
                {/* Mockup Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#26344B] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                    <span className="text-[#F8FAFC] font-semibold">TEMPLE SEVA CONSOLE</span>
                  </div>
                  <span className="text-[10px] text-[#60A5FA] px-2 py-0.5 rounded bg-[#3B82F6]/10 border border-[#3B82F6]/30">
                    LIVE_MOCKUP
                  </span>
                </div>

                {/* Live Stats Row */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="p-2 rounded bg-[#0B1120] border border-[#26344B] text-center">
                    <span className="text-[10px] font-mono text-[#A8B3C7] block">Active Sevas</span>
                    <span className="font-bold text-xs text-[#F8FAFC]">14 Offerings</span>
                  </div>
                  <div className="p-2 rounded bg-[#0B1120] border border-[#26344B] text-center">
                    <span className="text-[10px] font-mono text-[#A8B3C7] block">Today's Bookings</span>
                    <span className="font-bold text-xs text-[#60A5FA]">38 Confirmed</span>
                  </div>
                  <div className="p-2 rounded bg-[#0B1120] border border-[#26344B] text-center">
                    <span className="text-[10px] font-mono text-[#A8B3C7] block">Storage State</span>
                    <span className="font-bold text-xs text-[#F8FAFC]">MongoDB OK</span>
                  </div>
                </div>

                {/* Mock Booking Records Table */}
                <div className="space-y-2 mb-3">
                  <div className="text-[11px] font-mono text-[#A8B3C7] flex justify-between px-1">
                    <span>DEVOTEE &amp; SEVA DETAILS</span>
                    <span>STATUS</span>
                  </div>

                  <div className="p-2.5 rounded bg-[#0B1120] border border-[#26344B] flex items-center justify-between text-xs">
                    <div>
                      <p className="font-medium text-[#F8FAFC]">Devotee: Rajesh Kulkarni</p>
                      <p className="text-[10px] font-mono text-[#A8B3C7]">Seva: Maha Rudrabhisheka · 08:30 AM</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#3B82F6]/15 border border-[#3B82F6]/40 text-[#60A5FA] text-[10px] font-mono font-bold">
                      CONFIRMED
                    </span>
                  </div>

                  <div className="p-2.5 rounded bg-[#0B1120] border border-[#26344B] flex items-center justify-between text-xs">
                    <div>
                      <p className="font-medium text-[#F8FAFC]">Devotee: Sneha Patil</p>
                      <p className="text-[10px] font-mono text-[#A8B3C7]">Seva: Sahasranama Archana · 10:00 AM</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#3B82F6]/15 border border-[#3B82F6]/40 text-[#60A5FA] text-[10px] font-mono font-bold">
                      CONFIRMED
                    </span>
                  </div>

                  <div className="p-2.5 rounded bg-[#0B1120] border border-[#26344B] flex items-center justify-between text-xs">
                    <div>
                      <p className="font-medium text-[#F8FAFC]">Devotee: Anand Deshmukh</p>
                      <p className="text-[10px] font-mono text-[#A8B3C7]">Seva: Deepotsava Pooja · 06:30 PM</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#3B82F6]/15 border border-[#3B82F6]/40 text-[#60A5FA] text-[10px] font-mono font-bold">
                      CONFIRMED
                    </span>
                  </div>
                </div>

                {/* Architecture Pipeline Strip */}
                <div className="p-2.5 rounded bg-[#0B1120] border border-[#26344B] text-[10px] font-mono text-[#A8B3C7] flex items-center justify-between">
                  <span className="text-[#F8FAFC]">React Client</span>
                  <span className="text-[#3B82F6]">──REST/JSON──&gt;</span>
                  <span className="text-[#F8FAFC]">Spring Boot API</span>
                  <span className="text-[#3B82F6]">──BSON──&gt;</span>
                  <span className="text-[#F8FAFC]">MongoDB</span>
                </div>

                <div className="mt-2 text-[9px] font-mono text-center text-[#A8B3C7]/60">
                  ILLUSTRATIVE DESIGN MOCKUP · REPRESENTS APPLICATION USER INTERFACE
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Project 2: Indian Monument Prediction System (Alternate Structured Feature Card) */}
        <div className="rounded-2xl bg-[#151F32] border border-[#26344B] hover:border-[#3B82F6]/50 transition-all duration-300 overflow-hidden group shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Visual Preview: CNN Visualizer & Confusion Matrix Mockup */}
            <div className="lg:col-span-6 bg-[#0B1120] p-5 sm:p-7 flex flex-col justify-center order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-[#26344B]">
              <div className="rounded-xl border border-[#26344B] bg-[#151F32] p-4 shadow-2xl relative overflow-hidden">
                
                {/* Mockup Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#26344B] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#3B82F6]" />
                    <span className="text-[#F8FAFC] font-semibold">CNN ARCHITECTURE &amp; MATRIX</span>
                  </div>
                  <span className="text-[10px] text-[#60A5FA] px-2 py-0.5 rounded bg-[#3B82F6]/10 border border-[#3B82F6]/30">
                    ANALYTICS_PANEL
                  </span>
                </div>

                {/* Neural Network Layer Pipeline Visualization */}
                <div className="p-3 rounded bg-[#0B1120] border border-[#26344B] mb-3">
                  <span className="text-[10px] font-mono text-[#A8B3C7] block mb-2">
                    FEATURE EXTRACTION PIPELINE:
                  </span>
                  <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-[9px]">
                    <div className="p-1.5 rounded bg-[#111827] border border-[#26344B]">
                      <span className="text-[#3B82F6] block font-bold">INPUT</span>
                      <span className="text-[#A8B3C7]">224x224x3</span>
                    </div>
                    <div className="p-1.5 rounded bg-[#111827] border border-[#26344B]">
                      <span className="text-[#3B82F6] block font-bold">CONV_2D</span>
                      <span className="text-[#A8B3C7]">32 Filters</span>
                    </div>
                    <div className="p-1.5 rounded bg-[#111827] border border-[#26344B]">
                      <span className="text-[#3B82F6] block font-bold">MAX_POOL</span>
                      <span className="text-[#A8B3C7]">2x2 Stride</span>
                    </div>
                    <div className="p-1.5 rounded bg-[#111827] border border-[#3B82F6]/40 bg-[#3B82F6]/5">
                      <span className="text-[#60A5FA] block font-bold">SOFTMAX</span>
                      <span className="text-[#F8FAFC]">Prediction</span>
                    </div>
                  </div>
                </div>

                {/* Confusion Matrix / Data-Distribution Visualizer */}
                <div className="p-3 rounded bg-[#0B1120] border border-[#26344B] mb-3">
                  <div className="flex items-center justify-between mb-2 text-[10px] font-mono text-[#A8B3C7]">
                    <span>CONFUSION MATRIX DISTRIBUTION</span>
                    <span className="text-[#3B82F6]">VALIDATION SPLIT</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[10px]">
                    <div className="p-2 rounded bg-[#3B82F6]/25 border border-[#3B82F6]/50 text-[#F8FAFC] font-bold">
                      Class A: High
                    </div>
                    <div className="p-2 rounded bg-[#111827] border border-[#26344B] text-[#A8B3C7]">
                      Class B: Low
                    </div>
                    <div className="p-2 rounded bg-[#111827] border border-[#26344B] text-[#A8B3C7]">
                      Class C: Zero
                    </div>

                    <div className="p-2 rounded bg-[#111827] border border-[#26344B] text-[#A8B3C7]">
                      Class A: Low
                    </div>
                    <div className="p-2 rounded bg-[#3B82F6]/25 border border-[#3B82F6]/50 text-[#F8FAFC] font-bold">
                      Class B: High
                    </div>
                    <div className="p-2 rounded bg-[#111827] border border-[#26344B] text-[#A8B3C7]">
                      Class C: Low
                    </div>

                    <div className="p-2 rounded bg-[#111827] border border-[#26344B] text-[#A8B3C7]">
                      Class A: Zero
                    </div>
                    <div className="p-2 rounded bg-[#111827] border border-[#26344B] text-[#A8B3C7]">
                      Class B: Low
                    </div>
                    <div className="p-2 rounded bg-[#3B82F6]/25 border border-[#3B82F6]/50 text-[#F8FAFC] font-bold">
                      Class C: High
                    </div>
                  </div>
                </div>

                {/* Web Evaluation Interface Pill */}
                <div className="p-2 rounded bg-[#0B1120] border border-[#26344B] text-[10px] font-mono text-[#A8B3C7] flex items-center justify-between">
                  <span>Web Interface: HTML / CSS / Bootstrap</span>
                  <span className="text-[#3B82F6]">STATUS: VERIFIED</span>
                </div>

                <div className="mt-2 text-[9px] font-mono text-center text-[#A8B3C7]/60">
                  ILLUSTRATIVE MODEL ANALYSIS DASHBOARD · NOT REAL-TIME INFERENCE
                </div>

              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between order-1 lg:order-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#60A5FA] tracking-wider uppercase bg-[#3B82F6]/10 px-2.5 py-1 rounded-md border border-[#3B82F6]/30">
                    MACHINE LEARNING / DATA MINING
                  </span>
                  <span className="font-mono text-xs text-[#A8B3C7]">PROJECT_02</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight group-hover:text-white">
                  Indian Monument Prediction System
                </h3>

                <p className="text-sm sm:text-base text-[#A8B3C7] leading-relaxed">
                  A monument prediction project developed using concepts from data mining and linear algebra. The project uses a CNN-based approach to build, train, and test a prediction model.
                </p>

                {/* Key Details */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-[#F8FAFC] uppercase tracking-wide block">
                    Technical Scope:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#A8B3C7]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-0.5">•</span>
                      <span><strong className="text-[#F8FAFC]">CNN-Based Model:</strong> Feature extraction and image classification using convolutional layers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-0.5">•</span>
                      <span><strong className="text-[#F8FAFC]">Training &amp; Testing:</strong> Structured preprocessing pipeline with sample image matrix tensors.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-0.5">•</span>
                      <span><strong className="text-[#F8FAFC]">Analytical Foundations:</strong> Linear algebra transformations and distribution checks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-0.5">•</span>
                      <span><strong className="text-[#F8FAFC]">Web Evaluation UI:</strong> Simple user-facing presentation crafted with HTML, CSS, and Bootstrap.</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {['CNN', 'Data Mining', 'Linear Algebra', 'HTML', 'CSS', 'Bootstrap', 'Python'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-[#0B1120] border border-[#26344B] text-[11px] font-mono text-[#A8B3C7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#26344B] flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedProject(projects[1])}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#3B82F6] text-white font-bold text-xs hover:bg-[#60A5FA] transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Model Pipeline</span>
                </button>

                <a
                  href="https://github.com/vasanta2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#0B1120] border border-[#26344B] text-[#A8B3C7] hover:text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-colors font-mono text-xs"
                >
                  <GitBranch className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>View Source (GitHub)</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Interactive Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
