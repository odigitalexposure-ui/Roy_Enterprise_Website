import { useState, useEffect } from "react";
import { X, Send, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function QuoteModal({ isOpen, onClose, prefilledService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: prefilledService || "All Types Of Roof Sheds",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-red-600 flex items-center justify-center transition-colors text-lg font-bold"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-extrabold uppercase">
            <ShieldCheck className="w-4 h-4 text-red-400" />
            <span>Instant Site Quote</span>
          </div>
          <h3 className="font-cinzel text-2xl font-black text-white tracking-tight uppercase">
            Request Free Inspection
          </h3>
          <p className="font-lora text-slate-400 text-xs sm:text-sm">
            Fill in your details and our senior structural engineer will contact you within 2 hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
              ✓
            </div>
            <h4 className="text-lg font-bold text-white">Thank You, {formData.name}!</h4>
            <p className="text-slate-300 text-xs">
              Your inquiry for <strong className="text-white">{formData.service}</strong> has been logged. We will call you at <strong className="text-white">{formData.phone}</strong> shortly.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-red-600 text-white font-bold text-xs shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sujit Purkait"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 72780 77092"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Service Required</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500"
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
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Project Location & Notes</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Kolkata, 2,000 sq ft roof"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-extrabold text-sm shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Free Quote Request</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
