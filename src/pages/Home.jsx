import { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsCounter from "../components/StatsCounter";
import { ArrowUp } from "lucide-react";

// Lazy-loaded below-the-fold components for optimal initial page load performance & Lighthouse scores
const WhatWeDo = lazy(() => import("../components/WhatWeDo"));
const Services = lazy(() => import("../components/Services"));
const Gallery = lazy(() => import("../components/Gallery"));
const MaterialsUsed = lazy(() => import("../components/MaterialsUsed"));
const HowItWorks = lazy(() => import("../components/HowItWorks"));
const WorkGallery = lazy(() => import("../components/WorkGallery"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const Contact = lazy(() => import("../components/Contact"));
const QuoteModal = lazy(() => import("../components/QuoteModal"));
const FloatingLogoButton = lazy(() => import("../components/FloatingLogoButton"));

// Lightweight skeleton loader fallback for smooth chunk loading
const SectionFallback = () => (
  <div className="w-full py-16 flex items-center justify-center bg-slate-50">
    <div className="w-8 h-8 rounded-full border-2 border-red-600 border-t-transparent animate-spin" />
  </div>
);

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

        <Suspense fallback={<SectionFallback />}>
          <WhatWeDo onOpenQuote={handleOpenQuote} />
          <Services onOpenQuote={handleOpenQuote} />
          <Gallery onOpenQuote={handleOpenQuote} />
          <MaterialsUsed onOpenQuote={handleOpenQuote} />
          <HowItWorks onOpenQuote={handleOpenQuote} />
          <WorkGallery onOpenQuote={handleOpenQuote} />
          <Testimonials />
          <Contact prefilledService={prefilledService} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        {/* Quote Request Modal */}
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={handleCloseQuote}
          prefilledService={prefilledService}
        />

        {/* Global Round Floating Button with Original Roy Enterprise Logo */}
        <FloatingLogoButton onOpenQuote={handleOpenQuote} />
      </Suspense>

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
    </div>
  );
};

export default Home;
