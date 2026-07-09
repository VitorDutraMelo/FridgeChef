import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLang } from "@/context/LangContext";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Why() {
  const { t } = useLang();

  return (
    <ScrollReveal>
      <section
        className="md:py-44 pb-[96px] relative overflow-hidden bg-[#0b0f10]"
        id="about"
      >
        <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] bg-[#6cc24a]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-white mb-12 flex items-center justify-center gap-2">
            <AnimatedText>{t.why.title}</AnimatedText>
            <span
              className="inline-flex text-[#6cc24a] shrink-0"
              aria-hidden="true"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6" />
              </svg>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.why.cards.map((card, index) => (
              <div
                key={card.title}
                className="p-[28px] bg-zinc-900/40 border border-zinc-800 rounded-2xl transition-all duration-300 ease-in-out hover:border-[#6cc24a]/35 hover:-translate-y-1 shadow-md hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-[14px] bg-[#6cc24a]/10 border border-[#6cc24a]/25 flex items-center justify-center text-[#6cc24a] mb-[18px]">
                  {index === 0 && (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 11h18l-1.5 9.5a2 2 0 0 1-2 1.5h-11a2 2 0 0 1-2-1.5L3 11z" />
                      <path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
                      <path d="M8 6V4" />
                      <path d="M16 6V4" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M15 8.5C14.2 7.5 13 7 12 7c-2 0-3 1-3 2.5S10 12 12 12s3 1 3 2.5S14 17 12 17c-1 0-2.2-.5-3-1.5" />
                      <path d="M12 5v2M12 17v2" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  )}
                </div>
                <h4 className="text-[17px] font-bold text-white mb-2 tracking-[-0.01em]">
                  <AnimatedText>{card.title}</AnimatedText>
                </h4>
                <p className="text-zinc-400 text-[14.5px] leading-[1.6]">
                  <AnimatedText>{card.description}</AnimatedText>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
