const areas = [
  "Digital Transformation",
  "Process Optimization",
  "Automation Strategy",
  "Operating Model Design",
  "Project & Program Management",
  "Continuous Improvement",
];

const ExpertiseSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Obszary ekspertyzy
        </p>
        <h2 className="text-3xl md:text-4xl font-display mb-16 text-foreground">
          Obszary, w których mogę pomóc.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area, i) => (
            <div
              key={i}
              className="border border-border px-8 py-6 text-center hover:bg-card transition-colors"
            >
              <span className="text-foreground font-medium tracking-wide text-sm">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
