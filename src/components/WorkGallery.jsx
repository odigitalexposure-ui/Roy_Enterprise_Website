import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Filter, Maximize2, Sparkles, ShieldCheck, ArrowRight, Grid } from "lucide-react";

export const workGalleryItems = [
  { image: "/image/image1.jpeg", title: "Industrial Roof Shed Erection", category: "Roof Sheds", location: "Barasat, Kolkata" },
  { image: "/image/image2.jpeg", title: "Curved Terrace Galvalume Shed", category: "Roof Sheds", location: "Kestopur, Kolkata" },
  { image: "/image/image3.jpeg", title: "Heavy GI Pipe Structural Framework", category: "Steel Framing", location: "Salt Lake, Kolkata" },
  { image: "/image/image4.jpeg", title: "Custom Steel Staircase & Glass Railings", category: "Staircase & Glazing", location: "New Town, Kolkata" },
  { image: "/image/image5.jpeg", title: "Blue Profile Color Coated Roof Shed", category: "Roof Sheds", location: "Madhyamgram, Kolkata" },
  { image: "/image/image6.jpeg", title: "Large Industrial Factory Warehouse Roof", category: "Warehouses", location: "Dankuni Industrial Area" },
  { image: "/image/image7.jpeg", title: "Residential Terrace Extension Shed", category: "Roof Sheds", location: "Dum Dum, Kolkata" },
  { image: "/image/image8.jpeg", title: "Royal Blue Galvalume Terrace Roofing", category: "Roof Sheds", location: "Rajarhat, Kolkata" },
  { image: "/image/image9.jpeg", title: "Commercial Building Steel Roof Structure", category: "Steel Framing", location: "Sodepur, Kolkata" },
  { image: "/image/image10.jpeg", title: "High-Span Industrial Roof Truss Erection", category: "Steel Framing", location: "Howrah Industrial Belt" },
  { image: "/image/image11.jpeg", title: "Turnkey Warehouse Side Wall Cladding", category: "Warehouses", location: "Bangar, Kolkata" },
  { image: "/image/image12.jpeg", title: "Precision Heavy Steel Framing & Girders", category: "Steel Framing", location: "Garia, Kolkata" },
  { image: "/image/image13.jpeg", title: "Polycarbonate Daylight Strip Roofing", category: "Roof Sheds", location: "Bidhannagar" },
  { image: "/image/image14.jpeg", title: "Commercial Factory Roofing Handover", category: "Warehouses", location: "Jadavpur" },
  { image: "/image/image15.jpeg", title: "Heavy Duty Factory Truss Installation", category: "Warehouses", location: "Kalyani Highway" },
  { image: "/image/image16.jpeg", title: "Residential Car Parking Roof Shed", category: "Roof Sheds", location: "Tollygunge" },
  { image: "/image/image17.jpeg", title: "Structural Steel Railing & Canopy Fixing", category: "Staircase & Glazing", location: "Behala" },
];

const categories = ["All Projects", "Roof Sheds", "Steel Framing", "Warehouses", "Staircase & Glazing"];

export default function WorkGallery({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState("All Projects");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredItems = activeTab === "All Projects"
    ? workGalleryItems
    : workGalleryItems.filter(item => item.category === activeTab);

  const openLightbox = (idx) => setSelectedIndex(idx);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((curr) => (curr === 0 ? filteredItems.length - 1 : curr - 1));
  };

  const showNext = () => {
    setSelectedIndex((curr) => (curr === filteredItems.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrevious();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, filteredItems]);

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Real-World Portfolio</span>
          </div>

          <span className="font-script text-3xl sm:text-4xl text-amber-500 block">
            Authentic On-Site Work
          </span>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">
            Some Insights: <span className="text-red-500">Our Real Completed Works</span>
          </h2>

          <p className="font-lora text-slate-400 text-base sm:text-lg leading-relaxed">
            Explore authentic photos from our daily site installations across Kolkata and West Bengal. Every project represents our commitment to precision, durability, and customer satisfaction.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Portfolio Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/80 shadow-md hover:shadow-2xl transition-all duration-300 break-inside-avoid cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                loading={index < 8 ? "eager" : "lazy"}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="px-2.5 py-1 rounded-md bg-red-600/90 text-white text-[10px] font-extrabold uppercase tracking-wider inline-block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-cinzel text-sm sm:text-base font-extrabold text-white leading-snug uppercase">{item.title}</h3>
                  <p className="font-lora text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                    <span>📍</span> {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 text-center bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto space-y-4">
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold uppercase">Have a Custom Project in Mind?</h3>
          <p className="text-slate-300 text-sm">
            We can replicate or customize any of our completed roof shed designs for your home, factory, or office space.
          </p>
          <button
            onClick={() => onOpenQuote?.("Custom Gallery Project Request")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-lg shadow-red-600/30 transition-all"
          >
            <span>Request Site Visit & Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && filteredItems[selectedIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-slate-800/80 hover:bg-red-600 text-white flex items-center justify-center transition-colors text-xl font-bold"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => { e.stopPropagation(); showPrevious(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-slate-800/80 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-slate-800/80 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Lightbox Content */}
          <div
            className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[selectedIndex].image}
              alt={filteredItems[selectedIndex].title}
              className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl border border-slate-800"
            />

            <div className="text-center space-y-1">
              <span className="px-3 py-1 rounded-md bg-red-600 text-white text-xs font-extrabold uppercase tracking-wider">
                {filteredItems[selectedIndex].category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {filteredItems[selectedIndex].title}
              </h3>
              <p className="text-xs text-slate-400">
                Location: {filteredItems[selectedIndex].location} | Image {selectedIndex + 1} of {filteredItems.length}
              </p>
            </div>

            <button
              onClick={() => {
                const title = filteredItems[selectedIndex].title;
                closeLightbox();
                if (onOpenQuote) onOpenQuote(`Quote for Work: ${title}`);
              }}
              className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-lg shadow-red-600/30 transition-all flex items-center gap-2"
            >
              <span>Request Quote Like This Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
