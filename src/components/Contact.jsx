import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ExternalLink, CheckCircle2, ShieldCheck, MessageSquare } from "lucide-react";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=127%20Rabindranath%20Tagore%20Road%2C%20Purbachal%2C%20Nabapally%2C%20Kolkata%2C%20West%20Bengal%20700063&output=embed";

const MAP_OPEN_URL =
  "https://www.google.com/maps/search/?api=1&query=127+Rabindranath+Tagore+Road,+Purbachal,+Nabapally,+Kolkata,+West+Bengal+700063";

export default function Contact({ prefilledService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: prefilledService || "All Types Of Roof Sheds",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Formatted WhatsApp message payload
    const text = `*NEW INQUIRY - ROY ENTERPRISE*
----------------------------------------
👤 *Customer Name:* ${formData.name}
📞 *Phone Number:* ${formData.phone}
🛠️ *Service Required:* ${formData.service || "General Roofing Inquiry"}
📍 *Project Location:* ${formData.location || "Not Specified"}
📝 *Project Details:* ${formData.message || "No additional details provided"}
----------------------------------------
_Submitted via Roy Enterprise Website_`;

    const whatsappUrl = `https://wa.me/917278077092?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
  };

  return (
    <footer id="contact" className="bg-slate-950 text-white relative overflow-hidden pt-20 pb-8">
      {/* Subtle Grid background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-extrabold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>Connect With Us Today</span>
          </div>

          <span className="font-script text-3xl sm:text-4xl text-amber-500 block">
            Get In Touch
          </span>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">
            Get a Free <span className="text-red-500">Site Estimate & Consultation</span>
          </h2>

          <p className="font-lora text-slate-400 text-base sm:text-lg leading-relaxed">
            Ready to build or upgrade your roof shed, warehouse, or glass facade? Call our experts or submit an inquiry below for an instant quote.
          </p>
        </div>

        {/* Contact Split: Form + Info Cards + Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Left Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
            <h3 className="font-cinzel text-xl sm:text-2xl font-black text-white flex items-center gap-2 uppercase">
              <span>Send Us Your Requirements</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </h3>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Received Successfully!</h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our senior structural engineer will call you at <strong className="text-white">{formData.phone}</strong> within 2 hours with a detailed cost estimate.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", service: "All Types Of Roof Sheds", location: "", message: "" }); }}
                  className="px-6 py-2 rounded-xl bg-slate-800 text-white font-bold text-xs hover:bg-slate-700 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Suman Bar"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 72780 77092"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Service Required</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                    >
                      <option value="All Types Of Roof Sheds">All Types Of Roof Sheds</option>
                      <option value="UPVC & Aluminium Glazing">UPVC & Aluminium Glazing</option>
                      <option value="Gypsum False Ceiling">Gypsum False Ceiling</option>
                      <option value="Toughened Glass Canopy">Toughened Glass Canopy</option>
                      <option value="Industrial Warehouse Shed">Industrial Warehouse Shed</option>
                      <option value="Heavy Steel Structure">Heavy Steel Structure</option>
                      <option value="Tin Sheeting & Erection">Tin Sheeting & Erection</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Project Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Barasat / Salt Lake / Howrah"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Project Details / Roof Dimensions</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mention approximate roof area in sq ft, preferred Galvalume thickness (e.g. 0.47mm), or special requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-extrabold text-sm shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Free Quote Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Info Cards & Map */}
          <div className="lg:col-span-5 space-y-6">

            {/* Quick Contact Cards */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Direct Office Contacts</h4>

              <div className="space-y-3">
                <a
                  href="tel:+917278077092"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold">Main Sales & Technical Line</div>
                    <div className="text-sm font-black text-white">+91 72780 77092</div>
                  </div>
                </a>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href="tel:+917278077092"
                    className="flex-1 flex items-center gap-2.5 p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white text-xs font-bold"
                  >
                    <Phone className="w-4 h-4 text-red-400 shrink-0" />
                    <span>+91 72780 77092</span>
                  </a>
                  <a
                    href="tel:+919038444874"
                    className="flex-1 flex items-center gap-2.5 p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white text-xs font-bold"
                  >
                    <Phone className="w-4 h-4 text-red-400 shrink-0" />
                    <span>+91 90384 44874</span>
                  </a>
                </div>

                <a
                  href="mailto:sovonroy90@gmail.com"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold">Email Us</div>
                    <div className="text-sm font-bold text-white">sovonroy90@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-800/80 border border-slate-700 text-slate-300 text-xs">
                  <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>127, Rabindranath Tagore Rd, Purbachal, Nabapally, Kolkata, West Bengal 700063</span>
                </div>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl relative">
              <div className="h-60 w-full relative">
                <iframe
                  title="Roy Enterprise Map Location"
                  src={MAP_EMBED_URL}
                  loading="lazy"
                  allowFullScreen
                  className="w-full h-full border-0"
                />

                <a
                  href={MAP_OPEN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-xs font-extrabold shadow-lg flex items-center gap-1.5 hover:bg-slate-100 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Credit & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">Roy Enterprise</strong>.Website designed & developed by
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-red-400 transition-colors inline-flex items-center gap-1"
            >
              Digital Exposure Online Service
              <ExternalLink className="w-3 h-3 text-red-400" />
            </a>
          </div>


        </div>

      </div>
    </footer>
  );
}
