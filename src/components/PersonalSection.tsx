import annaPersonal from "@/assets/anna-personal.jpg";

const PersonalSection = () => {
  return (
    <section className="section-padding bg-warm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm tracking-[0.2em] uppercase text-warm-foreground mb-4">
            O mnie prywatnie
          </p>
          <h2 className="text-3xl md:text-4xl font-display mb-8 text-foreground">
            Poza projektami.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Poza światem projektów i transformacji jestem osobą, która ceni spokój, naturę i prostotę. Najlepiej odpoczywam na spacerach z moim psem, które często są też momentem na poukładanie myśli i nowe pomysły.
          </p>
        </div>
        <div className="overflow-hidden">
          <img
            src={annaPersonal}
            alt="Anna na spacerze z psem w jesiennym lesie"
            className="w-full h-80 md:h-96 object-cover"
            loading="lazy"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
