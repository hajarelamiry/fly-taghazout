"use client";
import ScrollReveal from "@/components/ScrollReveal";


const agadirImg = "/images/agadir-coast.jpg";
const sunsetImg = "/images/sunset-couple.jpg";
const dunesImg = "/images/dunes-flight.jpg";
const atlasImg = "/images/atlas-flight.jpg";
const heroImg = "/images/hero-flight.jpg";
const pilotImg = "/images/pilot-safety.jpg";
const images = [heroImg, dunesImg, atlasImg, sunsetImg, agadirImg, pilotImg, heroImg, dunesImg, atlasImg, sunsetImg, agadirImg, pilotImg];

const GaleriePage = () => {
  return (
    <main className="pt-24 pb-16 lg:pb-0">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <img src={heroImg} alt="Galerie Fly Taghazout" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-secondary/60" />
        <div className="relative z-10 container text-center text-primary-foreground">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
            Nos plus beaux <span className="text-gradient-sunset">moments</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Des sourires, des couchers de soleil, des paysages hors du temps et des instants suspendus…
          </p>
        </div>
      </section>

      {/* Photos */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold mb-8">
              Galerie <span className="text-gradient-sunset">Photos</span>
            </h2>
          </ScrollReveal>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="group relative rounded-xl overflow-hidden break-inside-avoid cursor-pointer">
                  <img
                    src={img}
                    alt={`Fly Taghazout moment ${i + 1}`}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={i % 3 === 0 ? 800 : 600}
                  />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors duration-300" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GaleriePage;
