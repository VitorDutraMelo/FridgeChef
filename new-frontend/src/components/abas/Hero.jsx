import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLang } from "@/context/LangContext";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Hero({
  ingredients,
  setIngredients,
  onGenerate,
  loading,
  hint,
}) {
  const { t } = useLang();
  const [inputValue, setInputValue] = useState("");

  const tagsArray = ingredients
    ? ingredients
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean)
    : [];

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(inputValue);
    }
  };

  const addTag = (text) => {
    const cleanText = text.trim().replace(/,$/, "");
    if (cleanText) {
      const isDuplicate = tagsArray.some(
        (tag) => tag.toLowerCase() === cleanText.toLowerCase(),
      );
      if (!isDuplicate) {
        const updatedTags = [...tagsArray, cleanText];
        setIngredients(updatedTags.join(", "));
      }
    }
    setInputValue("");
  };

  const removeTag = (tagToRemove) => {
    const updatedTags = tagsArray.filter((tag) => tag !== tagToRemove);
    setIngredients(updatedTags.join(", "));
  };

  const handleChipClick = (ing) => {
    const isPresent = tagsArray.some(
      (tag) => tag.toLowerCase() === ing.toLowerCase(),
    );
    if (isPresent) {
      const updatedTags = tagsArray.filter(
        (tag) => tag.toLowerCase() !== ing.toLowerCase(),
      );
      setIngredients(updatedTags.join(", "));
    } else {
      const updatedTags = [...tagsArray, ing];
      setIngredients(updatedTags.join(", "));
    }
  };

  return (
    <ScrollReveal>
      <section className="pt-14 pb-20 md:pt-10 md:pb-24 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_80%_30%,rgba(108,194,74,0.1),transparent_55%),radial-gradient(circle_at_20%_70%,rgba(108,194,74,0.06),transparent_50%)] before:pointer-events-none before:z-0">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11.5px] font-bold tracking-widest text-[#6cc24a] bg-[#6cc24a]/10 border border-[#6cc24a]/25 mb-[22px]">
              <span className="inline-flex text-[#6cc24a]">
                <svg
                  width="12"
                  height="12"
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
              <AnimatedText>{t.hero.badge}</AnimatedText>
            </span>

            <h1 className="margin-0 mb-[18px] text-[36px] sm:text-[44px] md:text-[54px] lg:text-[60px] font-extrabold leading-[1.08] tracking-tight text-white">
              <AnimatedText>{t.hero.titleStart}</AnimatedText>{" "}
              <span className="text-[#6cc24a] relative inline-block whitespace-nowrap after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[3px] after:bg-[linear-gradient(90deg,transparent,rgba(108,194,74,1)_15%,rgba(108,194,74,1)_85%,transparent)] after:rounded-[3px] after:opacity-85">
                <AnimatedText>{t.hero.titleHighlight}</AnimatedText>
              </span>{" "}
              <AnimatedText>{t.hero.titleEnd}</AnimatedText>
            </h1>

            <p className="margin-0 mb-7.5 text-[16px] text-zinc-400 max-w-[520px] leading-relaxed mb-6">
              <AnimatedText>{t.hero.description}</AnimatedText>
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 max-w-[580px] mb-[18px]">
              <div className="relative flex-1 flex flex-wrap gap-2 items-center w-full min-h-[50px] pl-[42px] pr-4 py-2.5 text-[14.5px] text-white bg-zinc-900 border border-zinc-800 rounded-xl outline-none transition-all focus-within:border-[#6cc24a] focus-within:ring-4 focus-within:ring-[#6cc24a]/15">
                <span className="absolute left-3.5 top-4 text-zinc-500 inline-flex pointer-events-none">
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
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                </span>

                {tagsArray.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-[#6cc24a]/10 border border-[#6cc24a]/20 text-[#6cc24a] text-[12px] font-semibold px-2 py-0.5 rounded-lg"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="text-[#6cc24a]/60 hover:text-[#6cc24a] text-xs font-bold transition-colors"
                    >
                      &times;
                    </button>
                  </span>
                ))}

                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onBlur={() => addTag(inputValue)}
                  className="flex-1 bg-transparent border-none outline-none text-white text-[14.5px] placeholder-zinc-500 font-medium p-0 focus:ring-0 min-w-[100px]"
                  placeholder={
                    tagsArray.length === 0
                      ? t.hero.placeholderEmpty
                      : t.hero.placeholderMore
                  }
                />
              </div>

              <button
                onClick={() => onGenerate()}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-[22px] py-3.5 text-[14.5px] font-semibold text-[#0b0f10] bg-[#6cc24a] hover:bg-[#7bd25a] disabled:bg-[#6cc24a]/50 rounded-xl transition-all duration-200 shadow-[0_8px_24px_rgba(108,194,74,0.25)] hover:shadow-[0_12px_30px_rgba(108,194,74,0.32)] hover:-translate-y-[1px] active:translate-y-0 disabled:transform-none disabled:cursor-not-allowed whitespace-nowrap"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#0b0f10] border-t-transparent rounded-full animate-spin inline-block" />
                    <span><AnimatedText>{t.hero.creating}</AnimatedText></span>
                  </>
                ) : (
                  <>
                    <span className="text-[16px] leading-none">🥘</span>
                    <span><AnimatedText>{t.hero.generate}</AnimatedText></span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center flex-wrap gap-2.5">
              <span className="text-[13.5px] text-zinc-500 font-medium mr-0.5">
                <AnimatedText>{t.hero.tryLabel}</AnimatedText>
              </span>
              <div className="flex flex-wrap gap-2">
                {t.hero.suggestions.map((ing) => {
                  const isActive = tagsArray.some(
                    (tag) => tag.toLowerCase() === ing.toLowerCase(),
                  );
                  return (
                    <button
                      key={ing}
                      onClick={() => handleChipClick(ing)}
                      className={`px-3.5 py-1.5 text-[13px] font-medium rounded-full border transition-all active:scale-[0.96] ${
                        isActive
                          ? "bg-[#6cc24a]/15 border-[#6cc24a] text-[#6cc24a]"
                          : "text-white bg-zinc-900 border border-zinc-800 hover:bg-[#6cc24a]/10 hover:border-[#6cc24a] hover:text-[#6cc24a]"
                      }`}
                    >
                      {ing} {isActive && "✓"}
                    </button>
                  );
                })}
              </div>
            </div>

            {hint && (
              <p className="mt-3.5 padding-[10px_14px] text-[13.5px] text-[#fbbf24] bg-[#fbbf24]/5 border border-[#fbbf24]/25 rounded-xl">
                {hint}
              </p>
            )}
          </div>

          <div className="relative rounded-[24px] overflow-hidden aspect-square max-w-[540px] w-full ml-auto border border-zinc-800 shadow-2xl group after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_55%,rgba(11,15,16,0.5))] after:pointer-events-none">
            <div className="absolute inset-[-20%] bg-[radial-gradient(circle_at_60%_40%,rgba(108,194,74,0.18),transparent_60%)] z-0 filter blur-[20px]" />

            <img
              src="https://images.unsplash.com/photo-1628839168545-bfa1bc1d6706?crop=entropy&cs=srgb&fm=jpg&w=1000&q=85"
              alt={t.hero.imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] relative z-10"
            />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
