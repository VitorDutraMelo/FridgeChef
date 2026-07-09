import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLang } from "@/context/LangContext";
import AnimatedText from "@/components/ui/AnimatedText";

const icons = [
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6cc24a"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>,
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6cc24a"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 3-1.912 5.886L5 9l4.912 1.114L12 16l1.912-5.886L19 9l-4.912-1.114Z" />
    <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
  </svg>,
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6cc24a"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M12 6v6l4 2" />
  </svg>,
];

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <ScrollReveal>
      <section
        className="py-16 md:py-48 bg-[#0b0f10] border-t border-zinc-900"
        id="how"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
              <AnimatedText>{t.howItWorks.title}</AnimatedText>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-[480px]">
              <AnimatedText>{t.howItWorks.description}</AnimatedText>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.howItWorks.steps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-zinc-900/20 border border-zinc-800/60 rounded-2xl p-6 transition-all duration-300 hover:border-zinc-800"
              >
                <div className="absolute top-4 right-6 text-4xl font-black text-zinc-800/40 select-none">
                  <AnimatedText>{step.number}</AnimatedText>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#6cc24a]/5 border border-[#6cc24a]/10 flex items-center justify-center mb-5">
                  {icons[idx]}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  <AnimatedText>{step.title}</AnimatedText>
                </h3>
                <p className="text-zinc-400 text-[13.5px] leading-relaxed">
                  <AnimatedText>{step.description}</AnimatedText>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
