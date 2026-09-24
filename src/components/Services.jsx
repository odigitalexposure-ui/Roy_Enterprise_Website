import { useState } from "react";
import { Wrench, ArrowRight, ShieldCheck, Check, Sparkles, Maximize2 } from "lucide-react";

import imgi_2 from "../assets/imgi_2.jpg";
import imgi_3 from "../assets/imgi_3.jpg";
import imgi_4 from "../assets/imgi_4.jpg";
import imgi_5 from "../assets/imgi_5.jpg";
import imgi_6 from "../assets/imgi_6.jpg";
import imgi_7 from "../assets/imgi_7.jpg";
import imgi_8 from "../assets/imgi_8.jpg";

export const servicesData = [
  {
    id: "roof-shed",
    title: "All Types Of Roof Sheds",
    subtitle: "Industrial, Commercial & Residential Sheds",
    image: imgi_2,
    tag: "Most Popular",
    description:
      "Expert fabrication and installation of curved, sloped, and flat roof sheds using high-durability Tata Galvalume sheets and GI structural tubing. Designed for maximum wind resistance, thermal efficiency, and zero leakage.",
    features: [
      "Tata 0.47mm Galvalume & Color Coated Sheets",
      "Heavy-gauge GI Square & Rectangular Tubes",
      "Leak-Proof Fasteners & Rubber Washers",
      "Rust-Resistant Galvanized Primer Coating",
    ],
  },
  {
    id: "upvc-doors-windows",
    title: "UPVC, Aluminium Doors & Windows",
    subtitle: "Modern Architectural Glazing & Sliding Systems",
    image: imgi_3,
    tag: "High Demand",
    description:
      "Premium precision-engineered UPVC and Aluminium window & door systems offering exceptional soundproofing, thermal insulation, and dust resistance for modern homes and commercial complexes.",
    features: [
      "Multi-chamber UPVC Profiles with Steel Reinforcement",
      "Anodized & Powder-Coated Heavy Aluminium Framing",
      "Double/Single Toughened Safety Glass Options",
      "Weather-sealed EPDM Gaskets & Multi-Point Locks",
    ],
  },
  {
    id: "false-ceiling",
    title: "Gypsum & Armstrong False Ceiling Work",
    subtitle: "Acoustic & Decorative Ceiling Systems",
    image: imgi_4,
    tag: "Interior Excellence",
    description:
      "Seamless gypsum board false ceiling and modular Armstrong drop ceiling solutions for offices, showrooms, and luxury residences. Enhances acoustics, conceals wiring, and integrates modern LED lighting.",
    features: [
      "Original Saint-Gobain Gyproc / Armstrong Grid Systems",
      "Fire-Resistant & Moisture-Proof Ceiling Boards",
      "Custom Cove Lighting & Concealed Ducting Design",
      "Quick Erection & Superior Smooth Finishing",
    ],
  },
  {
    id: "toughened-glass",
    title: "Toughened Glass Fixing & Canopies",
    subtitle: "Architectural Glass Facades & Skylights",
    image: imgi_5,
    tag: "Premium Safety",
    description:
      "Heavy-duty toughened safety glass installations including glass canopies, entrance facades, balcony railings, and daylight skylights with stainless steel spider fittings and structural silicone.",
    features: [
      "8mm to 12mm Heat-Toughened Safety Glass",
      "SS 304 Grade Hardware & Spider Fittings",
      "UV Protective & Anti-Shatter Laminated Glass",
      "Sleek Frameless & Semi-Frameless Aesthetic",
    ],
  },
  {
    id: "complete-warehouse",
    title: "Complete Warehouse Construction",
    subtitle: "Turnkey Industrial Infrastructure",
    image: imgi_6,
    tag: "Turnkey Solutions",
    description:
      "End-to-end industrial warehouse design, structural steel erection, side wall cladding, ventilation systems, and heavy-duty roofing built to withstand extreme weather conditions and heavy loads.",
    features: [
      "PEB (Pre-Engineered Building) Steel Framing",
      "High Clear-Span Layouts without Interior Columns",
      "Polycarbonate Daylight Roof Strip Integration",
      "Turbo Ventilators & Ridge Vent Installation",
    ],
  },
  {
    id: "heavy-steel-structures",
    title: "Heavy Steel Structure Engineering",
    subtitle: "Industrial Trusses, Girders & Framing",
    image: imgi_7,
    tag: "Heavy Duty",
    description:
      "Precision structural steel fabrication including heavy industrial girders, columns, roof trusses, and factory mezzanine floors built using tested steel channels, angles, and ISMB sections.",
    features: [
      "High-Tensile Certified Structural Steel (IS 2062)",
      "Precision MIG Welding & Ultrasonic Testing",
      "Anti-Corrosive Epoxy Red Oxide Primer Paint",
      "Heavy Structural Mezzanine & Bridge Girders",
    ],
  },
  {
    id: "tin-sheeting",
    title: "Erection & Tin Sheeting Services",
    subtitle: "Roofing Sheet Replacement & Wall Cladding",
    image: imgi_8,
    tag: "Fast Turnaround",
    description:
      "Rapid roof sheeting replacement, tin sheet erection, wall cladding, and leak repair services for existing factories, workshops, garages, and residential terrace extensions.",
    features: [
      "Galvanized Iron & Galvalume Profile Sheeting",
      "Overlapped Waterproof Joint Sealing",
      "Gutter & Downpipe Drainage Accessories",
      "Old Sheet Demolition & Retrofitting Work",
    ],
  },
];

export default function Services({ onSelectService, onOpenQuote }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-extrabold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>

          <span className="font-script text-3xl sm:text-4xl text-amber-600 block">
            Master Craftsmanship & Precision
          </span>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase">
            Our Specialist <span className="text-red-600">Services & Fabrication</span>
          </h2>
          
          <p className="font-lora text-slate-600 text-base sm:text-lg leading-relaxed">
            From heavy industrial warehouse steel framing to elegant residential roof sheds and UPVC glazing, we deliver turnkey craftsmanship built to last for decades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5"
            >
              {/* Card Image */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
                  {service.tag}
                </div>

                {/* Quick Zoom Trigger */}
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  aria-label={`Inspect ${service.title}`}
                  className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-slate-900/80 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all shadow-md cursor-pointer"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs text-red-300 font-semibold uppercase tracking-wider block">
                    {service.subtitle}
                  </span>
                  <h3 className="font-cinzel text-xl font-bold leading-snug drop-shadow-sm uppercase">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <p className="font-lora text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Feature Bullet points */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (onSelectService) onSelectService(service);
                      else if (onOpenQuote) onOpenQuote(service.title);
                    }}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-red-600 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>Get Quote for This</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-72">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-red-600 flex items-center justify-center transition-colors font-bold text-lg"
              >
                ✕
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-md bg-red-600 text-white text-xs font-bold uppercase tracking-wider inline-block mb-2">
                  {selectedService.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black">{selectedService.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm">{selectedService.subtitle}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">Overview</h4>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{selectedService.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">Specifications & Key Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <ShieldCheck className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    if (onOpenQuote) onOpenQuote(title);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-lg shadow-red-600/30 transition-all flex items-center gap-2"
                >
                  <span>Request Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
