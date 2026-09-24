import { ShieldCheck, Award, Layers, Sparkles, CheckCircle2, FileText, ArrowRight } from "lucide-react";

import material1 from "../assets/material1.webp";
import material2 from "../assets/material2.jpg";
import material3 from "../assets/material3.jpg";
import material4 from "../assets/material4.webp";
import material5 from "../assets/material5.jpg";
import material6 from "../assets/imgi_37_imgi_66_asian-galvalume-sheet.webp";
import material7 from "../assets/imgi_40_imageye___-_imgi_127_Q235-Zinc-Coating-Hollow-Section-Pre-Galvanised-Steel-Hollow-Section-Gi-Pipe-75mm-75-mm-Gi-Square-Pipe.webp";
import material8 from "../assets/imgi_43_imgi_57_polycarbonate-sheet.jpg";

export const materialsData = [
  {
    title: "Tata 0.47mm Galvalume Roofing Sheets",
    brand: "Tata Steel",
    tag: "Industry Standard",
    description:
      "Premium AZ150 zinc-aluminum alloy (55% Al, 43.5% Zn, 1.5% Si) coated steel sheets offering unparalleled thermal solar reflectivity, extreme corrosion resistance, and 25+ years structural durability.",
    image: material1,
    specs: {
      Thickness: "0.47mm - 0.50mm",
      Coating: "AZ150 Al-Zn Alloy",
      Warranty: "20+ Years Manufacturer Guarantee",
      Use: "Industrial Factories, Commercial & Residential Roofs",
    },
  },
  {
    title: "Tata GI Hollow Square & Rectangular Tubes",
    brand: "Tata Structure",
    tag: "High Strength",
    description:
      "Precision-welded galvanized iron hollow steel sections with uniform wall thickness and anti-rust zinc barrier coating. Superior structural stiffness for roof trusses and heavy column framing.",
    image: material2,
    specs: {
      Dimensions: "50x50mm, 75x75mm, 100x50mm",
      Coating: "120 GSM Galvanized Zinc Layer",
      Tensile: "IS 4923 Grade YST 210/240",
      Use: "Main Structural Roof Trusses & Mezzanines",
    },
  },
  {
    title: "Jindal / Bhushan 0.45mm Galvalume Sheets",
    brand: "Jindal / Bhushan Steel",
    tag: "Weather Resistant",
    description:
      "High-tensile color-coated aluminum-zinc alloy sheets engineered to withstand monsoon rains, intense thermal expansion, and salt atmosphere corrosion without rusting or fading.",
    image: material3,
    specs: {
      Thickness: "0.45mm TCT",
      Finish: "Silicon Modified Polyester (SMP)",
      Corrosion: "Class 1 Salt Spray Tested",
      Use: "Terrace Sheds, Agricultural & Factory Roofing",
    },
  },
  {
    title: "Nizon GI Hollow Structural Pipe",
    brand: "Nizon Steel",
    tag: "Precision Heavy Duty",
    description:
      "Galvanized structural steel tubing featuring high ductility, smooth weldability, and impact resilience. Engineered for heavy industrial framework, boundary gates, and structural purlins.",
    image: material4,
    specs: {
      Yield: "240 MPa Minimum Yield Strength",
      Surface: "Hot-Dip Galvanized Smooth Finish",
      Standard: "IS 1161 / IS 1239 Structural Pipe",
      Use: "Warehouse Framing, Purlins & Gate Structure",
    },
  },
  {
    title: "Transparent & Tinted Polycarbonate Sheets",
    brand: "Lexan / Bayer",
    tag: "90% Daylight Pass",
    description:
      "High-impact shatterproof polycarbonate panels with co-extruded UV protection layers. Delivers 90% natural light transmission while shielding interior spaces from harsh solar heat rays.",
    image: material5,
    specs: {
      Thickness: "2.0mm - 6.0mm Multiwall/Solid",
      "UV Shield": "Co-extruded Both Sides UV Protection",
      Impact: "250x Stronger than Glass",
      Use: "Skylights, Atriums, Greenhouses & Canopies",
    },
  },
  {
    title: "Asian Galvalume Color Coated Sheets",
    brand: "Asian Paints / Steel",
    tag: "Vivid Color Finish",
    description:
      "Decorative multi-layer color coated Galvalume profile sheets engineered with oven-cured primer and top-coat paint systems to maintain color vibrancy and weather barrier integrity.",
    image: material6,
    specs: {
      Coating: "Off-White, Brick Red, Royal Blue, Green",
      Layer: "Epoxy Primer + RMP Top Coat",
      Durability: "Scratch & Peel Resistant",
      Use: "Architectural Roofs, Sidewall Cladding",
    },
  },
  {
    title: "Pre-Galvanised Steel Heavy Hollow Sections",
    brand: "Q235 Certified Steel",
    tag: "Zero Maintenance",
    description:
      "Pre-galvanized high-yield steel square pipes (75mm x 75mm) designed for heavy structural loading, moisture resistance, and seamless jointing in industrial factory sheds.",
    image: material7,
    specs: {
      Section: "75mm x 75mm Square Section",
      Protection: "Internal & External Zinc Layer",
      Joining: "MIG / Arc Weld Compatible",
      Use: "Main Columns, Heavy Beams & Trusses",
    },
  },
  {
    title: "Multi-Wall Polycarbonate Daylight Panels",
    brand: "Sabic Polycarbonate",
    tag: "Thermal Insulation",
    description:
      "Multi-chamber hollow polycarbonate daylighting sheets engineered for maximum thermal insulation, noise reduction, and diffused natural lighting in large industrial warehouses.",
    image: material8,
    specs: {
      Structure: "Twin-Wall / Triple-Wall Hollow",
      Light: "Diffused Anti-Glare Transmission",
      "Fire Class": "Self-Extinguishing Class B1",
      Use: "Industrial Warehouse Daylight Strip Roofing",
    },
  },
];

export default function MaterialsUsed({ onOpenQuote }) {
  return (
    <section id="materials" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-extrabold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Uncompromising Quality</span>
          </div>

          <span className="font-script text-3xl sm:text-4xl text-amber-600 block">
            Grade-A Certified Metals
          </span>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase">
            Premium Raw <span className="text-red-600">Materials We Trust</span>
          </h2>

          <p className="font-lora text-slate-600 text-base sm:text-lg leading-relaxed">
            For over 25 years, we never compromise on quality. We strictly use genuine Tata, Jindal, Bhushan, and certified high-gauge galvanized steel to ensure your roof lasts a lifetime.
          </p>
        </div>

        {/* Material Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materialsData.map((material, idx) => (
            <div
              key={idx}
              className="group bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-red-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Header */}
              <div className="relative h-48 bg-white overflow-hidden p-4 flex items-center justify-center border-b border-slate-100">
                <img
                  src={material.image}
                  alt={material.title}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Brand Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                  {material.brand}
                </span>

                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-red-600/10 text-red-700 border border-red-200 text-[10px] font-extrabold uppercase tracking-wider">
                  {material.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-cinzel text-base font-extrabold text-slate-900 leading-snug group-hover:text-red-600 transition-colors uppercase">
                    {material.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {material.description}
                  </p>
                </div>

                {/* Specs Box */}
                <div className="bg-white p-3 rounded-xl border border-slate-200/60 space-y-1.5 text-[11px]">
                  {Object.entries(material.specs).slice(0, 3).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center text-slate-700">
                      <span className="font-semibold text-slate-500">{key}:</span>
                      <span className="font-bold text-slate-900 truncate max-w-[150px]">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <button
                  onClick={() => onOpenQuote?.(`Material Inquiry: ${material.title}`)}
                  className="w-full py-2 px-3 rounded-xl bg-white border border-slate-300 hover:bg-red-600 hover:text-white hover:border-red-600 text-slate-800 font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5 group/btn cursor-pointer"
                >
                  <span>Request Material Spec Sheet</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Commitment Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4" /> 100% Genuine Material Guarantee
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Want Custom Material Advice & Thickness Recommendations?
            </h3>
            <p className="font-lora text-slate-300 text-sm leading-relaxed">
              Our structural engineers will inspect your site and advise the ideal Galvalume thickness (0.47mm vs 0.50mm) and tube dimensions to optimize your budget.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote?.("Custom Material Consultation")}
            className="font-cinzel px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-red-600/30 hover:scale-105 transition-all shrink-0 cursor-pointer"
          >
            Speak to a Material Specialist
          </button>
        </div>

      </div>
    </section>
  );
}
