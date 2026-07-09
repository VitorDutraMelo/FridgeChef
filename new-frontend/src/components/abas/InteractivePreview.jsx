import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLang } from "@/context/LangContext";
import AnimatedText from "@/components/ui/AnimatedText";

const ingredientIds = ["tomato", "pasta", "egg", "cheese", "beef"];

export default function InteractivePreview() {
  const { t } = useLang();
  const [selected, setSelected] = useState(["tomato", "pasta"]);

  const toggleIngredient = (ing) => {
    if (selected.includes(ing)) {
      if (selected.length > 1) setSelected(selected.filter((i) => i !== ing));
    } else {
      setSelected([...selected, ing]);
    }
  };

  const getMockRecipe = () => {
    if (selected.includes("egg") && selected.includes("cheese")) {
      return { title: t.interactivePreview.recipes.omelette, time: t.interactivePreview.times.omelette, diff: t.interactivePreview.easy };
    }
    if (selected.includes("tomato") && selected.includes("pasta")) {
      return {
        title: t.interactivePreview.recipes.pasta,
        time: t.interactivePreview.times.pasta,
        diff: t.interactivePreview.easy,
      };
    }
    if (selected.includes("beef")) {
      return { title: t.interactivePreview.recipes.beef, time: t.interactivePreview.times.beef, diff: t.interactivePreview.medium };
    }
    return { title: t.interactivePreview.recipes.custom, time: t.interactivePreview.times.custom, diff: t.interactivePreview.easy };
  };

  const recipe = getMockRecipe();

  return (
    <ScrollReveal>
      <section className="pb-[96px] bg-[#0b0f10]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-zinc-900/20 border border-zinc-800/60 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6cc24a]/5 rounded-full blur-[120px] pointer-events-none" />

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                <AnimatedText>{t.interactivePreview.title}</AnimatedText>
              </h2>
              <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-[440px]">
                <AnimatedText>{t.interactivePreview.description}</AnimatedText>
              </p>

              <div className="flex flex-wrap gap-2.5">
                {ingredientIds.map((ing) => {
                  const isSel = selected.includes(ing);
                  return (
                    <button
                      key={ing}
                      onClick={() => toggleIngredient(ing)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-200 ${
                        isSel
                          ? "bg-[#6cc24a] border-[#6cc24a] text-[#0b0f10] shadow-[0_0_15px_rgba(108,194,74,0.25)] font-black"
                          : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      <AnimatedText>{isSel ? `✓ ${t.interactivePreview.ingredients[ing]}` : `+ ${t.interactivePreview.ingredients[ing]}`}</AnimatedText>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#07090a] border border-zinc-800 p-6 rounded-2xl shadow-2xl relative group hover:border-zinc-700 transition-colors">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#6cc24a] bg-[#6cc24a]/5 border border-[#6cc24a]/10 px-2 py-0.5 rounded">
                  <AnimatedText>{t.interactivePreview.generated}</AnimatedText>
                </span>
                <div className="flex gap-3 text-xs text-zinc-500 font-medium">
                  <span><AnimatedText>⏱ {recipe.time}</AnimatedText></span>
                  <span><AnimatedText>🔥 {recipe.diff}</AnimatedText></span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 transition-all duration-300">
                <AnimatedText>{recipe.title}</AnimatedText>
              </h4>
              <p className="text-zinc-500 text-xs leading-relaxed">
                <AnimatedText>{t.interactivePreview.recipeDescription}</AnimatedText>
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

