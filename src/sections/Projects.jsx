import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "Bound Protocol Web App",
      description: "A modern web application interface built to streamline interactions and workflows within the Bound Protocol ecosystem.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      tags: ["JavaScript", "React", "TailwindCSS", "Bootstrap"],
      github: "https://github.com/Steadydrumz/Bound-by-steady",
      live: "boundprotocol.com"
    },
    {
      title: "Dev Help AI Chatbot",
      description: "Real-time collaborative task management application with drag-and-drop functionality.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
      tags: ["TypeScript", "Next.js", "React", "TailwindCSS"],
      github: "#",
      live: "#"
    },
    {
      title: "Defence Insight Navbar",
      description: "A responsive navigation bar designed to provide quick access to key defence insights, features, and resources with a clean, modern user experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      tags: ["React", "JavaScript", "HTML", "TailwindCSS"],
      github: "#",
      live: "https://www.shephard.projectupdates.co.uk/news/"
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
                {/* Overlay Icons (Matches Video 0:02) */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </div>
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
                
                {/* Tech Tags (Matches Video 0:15) */}
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

        {/* View All Button - Integrated GitHub Link */}
        <div className="mt-16 flex justify-center">
        <a 
            href="https://github.com/Steadydrumz" 
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