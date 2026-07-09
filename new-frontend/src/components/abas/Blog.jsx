import { posts } from "@/types/posts";
import { useLang } from "@/context/LangContext";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Blog() {
  const { t } = useLang();
  const localizedPosts = posts.map((post, index) => ({
    ...post,
    ...t.blog.posts[index],
  }));

  return (
    <section
      className="py-16 md:py-24 bg-[#0b0f10] border-t border-zinc-900"
      id="blog"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
              <AnimatedText>
                {t.blog.title}
              </AnimatedText>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-[450px]">
              <AnimatedText>
                {t.blog.description}
              </AnimatedText>
            </p>
          </div>
          <button className="text-[13px] font-bold text-[#6cc24a] hover:underline shrink-0 self-start sm:self-auto">
            <AnimatedText>
              {t.blog.viewAll}
            </AnimatedText>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {localizedPosts.map((post, idx) => (
            <div
              key={idx}
              className="group cursor-pointer bg-zinc-900/20 border border-zinc-800/40 rounded-2xl overflow-hidden hover:border-zinc-800 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden bg-zinc-950 border-b border-zinc-800/40">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#6cc24a] bg-[#6cc24a]/5 border border-[#6cc24a]/10 px-2 py-0.5 rounded">
                    <AnimatedText>{post.tag}</AnimatedText>
                  </span>
                  <span className="text-xs text-zinc-500"><AnimatedText>{post.date}</AnimatedText></span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6cc24a] transition-colors line-clamp-2">
                  <AnimatedText>{post.title}</AnimatedText>
                </h3>
                <p className="text-zinc-400 text-[13px] leading-relaxed line-clamp-2">
                  <AnimatedText>{post.excerpt}</AnimatedText>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

