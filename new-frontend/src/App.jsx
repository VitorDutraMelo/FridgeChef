import { useState, useRef, useEffect } from "react";
import { useLang } from "@/context/LangContext";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/abas/Hero";
import HowItWorks from "@/components/abas/HowItWorks";
import StoresMarquee from "@/components/abas/StoresMarquee";
import PopularRecipes from "@/components/abas/PopularRecipes";
import RecipeResult from "@/components/RecipeResult";
import ProductRecommendations from "@/components/ProductRecommendations";
import Why from "@/components/abas/Why";
import Blog from "@/components/abas/Blog";
import InteractivePreview from "@/components/abas/InteractivePreview";
import FeaturesBento from "@/components/abas/FeaturesBento";
import Faq from "@/components/abas/Faq";

export default function App() {
  const API_URL = "http://localhost:3000";

  const [ingredients, setIngredients] = useState("");
  const [loading, setLoading] = useState(false);
  const [hint, setHint] = useState("");
  const [recipeData, setRecipeData] = useState(null);

  const { selectedCountry } = useLang();

  const recipeCardRef = useRef(null);

  useEffect(() => {
    if (hint) {
      const timer = setTimeout(() => setHint(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [hint]);

  const generateRecipe = async (forcedIngredients) => {
    const targetIngredients = forcedIngredients || ingredients;

    const arrayToSend = targetIngredients
      .split(",")
      .map((ing) => ing.trim())
      .filter((ing) => ing.length > 0);

    if (arrayToSend.length === 0) {
      setHint("Please enter at least one ingredient.");
      return;
    }

    setHint("");
    setRecipeData(null);
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/generate-recipe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ingredients: arrayToSend,
          country:
            selectedCountry === "UK"
              ? "UK"
              : selectedCountry === "BR"
                ? "Brazil"
                : "Global",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      if (data.found === false) {
        setHint(data.message || "No matching recipes found.");
        return;
      }

      setRecipeData(data);

      setTimeout(() => {
        recipeCardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } catch (error) {
      setHint(error.message || "Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  const handlePopularRecipeClick = (ingredientsSeed) => {
    setIngredients(ingredientsSeed);
    setTimeout(() => {
      generateRecipe(ingredientsSeed);
    }, 50);
  };

  return (
    <div className="bg-fc-bg text-white font-sans min-h-screen overflow-x-hidden antialiased">
      <Navbar />

      <main className="pt-20">
        <Hero
          ingredients={ingredients}
          setIngredients={setIngredients}
          onGenerate={generateRecipe}
          loading={loading}
          hint={hint}
        />

        <HowItWorks />
        <InteractivePreview />
        <StoresMarquee />

        <PopularRecipes onSelectRecipe={handlePopularRecipeClick} />

        {recipeData && (
          <section ref={recipeCardRef} className="pb-20 space-y-6">
            <RecipeResult data={recipeData} />
            <ProductRecommendations selectedCountry={selectedCountry} />
          </section>
        )}
        <FeaturesBento />
        <Why />
        <Faq />
        <Blog />
      </main>

      <Footer />
    </div>
  );
}
