import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LangContext";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Navbar() {
  const { selectedCountry, setSelectedCountry, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);
  const [isFeaturesMenuOpen, setIsFeaturesMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = () => {
      setIsCountryMenuOpen(false);
    };
    if (isCountryMenuOpen)
      document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isCountryMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2 px-2 sm:px-4" : "py-4 px-4 sm:px-6"
        }`}
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "bg-[#0b0f10]/80 border border-[#6cc24a]/20 backdrop-blur-xl rounded-full px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
              : "bg-transparent border border-transparent px-0 py-1"
          }`}
        >
          <a
            href="#"
            className="flex items-center gap-2.5 group transition-transform duration-200 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 32 32" className="w-[30px] h-[30px] fill-none">
              <path
                d="M10 14c-2.2 0-4-1.8-4-4s1.8-4 4-4c.5 0 1 .1 1.5.3C12.2 4.9 13.9 4 16 4s3.8.9 4.5 2.3c.5-.2 1-.3 1.5-.3 2.2 0 4 1.8 4 4s-1.8 4-4 4H10z"
                fill="#6cc24a"
              />
              <path
                d="M9 15h14v9a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-9z"
                fill="#6cc24a"
              />
              <path
                d="M13 19v4M16 19v4M19 19v4"
                stroke="#0b0f10"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-white text-xl font-extrabold tracking-tight">
              Fridge<span className="text-[#6cc24a]">Chef</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide text-zinc-400">
            
            <div 
              className="relative py-2" 
              onMouseEnter={() => setIsFeaturesMenuOpen(true)}
              onMouseLeave={() => setIsFeaturesMenuOpen(false)}
            >
              <button
                className="hover:text-white transition-colors flex items-center gap-1 cursor-default"
              >
                <AnimatedText>{t.navbar.features}</AnimatedText>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`text-zinc-500 transition-transform duration-200 ${isFeaturesMenuOpen ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <AnimatePresence>
                {isFeaturesMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-[calc(100%)] min-w-[220px] p-2 bg-[#0f1315]/95 border border-zinc-800/80 rounded-2xl shadow-2xl z-[70] flex flex-col gap-0.5 backdrop-blur-xl"
                  >
                    <a
                      href="#how"
                      onClick={() => setIsFeaturesMenuOpen(false)}
                      className="px-3 py-2 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors flex flex-col"
                    >
                      <span className="font-bold text-[13px]"><AnimatedText>{t.navbar.howItWorks}</AnimatedText></span>
                      <span className="text-[11px] text-zinc-500 font-normal"><AnimatedText>{t.navbar.howItWorksSub}</AnimatedText></span>
                    </a>
                    <a
                      href="#features"
                      onClick={() => setIsFeaturesMenuOpen(false)}
                      className="px-3 py-2 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors flex flex-col"
                    >
                      <span className="font-bold text-[13px]"><AnimatedText>{t.navbar.bento}</AnimatedText></span>
                      <span className="text-[11px] text-zinc-500 font-normal"><AnimatedText>{t.navbar.bentoSub}</AnimatedText></span>
                    </a>
                    <a
                      href="#faq"
                      onClick={() => setIsFeaturesMenuOpen(false)}
                      className="px-3 py-2 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors flex flex-col"
                    >
                      <span className="font-bold text-[13px]"><AnimatedText>{t.navbar.faq}</AnimatedText></span>
                      <span className="text-[11px] text-zinc-500 font-normal"><AnimatedText>{t.navbar.faqSub}</AnimatedText></span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#recipes"
              className="hover:text-white transition-colors relative py-1 group"
            >
              <AnimatedText>{t.navbar.recipes}</AnimatedText>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#6cc24a] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors relative py-1 group"
            >
              <AnimatedText>{t.navbar.about}</AnimatedText>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#6cc24a] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#blog"
              className="hover:text-white transition-colors relative py-1 group"
            >
              <AnimatedText>{t.navbar.blog}</AnimatedText>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#6cc24a] group-hover:w-full transition-all duration-300" />
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCountryMenuOpen(!isCountryMenuOpen);
                }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 text-[13px] font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
              >
                {selectedCountry === "UK" && (
                  <svg width="16" height="12" viewBox="0 0 60 42" className="rounded-sm shrink-0">
                    <clipPath id="u"><path d="M0 0v42h60V0z" /></clipPath>
                    <clipPath id="v"><path d="M30 21h30v21zV21H0v-21zh30V0z" /></clipPath>
                    <g clipPath="url(#u)">
                      <path d="M0 0v42h60V0z" fill="#012169" />
                      <path d="M0 0l60 42m0-42L0 42" stroke="#fff" strokeWidth="6" />
                      <path d="M0 0l60 42m0-42L0 42" clipPath="url(#v)" stroke="#C8102E" strokeWidth="4" />
                      <path d="M30 0v42M0 21h60" stroke="#fff" strokeWidth="10" />
                      <path d="M30 0v42M0 21h60" stroke="#C8102E" strokeWidth="6" />
                    </g>
                  </svg>
                )}

                {selectedCountry === "BR" && (
                  <svg width="16" height="12" viewBox="0 0 720 504" className="rounded-sm shrink-0">
                    <path fill="#009c3b" d="M0 0h720v504H0z" />
                    <path fill="#ffdf00" d="M360 414L630 252 360 90 90 252z" />
                    <circle cx="360" cy="252" r="131.4" fill="#002776" />
                    <path fill="#fff" d="M228.6 252a131.4 131.4 0 0 0 254.4 36c-9.5-31-41-54-78.4-54-47 0-86 36-86 81 0 10 2 20 5 29a131.4 131.4 0 0 0-95-92z" opacity="0.1" />
                    <path d="M233 265c40-30 110-45 254-20" stroke="#fff" strokeWidth="16" fill="none" strokeLinecap="round" />
                  </svg>
                )}

                {selectedCountry === "Global" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 shrink-0">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                )}

                <span>{selectedCountry}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`text-zinc-500 transition-transform duration-200 ${isCountryMenuOpen ? "rotate-180" : ""}`}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <AnimatePresence>
                {isCountryMenuOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-[calc(100%+10px)] min-w-[180px] p-1.5 bg-[#0f1315] border border-zinc-800 rounded-xl shadow-2xl z-[70] list-none flex flex-col gap-1"
                  >
                    {[
                      { name: t.navbar.countries.UK, short: "UK" },
                      { name: t.navbar.countries.BR, short: "BR" },
                      { name: t.navbar.countries.Global, short: "Global" },
                    ].map((country) => (
                      <li
                        key={country.short}
                        onClick={() => setSelectedCountry(country.short)}
                        className={`px-3 py-2 rounded-lg text-[13px] font-medium cursor-pointer transition-colors ${
                          selectedCountry === country.short
                            ? "bg-[#6cc24a]/15 text-[#6cc24a]"
                            : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                        }`}
                      >
                        <AnimatedText>{country.name}</AnimatedText>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-end gap-1.5 w-6 h-6 group"
              aria-label={t.navbar.toggleMenu}
            >
              <span className={`h-[1.5px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
              <span className={`h-[1.5px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-0 opacity-0" : "w-4 group-hover:w-6"}`} />
              <span className={`h-[1.5px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-0 pt-28 pb-12 px-6 bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-2xl z-40 flex flex-col gap-6 md:hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <nav className="flex flex-col gap-5 text-sm font-medium tracking-wide text-zinc-400">
              <a href="#how" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">
                <AnimatedText>{t.navbar.howItWorks}</AnimatedText>
              </a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">
                <AnimatedText>{t.navbar.bento}</AnimatedText>
              </a>
              <a href="#recipes" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">
                <AnimatedText>{t.navbar.recipes}</AnimatedText>
              </a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">
                <AnimatedText>{t.navbar.about}</AnimatedText>
              </a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">
                <AnimatedText>{t.navbar.faq}</AnimatedText>
              </a>
              <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">
                <AnimatedText>{t.navbar.blog}</AnimatedText>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
