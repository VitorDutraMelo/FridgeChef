import { products } from "@/types/products";
import { useLang } from "@/context/LangContext";
import AnimatedText from "@/components/ui/AnimatedText";

export default function ProductRecommendations({ selectedCountry }) {
  const { t } = useLang();
  const currentSymbol =
    t.productRecommendations.currencySymbols[selectedCountry] ||
    t.productRecommendations.currencySymbols.UK;
  const localizedProducts = products.map((product, index) => ({
    ...product,
    ...t.productRecommendations.products[index],
  }));

  return (
    <div className="bg-fc-card border border-fc-border rounded-[20px] p-8 shadow-md max-w-[1200px] mx-auto px-6">
      <h2 className="flex items-center gap-2.5 m-0 mb-5.5 text-[18px] font-bold text-fc-green tracking-tight">
        <span className="inline-flex text-fc-green">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </span>
        <AnimatedText>{t.productRecommendations.title}</AnimatedText>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {localizedProducts.map((product) => (
          <article
            key={product.name}
            className="border border-fc-border rounded-xl p-4 bg-fc-card-2 flex flex-col hover:-translate-y-1 hover:border-fc-green/35 hover:shadow-lg transition-all duration-200"
          >
            <div className="bg-[#0a0d0e] rounded-lg aspect-square overflow-hidden mb-3">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h5 className="m-0 mb-1.5 text-[14px] font-semibold text-white line-clamp-2">
              <AnimatedText>{product.name}</AnimatedText>
            </h5>
            <p className="m-0 mb-3 text-[15px] font-bold text-fc-green">
              {currentSymbol}
              {product.base}
            </p>
            <button className="mt-auto py-2.5 px-3 text-[13px] font-semibold text-fc-green bg-fc-green/10 border border-fc-green/30 rounded-lg hover:bg-fc-green hover:text-fc-bg hover:border-fc-green transition-colors duration-200">
              <AnimatedText>{t.productRecommendations.viewProduct}</AnimatedText>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

