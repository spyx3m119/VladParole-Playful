import React from 'react';
import { ArrowRight, Smartphone, Monitor, Palette, Gamepad2, MousePointer2, Sparkles, PenTool, Layers, Wand2 } from 'lucide-react';

const WorkPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              DIGITAL EXPLORATIONS
            </span>
          </h1>
          <p className="text-gray-400 tracking-[0.2em] text-sm uppercase font-bold">
            A Collection of Creative Journeys
          </p>
          
          {/* Decorative particles */}
          <div className="absolute top-0 right-1/4 w-4 h-4 bg-pink-500 rounded-full blur-[2px] animate-bounce"></div>
          <div className="absolute bottom-0 left-1/4 w-3 h-3 bg-cyan-400 rounded-full blur-[1px] animate-ping duration-[3000ms]"></div>
        </div>

        {/* --- Intro Section: Text & Animated Visual --- */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-12 relative">

          {/* Left Text */}
          <div className="md:w-1/2 text-center md:text-left relative z-10">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Here's a peek at the projects that shaped my craft—adventures in designing smoother journeys, clearer paths, and friendlier interfaces. I can't share every pixel <span className="text-pink-600 font-xs">(NDA's)</span>, but I can share the stories, the impact, and all the <span className="text-cyan-400 font-medium">"aha!"</span> moments along the way. The details stay behind the curtain, yet the process, lessons, and a touch of <span className="text-pink-400 font-medium">playfulness</span> shine through.
            </p>
          </div>

          {/* Right Animated Visual */}
          <div className="md:w-1/2 flex justify-center items-center relative">
            <div className="relative w-64 h-64">
              {/* Central glowing orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse"></div>

              {/* Floating design elements */}
              <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <PenTool className="text-white" size={28} />
              </div>

              <div className="absolute top-8 right-6 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-float-delayed">
                <Layers className="text-white" size={24} />
              </div>

              <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg animate-float-slow">
                <Sparkles className="text-white" size={32} />
              </div>

              <div className="absolute bottom-4 right-4 w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                <Wand2 className="text-white" size={28} />
              </div>

              {/* Central monitor/screen icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/20">
                <Monitor className="text-white" size={40} />
              </div>

              {/* Orbiting dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>

        {/* --- UI/UX PROJECTS SECTION --- */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <div className="px-6 py-2 rounded-full bg-[#4ade80] border-2 border-green-300 shadow-[0_0_15px_rgba(74,222,128,0.4)]">
              <span className="text-black font-black text-sm tracking-wide">UI/UX PROJECTS</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-[#1e293b] text-gray-400 text-xs font-bold">OLP</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative rounded-[2rem] bg-[#1e1b4b] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300">
              <div className="p-8 pb-32 relative z-10">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                  <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                </div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">ECO-BUDGET APP</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Toordow doie semres peurstruid acroafftiert.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-full h-48 bg-gradient-to-t from-pink-500/20 to-transparent"></div>
              {/* Abstract App Visual */}
              <div className="absolute bottom-[-20px] right-[-20px] w-40 h-56 bg-gradient-to-br from-pink-400 to-purple-600 rounded-3xl transform -rotate-12 group-hover:-rotate-6 transition-transform duration-500 shadow-2xl flex items-center justify-center border-4 border-[#1e1b4b]">
                 <Smartphone className="text-white/80" size={48} />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-[2rem] bg-[#1e1b4b] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300">
              <div className="p-8 pb-32 relative z-10">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                  <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">GALACTIC CAFE WEBSITE</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Tocerber thlee dor aclodder ivadfrer sercolorpe iontais.</p>
              </div>
              {/* Visual */}
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#3b0764]/50"></div>
              <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-48 h-40 bg-[#312e81] rounded-t-3xl border-t-4 border-l-4 border-r-4 border-[#4338ca] group-hover:translate-y-[-10px] transition-transform duration-500 flex items-center justify-center">
                 <div className="w-12 h-12 bg-pink-500 rounded-full blur-md absolute top-4 left-4"></div>
                 <Monitor className="text-cyan-200 relative z-10" size={64} />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-[2rem] bg-[#1e1b4b] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300">
               <div className="p-8 relative z-10">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                  <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">CALCATIC</h3>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">POSTERS</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-12">Tieresleer tnesis toastrack eriblam pandos.</p>
                
                {/* Arrow Button */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-pink-500 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all cursor-pointer">
                  <ArrowRight size={32} />
                </div>
              </div>
               {/* Background Graphic */}
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-black -z-10"></div>
            </div>
          </div>
        </div>

        {/* --- BRANDING & ART SECTION --- */}
        <div className="mb-20">
          <div className="px-6 py-2 rounded-full bg-[#fb923c] border-2 border-orange-300 shadow-[0_0_15px_rgba(251,146,60,0.4)] inline-block mb-8">
            <span className="text-black font-black text-sm tracking-wide">BRANDING & ART</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Art 1 */}
            <div className="aspect-square rounded-[2rem] bg-[#312e81] p-6 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
               <div className="absolute inset-4 bg-gradient-to-br from-orange-400 to-pink-500 rounded-[1.5rem] flex items-center justify-center">
                  <div className="text-center">
                     <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 backdrop-blur-sm flex items-center justify-center">
                       <span className="text-2xl">😊</span>
                     </div>
                  </div>
               </div>
            </div>
             {/* Art 2 */}
             <div className="aspect-square rounded-[2rem] bg-[#312e81] p-6 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
               <div className="absolute inset-4 bg-gradient-to-tr from-pink-300 to-purple-400 rounded-[1.5rem] overflow-hidden">
                   <div className="w-full h-full flex flex-col items-center justify-center">
                      <h4 className="font-black text-white text-lg leading-none">BACMILIS</h4>
                      <h4 className="font-black text-white text-lg leading-none">AGAS</h4>
                   </div>
                   {/* Swirls */}
                   <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/swirl.png')] opacity-20"></div>
               </div>
            </div>
             {/* Art 3 */}
             <div className="aspect-square rounded-[2rem] bg-[#312e81] p-6 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
               <div className="absolute inset-4 bg-indigo-500 rounded-[1.5rem] flex items-center justify-center overflow-hidden">
                  {/* Abstract Face */}
                  <div className="w-24 h-24 bg-orange-300 rounded-full relative">
                      <div className="absolute top-6 left-4 w-4 h-4 bg-black rounded-full"></div>
                      <div className="absolute top-8 right-6 w-12 h-6 bg-black rounded-b-full"></div>
                  </div>
               </div>
            </div>
            
             {/* Art 4 */}
             <div className="aspect-square rounded-[2rem] bg-[#312e81] p-6 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
               <div className="absolute inset-4 bg-gradient-to-bl from-cyan-400 to-blue-600 rounded-[1.5rem] flex items-center justify-center">
                  <div className="text-center">
                      <h4 className="font-bold text-white leading-tight">AURORA</h4>
                      <h4 className="font-bold text-white leading-tight">LOGOS</h4>
                  </div>
               </div>
            </div>
            {/* Art 5 */}
             <div className="aspect-square rounded-[2rem] bg-[#312e81] p-6 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
               <div className="absolute inset-4 bg-purple-900 rounded-[1.5rem] flex items-center justify-center overflow-hidden border border-white/10">
                  <h4 className="font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500 opacity-80 rotate-12">COSMIC</h4>
                  <div className="absolute bottom-2 text-xs font-bold text-white/50 uppercase tracking-widest">Posters</div>
               </div>
            </div>
          </div>
        </div>

        {/* --- INTERACTIVE EXPERIENCES SECTION --- */}
        <div className="mb-20">
          <div className="px-6 py-2 rounded-full bg-[#a855f7] border-2 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)] inline-block mb-8 float-right">
            <span className="text-white font-black text-sm tracking-wide">INTERACTIVE EXPERIENCES</span>
          </div>
          <div className="clear-both"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Interactive 1 */}
            <div className="h-[400px] rounded-[2.5rem] bg-[#1e1b4b] relative overflow-hidden group border border-white/5 hover:border-purple-500/50 transition-colors">
               {/* Background Scene */}
               <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-black"></div>
               {/* Elements */}
               <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400 rounded-full blur-xl opacity-20"></div>
               <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-500 rounded-full blur-2xl opacity-20"></div>
               
               <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-2">PUFFY PLANET GAME</h3>
                  <p className="text-gray-400 text-xs mb-4">Keeolber fiem dvore t broet tor diepns.</p>
                  <Gamepad2 className="text-purple-400" />
               </div>
               
               {/* Playful Characters */}
               <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex gap-4 animate-float-slow">
                  <div className="w-12 h-16 bg-pink-500 rounded-t-full rounded-b-lg"></div>
                  <div className="w-16 h-12 bg-cyan-400 rounded-full"></div>
               </div>
            </div>

            {/* Interactive 2 */}
            <div className="h-[400px] rounded-[2.5rem] bg-[#1e1b4b] relative overflow-hidden group border border-white/5 hover:border-pink-500/50 transition-colors">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
               
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-2 opacity-50">
                     {[...Array(16)].map((_, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full ${i % 2 === 0 ? 'bg-cyan-400' : 'bg-pink-500'} animate-pulse`} style={{animationDelay: `${i * 0.1}s`}}></div>
                     ))}
                  </div>
               </div>

               <div className="absolute bottom-0 w-full p-8">
                  <h3 className="text-2xl font-bold text-orange-300 mb-2">SOUND ORB</h3>
                  <p className="text-gray-400 text-xs mb-4">Scontelt Kee srorlais poor dooo.</p>
                  <MousePointer2 className="text-orange-400" />
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkPage;