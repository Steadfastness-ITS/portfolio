import React from 'react';
// 1. Import the image here
import abtImage from './Abt me.png';

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3.5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
  ];

  return (
    <section id="about" className="py-20 bg-white px-6 md:px-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Heading - Centered for both Mobile & Desktop */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">About Me</h2>
          <div className="w-16 md:w-20 h-1.5 bg-gradient-to-r from-[#4f46e5] to-[#a855f7] rounded-full"></div>
        </div>

        {/* Responsive Grid: 1 column on mobile, 2 columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left Side: Image (Stacks on top on mobile) */}
          <div className="relative group animate-slide-in-left w-full">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-[#4f46e5]/10 to-[#a855f7]/10 rounded-[1.5rem] md:rounded-[2rem] blur-2xl opacity-70"></div>
            <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl md:shadow-2xl">
              <img 
                // 2. Use the imported variable here
                src={abtImage} 
                alt="Workspace" 
                className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Side: Content (Stacks below on mobile) */}
          <div className="flex flex-col gap-5 md:gap-6 animate-slide-in-right text-center lg:text-left">
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              I'm a passionate developer with a keen eye for design and a dedicated focus on 
              creating seamless user experiences. With several years of hands-on experience 
              in web development, I specialize in building modern, scalable applications.
            </p>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed hidden sm:block">
              My journey in tech started with a curiosity about how things work behind the scenes. 
              Today, I combine technical expertise with creative problem-solving skills to deliver 
              solutions that not only meet but exceed expectations.
            </p>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed italic border-l-4 border-[#7c3aed] pl-4 text-left mx-auto lg:mx-0">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects or sharing knowledge with the developer community.
            </p>

            {/* Stats Row - Stacks or Grids depending on space */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center lg:items-center text-center"> 
                  <span className="text-2xl md:text-2xl font-bold text-[#4f46e5]">
                    {stat.value}
                  </span>
                  <span className="text-[13px] md:text-sm font-medium text-slate-500 tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
      `}} />
    </section>
  );
};

export default About;