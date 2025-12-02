import React from 'react';
import { Rocket, Gamepad2, Code, Layers, Figma, Palette, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Top Section: Intro & Avatar --- */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12 relative">
          
          {/* Left Text */}
          <div className="text-center md:text-left relative z-10">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-lg leading-tight">
              HEY THERE!<br />
              I'M VLAD
            </h1>
            <h2 className="text-cyan-400 font-bold tracking-widest text-sm md:text-base uppercase mb-8">
              Creative Developer & Designer
            </h2>
          </div>

          {/* Center Avatar */}
          <div className="relative group">
            {/* Thought Bubble */}
            <div className="absolute -top-12 -right-12 bg-white text-black p-3 rounded-2xl rounded-bl-none shadow-[0_0_20px_rgba(255,255,255,0.4)] animate-bounce z-20">
              <Lightbulb className="text-yellow-500 fill-yellow-500" size={24} />
            </div>

            {/* Avatar Circle with Gradient Border */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-[6px] bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_40px_rgba(168,85,247,0.5)]">
               <div className="w-full h-full rounded-full bg-indigo-950 overflow-hidden relative">
                 {/* Simple CSS Avatar Representation */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-56 bg-[#fca5a5] rounded-t-[3rem]">
                    {/* Hair */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-24 bg-indigo-900 rounded-full"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-12 bg-indigo-900 rounded-b-xl"></div>
                    {/* Face */}
                    <div className="absolute top-16 left-8 w-3 h-3 bg-black rounded-full"></div> {/* Eye L */}
                    <div className="absolute top-16 right-8 w-3 h-3 bg-black rounded-full"></div> {/* Eye R */}
                    <div className="absolute top-24 left-1/2 -translate-x-1/2 w-8 h-4 bg-red-400 rounded-b-full"></div> {/* Mouth */}
                    {/* Shirt */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-24 bg-green-400 rounded-t-full"></div>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="hidden md:block">
             <h2 className="text-4xl font-black text-[#bef264] drop-shadow-[0_0_10px_rgba(190,242,100,0.5)] -rotate-6">
               LET'S CHAT!
             </h2>
          </div>
        </div>

        {/* --- My Story Section --- */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-pink-300 mb-8 ml-2">MY STORY</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Story Text Card */}
             <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                {/* Blobs */}
                <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-50"></div>
                
                <p className="relative z-10 text-xl md:text-2xl font-bold leading-relaxed text-white drop-shadow-md">
                   Started coding with retro games... fell in love with html/css design.. now I build digital playgrounds!
                </p>
             </div>

             {/* Visual Story Card */}
             <div className="bg-gradient-to-br from-teal-400 via-green-400 to-yellow-300 rounded-[3rem] p-10 relative overflow-hidden flex items-center justify-center min-h-[300px]">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                
                {/* Floating Elements */}
                <Rocket className="absolute top-10 right-10 text-purple-600 animate-float" size={64} />
                <div className="absolute top-1/2 left-10 w-16 h-16 bg-pink-500 rounded-full blur-md opacity-80 animate-float-delayed"></div>
                <div className="absolute bottom-10 left-20 w-8 h-8 bg-white rounded-full opacity-60 animate-bounce"></div>
                
                <Gamepad2 className="text-indigo-900 drop-shadow-2xl relative z-10 rotate-12" size={120} />
             </div>
          </div>
        </div>

        {/* --- Skills & Tools Section --- */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-pink-300 mb-12 ml-2">SKILLS & TOOLS</h3>

          <div className="relative py-10">
             {/* Wavy Connector Line (SVG) */}
             <svg className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 hidden md:block pointer-events-none" viewBox="0 0 1200 100" preserveAspectRatio="none">
               <path d="M0 50 C 200 0, 400 100, 600 50 C 800 0, 1000 100, 1200 50" stroke="url(#waveGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
               <defs>
                 <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
                   <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                   <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
                   <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
                 </linearGradient>
               </defs>
             </svg>

             {/* Skills Row */}
             <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-8 relative z-10 max-w-5xl mx-auto px-4">
                
                {/* JS */}
                <div className="flex flex-col items-center gap-2 group">
                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0f1014] border-4 border-[#bef264] flex items-center justify-center shadow-[0_0_20px_rgba(190,242,100,0.3)] group-hover:scale-110 transition-transform bg-gradient-to-br from-gray-900 to-black">
                      <span className="font-black text-[#bef264] text-2xl">JS</span>
                   </div>
                </div>

                {/* React */}
                <div className="flex flex-col items-center gap-2 group mt-0 md:mt-12">
                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0f1014] border-4 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover:scale-110 transition-transform bg-gradient-to-br from-gray-900 to-black">
                      <Code className="text-cyan-400" size={32} />
                   </div>
                   <div className="px-3 py-1 bg-cyan-900/50 rounded-full border border-cyan-500/30 text-cyan-300 text-xs font-bold">REACT</div>
                </div>

                {/* Physics/Atom (Generic Tech) */}
                <div className="flex flex-col items-center gap-2 group">
                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0f1014] border-4 border-pink-500 flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.3)] group-hover:scale-110 transition-transform bg-gradient-to-br from-gray-900 to-black">
                      <div className="relative w-10 h-10 animate-spin-slow">
                         <div className="absolute inset-0 border-2 border-pink-500 rounded-full transform rotate-0"></div>
                         <div className="absolute inset-0 border-2 border-pink-500 rounded-full transform rotate-60"></div>
                         <div className="absolute inset-0 border-2 border-pink-500 rounded-full transform rotate-120"></div>
                         <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-pink-300 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                   </div>
                </div>

                {/* UI/UX */}
                <div className="flex flex-col items-center gap-2 group mt-0 md:mt-12">
                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0f1014] border-4 border-[#a855f7] flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform bg-gradient-to-br from-gray-900 to-black">
                      <span className="font-black text-[#a855f7] text-xl">UI/UX</span>
                   </div>
                   <div className="px-3 py-1 bg-purple-900/50 rounded-full border border-purple-500/30 text-purple-300 text-xs font-bold">DESIGN</div>
                </div>

                {/* Figma */}
                <div className="flex flex-col items-center gap-2 group">
                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0f1014] border-4 border-orange-400 flex items-center justify-center shadow-[0_0_20px_rgba(251,146,60,0.3)] group-hover:scale-110 transition-transform bg-gradient-to-br from-gray-900 to-black">
                      <Figma className="text-orange-400" size={32} />
                   </div>
                   <div className="px-3 py-1 bg-orange-900/50 rounded-full border border-orange-500/30 text-orange-300 text-xs font-bold">FIGMA</div>
                </div>

             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;