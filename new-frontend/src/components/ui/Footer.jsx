import { useLang } from "@/context/LangContext";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Footer() {
  const { t } = useLang();
  const veggiesBg = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='420' height='180' viewBox='0 0 420 180' fill='none' stroke='%236cc24a' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'><circle cx='40' cy='90' r='22'/><path d='M40 68c0-8 6-12 12-12'/><path d='M120 60c-12 0-20 8-22 20-2 12 4 28 22 36 18-8 24-24 22-36-2-12-10-20-22-20z'/><path d='M120 50v8'/><path d='M118 50c-2-4 2-8 4-6'/><path d='M210 95c0-18 10-30 24-30s24 12 24 30c0 14-10 26-24 26s-24-12-24-26z'/><path d='M234 60v8M228 64l3 6M240 64l-3 6'/><path d='M310 92c0-14 8-22 18-22s18 8 18 22-8 22-18 22-18-8-18-22z'/><path d='M310 92c-6 0-10 4-10 8M346 92c6 0 10 4 10 8'/><path d='M388 80c-6 0-10 6-10 14s4 14 10 14 10-6 10-14-4-14-10-14z'/></svg>")`;
  const links = [
    { label: t.footer.links.how, href: "#how" },
    { label: t.footer.links.recipes, href: "#recipes" },
    { label: t.footer.links.about, href: "#about" },
    { label: t.footer.links.blog, href: "#blog" },
  ];

  return (
    <footer className="relative bg-[#07090a] border-t border-zinc-800/80 overflow-hidden w-full group/footer">
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none bg-repeat-x bg-bottom [mask-image:linear-gradient(to_bottom,transparent_20%,black_100%)] transition-opacity duration-500 group-hover/footer:opacity-10"
        style={{
          backgroundImage: veggiesBg,
          backgroundSize: "420px 180px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-8 py-10 text-center md:text-left justify-items-center md:justify-items-start">
        <div className="w-14 h-14 rounded-xl bg-fc-green/5 border border-fc-green/20 flex items-center justify-center relative group/icon transition-all duration-300 hover:border-fc-green/40 hover:bg-fc-green/10 hover:shadow-[0_0_20px_rgba(108,194,74,0.15)]">
          <svg
            viewBox="0 0 32 32"
            className="w-[36px] h-[36px] fill-none transition-transform duration-300 group-hover/icon:scale-105"
          >
            <path
              d="M10 14c-2.2 0-4-1.8-4-4s1.8-4 4-4c.5 0 1 .1 1.5.3C12.2 4.9 13.9 4 16 4s3.8.9 4.5 2.3c.5-.2 1-.3 1.5-.3 2.2 0 4 1.8 4 4s-1.8 4-4 4H10z"
              fill="#6cc24a"
            />
            <path
              d="M9 15h14v9a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-9z"
              fill="#6cc24a"
            />
            <path
              d="M13 19v4M16 19v4M19 19v4"
              stroke="#0b0f10"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="text-fc-muted">
          <p className="m-0 mb-1 text-[15px] text-white tracking-wide font-medium">
            <span className="text-fc-green font-bold bg-fc-green/5 px-1.5 py-0.5 rounded border border-fc-green/10 mr-1">
              FridgeChef
            </span>{" "}
            <AnimatedText>{t.footer.tagline}</AnimatedText>
          </p>
          <p className="m-0 text-[13.5px] text-zinc-500 font-medium">
            <AnimatedText>{t.footer.question}</AnimatedText>
          </p>
        </div>

        <nav className="flex gap-6 justify-center flex-wrap">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] text-zinc-400 hover:text-fc-green transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1.5px] after:bg-fc-green after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            >
              <AnimatedText>{link.label}</AnimatedText>
            </a>
          ))}
        </nav>
      </div>

      <div className="relative z-10 border-t border-zinc-900/60 py-4.5 bg-[#050607]/40 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="m-2 text-[12.5px] text-zinc-600 text-center font-medium tracking-wide">
            <AnimatedText>{t.footer.copyright}</AnimatedText>
          </p>
        </div>
      </div>
    </footer>
  );
}
