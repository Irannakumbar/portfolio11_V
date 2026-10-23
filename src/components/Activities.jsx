import React from 'react';
import { Award, Users, Trophy, Sparkles, Calendar } from 'lucide-react';

export default function Activities() {
  return (
    <section id="activities" className="py-20 md:py-28 bg-[#111827] border-b border-[#26344B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-14">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase font-semibold">
              05 / BEYOND THE CLASSROOM
            </span>
            <div className="h-px w-12 bg-[#26344B]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Certification &amp; activities.
          </h2>
          <p className="text-sm sm:text-base text-[#A8B3C7] max-w-2xl font-normal">
            Professional skill certification and active collaborative initiatives demonstrating teamwork, technical problem-solving, and leadership.
          </p>
        </div>

        {/* Two Compact Executive Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Panel 1: Certification */}
          <div className="lg:col-span-5 rounded-xl bg-[#151F32] border border-[#26344B] p-6 sm:p-8 flex flex-col justify-between hover:border-[#3B82F6]/50 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#26344B]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded bg-[#0B1120] border border-[#26344B] text-[#3B82F6] group-hover:border-[#3B82F6]/50 transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-[#60A5FA] tracking-wider uppercase font-semibold">
                    CERTIFICATION
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#A8B3C7]">COMPLETED</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight mb-2">
                Full Stack Development
              </h3>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0B1120] border border-[#26344B] font-mono text-xs text-[#A8B3C7] mb-4">
                <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Date: April 6, 2026</span>
              </div>

              <p className="text-sm text-[#A8B3C7] leading-relaxed mb-4">
                Comprehensive training focusing on modern full-stack web architectures, REST API design, relational and document database management, and responsive frontend systems.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#26344B]/60 text-xs text-[#A8B3C7]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  <span>Frontend layouts, component lifecycles &amp; UI state</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  <span>REST API communication, endpoint testing &amp; validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  <span>Database schema design and backend persistence</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#26344B]/50 flex items-center justify-between text-[11px] font-mono text-[#A8B3C7]">
              <span>VERIFICATION</span>
              <span className="text-[#60A5FA]">LISTED ON RESUME</span>
            </div>
          </div>

          {/* Panel 2: Co-curricular Activities & Hackathons */}
          <div className="lg:col-span-7 rounded-xl bg-[#151F32] border border-[#26344B] p-6 sm:p-8 flex flex-col justify-between hover:border-[#3B82F6]/50 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#26344B]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded bg-[#0B1120] border border-[#26344B] text-[#3B82F6] group-hover:border-[#3B82F6]/50 transition-colors">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-[#60A5FA] tracking-wider uppercase font-semibold">
                    CAMPUS &amp; CO-CURRICULAR
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#A8B3C7]">COLLABORATION</span>
              </div>

              <div className="space-y-4">
                {/* Activity 1: Cultural Sync Club */}
                <div className="p-4 rounded-lg bg-[#0B1120] border border-[#26344B] hover:border-[#26344B] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <h4 className="font-display text-sm font-bold text-[#F8FAFC] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                      Core Member — Cultural Sync Club
                    </h4>
                    <span className="font-mono text-[11px] text-[#A8B3C7]">
                      Chetan Business School
                    </span>
                  </div>
                  <p className="text-xs text-[#A8B3C7] leading-relaxed">
                    Active core member contributing to institutional team initiatives, student coordination, and event planning across departments.
                  </p>
                </div>

                {/* Activity 2: Hackathon 1.0 and 2.0 */}
                <div className="p-4 rounded-lg bg-[#0B1120] border border-[#26344B] hover:border-[#26344B] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <h4 className="font-display text-sm font-bold text-[#F8FAFC] flex items-center gap-2">
                      <Trophy className="w-3.5 h-3.5 text-[#3B82F6]" />
                      Participated in Hackathon 1.0 and Hackathon 2.0 (2026)
                    </h4>
                    <span className="font-mono text-[11px] text-[#60A5FA]">
                      Team Participant
                    </span>
                  </div>
                  <p className="text-xs text-[#A8B3C7] leading-relaxed">
                    Engaged in collaborative, fast-paced technical hackathons focused on software problem breakdown, rapid prototyping, and team delivery under tight deadlines.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#26344B]/50 flex items-center justify-between text-[11px] font-mono text-[#A8B3C7]">
              <span>EXPERIENCE TYPE</span>
              <span className="text-[#F8FAFC]">Teamwork · Problem Formulation · Execution</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
