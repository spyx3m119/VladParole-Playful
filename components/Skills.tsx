import React from 'react';
import { Code, Palette, Globe, Layers, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Skills Section */}
        <div className="text-center relative">
          <h3 className="text-2xl font-bold mb-12 text-gray-300">SKILLS & TOOLS</h3>
          
          {/* Connector Line (Desktop) */}
          <svg className="absolute top-20 left-0 w-full h-24 hidden md:block pointer-events-none opacity-30" viewBox="0 0 1000 100" preserveAspectRatio="none">
             <path d="M0 50 Q 250 100 500 50 T 1000 50" stroke="url(#skillGradient)" strokeWidth="3" fill="none" strokeDasharray="8 8" />
             <defs>
               <linearGradient id="skillGradient" x1="0" y1="0" x2="1" y2="0">
                 <stop offset="0%" stopColor="#a855f7" />
                 <stop offset="100%" stopColor="#22d3ee" />
               </linearGradient>
             </defs>
          </svg>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 relative z-10">
            {[
              { icon: Code, name: 'JS (ES6+)', color: 'bg-[#facc15] text-black' },
              { icon: Code, name: 'React', color: 'bg-[#06b6d4] text-white' },
              { icon: Globe, name: 'Next.js', color: 'bg-white text-black' },
              { icon: Palette, name: 'UI/UX', color: 'bg-[#ec4899] text-white' },
              { icon: Layers, name: 'Figma', color: 'bg-[#a855f7] text-white' },
              { icon: Zap, name: 'Node.js', color: 'bg-[#22c55e] text-white' }
            ].map((skill, index) => (
              <div key={skill.name} className="flex flex-col items-center gap-4 group">
                <div className={`w-20 h-20 rounded-full ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ring-4 ring-[#0f1014]`}>
                  <skill.icon size={28} />
                </div>
                <span className="font-bold text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;