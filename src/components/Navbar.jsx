import { useState, useEffect } from "react";
import { Menu, X, Phone, ShieldCheck, ChevronRight, MessageSquare } from "lucide-react";

export default function Navbar({ onOpenQuote }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "services", "materials", "about", "gallery", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Materials", href: "#materials" },
    { label: "About Us", href: "#about" },
    { label: "Work Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-200/60"
      }`}
    >
      {/* Top Banner Bar */}
      <div className="hidden md:block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-xs py-1.5 px-6 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4" /> 25+ Years of Roofing & Fabrication Excellence
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-300">Serving Kolkata & West Bengal</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+917278077092"
              className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span className="font-semibold">+91 72780 77092</span>
            </a>
            <a
              href="https://wa.me/917278077092"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 group py-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 via-red-700 to-red-900 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-500/25 group-hover:scale-105 transition-transform">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-red-600 transition-colors uppercase">
                Roy <span className="text-red-600">Enterprise</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 -mt-1">
                Roofing & Steel Specialists
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/80">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-red-600 text-white shadow-md shadow-red-500/30"
                      : "text-slate-700 hover:text-red-600 hover:bg-white/80"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+917278077092"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-red-200 bg-red-50/60 text-red-700 font-bold text-xs hover:bg-red-100 transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>+91 72780 77092</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="group relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:from-red-700 hover:to-red-800 transition-all duration-300 active:scale-95"
            >
              <span>Get Free Quote</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:text-red-600 hover:bg-slate-200 transition-colors"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[100%] bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="px-6 py-6 space-y-3 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center justify-between py-3 px-4 rounded-xl text-slate-800 font-bold text-sm hover:bg-red-50 hover:text-red-600 transition-colors border border-slate-100"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a
                href="tel:+917278077092"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span>Call +91 72780 77092</span>
              </a>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenQuote?.();
                }}
                className="w-full py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
              >
                <span>Request Free Site Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
