import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsCounter from "../components/StatsCounter";
import WhatWeDo from "../components/WhatWeDo";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import MaterialsUsed from "../components/MaterialsUsed";
import HowItWorks from "../components/HowItWorks";
import WorkGallery from "../components/WorkGallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import QuoteModal from "../components/QuoteModal";
import FloatingLogoButton from "../components/FloatingLogoButton";
import { ArrowUp } from "lucide-react";

const Home = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenQuote = (serviceTitle = "") => {
    setPrefilledService(typeof serviceTitle === "string" ? serviceTitle : "");
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-600 selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Page Sections */}
      <main>
        <Hero onOpenQuote={handleOpenQuote} />
        
        {/* Statistics Counter Cards Section (Placed right after Hero section as requested) */}
        <StatsCounter />

        <WhatWeDo onOpenQuote={handleOpenQuote} />
        <Services onOpenQuote={handleOpenQuote} />
        <Gallery onOpenQuote={handleOpenQuote} />
        <MaterialsUsed onOpenQuote={handleOpenQuote} />
        <HowItWorks onOpenQuote={handleOpenQuote} />
        <WorkGallery onOpenQuote={handleOpenQuote} />
        <Testimonials />
        <Contact prefilledService={prefilledService} />
      </main>

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        prefilledService={prefilledService}
      />

      {/* Scroll To Top Button (Left side of floating logo button) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-slate-900/90 text-white shadow-2xl hover:bg-red-600 flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110 cursor-pointer border border-slate-700"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Global Round Floating Button with Original Roy Enterprise Logo */}
      <FloatingLogoButton onOpenQuote={handleOpenQuote} />
    </div>
  );
};

export default Home;
