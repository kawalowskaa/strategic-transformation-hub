import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Transformacja i strategia",
    items: [
      "Uporządkowanie procesów",
      "Projektowanie modelu operacyjnego",
      "Wdrażanie zmian na poziomie organizacji",
    ],
  },
  {
    title: "Automatyzacja i efektywność",
    items: [
      "Identyfikacja obszarów do automatyzacji",
      "Wdrażanie rozwiązań zwiększających wydajność",
      "Eliminacja powtarzalnej pracy",
    ],
  },
  {
    title: "Zarządzanie projektami i delivery",
    items: [
      "Prowadzenie inicjatyw end-to-end",
      "Zarządzanie ryzykiem i zależnościami",
      "Dowożenie rezultatów, nie tylko planów",
    ],
  },
  {
    title: "Ludzie i zmiana",
    items: [
      "Praca ze stakeholderami",
      "Warsztaty, facylitacja, wdrażanie zmian",
      "Budowanie zaangażowania i adopcji",
    ],
  },
];

const SolutionsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Jak rozwiązuję problemy klienta
        </p>
        <h2 className="text-3xl md:text-4xl font-display mb-16 text-foreground max-w-2xl">
          Cztery obszary, w których działam.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="bg-card p-10 md:p-12 group"
            >
              <span className="text-sm text-muted-foreground mb-4 block">
                0{i + 1}
              </span>
              <h3 className="text-xl md:text-2xl font-display mb-6 text-foreground">
                {solution.title}
              </h3>
              <ul className="space-y-3">
                {solution.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
