import React from 'react';
import KRYPTOImage from './UI image.png';
import DefInsightImage from './Def Insight.png'; 
import DevHelpImage from './Dev.jpeg'; 
import BoundProtocolImage from './Bound Protocol.png';
const Projects = () => {
  const projectList = [
    {
      title: "Bound Protocol Web App",
      description: "A modern web application interface built to streamline interactions and workflows within the Bound Protocol ecosystem.",
      image: BoundProtocolImage,
      tags: ["JavaScript", "React", "TailwindCSS", "Bootstrap"],
      github: "https://github.com/Steadfastness-ITS/Bound-Protocol",
      live: "#"
    },
    {
      title: "Dev Help AI Chatbot",
      description: "A versatile, AI-powered assistant designed to streamline developer workflows by providing real-time technical guidance and solving complex coding challenges.",
      image: DevHelpImage, 
      tags: ["TypeScript", "Next.js", "React", "TailwindCSS"],
      github: "#",
      live: "#"
    },
    {
      title: "Defence Insight Navbar",
      description: "A responsive navigation bar designed to provide quick access to key defence insights, features, and resources with a clean, modern user experience.",
      image: DefInsightImage, 
      tags: ["React", "JavaScript", "HTML", "TailwindCSS"],
      github: "https://github.com/Steadfastness-ITS/1st-Job",
      live: "https://www.shephard.projectupdates.co.uk/news/"
    },
    {
      title: "KRYPTO Website Desktop UI",
      description: "A sleek, modern desktop UI design for KRYPTO company, featuring intuitive navigation, bold visuals, and a user-friendly layout tailored for the KRYPTO company's website.",
      image: KRYPTOImage, 
      tags: ["Figma", "Set-up Materials", "Prototyping"],
      github: "#",
      live: "https://www.figma.com/design/5PYRFiLtVxx7UcNYttwUW5/KRYPTO---My-first-Figma-Design?node-id=0-1&t=34MBWGl2yEQaH1Ue-1"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white px-6 md:px-24 min-h-[500px]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#4f46e5] to-[#a855f7] rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl text-lg">
            A selection of my recent work showcasing my skills and passion for development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <div key={index} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              
              {/* Image Area */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image'; }}
                />
                
                {/* Overlay Icons */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-md hover:bg-[#4f46e5] hover:text-white transition-all duration-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>

                  <a 
                    href={project.live !== "#" && !project.live.startsWith('http') ? `https://${project.live}` : project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-md hover:bg-[#a855f7] hover:text-white transition-all duration-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#4f46e5] transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[#4f46e5] text-xs font-bold px-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <a 
            href="https://github.com/Steadfastness-ITS" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-3 rounded-full border-2 border-[#4f46e5] text-[#4f46e5] font-bold hover:bg-[#4f46e5] hover:text-white transition-all inline-block"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;