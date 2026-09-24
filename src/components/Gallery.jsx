import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export const primaryGalleryItems = [
  {
    title: "All Types Of Roof Sheds",
    subtitle: "Tata Galvalume Curved & Slope Sheds",
    image: "/image/image1.jpeg",
    badge: "Roofing",
  },
  {
    title: "UPVC, Aluminium Door & Window Systems",
    subtitle: "Soundproof Architectural Glazing",
    image: "/image/image2.jpeg",
    badge: "Glazing",
  },
  {
    title: "Gypsum & Armstrong False Ceiling Work",
    subtitle: "Decorative Acoustic Ceilings",
    image: "/image/image3.jpeg",
    badge: "Ceilings",
  },
  {
    title: "Toughened Glass Fixing & Canopies",
    subtitle: "Frameless Glass Entrance Systems",
    image: "/image/image4.jpeg",
    badge: "Glasswork",
  },
  {
    title: "Complete Industrial Warehouse Infrastructure",
    subtitle: "PEB Structural Framing & Wall Cladding",
    image: "/image/image5.jpeg",
    badge: "Warehouses",
  },
  {
    title: "Heavy Steel Structures & Girders",
    subtitle: "ISMB Beams & Structural Trusses",
    image: "/image/image6.jpeg",
    badge: "Steelwork",
  },
  {
    title: "Erection & Tin Sheeting Services",
    subtitle: "Profile Sheet Replacement & Weatherproofing",
    image: "/image/image7.jpeg",
    badge: "Sheeting",
  },
];

export default function Gallery({ onOpenQuote }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((current) => (current === 0 ? primaryGalleryItems.length - 1 : current - 1));
  };

  const showNext = () => {
    setSelectedIndex((current) => (current === primaryGalleryItems.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyboard = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyboard);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Craftsman Gallery</span>
          </div>

          <span className="font-script text-3xl sm:text-4xl text-amber-500 block">
            Excellence In Execution
          </span>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">
            Our Core <span className="text-red-500">Service Showcase</span>
          </h2>

          <p className="font-lora text-slate-400 text-base sm:text-lg leading-relaxed">
            Click on any service project to open high-resolution view, inspect construction details, or request a customized cost estimate.
          </p>
        </div>

        {/* Gallery Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {primaryGalleryItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              onClick={() => openModal(index)}
              className="group relative bg-slate-800 rounded-3xl overflow-hidden border border-slate-700/80 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
                  {item.badge}
                </span>

                <button
                  type="button"
                  aria-label={`Open modal for ${item.title}`}
                  className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-slate-900/80 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all shadow-md"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Action */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs text-red-400 font-semibold uppercase tracking-wider block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-white leading-snug group-hover:text-red-400 transition-colors uppercase">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300 font-semibold">
                  <span className="flex items-center gap-1 text-emerald-400">
                    ✓ Certified Installation
                  </span>
                  <span className="text-red-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Expand Photo →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Image Modal */}
      {selectedIndex !== null && primaryGalleryItems[selectedIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-slate-800/80 hover:bg-red-600 text-white flex items-center justify-center transition-colors text-xl font-bold"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); showPrevious(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-slate-800/80 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-slate-800/80 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={primaryGalleryItems[selectedIndex].image}
              alt={primaryGalleryItems[selectedIndex].title}
              className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl border border-slate-800"
            />

            <div className="text-center space-y-1">
              <span className="px-3 py-1 rounded-md bg-red-600 text-white text-xs font-extrabold uppercase tracking-wider">
                {primaryGalleryItems[selectedIndex].badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {primaryGalleryItems[selectedIndex].title}
              </h3>
              <p className="text-xs text-slate-400">
                {primaryGalleryItems[selectedIndex].subtitle} | {selectedIndex + 1} of {primaryGalleryItems.length}
              </p>
            </div>

            <button
              onClick={() => {
                const title = primaryGalleryItems[selectedIndex].title;
                closeModal();
                if (onOpenQuote) onOpenQuote(title);
              }}
              className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-lg shadow-red-600/30 transition-all flex items-center gap-2"
            >
              <span>Get Free Quote For This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
