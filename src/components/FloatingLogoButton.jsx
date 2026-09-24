import { useState } from "react";
import { Phone, MessageSquare, ShieldCheck, X, ChevronUp } from "lucide-react";

export default function FloatingLogoButton({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Quick Action Expanded Popup Menu */}
      {isOpen && (
        <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-3xl p-4 text-white shadow-2xl space-y-3 mb-2 animate-in zoom-in-95 duration-200 max-w-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-red-600 flex items-center justify-center font-black text-xs text-white">
                R
              </div>
              <span className="text-xs font-bold text-slate-200">Roy Enterprise Quick Desk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuote?.("Floating Logo Quick Quote");
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs shadow-lg shadow-red-600/30 flex items-center justify-between transition-all"
            >
              <span>Get Instant Free Quote</span>
              <ShieldCheck className="w-4 h-4" />
            </button>

            <a
              href="tel:+917278077092"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-between transition-colors border border-slate-700"
            >
              <span>Call +91 72780 77092</span>
              <Phone className="w-4 h-4 text-red-400" />
            </a>

            <a
              href="https://wa.me/917278077092?text=Hello%20Roy%20Enterprise,%20I%20would%20like%20a%20free%20quote%20for%20my%20roofing%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-between transition-colors shadow-md"
            >
              <span>Chat on WhatsApp</span>
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* Main Global Round Floating Logo Button */}
      <div className="relative group">
        {/* Pulse Glow Ring */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-600 to-amber-500 blur-md opacity-75 group-hover:opacity-100 animate-pulse pointer-events-none" />

        <button
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
            } else {
              setIsOpen(true);
            }
          }}
          aria-label="Roy Enterprise Quick Contact Floating Button"
          className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-red-600 via-red-700 to-red-900 border-2 border-white/90 shadow-2xl shadow-red-600/50 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 overflow-hidden"
        >
          {/* Internal Stylized Logo Emblem */}
          <div className="flex flex-col items-center justify-center text-white">
            <span className="text-2xl sm:text-3xl font-black tracking-tighter leading-none drop-shadow-md">
              R
            </span>
            <span className="text-[8px] font-black uppercase tracking-widest text-amber-300 -mt-0.5">
              Roy
            </span>
          </div>
        </button>

        {/* Hover Tooltip */}
        {!isOpen && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-slate-700">
            Quick Quote & Call
          </div>
        )}
      </div>
    </div>
  );
}
