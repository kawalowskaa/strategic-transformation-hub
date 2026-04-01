import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const BlogSection = () => {
  const { lang } = useLang();
  const t = translations.blog[lang];

  return (
    <section className="section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">{t.tag}</p>
        <h2 className="text-3xl md:text-4xl font-display mb-16 text-foreground">{t.heading}</h2>
        <div className="space-y-0 divide-y divide-border">
          {t.articles.map((article, i) => (
            <article key={i} className="group py-10 first:pt-0 last:pb-0 cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
                <div className="flex items-center gap-4 md:min-w-[10rem]">
                  <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground border border-border px-3 py-1">{article.tag}</span>
                  <span className="text-xs text-muted-foreground hidden md:block">{article.date}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-display text-foreground group-hover:opacity-70 transition-opacity flex items-start gap-3 mb-3">
                    {article.title}
                    <ArrowUpRight className="w-5 h-5 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">{article.excerpt}</p>
                </div>
                <span className="text-xs text-muted-foreground md:hidden">{article.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
