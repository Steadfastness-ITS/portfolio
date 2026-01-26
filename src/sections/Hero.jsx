import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#f8faff] flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Hello Text - Animated */}
        <p className="text-[#3b82f6] font-semibold text-lg mb-4 animate-fade-in">
          Hello, I'm
        </p>

        {/* Name - Gradient with Responsive Text Size */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight leading-tight animate-slide-up">
          <span className="bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
            Divine-Favour Steadfastness Efosa
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-slate-700 mb-6 animate-slide-up delay-100">
          Front-end Web Developer & Designer
        </h2>

        {/* Description - Max width restricted for that clean look */}
        <p className="text-slate-500 text-base sm:text-lg md:text-xl max-w-[600px] mx-auto leading-relaxed mb-10 animate-slide-up delay-200">
          Crafting beautiful, responsive, and user-friendly web experiences with modern 
          technologies. Passionate about clean code and innovative solutions.
        </p>

        {/* Buttons - Stacked on Mobile, Row on Desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto animate-slide-up delay-300">
          <button className="w-full sm:w-auto px-10 py-3.5 bg-gradient-to-r from-[#3b82f6] to-[#a855f7] hover:from-[#2563eb] hover:to-[#7e22ce] text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-100 active:scale-95">
            View My Work
          </button>
          
          <button className="w-full sm:w-auto px-10 py-3.5 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-all shadow-sm active:scale-95">
            Get In Touch
          </button>
        </div>

        {/* Social Icons - Animated with Hover Scale */}
        <div className="flex justify-center gap-5 mb-16 animate-slide-up delay-500">
          {[
            { id: 'github', color: 'text-slate-800', path: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2' },
            { id: 'linkedin', color: 'text-[#4f46e5]', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z' },
            { id: 'email', color: 'text-[#a855f7]', path: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7M2 4h20v16H2z' }
          ].map((icon) => (
            <div 
              key={icon.id}
              className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white rounded-full shadow-md border border-slate-100 cursor-pointer ${icon.color} hover:scale-110 hover:shadow-xl transition-all duration-300`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={icon.path}></path>
              </svg>
            </div>
          ))}
        </div>

        {/* Bouncing Arrow Down */}
        <div className="animate-bounce text-slate-400 mt-auto">
          <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Internal Styles for Animations (Safe Mode) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-up { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in { animation: fadeIn 1.2s ease-out forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.15s; }
        .delay-200 { animation-delay: 0.3s; }
        .delay-300 { animation-delay: 0.45s; }
        .delay-500 { animation-delay: 0.6s; }
      `}} />
    </section>
  );
};

export default Hero;