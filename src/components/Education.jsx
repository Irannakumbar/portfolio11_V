import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const educationTimeline = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Chetan Business School — Institute of Management, IT and Research',
      location: 'Hubli, Karnataka',
      period: '2025–2027',
      status: 'Currently Pursuing',
      isCurrent: true,
      score: null,
      description:
        'Focusing on advanced enterprise application architecture, full-stack development, modern web technologies, and database engineering methodologies.',
      highlights: [
        'Advanced Software Engineering & System Architecture',
        'Enterprise Java & Full Stack Development',
        'Database Modeling and Distributed Systems',
        'Active member of Cultural Sync Club',
      ],
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'JSS SMI UG-PG Studies, Dharwad',
      affiliation: 'Affiliated with Karnatak University Dharwad (KUD)',
      location: 'Dharwad, Karnataka',
      period: '2022–2025',
      status: 'Completed',
      isCurrent: false,
      score: '8.05 CGPA',
      description:
        'Built a strong foundation in core computer science, programming languages, relational databases, software design, and web technology principles.',
      highlights: [
        'Graduated with distinction securing 8.05 CGPA',
        'Coursework in Java, Python, C, and Web Development',
        'Relational Database Management Systems (MySQL / DBMS)',
        'Object-Oriented Programming and Data Structures',
      ],
    },
    {
      degree: '12th Science (Pre-University)',
      institution: 'Sukruti Independent PU Science College, Hubli',
      affiliation: 'Karnataka State Board',
      location: 'Hubli, Karnataka',
      period: '2021–2022',
      status: 'Completed',
      isCurrent: false,
      score: '63.5%',
      description:
        'Completed higher secondary education in the Science stream with a strong focus on Mathematics, Physics, Chemistry, and Computer Science.',
      highlights: [
        'Rigorous study of mathematical foundations & analytical logic',
        'Physics, Chemistry, and introductory computing concepts',
        'Prepared analytical foundation for computer applications degree',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-14">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase font-semibold">
              04 / EDUCATION
            </span>
            <div className="h-px w-12 bg-[#26344B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Academic milestones.
          </h2>
          <p className="text-sm sm:text-base text-[#A8B3C7] max-w-2xl font-normal">
            Formal computer science and higher secondary education milestones building technical proficiency and software engineering acumen.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#26344B] space-y-12">
          {educationTimeline.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Connector Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  item.isCurrent
                    ? 'bg-[#3B82F6] border-[#0B1120] shadow-[0_0_12px_rgba(59,130,246,0.8)]'
                    : 'bg-[#151F32] border-[#26344B] group-hover:border-[#3B82F6]'
                }`}
              />

              {/* Timeline Card */}
              <div className="p-6 sm:p-7 rounded-xl bg-[#151F32] border border-[#26344B] hover:border-[#3B82F6]/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <span className="font-display text-lg sm:text-xl font-bold text-[#F8FAFC] group-hover:text-white">
                        {item.degree}
                      </span>
                      {item.isCurrent ? (
                        <span className="px-2 py-0.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/40 text-[#60A5FA] text-[11px] font-mono font-semibold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                          Currently Pursuing
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-[#111827] border border-[#26344B] text-[#A8B3C7] text-[11px] font-mono">
                          Completed
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-medium text-[#F8FAFC]/90">
                      {item.institution}
                    </h4>
                    {item.affiliation && (
                      <p className="text-xs text-[#A8B3C7] font-mono mt-0.5">
                        {item.affiliation}
                      </p>
                    )}
                  </div>

                  {/* Period & Score Badges */}
                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-[#A8B3C7] bg-[#111827] px-2.5 py-1 rounded-md border border-[#26344B]">
                      <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                      <span>{item.period}</span>
                    </span>

                    {item.score && (
                      <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#60A5FA] bg-[#3B82F6]/10 px-2.5 py-1 rounded-md border border-[#3B82F6]/30">
                        <Award className="w-3.5 h-3.5" />
                        <span>{item.score}</span>
                      </span>
                    )}

                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#A8B3C7]">
                      <MapPin className="w-3 h-3 text-[#A8B3C7]" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#A8B3C7] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="pt-3 border-t border-[#26344B]/60">
                  <span className="text-[11px] font-mono text-[#F8FAFC] uppercase block mb-2">
                    Key Academic Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A8B3C7]">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
