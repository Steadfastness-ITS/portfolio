import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "steadydrums14@gmail.com",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>,
      color: "from-[#6366f1] to-[#a855f7]"
    },
    {
      title: "Phone",
      value: "+234 9150349342",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
      color: "from-[#3b82f6] to-[#6366f1]"
    },
    {
      title: "Location",
      value: "Nigeria",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
      color: "from-[#8b5cf6] to-[#ec4899]"
    }
  ];

  return (
    <>
      <section id="contact" className="py-24 bg-[#f8faff] px-6 md:px-24">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Main Header - from def.png */}
          <div className="flex flex-col items-center mb-20 text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#4f46e5] to-[#a855f7] rounded-full mb-6"></div>
            <p className="text-slate-500 max-w-2xl text-lg">
              Have a question or want to work together? Leave a message below!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Contact Details Cards - from 5th section.png */}
            <div className="space-y-8 animate-contact-left">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Talk</h2>
                <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                  I'm always open to discussing new projects, creative ideas, or 
                  opportunities to be part of your vision. Feel free to reach out 
                  through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-medium">{item.title}</p>
                      <p className="text-slate-800 font-bold text-lg">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Modern Form Card - from 5th section.png */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-50 animate-contact-right">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-slate-700 font-bold text-sm ml-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-purple-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700 font-bold text-sm ml-1">Your Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-purple-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700 font-bold text-sm ml-1">Your Message</label>
                  <textarea rows="4" placeholder="Tell me about your project..." className="w-full px-6 py-2 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-purple-500 outline-none transition-all resize-none"></textarea>
                </div>
                   {/* LOGIC UPDATED: Changed button to <a> tag and added Email URL */}
                    <a 
                        href="mailto:steadydrums14@gmail.com"
                        target="blank" 
                        rel="noreferrer"
                        className="w-full py-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-bold rounded-2xl shadow-lg shadow-purple-200 flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform text-center"
                        >
                        <svg width="18" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="22" x2="11" y1="2" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                        Send Message
                    </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION - Integrated from footer.png and log.mp4 */}
<footer className="bg-[#0b1120] pt-20 pb-10 px-6 md:px-24 text-white">
  <div className="max-w-[1200px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
      
      {/* Column 1: Portfolio Description */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</h2>
        <p className="text-slate-400 leading-relaxed max-w-sm">
          Creating exceptional digital experiences through innovative design and development. 
          Let's build something great together.
        </p>
      </div>

      {/* Column 2: Quick Links */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-white tracking-wider">Quick Links</h3>
        <ul className="space-y-3 text-slate-400">
          {["Home", "About", "Skills", "Projects", "Contact"].map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors flex items-center gap-2 group">
                <div className="w-0 h-[2px] bg-blue-500 group-hover:w-3 transition-all"></div>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Connect With Me */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-white tracking-wider">Connect With Me</h3>
        <div className="flex gap-4">
          {/* LOGIC UPDATED: Added url property and changed container to <a> tag */}
          {[
            { name: "GitHub", url: "https://github.com/Steadydrumz", path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
            { name: "LinkedIn", url: "#", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" },
            { name: "Twitter", url: "https://x.com/steady______?s=21", path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
            { name: "Email", url: "mailto:steadydrums14@gmail.com", path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#a855f7] hover:border-transparent transition-all cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={social.path}></path>
              </svg>
            </a>
          ))}
        </div>
        <p className="text-slate-500 text-sm italic">Available for freelance opportunities and collaborations</p>
      </div>
    </div>

    {/* Bottom Bar - Copyright */}
    <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
      <p>© 2026 Portfolio. All rights reserved.</p>
      <p className="flex items-center gap-2">
        Made with <span className="text-red-500 text-lg">❤</span> by Divine-Favour Steadfastness Efosa
      </p>
    </div>
  </div>
</footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes contactSlideLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes contactSlideRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-contact-left { animation: contactSlideLeft 0.8s ease-out forwards; }
        .animate-contact-right { animation: contactSlideRight 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
      `}} />
    </>
  );
};

export default Contact;