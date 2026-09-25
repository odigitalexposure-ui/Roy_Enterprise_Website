import { useState, useEffect } from "react";
import { Phone, ArrowRight, Award, CheckCircle2, Star, Building2, ChevronLeft, ChevronRight } from "lucide-react";

import hero1 from "../assets/imgi_47_imageye___-_imgi_101_pexels-photo-257636-1536x1024.jpg";
import hero2 from "../assets/imgi_74_WhatsApp-Image-2024-01-19-at-10.45.01-AM-1536x1152.jpg";
import hero3 from "../assets/imgi_30_WhatsApp-Image-2025-07-31-at-18.36.52_62abb1bc-1024x577.jpg";
import hero4 from "../assets/imgi_6.jpg";
import hero5 from "../assets/imgi_89_WhatsApp-Image-2024-01-19-at-10.44.51-AM-1536x1155.jpg";
import hero6 from "../assets/imgi_5.jpg";

const heroImages = [
  {
    src: hero1,
    title: "Modern Structural Steel Roof Architecture",
    tag: "IS 2062 High Yield Steel",
  },
  {
    src: hero2,
    title: "Turnkey Industrial Warehouse Roof Shed",
    tag: "Tata Galvalume 0.47mm Erection",
  },
  {
    src: hero3,
    title: "Royal Blue Curved Terrace Roof Shed",
    tag: "100% Weather & Rainproof Seal",
  },
  {
    src: hero4,
    title: "Complete Factory Warehouse Infrastructure",
    tag: "PEB Structural Steel Framing",
  },
  {
    src: hero5,
    title: "High-Span Industrial Steel Roof Trusses",
    tag: "Precision GI Hollow Tubes",
  },
  {
    src: hero6,
    title: "Architectural Toughened Glass Canopy",
    tag: "Safety Glass & Stainless Steel",
  },
];

export default function Hero({ onOpenQuote }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const highlights = [
    "Tata Galvalume Certified Roofing",
    "Leak-Proof Precision Guarantee",
    "Heavy Industrial & Residential",
    "25+ Years Master Craftsmanship",
  ];

  // Auto-play slideshow interval set to 2.5 seconds (2500ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const currentHero = heroImages[activeImageIndex];

  const renderVisualShowcase = () => (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* Main White Elevated Frame */}
      <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 p-3 shadow-2xl shadow-slate-300/70 group">
        <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[4/3] sm:aspect-[1.15/1]">
          <img
            key={currentHero.src}
            src={currentHero.src}
            alt={currentHero.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-in-out animate-in fade-in duration-500"
          />

          {/* Gradient Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Image Navigation Arrows */}
          <button
            type="button"
            onClick={() => setActiveImageIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-red-600 transition-colors backdrop-blur-sm shadow-md z-10 cursor-pointer"
            aria-label="Previous project photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => setActiveImageIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-red-600 transition-colors backdrop-blur-sm shadow-md z-10 cursor-pointer"
            aria-label="Next project photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Floating Light Glass Badge (Top Right - Hidden on Mobile) */}
        <div className="hidden sm:flex absolute top-6 right-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-2.5 sm:p-3 shadow-xl items-center gap-2.5 sm:gap-3 z-10">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
            <Award className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold">Quality Rating</div>
            <div className="text-xs sm:text-sm font-extrabold text-slate-900">100% Certified</div>
          </div>
        </div>

        {/* Floating Light Glass Badge (Bottom Left - Hidden on Mobile) */}
        <div className="hidden sm:flex absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-3 sm:p-3.5 shadow-xl items-center justify-between z-10">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-black text-slate-900 truncate">{currentHero.title}</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate">{currentHero.tag}</div>
            </div>
          </div>
          <span className="px-2 sm:px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-700 text-[9px] sm:text-[10px] font-extrabold uppercase shrink-0 ml-1">
            Verified
          </span>
        </div>
      </div>

      {/* 2.5s Timer Progress Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {heroImages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveImageIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
              activeImageIndex === i ? "w-8 bg-red-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`View photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-100/80 text-slate-900 overflow-hidden">
      {/* Background Subtle Architectural Pattern */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Sub-heading & Cursive Script Typography */}
            <div className="space-y-1">
              <span className="text-amber-600 font-bold tracking-[0.25em] text-xs uppercase block">
                ROY ENTERPRISE
              </span>
              <span className="font-script text-3xl sm:text-4xl text-amber-600 block">
                Crafted With Passion
              </span>
            </div>

            {/* Main Headline with Serif Typography */}
            <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] uppercase">
              Engineering Durable <br />
              <span className="bg-gradient-to-r from-red-600 via-red-700 to-amber-600 bg-clip-text text-transparent">
                Roof Sheds & Steel Structures
              </span>
            </h1>

            {/* MOBILE ONLY: Hero Image Slideshow directly under the main heading */}
            <div className="block lg:hidden my-6">
              {renderVisualShowcase()}
            </div>

            {/* Description */}
            <p className="font-lora text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Reliable, weather-resistant, and precision-engineered roofing solutions for industrial, commercial, and residential spaces. Built with genuine <strong className="text-slate-900 font-bold">Tata Galvalume</strong> sheets, heavy GI structural tubes, and toughened glass.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold shadow-xs hover:border-red-200 hover:shadow-md transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Action Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white font-extrabold text-base shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Get Free Site Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:+917278077092"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border-2 border-slate-200 hover:border-red-600 text-slate-900 font-extrabold text-base hover:bg-slate-50 transition-all flex items-center justify-center gap-2.5 shadow-md"
              >
                <Phone className="w-5 h-5 text-red-600" />
                <span>Call +91 72780 77092</span>
              </a>
            </div>

            {/* Customer Rating & Trust Badges */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 border-t border-slate-200/80">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-900 font-black text-sm">4.9/5</span>
              </div>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 text-xs sm:text-sm font-semibold">
                1,000+ Satisfied Clients Across Kolkata
              </span>
            </div>
          </div>

          {/* DESKTOP ONLY: Right Hero Visual Showcase Card */}
          <div className="hidden lg:block lg:col-span-5 relative">
            {renderVisualShowcase()}
          </div>

        </div>
      </div>
    </section>
  );
}
