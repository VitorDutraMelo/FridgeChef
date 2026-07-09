import aldiLogo from "@/assets/images/logos/aldi.png";
import asdaLogo from "@/assets/images/logos/asda.png";
import lidlLogo from "@/assets/images/logos/lidl.png";
import morrisonsLogo from "@/assets/images/logos/morrisons.png";
import sainsburysLogo from "@/assets/images/logos/sainburys.png";
import tescoLogo from "@/assets/images/logos/tesco.png";
import { useLang } from "@/context/LangContext";
import AnimatedText from "@/components/ui/AnimatedText";

export default function StoresMarquee() {
  const { t } = useLang();
  const stores = [
    { name: "Tesco", img: tescoLogo },
    { name: "Aldi", img: aldiLogo },
    { name: "Lidl", img: lidlLogo },
    { name: "Sainsbury's", img: sainsburysLogo },
    { name: "Asda", img: asdaLogo },
    { name: "Morrisons", img: morrisonsLogo },
  ];

  return (
    <section className="pb-16 mb-4">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-fc-card border border-fc-border rounded-[20px] p-8 shadow-md">
          <h3 className="text-center m-0 mb-8 text-[18px] font-bold text-white inline-flex items-center justify-center gap-2 w-full">
            <AnimatedText>{t.storesMarquee.title}</AnimatedText>
            <span className="inline-flex translate-y-0.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6cc24a"
                strokeWidth="2"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6" />
              </svg>
            </span>
          </h3>

          <div className="mask-marquee relative overflow-hidden w-full">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] ease-linear">
              {[1, 2].map((listIdx) => (
                <ul
                  key={listIdx}
                  className="flex items-center gap-12 md:gap-16 px-8 shrink-0 list-none"
                >
                  {stores.map((store, index) => (
                    <li
                      key={`${store.name}-${index}`}
                      className="flex justify-center items-center h-[50px] w-[110px]"
                    >
                      <img
                        src={store.img}
                        alt={`${store.name} ${t.storesMarquee.logoAlt}`}
                        className="max-h-full max-w-full object-contain filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-default"
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
