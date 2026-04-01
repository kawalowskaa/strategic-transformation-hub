import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ApproachSection = () => {
  const { lang } = useLang();
  const t = translations.approach[lang];

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-[0.2em] uppercase opacity-60 mb-4">{t.tag}</p>
        <h2 className="text-3xl md:text-4xl font-display mb-16">{t.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {t.items.map((insight, i) => (
            <div key={i} className="flex gap-6 items-start">
              <span className="text-4xl font-display opacity-20">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-lg leading-relaxed pt-2 opacity-90">{insight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
