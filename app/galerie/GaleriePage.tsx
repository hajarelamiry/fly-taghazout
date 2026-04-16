"use client";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const agadirImg = "/images/agadirImg.webp";
const dunesImg = "/images/dunesImg.webp";
const atlasImg = "/images/Publicite-aerienne.jpeg";
const heroImg = "/images/hero-activites.webp";
const pilotImg = "/images/pilotImg.webp";
const plagetaghazout = "/images/heroflight.webp";
const ValleesAtlas = "/images/Vallees-de-lAtlas.webp";
const FlytaghazoutImg = "/images/FlytaghazoutImg.webp";
const OccasionsImg2 = "/images/OccasionsImg2.webp";
const confortImg = "/images/confortImg.webp";
const heroapropos = "/images/hero-apropos.webp";
const extraordinaire = "/images/FlyTaghazout_extraordinaire.webp";
const FlyTaghazout15 = "/images/FlyTaghazout_Photo_15.webp";
const FlyTaghazout1 = "/images/FlyTaghazout1.webp";
const FlyTaghazout2 = "/images/FlyTaghazout2.webp";
const FlyTaghazout3 = "/images/FlyTaghazout3.webp";
const FlyTaghazout4 = "/images/FlyTaghazout4.webp";
const FlyTaghazout5 = "/images/FlyTaghazout5.webp";
const FlyTaghazout6 = "/images/FlyTaghazout6.webp";
const FlyTaghazout7 = "/images/FlyTaghazout7.webp";
const FlyTaghazout8 = "/images/FlyTaghazout8.webp";
const FlyTaghazout9 = "/images/FlyTaghazout9.webp";
const images = [confortImg, heroImg, plagetaghazout, agadirImg, ValleesAtlas, FlytaghazoutImg, dunesImg, OccasionsImg2, atlasImg, pilotImg, heroapropos, extraordinaire, FlyTaghazout15, FlyTaghazout1, FlyTaghazout2, FlyTaghazout3, FlyTaghazout4, FlyTaghazout5, FlyTaghazout6, FlyTaghazout7, FlyTaghazout8, FlyTaghazout9];

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
      {/* CTA */}
      <section className="py-24 text-center bg-secondary text-primary-foreground">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Prêt à <span className="text-gradient-sunset">décoller ?</span>
            </h2>
            <p className="text-secondary-foreground/70 max-w-xl mx-auto mb-10">
              Une parenthèse exclusive entre ciel et horizon, rien que pour vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" asChild>
                <Link href="/reserver">Réserver votre vol</Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="text-[#12212B]">
                <Link href="/contact">Contacter l'équipe</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default GaleriePage;
