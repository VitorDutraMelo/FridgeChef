import { useLang } from "@/context/LangContext";
import AnimatedText from "@/components/ui/AnimatedText";

export default function RecipeResult({ data }) {
  const { t } = useLang();
  const { recipe, matchPercentage, matchedIngredients, missingIngredients } =
    data;

  return (
    <div className="bg-fc-card border border-fc-border rounded-[20px] p-8 shadow-md max-w-[1200px] mx-auto px-6">
      <h2 className="flex items-center gap-2.5 m-0 mb-5 text-[18px] font-bold text-fc-green tracking-tight">
        <span className="inline-flex text-fc-green">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        </span>
        <AnimatedText>{t.recipeResult.title}</AnimatedText>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-7 items-start">
        <div className="rounded-xl overflow-hidden aspect-square bg-[#0a0d0e] border border-fc-border">
          <img
            src={
              recipe.imageUrl ||
              "https://images.pexels.com/photos/15060360/pexels-photo-15060360.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="m-0 mt-1 mb-3 text-[24px] font-bold tracking-tight">
            <AnimatedText>{recipe.title || t.recipeResult.recipeFound}</AnimatedText>
          </h3>
          <ul className="flex flex-wrap gap-[18px] m-0 mb-3 list-none p-0">
            <li className="inline-flex items-center gap-1.5 text-[14px] text-fc-muted">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-fc-green"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span><AnimatedText>{recipe.prepTime || t.recipeResult.notAvailable}</AnimatedText></span>
            </li>
            <li className="inline-flex items-center gap-1.5 text-[14px] text-fc-muted">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-fc-green"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span><AnimatedText>{recipe.difficulty || t.recipeResult.notAvailable}</AnimatedText></span>
            </li>
            <li className="inline-flex items-center gap-1.5 text-[14px] text-fc-muted">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-fc-green"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
              <span>
                <AnimatedText>
                  {recipe.servings
                    ? `${recipe.servings} ${t.recipeResult.servings}`
                    : t.recipeResult.noServings}
                </AnimatedText>
              </span>
            </li>
          </ul>
          <p className="m-0 mt-1.5 text-fc-muted text-[15px]">
            <AnimatedText>{recipe.description || t.recipeResult.defaultDescription}</AnimatedText>
          </p>
        </div>
      </div>

      <div className="mt-7 pt-6 border-t border-fc-border grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-9">
        <div>
          <h4 className="inline-flex items-center gap-2 m-0 mb-3.5 text-[15px] font-bold text-fc-green">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <AnimatedText>{t.recipeResult.ingredientsTitle}</AnimatedText>
          </h4>
          <ul className="space-y-1.5 p-0 list-none">
            <li className="text-[14.5px] text-fc-green font-semibold">
              <AnimatedText>{t.recipeResult.match}</AnimatedText> {matchPercentage || 0}%
            </li>
            {matchedIngredients?.length > 0 && (
              <li className="text-[14.5px] text-fc-muted">
                <span className="text-white font-medium">
                  <AnimatedText>{t.recipeResult.youHave}</AnimatedText>
                </span>{" "}
                {matchedIngredients.join(", ")}
              </li>
            )}
            <li className="text-[14.5px] text-fc-muted">
              {missingIngredients?.length > 0 ? (
                <>
                  <span className="text-amber-400 font-medium">
                    <AnimatedText>{t.recipeResult.missing}</AnimatedText>
                  </span>{" "}
                  {missingIngredients.join(", ")}
                </>
              ) : (
                <span className="text-fc-green font-medium">
                  <AnimatedText>{t.recipeResult.allIngredients}</AnimatedText>
                </span>
              )}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="inline-flex items-center gap-2 m-0 mb-3.5 text-[15px] font-bold text-fc-green">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <AnimatedText>{t.recipeResult.instructions}</AnimatedText>
          </h4>
          <ol className="flex flex-col gap-3 p-0 list-none">
            {recipe.instructions?.length > 0 ? (
              recipe.instructions.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[14.5px] text-fc-muted"
                >
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-fc-green text-fc-bg text-[12px] font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))
            ) : (
              <li className="text-[14.5px] text-fc-muted">
                <AnimatedText>{t.recipeResult.noInstructions}</AnimatedText>
              </li>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
