import { UserRound, Paintbrush, Banknote, BriefcaseBusiness, CheckCircle2, ShieldCheck, Award, Phone, ArrowRight, Sparkles } from "lucide-react";
import howItWorksImg from "../assets/how_it_works.jpg";
import architecturalImg from "../assets/imgi_47_imageye___-_imgi_101_pexels-photo-257636-1536x1024.jpg";

const processSteps = [
  {
    step: "01",
    title: "Free Site Inspection & Consultation",
    description: "Our senior structural engineer visits your location to measure dimensions, evaluate wind/sun orientation, and understand your exact requirements.",
    icon: UserRound,
  },
  {
    step: "02",
    title: "Custom 3D Design & Transparent Budgeting",
    description: "We provide an optimized structural design along with a transparent itemized quotation matching your exact budget with zero hidden fees.",
    icon: Paintbrush,
  },
  {
    step: "03",
    title: "Certified Tata Material Sourcing",
    description: "We procure 100% genuine Tata Galvalume sheets, heavy-gauge GI hollow section tubes, and rubberized leak-proof fasteners directly from authorized mills.",
    icon: Banknote,
  },
  {
    step: "04",
    title: "Precision Erection & Handover",
    description: "Our certified master fabricators assemble the structure with precision MIG welding, anti-corrosion primer coating, and leak-proof sheet locking.",
    icon: BriefcaseBusiness,
  },
];

const whyFeatures = [
  "25+ Years Certified Roofing Track Record",
  "100% Genuine Tata & Jindal Galvalume",
  "Leak-Proof Fasteners & Rubber Washers",
  "Heavy Structural GI Steel Framing",
  "Budget-Friendly & Transparent Costing",
  "50+ Certified Master Fabricators",
  "10-Year Weathering Warranty",
  "On-Time Execution Guarantee",
];

export default function HowItWorks({ onOpenQuote }) {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-extrabold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Proven Workflow & Trust</span>
          </div>

          <span className="font-script text-3xl sm:text-4xl text-amber-600 block">
            Seamless Execution
          </span>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase">
            How We Work & <span className="text-red-600">Why Choose Roy Enterprise</span>
          </h2>

          <p className="font-lora text-slate-600 text-base sm:text-lg leading-relaxed">
            Our strength lies in our passion for structural precision, delivering lifetime roofing durability that combines ergonomic design, safety, and aesthetic beauty.
          </p>
        </div>

        {/* Top Split: Architectural Image + Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Visual Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src={architecturalImg}
                alt="Roy Enterprise Architectural Roof Construction"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-extrabold text-lg">
                    25+
                  </div>
                  <div>
                    <h4 className="font-cinzel font-extrabold text-sm text-white uppercase">Years of Craftsmanship</h4>
                    <p className="font-lora text-xs text-slate-300">Over 1,000+ roof sheds completed in Kolkata</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Process Steps */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase">
              Our Step-by-Step Construction Process
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-slate-300">{step.step}</span>
                    </div>

                    <h4 className="font-cinzel text-sm sm:text-base font-extrabold text-slate-900 uppercase">{step.title}</h4>
                    <p className="font-lora text-xs text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Lower Split: Why Roy Enterprise Showcase */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-extrabold uppercase">
                <ShieldCheck className="w-4 h-4 text-red-400" />
                <span>Why Partner With Us</span>
              </div>

              <h3 className="font-cinzel text-3xl sm:text-4xl font-black tracking-tight uppercase">
                Unlock the Joy of Living Under a <span className="text-red-500">Perfect Roof</span>
              </h3>

              <p className="font-lora text-slate-300 text-sm sm:text-base leading-relaxed">
                Roy Enterprise consists of a passionate team of master fabricators with decades of experience in the craft. We offer the finest balance between unyielding structural safety and affordability.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {whyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-lora">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onOpenQuote?.("Why Choose Us Inspection")}
                  className="font-cinzel px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Free Inspection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+917278077092"
                  className="font-cinzel px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>+91 72780 77092</span>
                </a>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <img
                  src={howItWorksImg}
                  alt="Roy Enterprise Team Work"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="font-script text-xl text-amber-400 font-bold block">
                    "Craftsmanship Beyond Expectation"
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
