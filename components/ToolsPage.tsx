import React from 'react';
import { Terminal, PenTool, Layout, Box, Type, Palette, Clock, CheckSquare, Wand2, Grid, Code2, Scissors } from 'lucide-react';

const ToolsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">
              CREATIVE TOOLKIT
            </span>
          </h1>
          <p className="text-gray-400 tracking-[0.2em] text-sm uppercase font-bold">
            Essential Resources for Design & Dev
          </p>
          
          {/* Decorative particles */}
          <div className="absolute top-0 left-1/4 w-4 h-4 bg-blue-500 rounded-full blur-[2px] animate-bounce"></div>
          <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-green-400 rounded-full blur-[1px] animate-ping duration-[3000ms]"></div>
        </div>

        {/* --- DEVELOPMENT UTILITIES --- */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <div className="px-6 py-2 rounded-full bg-[#60a5fa] border-2 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.4)]">
              <span className="text-black font-black text-sm tracking-wide">DEV UTILITIES</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-[#1e293b] text-gray-400 text-xs font-bold">v2.0</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tool 1 */}
            <div className="group relative rounded-[2rem] bg-[#1e1b4b] overflow-hidden border border-white/5 hover:border-blue-400/30 transition-all duration-300">
              <div className="p-8 pb-32 relative z-10">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <h3 className="text-2xl font-bold text-blue-300 mb-2">CSS GRID GEN</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Visual generator for complex CSS grid layouts.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-full h-48 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              {/* Visual */}
              <div className="absolute bottom-[-20px] right-[-20px] w-40 h-56 bg-[#0f172a] rounded-3xl transform -rotate-12 group-hover:-rotate-6 transition-transform duration-500 shadow-2xl flex items-center justify-center border-4 border-[#334155] p-2">
                 <div className="grid grid-cols-2 gap-2 w-full h-full opacity-60">
                    <div className="bg-blue-500 rounded-lg col-span-2"></div>
                    <div className="bg-blue-500 rounded-lg"></div>
                    <div className="bg-blue-500 rounded-lg"></div>
                 </div>
              </div>
            </div>

            {/* Tool 2 */}
            <div className="group relative rounded-[2rem] bg-[#1e1b4b] overflow-hidden border border-white/5 hover:border-blue-400/30 transition-all duration-300">
              <div className="p-8 pb-32 relative z-10">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">REGEX TESTER</h3>
                <p className="text-gray-400 text-xs leading-relaxed">Real-time regular expression debugger.</p>
              </div>
              {/* Visual */}
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#1e293b]/80"></div>
              <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-48 h-40 bg-[#0f172a] rounded-t-3xl border-t-4 border-l-4 border-r-4 border-[#334155] group-hover:translate-y-[-10px] transition-transform duration-500 flex items-center justify-center">
                 <Code2 className="text-green-400" size={48} />
                 <div className="absolute top-4 left-4 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Tool 3 */}
            <div className="group relative rounded-[2rem] bg-[#1e1b4b] overflow-hidden border border-white/5 hover:border-blue-400/30 transition-all duration-300">
               <div className="p-8 relative z-10">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">JSON</h3>
                <h3 className="text-xl font-bold text-green-400 mb-2">FORMATTER</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-12">Beautify and validate JSON data instantly.</p>
                
                {/* Action Button */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all cursor-pointer">
                  <Terminal size={32} />
                </div>
              </div>
               <div className="absolute inset-0 bg-gradient-to-br from-[#022c22] to-black -z-10"></div>
            </div>
          </div>
        </div>

        {/* --- DESIGN ASSETS --- */}
        <div className="mb-20">
          <div className="px-6 py-2 rounded-full bg-[#fbbf24] border-2 border-yellow-300 shadow-[0_0_15px_rgba(251,191,36,0.4)] inline-block mb-8">
            <span className="text-black font-black text-sm tracking-wide">DESIGN ASSETS</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Asset 1: Palettes */}
            <div className="aspect-square rounded-[2rem] bg-[#312e81] p-6 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
               <div className="absolute inset-4 bg-gradient-to-br from-pink-500 to-orange-400 rounded-[1.5rem] flex items-center justify-center">
                  <div className="text-center text-white">
                     <Palette size={40} className="mx-auto mb-2 drop-shadow-md" />
                     <span className="font-bold text-sm">PALETTES</span>
                  </div>
               </div>
            </div>
             {/* Asset 2: Typography */}
             <div className="aspect-square rounded-[2rem] bg-[#312e81] p-6 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
               <div className="absolute inset-4 bg-[#f8fafc] rounded-[1.5rem] overflow-hidden flex items-center justify-center border-4 border-gray-200">
                   <div className="text-center text-black">
                      <h4 className="font-black text-4xl">Aa</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Typography</span>
                   </div>
               </div>
            </div>
             {/* Asset 3: Icons */}
             <div className="aspect-square rounded-[2rem] bg-[#312e81] p-6 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
               <div className="absolute inset-4 bg-indigo-500 rounded-[1.5rem] flex items-center justify-center overflow-hidden">
                   <div className="grid grid-cols-2 gap-2 text-white/50">
                      <Layout size={24} />
                      <Box size={24} />
                      <PenTool size={24} />
                      <Grid size={24} />
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center bg-indigo-600/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="font-bold text-white">ICONS</span>
                   </div>
               </div>
            </div>
            
             {/* Asset 4: Gradients */}
             <div className="aspect-square rounded-[2rem] bg-[#312e81] p-6 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
               <div className="absolute inset-4 bg-gradient-to-bl from-cyan-400 via-blue-500 to-purple-600 rounded-[1.5rem] flex items-center justify-center">
                  <div className="text-center">
                      <h4 className="font-bold text-white leading-tight">SUPER</h4>
                      <h4 className="font-bold text-white/80 leading-tight">GRADIENTS</h4>
                  </div>
               </div>
            </div>
            {/* Asset 5: Snippets */}
             <div className="aspect-square rounded-[2rem] bg-[#312e81] p-6 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
               <div className="absolute inset-4 bg-gray-900 rounded-[1.5rem] flex items-center justify-center overflow-hidden border border-white/10">
                  <Code2 className="text-green-400 mb-6" size={48} />
                  <div className="absolute bottom-4 text-xs font-bold text-white uppercase tracking-widest">Snippets</div>
               </div>
            </div>
            {/* Asset 6: Mockups */}
             <div className="aspect-square rounded-[2rem] bg-[#312e81] p-6 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300">
               <div className="absolute inset-4 bg-white rounded-[1.5rem] flex items-center justify-center overflow-hidden border-4 border-indigo-100">
                  <Layout className="text-indigo-600" size={48} />
                  <div className="absolute bottom-4 text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Mockups</div>
               </div>
            </div>
          </div>
        </div>

        {/* --- WORKFLOW & PRODUCTIVITY --- */}
        <div className="mb-20">
          <div className="px-6 py-2 rounded-full bg-[#a855f7] border-2 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)] inline-block mb-8 float-right">
            <span className="text-white font-black text-sm tracking-wide">WORKFLOW</span>
          </div>
          <div className="clear-both"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tool 1 */}
            <div className="h-[300px] rounded-[2.5rem] bg-[#1e1b4b] relative overflow-hidden group border border-white/5 hover:border-purple-500/50 transition-colors">
               <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-black"></div>
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <Clock className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={64} />
                  <h3 className="text-2xl font-bold text-white">POMODORO TIMER</h3>
               </div>
               
               <div className="absolute bottom-6 w-full text-center">
                  <p className="text-gray-400 text-xs">Stay focused with custom intervals.</p>
               </div>
            </div>

            {/* Tool 2 */}
            <div className="h-[300px] rounded-[2.5rem] bg-[#1e1b4b] relative overflow-hidden group border border-white/5 hover:border-pink-500/50 transition-colors">
               <div className="absolute inset-0 bg-gradient-to-br from-pink-900/50 to-black"></div>
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <CheckSquare className="text-pink-400 mb-4 group-hover:scale-110 transition-transform" size={64} />
                  <h3 className="text-2xl font-bold text-white">KANBAN BOARD</h3>
               </div>

               <div className="absolute bottom-6 w-full text-center">
                  <p className="text-gray-400 text-xs">Organize your tasks visually.</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ToolsPage;