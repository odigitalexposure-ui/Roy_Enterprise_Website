import { Building2, CheckCircle2, ArrowRight } from "lucide-react";
import what_we_do from "../assets/imgi_74_WhatsApp-Image-2024-01-19-at-10.45.01-AM-1536x1152.jpg";

export default function WhatWeDo({ onOpenQuote }) {
  const capabilities = [
    "Roof Shed Fabrication (Sloped, Curved & Flat)",
    "Tata 0.47mm Galvalume & Color Coated Sheeting",
    "UPVC & Aluminium Doors, Windows & Sliding Facades",
    "Gypsum & Armstrong Acoustic False Ceilings",
    "Toughened Glass Canopies & Skylights",
    "Turnkey Industrial Warehouse Infrastructure",
    "Heavy Steel Trusses, Columns & Girders",
    "Roof Leakage Repairs & Sheeting Replacement",
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Luxury Serif & Script Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-amber-600 font-bold tracking-[0.25em] text-xs uppercase block">
            ROY ENTERPRISE CAPABILITIES
          </span>
          <span className="font-script text-3xl sm:text-4xl text-amber-600 block">
            Crafted With Passion
          </span>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase pt-2">
            What We Do at <span className="text-red-600">Roy Enterprise</span>
          </h2>

          <p className="font-lora text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
            Everything we do is designed to offer you a superior experience. We cover almost everything you need from a master specialist in roofing, fabrication, and structural engineering.
          </p>
        </div>

        {/* Content Split: High-Res Crystal Clear Image + Capabilities List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Image Feature */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl group bg-slate-950 p-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={what_we_do}
                  alt="Roy Enterprise High-Quality Roof Shed Showcase"
                  loading="eager"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 sharpness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              </div>

              {/* Glass Info Card Overlay (Desktop Only, Hidden on Mobile for clean full image view) */}
              <div className="hidden sm:block absolute bottom-6 left-6 right-6 text-white p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-cinzel text-lg font-black text-white uppercase">Full-Spectrum Roofing Solutions</h4>
                    <p className="text-xs text-slate-300">Certified Tata Galvalume & Structural Steel</p>
                  </div>
                  <span className="px-3 py-1 rounded-md bg-red-600 text-white text-xs font-extrabold uppercase tracking-wider shrink-0">
                    100% Quality
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Capabilities */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-slate-900 leading-tight uppercase">
                Complete End-to-End Roofing & Structural Steel Engineering
              </h3>
              <p className="font-lora text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you need a heavy-duty industrial warehouse roof or a stylish residential terrace shed, our team delivers high-yield structural framing engineered for maximum weather durability.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{cap}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onOpenQuote?.("What We Do Inquiry")}
                className="px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-lg shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Free Site Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="px-6 py-3.5 rounded-xl border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-100 transition-all"
              >
                View Services Detail
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
