import React from 'react';
import { MessageSquare, ArrowRight, Brain, Monitor } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-20 px-6 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- Left Column: Featured Projects (2/3) --- */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h3 className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-2 ml-1">Featured Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            
            {/* Project Card 1 - BubbleSort */}
            <div className="group relative rounded-[2.5rem] bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-8 flex flex-col justify-between min-h-[340px] shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
               {/* Background Texture/Noise */}
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
               
               {/* Icon/Graphic */}
               <div className="w-16 h-16 rounded-2xl bg-black/20 backdrop-blur-sm flex items-center justify-center mb-8 shadow-inner border border-white/10 relative z-10">
                  <Brain className="text-white opacity-90" size={32} />
               </div>

               <div className="relative z-10">
                 <h4 className="text-2xl font-black text-white mb-2 tracking-tight">Project BubbleSort</h4>
                 <p className="text-white/80 text-xs font-bold mb-8 line-clamp-2 leading-relaxed">
                   Teercuriam omrareion condres tix ocomaloim noot. Visualizing sorting algorithms.
                 </p>
                 <button className="px-6 py-3 rounded-full border border-white/40 bg-white/20 backdrop-blur-md text-[10px] font-black text-white hover:bg-white hover:text-pink-600 transition-colors uppercase tracking-widest shadow-lg">
                   View Project
                 </button>
               </div>
            </div>

            {/* Project Card 2 - Neon Flow */}
            <div className="group relative rounded-[2.5rem] bg-gradient-to-br from-blue-500 via-cyan-400 to-emerald-400 p-8 flex flex-col justify-between min-h-[340px] shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
               {/* Background Texture */}
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

               {/* Icon/Graphic */}
               <div className="w-20 h-14 rounded-xl bg-black/40 backdrop-blur-sm flex items-center justify-center mb-8 shadow-lg overflow-hidden border border-white/10 relative z-10">
                  <Monitor className="text-cyan-300" size={28} />
               </div>

               <div className="relative z-10">
                 <h4 className="text-2xl font-black text-white mb-2 tracking-tight">Neon Flow</h4>
                 <p className="text-[#064e3b] text-xs font-bold mb-8 line-clamp-2 leading-relaxed opacity-80">
                   Kenyoomntter proale volds rithu conammet. High-performance dashboard aesthetics.
                 </p>
                 <button className="px-6 py-3 rounded-full border border-[#064e3b]/20 bg-[#064e3b]/10 backdrop-blur-md text-[10px] font-black text-[#064e3b] hover:bg-[#064e3b] hover:text-white transition-colors uppercase tracking-widest shadow-lg">
                   View Project
                 </button>
               </div>
            </div>

          </div>
        </div>

        {/* --- Right Column: Testimonials (1/3) --- */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <h3 className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-2 ml-1">Testimonials</h3>
          
          <div className="h-full flex flex-col gap-6">
            
            {/* Testimonial Card */}
            <div className="flex-1 rounded-[2.5rem] bg-[#18181b] border border-white/5 p-8 relative overflow-hidden flex flex-col justify-center shadow-2xl group hover:border-white/10 transition-colors">
              {/* Decorative Blur */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-6">
                    {/* Avatar with Gradient Ring */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-[3px]">
                       <div className="w-full h-full rounded-full bg-[#18181b] p-[2px]">
                         <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Client" className="w-full h-full object-cover rounded-full" />
                       </div>
                    </div>
                    <div>
                       <h5 className="text-white font-bold text-lg tracking-tight">Happy Clients</h5>
                       <div className="flex gap-1 mt-1">
                          {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_5px_rgba(74,222,128,0.5)]"></div>)}
                       </div>
                    </div>
                 </div>
                 
                 <p className="text-gray-400 text-sm leading-relaxed font-medium">
                   "Toresa but transmissions net from timelines limit now also oversee awesome new nexus-8!"
                 </p>
              </div>
            </div>

            {/* Small widget below */}
            <div className="rounded-[2rem] bg-[#18181b] border border-white/5 p-5 flex items-center gap-4 hover:bg-[#202025] transition-colors cursor-pointer group">
               <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <MessageSquare size={18} />
               </div>
               <span className="text-gray-400 text-xs font-bold tracking-wide group-hover:text-white transition-colors">Mapay be ustme smarttest</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;