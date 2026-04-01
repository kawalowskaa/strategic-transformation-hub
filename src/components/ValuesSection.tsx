import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ValuesSection = () => {
  const { lang } = useLang();
  const t = translations.values[lang];

  return (
    <section id="co-robie" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
          {t.tag}
        </p>
        <h2 className="text-3xl md:text-4xl font-display mb-16 text-foreground whitespace-pre-line">
          {t.heading}
        </h2>
        <div className="space-y-8">
          {t.items.map((value, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <span className="text-sm text-muted-foreground mt-1 font-light min-w-[2rem]">
                0{i + 1}
              </span>
              <p className="text-lg md:text-xl text-foreground leading-relaxed border-b border-border pb-8 flex-1 group-last:border-0">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
