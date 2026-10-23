import React, { useState } from 'react';
import {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  Cpu,
  FileCode,
  GitBranch,
} from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: <Code className="w-4 h-4 text-[#3B82F6]" />,
    skills: [
      { name: 'Java', level: 'Academic & Projects', tag: 'Primary Language' },
      { name: 'Python', level: 'Academic & Projects', tag: 'ML & Scripting' },
      { name: 'JavaScript', level: 'Basics', tag: 'Web Interactivity' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Layout className="w-4 h-4 text-[#3B82F6]" />,
    skills: [
      { name: 'HTML5', level: 'Proficient', tag: 'Semantic Markup' },
      { name: 'CSS3', level: 'Proficient', tag: 'Responsive Layouts' },
      { name: 'Bootstrap', level: 'Practical', tag: 'Component Styling' },
      { name: 'React.js', level: 'Basic', tag: 'Component Architecture' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: <Server className="w-4 h-4 text-[#3B82F6]" />,
    skills: [
      { name: 'Spring Boot', level: 'Basic', tag: 'RESTful Web APIs' },
      { name: 'Node.js', level: 'Basic', tag: 'Runtime Environment' },
      { name: 'Flask', level: 'Basic', tag: 'Lightweight Services' },
    ],
  },
  {
    id: 'database',
    title: 'Database Management',
    icon: <Database className="w-4 h-4 text-[#3B82F6]" />,
    skills: [
      { name: 'MySQL', level: 'Academic & Projects', tag: 'Relational Schema' },
      { name: 'MongoDB', level: 'Practical', tag: 'Document Store (NoSQL)' },
      { name: 'XAMPP', level: 'Practical', tag: 'Local Server Stack' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    icon: <Wrench className="w-4 h-4 text-[#3B82F6]" />,
    skills: [
      { name: 'Git & GitHub', level: 'Version Control', tag: 'Repo Management' },
      { name: 'VS Code', level: 'Primary IDE', tag: 'Code Editing' },
      { name: 'Eclipse', level: 'IDE', tag: 'Java Applications' },
      { name: 'NetBeans', level: 'IDE', tag: 'Java Development' },
      { name: 'Postman', level: 'API Testing', tag: 'HTTP Endpoints' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Fundamentals & Core CS',
    icon: <Cpu className="w-4 h-4 text-[#3B82F6]" />,
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Foundational', tag: 'Arrays, Lists, Trees, Search' },
      { name: 'Object-Oriented Programming', level: 'Foundational', tag: 'Inheritance, Polymorphism' },
      { name: 'DBMS Principles', level: 'Foundational', tag: 'Normalization, ACID, SQL' },
      { name: 'Software Engineering', level: 'Foundational', tag: 'SDLC, Agile Principles' },
      { name: 'Networking Basics', level: 'Foundational', tag: 'TCP/IP, HTTP/S, DNS' },
    ],
  },
];

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const filteredCategories =
    filter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((category) => {
          if (filter === 'languages') return category.id === 'programming' || category.id === 'fundamentals';
          if (filter === 'web') return category.id === 'frontend' || category.id === 'backend';
          if (filter === 'data-tools') return category.id === 'database' || category.id === 'tools';
          return true;
        });

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase font-semibold">
                02 / TOOLKIT
              </span>
              <div className="h-px w-12 bg-[#26344B]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
              Technologies I work with.
            </h2>
            <p className="text-sm sm:text-base text-[#A8B3C7] max-w-2xl font-normal">
              A transparent, factual breakdown of tools, programming languages, and frameworks applied across coursework, certifications, and project builds.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-[#111827] border border-[#26344B] rounded-lg self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                filter === 'all'
                  ? 'bg-[#3B82F6] text-white font-bold'
                  : 'text-[#A8B3C7] hover:text-[#F8FAFC]'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setFilter('languages')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                filter === 'languages'
                  ? 'bg-[#3B82F6] text-white font-bold'
                  : 'text-[#A8B3C7] hover:text-[#F8FAFC]'
              }`}
            >
              Languages &amp; Core
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                filter === 'web'
                  ? 'bg-[#3B82F6] text-white font-bold'
                  : 'text-[#A8B3C7] hover:text-[#F8FAFC]'
              }`}
            >
              Web &amp; APIs
            </button>
            <button
              onClick={() => setFilter('data-tools')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                filter === 'data-tools'
                  ? 'bg-[#3B82F6] text-white font-bold'
                  : 'text-[#A8B3C7] hover:text-[#F8FAFC]'
              }`}
            >
              Data &amp; Tools
            </button>
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-xl bg-[#151F32] border border-[#26344B] flex flex-col justify-between hover:border-[#3B82F6]/50 transition-all duration-300 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#26344B]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded bg-[#0B1120] border border-[#26344B] text-[#3B82F6] group-hover:border-[#3B82F6]/50 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="font-display text-sm font-bold text-[#F8FAFC] tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-[#A8B3C7]">
                    0{category.skills.length}
                  </span>
                </div>

                {/* Skill Items List */}
                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-md bg-[#111827] border border-[#26344B]/80 flex items-center justify-between hover:border-[#26344B] transition-colors"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium text-xs sm:text-sm text-[#F8FAFC]">
                          {skill.name}
                        </span>
                        <span className="text-[11px] text-[#A8B3C7] font-mono">
                          {skill.tag}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#151F32] border border-[#26344B] text-[#60A5FA]">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-4 border-t border-[#26344B]/50 flex items-center justify-between text-[10px] font-mono text-[#A8B3C7]">
                <span>CATEGORY</span>
                <span className="text-[#3B82F6] uppercase">{category.id}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Notice Banner */}
        <div className="mt-10 p-4 rounded-lg bg-[#111827] border border-[#26344B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#A8B3C7]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
            <span>ACCURACY POLICY: All skill entries correspond to authentic academic coursework and verified hands-on projects.</span>
          </div>
          <span className="text-[#F8FAFC] font-semibold">Ready for Collaborative Development</span>
        </div>

      </div>
    </section>
  );
}
