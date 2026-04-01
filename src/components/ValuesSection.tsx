const values = [
  "Pomagam organizacjom przejść od chaosu operacyjnego do uporządkowanego, skalowalnego modelu działania.",
  "Identyfikuję wąskie gardła i zamieniam je w zoptymalizowane procesy i automatyzacje.",
  "Łączę biznes i technologię, żeby rozwiązania naprawdę działały — a nie tylko dobrze wyglądały na slajdach.",
  "Wprowadzam podejście Citizen Development i buduję kompetencje cyfrowe w organizacjach.",
  "Projektuję modele operacyjne, które wspierają wzrost i efektywność.",
];

const ValuesSection = () => {
  return (
    <section id="co-robie" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Co robię
        </p>
        <h2 className="text-3xl md:text-4xl font-display mb-16 text-foreground">
          Nie opisuję stanowisk.<br />
          Opisuję transformację, jaką daję klientowi.
        </h2>
        <div className="space-y-8">
          {values.map((value, i) => (
            <div
              key={i}
              className="flex gap-6 items-start group"
            >
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
