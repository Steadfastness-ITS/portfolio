import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-end Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      ),
      color: "bg-blue-500",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      title: "UI/UX Design",
      icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M8 8s2-2 4-2 4 2 4 2"></path>
        <circle cx="12" cy="13" r="3"></circle>
      </svg>
  ),
      color: "bg-orange-500",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"]
    },
    {
      title: "Responsive Design",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
      ),
      color: "bg-purple-500",
      skills: ["Desktop view", "Mobile view", "Accessibility", "Cross-Browser",]
    },
    {
      title: "Performance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
      ),
      color: "bg-amber-500",
      skills: ["Optimization", "SEO", "Web Vitals", "Lighthouse", "Deployment",]
    },
    {
      title: "Version Control",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><line x1="3" x2="9" y1="12" y2="12"></line><line x1="15" x2="21" y1="12" y2="12"></line></svg>
      ),
      color: "bg-red-500",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket",]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#f8faff] px-6 md:px-24">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Heading - Matches Video */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#4f46e5] to-[#a855f7] rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl text-lg">
            A comprehensive toolkit of technologies and methodologies I use to bring ideas to life.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group"
            >
              {/* Icon Container with specific color */}
              <div className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-6 transition-transform shadow-lg`}>
                {category.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-6">{category.title}</h3>
              
              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-slate-600 font-medium group/item">
                    {/* The Blue Bullet Point */}
                    <div className="w-2 h-2 rounded-full bg-[#4f46e5] group-hover/item:scale-125 transition-transform"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;