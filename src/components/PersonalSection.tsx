import annaPersonal from "@/assets/anna-personal.jpg";
import { useLang } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const PersonalSection = () => {
  const { lang } = useLang();
  const t = translations.personal[lang];

  return (
    <section className="section-padding bg-warm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm tracking-[0.2em] uppercase text-warm-foreground mb-4">{t.tag}</p>
          <h2 className="text-3xl md:text-4xl font-display mb-8 text-foreground">{t.heading}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t.text}</p>
        </div>
        <div className="overflow-hidden">
          <img src={annaPersonal} alt={lang === "pl" ? "Anna na spacerze z psem w jesiennym lesie" : "Anna walking her dog in an autumn forest"} className="w-full h-80 md:h-96 object-cover" loading="lazy" width={1200} height={800} />
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
