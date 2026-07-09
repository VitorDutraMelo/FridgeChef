import { useState, useRef } from "react";
import { ALL_RECIPES } from "@/types/popularrecipes";
import { useLang } from "@/context/LangContext";
import AnimatedText from "@/components/ui/AnimatedText";

export default function PopularRecipes() {
  const { t } = useLang();
  const carouselRef = useRef(null);
  const localizedRecipes = ALL_RECIPES.map((recipe, index) => ({
    ...recipe,
    ...t.popularRecipes.items[index],
  }));
  const carouselItems = [...localizedRecipes, ...localizedRecipes];
  const [isHovered, setIsHovered] = useState(false);

  const getDifficultyStyles = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case "easy":
        return {
          badge: "bg-green-500/10 text-green-400 border-green-500/20",
          hover: "hover:border-green-500/30",
          glow: "bg-green-500/5",
        };
      case "medium":
        return {
          badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
          hover: "hover:border-amber-500/30",
          glow: "bg-amber-500/5",
        };
      case "hard":
        return {
          badge: "bg-rose-500/10 text-rose-400 border-rose-500/20",
          hover: "hover:border-rose-500/30",
          glow: "bg-rose-500/5",
        };
      default:
        return {
          badge: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
          hover: "hover:border-zinc-500/30",
          glow: "bg-zinc-500/5",
        };
    }
  };

  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden bg-[#0b0f10]"
      id="recipes"
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 flex items-center gap-2.5 flex-wrap justify-center md:justify-start">
          <AnimatedText>{t.popularRecipes.title}</AnimatedText>
          <span
            className="text-[#6cc24a] inline-flex shrink-0 animate-pulse"
            style={{ animationDuration: "3s" }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6" />
            </svg>
          </span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-[500px] text-center md:text-left">
          <AnimatedText>{t.popularRecipes.description}</AnimatedText>
        </p>
      </div>

      <div
        ref={carouselRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full relative overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] py-4"
      >
        <div className={`flex gap-6 w-max px-4 animate-marquee ${isHovered ? "[animation-play-state:paused]" : ""}`}>
          {carouselItems.map((recipe, idx) => {
            const styles = getDifficultyStyles(recipe.difficultyKey);

            return (
              <div
                key={`${recipe.id}-${idx}`}
                className={`w-[300px] sm:w-[340px] shrink-0 group relative bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden backdrop-blur-sm 
          transition-all duration-300 ease-out
          hover:-translate-y-2 hover:scale-[1.03] hover:z-30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]
          pointer-events-auto ${styles.hover}`}
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none ${styles.glow}`}
                />
                <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-800/60 bg-zinc-950">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 text-[11px] font-semibold text-white bg-zinc-950/80 backdrop-blur-md rounded-lg border border-zinc-800">
                    <AnimatedText>⏱️ {recipe.time}</AnimatedText>
                  </span>
                </div>

                <div className="p-5 relative z-10">
                  <span
                    className={`inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-md border mb-3 ${styles.badge}`}
                  >
                    <AnimatedText>{recipe.difficulty}</AnimatedText>
                  </span>

                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#6cc24a] transition-colors truncate">
                    <AnimatedText>{recipe.title}</AnimatedText>
                  </h3>

                  <p className="text-zinc-400 text-[13px] leading-relaxed mb-4 line-clamp-2 h-10">
                    <AnimatedText>{recipe.description}</AnimatedText>
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/40">
                    {recipe.ingredients.map((ing, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded"
                      >
                        <AnimatedText>{ing}</AnimatedText>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

