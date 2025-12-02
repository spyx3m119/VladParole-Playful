import React from 'react';
import { AppWindow, ToyBrick, Puzzle, Code, Layers, Figma, Palette, Lightbulb } from 'lucide-react';

interface AboutPageProps {
  onOpenContact?: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-52 pb-20 px-6 min-h-screen overflow-hidden">
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
            <div className="absolute -top-16 -right-16 bg-white text-black p-5 rounded-3xl rounded-bl-none shadow-[0_0_30px_rgba(255,255,255,0.5)] animate-float-slow z-20">
              <Lightbulb className="text-yellow-500 fill-yellow-500" size={36} />
            </div>

            {/* Avatar Circle with Gradient Border */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-[6px] bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_40px_rgba(168,85,247,0.5)]">
               <div className="w-full h-full rounded-full bg-gradient-to-b from-sky-300 to-sky-500 overflow-hidden relative">
                 {/* Character with hoodie style */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 h-52">
                    {/* Hoodie - behind face */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-20 bg-purple-600 rounded-t-[2rem] z-0">
                      {/* Hoodie strings */}
                      <div className="absolute top-2 left-1/2 -translate-x-[20px] w-1 h-6 bg-white rounded-full"></div>
                      <div className="absolute top-2 left-1/2 translate-x-[14px] w-1 h-6 bg-white rounded-full"></div>
                      {/* Kangaroo pocket */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-purple-700 rounded-t-xl"></div>
                    </div>
                    {/* Face/Head - on top */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-32 bg-[#f5d0c5] rounded-[2.5rem] z-10">
                      {/* Hair base - smooth rounded with gradient */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[120px] h-14 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-700 rounded-t-[3rem] rounded-b-lg"></div>
                      {/* Hair top layer with softer edges */}
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-28 h-10 bg-gradient-to-b from-gray-600 to-gray-800 rounded-t-[2.5rem]"></div>
                      {/* Soft messy strands with rounded tips */}
                      <div className="absolute -top-5 left-4 w-3 h-6 bg-gradient-to-t from-gray-700 to-gray-500 rounded-full opacity-90"></div>
                      <div className="absolute -top-6 left-7 w-3 h-7 bg-gradient-to-t from-gray-800 to-gray-600 rounded-full opacity-95"></div>
                      <div className="absolute -top-5 left-10 w-2.5 h-5 bg-gradient-to-t from-gray-700 to-gray-400 rounded-full opacity-85"></div>
                      <div className="absolute -top-6 right-4 w-3 h-6 bg-gradient-to-t from-gray-700 to-gray-500 rounded-full opacity-90"></div>
                      <div className="absolute -top-6 right-7 w-3 h-7 bg-gradient-to-t from-gray-800 to-gray-600 rounded-full opacity-95"></div>
                      <div className="absolute -top-5 right-10 w-2.5 h-5 bg-gradient-to-t from-gray-700 to-gray-400 rounded-full opacity-85"></div>
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-7 bg-gradient-to-t from-gray-800 to-gray-500 rounded-full"></div>
                      <div className="absolute -top-5 left-1/2 -translate-x-[12px] w-3 h-6 bg-gradient-to-t from-gray-700 to-gray-400 rounded-full opacity-90"></div>
                      <div className="absolute -top-5 left-1/2 translate-x-[8px] w-3 h-6 bg-gradient-to-t from-gray-700 to-gray-500 rounded-full opacity-90"></div>
                      {/* Smooth side hair */}
                      <div className="absolute top-0 left-0 w-6 h-8 bg-gradient-to-r from-gray-600 to-transparent rounded-bl-2xl rounded-tr-xl"></div>
                      <div className="absolute top-0 right-0 w-6 h-8 bg-gradient-to-l from-gray-600 to-transparent rounded-br-2xl rounded-tl-xl"></div>
                      {/* Gray temple highlights - blended */}
                      <div className="absolute top-3 left-0 w-6 h-4 bg-gradient-to-r from-gray-400 to-transparent rounded-r-full opacity-60"></div>
                      <div className="absolute top-3 right-0 w-6 h-4 bg-gradient-to-l from-gray-400 to-transparent rounded-l-full opacity-60"></div>
                      {/* Eyebrows */}
                      <div className="absolute top-12 left-5 w-5 h-1.5 bg-gray-700 rounded-full rotate-[-5deg]"></div>
                      <div className="absolute top-12 right-5 w-5 h-1.5 bg-gray-700 rounded-full rotate-[5deg]"></div>
                      {/* Eyes */}
                      <div className="absolute top-16 left-6 w-4 h-4 bg-white rounded-full">
                        <div className="absolute top-1 left-1 w-2.5 h-2.5 bg-stone-800 rounded-full"></div>
                      </div>
                      <div className="absolute top-16 right-6 w-4 h-4 bg-white rounded-full">
                        <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-stone-800 rounded-full"></div>
                      </div>
                      {/* Nose */}
                      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-2 h-3 bg-[#e8bfb5] rounded-full"></div>
                      {/* Chin Beard - thin and light */}
                      <div className="absolute top-[98px] left-1/2 -translate-x-1/2 w-6 h-5 bg-gray-400 rounded-b-xl opacity-50"></div>
                      {/* Smile */}
                      <div className="absolute top-[94px] left-1/2 -translate-x-1/2 w-5 h-2 border-b-[3px] border-red-400 rounded-b-full"></div>
                      {/* Cheeks */}
                      <div className="absolute top-20 left-2 w-4 h-3 bg-pink-300 rounded-full opacity-40"></div>
                      <div className="absolute top-20 right-2 w-4 h-3 bg-pink-300 rounded-full opacity-40"></div>
                    </div>
                 </div>
                 {/* Laptop in front - back side view */}
                 <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20">
                   {/* Laptop Lid (back side) */}
                   <div className="w-28 h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-md border-2 border-gray-400 relative shadow-inner">
                     {/* Apple-style logo or simple design element */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-7 flex items-center justify-center">
                       <div className="w-5 h-6 bg-gray-400 rounded-md opacity-60"></div>
                       <div className="absolute w-1.5 h-1.5 bg-gray-500 rounded-full -top-0.5"></div>
                     </div>
                   </div>
                   {/* Laptop Base/Keyboard area */}
                   <div className="w-32 h-2 bg-gray-400 rounded-b-md -mt-0.5 mx-auto relative">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-500 rounded-full"></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="hidden md:block">
             <button
               onClick={onOpenContact}
               className="text-4xl font-black text-[#bef264] drop-shadow-[0_0_10px_rgba(190,242,100,0.5)] -rotate-6 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(190,242,100,0.8)] transition-all duration-300 cursor-pointer bg-transparent border-none"
             >
               LET'S CHAT!
             </button>
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
                
                <p className="relative z-10 text-xl md:text-2xl font-small leading-relaxed text-white drop-shadow-md">
                   I started shaping interfaces the way some people build Lego sets—one playful piece at a time. Now I design intuitive experiences by day and build side projects by night. For me, good design (and good teamwork) turns complexity into clarity.
                </p>
             </div>

             {/* Visual Story Card */}
             <div className="bg-gradient-to-br from-teal-400 via-green-400 to-yellow-300 rounded-[3rem] p-10 relative overflow-hidden flex items-center justify-center min-h-[300px]">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                
                {/* Floating Elements */}
                {/* Website Icon - Center */}
                <AppWindow className="text-indigo-900 drop-shadow-2xl relative z-10 rotate-12" size={100} />

                {/* Multiple Lego Pieces */}
                <ToyBrick className="absolute top-16 left-12 text-pink-600 animate-float-delayed rotate-[-20deg]" size={48} />
                <ToyBrick className="absolute bottom-12 right-16 text-cyan-500 animate-float rotate-[25deg]" size={56} />
                <ToyBrick className="absolute bottom-20 left-28 text-yellow-500 animate-bounce rotate-[-10deg]" size={36} />
                <ToyBrick className="absolute top-8 left-1/3 text-orange-500 animate-float-slow rotate-[15deg]" size={40} />

                {/* Multiple Puzzle Pieces */}
                <Puzzle className="absolute top-10 right-10 text-purple-600 animate-float rotate-[10deg]" size={52} />
                <Puzzle className="absolute bottom-8 right-1/3 text-pink-500 animate-float-delayed rotate-[-15deg]" size={38} />
                <Puzzle className="absolute top-1/3 right-20 text-emerald-500 animate-bounce rotate-[20deg]" size={44} />
                <Puzzle className="absolute bottom-16 left-10 text-blue-500 animate-float-slow rotate-[-25deg]" size={32} />
                <Puzzle className="absolute top-6 left-16 text-rose-400 animate-float rotate-[5deg]" size={28} />
                <Puzzle className="absolute bottom-6 right-8 text-amber-400 animate-float-delayed rotate-[-8deg]" size={46} />
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