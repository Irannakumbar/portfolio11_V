import React from 'react';
import { Layers, Database, Code2, GraduationCap, Award, Compass, BookOpen } from 'lucide-react';

export default function About() {
  const infoCards = [
    {
      title: 'MCA Student',
      subtitle: 'Chetan Business School, Hubli',
      period: '2025–2027',
      description:
        'Currently pursuing Master of Computer Applications, deepening understanding of enterprise application architecture, software lifecycle, and backend systems.',
      icon: <GraduationCap className="w-5 h-5 text-[#3B82F6]" />,
      tag: 'IN PROGRESS',
    },
    {
      title: 'BCA Graduate',
      subtitle: 'JSS SMI UG-PG Studies, Dharwad',
      period: '2022–2025',
      description:
        'Completed Bachelor of Computer Applications with distinction, securing a CGPA of 8.05. Grounded in core programming, relational databases, and data structures.',
      icon: <Award className="w-5 h-5 text-[#3B82F6]" />,
      tag: '8.05 CGPA',
    },
    {
      title: 'Full Stack Development',
      subtitle: 'Certified & Project-Tested',
      period: 'Java / React / Spring Boot',
      description:
        'Hands-on experience developing end-to-end applications connecting React frontends to Spring Boot REST APIs and MongoDB/MySQL datastores.',
      icon: <Layers className="w-5 h-5 text-[#3B82F6]" />,
      tag: 'CORE FOCUS',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#111827] border-y border-[#26344B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase font-semibold">
              01 / ABOUT
            </span>
            <div className="h-px w-12 bg-[#26344B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            A little about me.
          </h2>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#A8B3C7] leading-relaxed">
            <p>
              I am an <strong className="text-[#F8FAFC] font-semibold">MCA student</strong> at{' '}
              <span className="text-[#F8FAFC]">Chetan Business School</span> in Hubli and a dedicated{' '}
              <strong className="text-[#F8FAFC] font-semibold">BCA graduate</strong> from{' '}
              <span className="text-[#F8FAFC]">JSS SMI UG-PG Studies, Dharwad</span> (affiliated with Karnatak University Dharwad), where I secured an <strong className="text-[#60A5FA]">8.05 CGPA</strong>.
            </p>

            <p>
              My interest is centered on <strong className="text-[#F8FAFC]">full-stack development</strong>—bridging intuitive frontend components with solid, scalable server-side systems. I have developed practical hands-on proficiency across <strong className="text-[#F8FAFC]">Java, React, Spring Boot, MySQL, and MongoDB</strong> through academic coursework and practical projects.
            </p>

            <p>
              I enjoy learning through active building. From engineering the <strong className="text-[#F8FAFC]">Temple Seva Portal</strong> to simplify devotee administration to exploring CNN feature extraction in the <strong className="text-[#F8FAFC]">Indian Monument Prediction System</strong>, I focus on clean code structure, data integrity, and solving genuine problems.
            </p>

            <div className="pt-2 border-l-2 border-[#3B82F6] pl-4 text-sm font-mono text-[#A8B3C7]">
              Seeking software development internship and entry-level positions to contribute to real-world codebases while learning under experienced engineering mentors.
            </div>
          </div>

          {/* Right Column: Three Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-[#A8B3C7] tracking-wider uppercase mb-2 flex items-center justify-between">
              <span>ACADEMIC_CREDENTIALS</span>
              <span className="text-[#3B82F6]">VERIFIED</span>
            </div>

            {infoCards.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-[#151F32] border border-[#26344B] hover:border-[#3B82F6]/50 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#0B1120] border border-[#26344B] group-hover:border-[#3B82F6]/50 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-[#F8FAFC] group-hover:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#A8B3C7] font-mono">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#60A5FA] font-mono text-[10px] font-bold shrink-0">
                    {item.tag}
                  </span>
                </div>

                <p className="text-xs text-[#A8B3C7] leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
