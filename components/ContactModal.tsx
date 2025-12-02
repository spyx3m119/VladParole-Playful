import React from 'react';
import { X, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-[#18181b] w-full max-w-lg rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
        {/* Decorative Top Gradient */}
        <div className="h-2 w-full bg-gradient-to-r from-yellow-300 via-pink-500 to-cyan-500"></div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10 z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-4xl font-black text-white mb-2 tracking-tight">Let's Chat! <span className="text-3xl">👋</span></h2>
            <p className="text-gray-400 font-medium">Got an idea? I'm all ears. Send me a message!</p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-500 uppercase tracking-wider ml-4">Your Name</label>
              <input 
                type="text" 
                placeholder="What should I call you?" 
                className="w-full bg-[#0f1014] border-2 border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-all placeholder:text-gray-700 font-medium"
                autoFocus
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-500 uppercase tracking-wider ml-4">Your Email</label>
              <input 
                type="email" 
                placeholder="hello@example.com" 
                className="w-full bg-[#0f1014] border-2 border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 transition-all placeholder:text-gray-700 font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-500 uppercase tracking-wider ml-4">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell me about your project..." 
                className="w-full bg-[#0f1014] border-2 border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-pink-500 transition-all placeholder:text-gray-700 font-medium resize-none"
              ></textarea>
            </div>

            <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black py-5 rounded-2xl hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-purple-500/25 flex items-center justify-center gap-3 group text-lg tracking-wide uppercase">
              <span>Send Message</span>
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;