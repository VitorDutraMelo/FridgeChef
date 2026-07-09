import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLang } from "@/context/LangContext";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Faq() {
  const { t } = useLang();
  const [openIdx, setOpenIdx] = useState(null);
  const faqs = t.faq.items;

  return (
    <ScrollReveal>
      <section className="pb-[96px] bg-[#0b0f10]" id="faq">
        <div className="max-w-[760px] mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-white mb-10">
            <AnimatedText>{t.faq.title}</AnimatedText>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-zinc-900/20 border border-zinc-800/60 rounded-2xl overflow-hidden transition-colors duration-200 hover:border-zinc-800"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4"
                  >
                    <span className="text-[14.5px] font-bold text-white tracking-wide">
                      <AnimatedText>{faq.q}</AnimatedText>
                    </span>
                    <span
                      className={`text-[#6cc24a] text-lg font-bold transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[200px] border-t border-zinc-900/60" : "max-h-0 pointer-events-none"}`}
                  >
                    <p className="p-5 text-zinc-400 text-[13.5px] leading-relaxed">
                      <AnimatedText>{faq.a}</AnimatedText>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
