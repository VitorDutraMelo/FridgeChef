import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLang } from "@/context/LangContext";
import AnimatedText from "@/components/ui/AnimatedText";

export default function FeaturesBento() {
  const { t } = useLang();

  return (
    <ScrollReveal>
      <section className="pb-[96px] bg-[#0b0f10]" id="features">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
              <AnimatedText>{t.featuresBento.title}</AnimatedText>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-[500px] mx-auto">
              <AnimatedText>{t.featuresBento.description}</AnimatedText>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="md:col-span-2 p-8 bg-zinc-900/30 border border-zinc-800/80 rounded-3xl relative overflow-hidden group hover:border-[#6cc24a]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[#6cc24a]/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#6cc24a]/10 transition-colors" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#6cc24a] bg-[#6cc24a]/10 px-2 py-0.5 rounded border border-[#6cc24a]/20">
                <AnimatedText>{t.featuresBento.badge}</AnimatedText>
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">
                <AnimatedText>{t.featuresBento.title1}</AnimatedText>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-[480px]">
                <AnimatedText>{t.featuresBento.desc1}</AnimatedText>
              </p>
            </div>

            <div className="p-8 bg-zinc-900/30 border border-zinc-800/80 rounded-3xl hover:border-[#6cc24a]/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  <AnimatedText>{t.featuresBento.lightningTitle}</AnimatedText>
                </h3>
                <p className="text-zinc-400 text-[13.5px] leading-relaxed">
                  <AnimatedText>{t.featuresBento.lightningDescription}</AnimatedText>
                </p>
              </div>
              <div className="text-4xl font-black text-zinc-800/50 mt-6 select-none group-hover:text-[#6cc24a]/20 transition-colors">
                <AnimatedText>{t.featuresBento.lightningMetric}</AnimatedText>
              </div>
            </div>

            <div className="p-8 bg-zinc-900/30 border border-zinc-800/80 rounded-3xl hover:border-[#6cc24a]/30 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">
                <AnimatedText>{t.featuresBento.dietaryTitle}</AnimatedText>
              </h3>
              <p className="text-zinc-400 text-[13.5px] leading-relaxed">
                <AnimatedText>{t.featuresBento.dietaryDescription}</AnimatedText>
              </p>
            </div>

            <div className="md:col-span-2 p-8 bg-zinc-900/30 border border-zinc-800/80 rounded-3xl relative overflow-hidden group hover:border-[#6cc24a]/30 transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#6cc24a]/5 rounded-full blur-[50px] pointer-events-none" />
              <h3 className="text-xl font-bold text-white mb-2">
                <AnimatedText>{t.featuresBento.ecoTitle}</AnimatedText>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                <AnimatedText>{t.featuresBento.ecoDescription}</AnimatedText>
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

