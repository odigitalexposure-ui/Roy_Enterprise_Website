import { Star, Quote } from "lucide-react";
import testi1 from "../assets/testi1.png";
import testi2 from "../assets/testi2.png";
import testi3 from "../assets/testi3.png";

const testimonials = [
  {
    quote:
      "Roy Enterprise built our 3,500 sq ft factory roof shed using Tata Galvalume sheets. Their team completed the steel truss erection in just 4 days with zero leaks during heavy monsoon rains. Outstanding craftsmanship and very honest pricing!",
    name: "Sujit Purkait",
    role: "Industrial Plant Engineer",
    project: "Factory Roof Shed",
    rating: 5,
    image: testi2,
  },
  {
    quote:
      "We hired Roy Enterprise for our residential terrace roof shed and UPVC sliding windows. The finish is extremely neat, and they used heavy GI pipes just as promised in the contract. Highly recommend them to anyone in Kolkata!",
    name: "Sonela Roy",
    role: "Homeowner & Sports Professional",
    project: "Terrace Roof Shed & UPVC Glazing",
    rating: 5,
    image: testi1,
  },
  {
    quote:
      "Roy Enterprise works with commitment and professional responsibility. Their false ceiling and toughened glass partition work turned our office into a modern space. Great team, very polite, and extremely dedicated.",
    name: "Anindita Sen",
    role: "Senior Graphic Designer & Studio Lead",
    project: "False Ceiling & Glass Partition",
    rating: 5,
    image: testi3,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-script text-3xl sm:text-4xl text-amber-600 block">
            Verified Customer Feedback
          </span>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase">
            What Our Clients Say About <span className="text-red-600">Roy Enterprise</span>
          </h2>

          <p className="font-lora text-slate-600 text-base sm:text-lg leading-relaxed">
            We put our heart into every weld and joint. Hearing our clients express delight in our work gives us the energy to keep setting higher standards in roofing excellence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-red-200 group-hover:text-red-300 transition-colors absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex text-amber-400 gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="font-lora text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Project Badge */}
              <div className="pt-6 border-t border-slate-200/60 flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-600 shrink-0 shadow-md">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h4 className="font-cinzel text-base font-extrabold text-slate-900 truncate uppercase">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium truncate">{t.role}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded bg-red-100 text-red-700 text-[10px] font-extrabold uppercase tracking-wider">
                    {t.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
