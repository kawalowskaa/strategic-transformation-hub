import annaProfessional from "@/assets/anna-professional.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding" style={{ background: "var(--hero-gradient)" }}>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 animate-fade-up">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Anna Kowal
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-8 text-foreground">
            Pomagam firmom upraszczać złożoność i zamieniać ją w skalowalne rozwiązania
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
            Program Manager & Digital Transformation Lead, który przekłada strategię na realne wdrożenia, automatyzację i mierzalne efekty biznesowe.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Porozmawiajmy
            </a>
            <a
              href="#co-robie"
              className="inline-flex items-center px-8 py-4 border border-foreground text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              Zobacz jak mogę pomóc
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="w-80 h-96 md:w-96 md:h-[28rem] overflow-hidden">
            <img
              src={annaProfessional}
              alt="Anna Kowal — Program Manager & Digital Transformation Lead"
              className="w-full h-full object-cover object-top"
              width={800}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
