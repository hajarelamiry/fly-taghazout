"use client";
import Link from "next/link";
import { Shield, Award, Heart, Eye, Mountain, Sun, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
const heroImg = "/images/hero-flight.jpg";
const pilotImg = "/images/pilot-safety.jpg";
const agadirImg = "/images/agadir-coast.jpg";
const dunesImg = "/images/dunes-flight.jpg";
const atlasImg = "/images/atlas-flight.jpg";

const AProposPage = () => {
  return (
    <main className="pt-24 pb-16 lg:pb-0">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <img src={pilotImg} alt="À propos de Fly Taghazout" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-secondary/60" />
        <div className="relative z-10 container text-center text-primary-foreground">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
            Fly Taghazout, où l'<span className="text-gradient-sunset">extraordinaire</span> commence.
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Une activité aérienne innovante qui révèle le Maroc… vu du ciel.
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Notre histoire</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Le ciel à votre <span className="text-gradient-sunset">portée</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fly Taghazout est la première structure entièrement dédiée au paramoteur touristique dans la région de Taghazout – Agadir. Nous proposons des vols biplace accessibles à tous, encadrés par des pilotes tandem certifiés ULM par la DGAC.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Entre mer, montagnes et dunes, nos vols dévoilent un Maroc authentique, chaleureux, rayonnant. Là où la liberté prend une toute nouvelle dimension.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Notre ambition : offrir une expérience aérienne mémorable, douce, spectaculaire et authentique.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <img src={heroImg} alt="Vol paramoteur Fly Taghazout" className="rounded-2xl shadow-luxury w-full aspect-[4/3] object-cover" loading="lazy" width={800} height={600} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Passion */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <img src={pilotImg} alt="Pilotes Fly Taghazout" className="rounded-2xl shadow-luxury w-full aspect-[4/3] object-cover" loading="lazy" width={800} height={600} />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">La passion</p>
              <h2 className="font-heading text-4xl font-bold mb-6">
                Une initiative née de la <span className="text-gradient-sunset">passion</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fly Taghazout est né de la volonté d'un passionné d'aviation, fondateur du Club Haouz Flying, qui œuvre depuis plusieurs années au développement des sports aériens au Maroc.
              </p>
              <h4 className="font-heading font-bold mb-3">Ce qui nous anime :</h4>
              <ul className="space-y-3 mb-8">
                {[
                  "Faire découvrir au plus grand nombre le plaisir de voler",
                  "Valoriser les paysages exceptionnels du sud du Maroc",
                  "Faire vivre une expérience immersive entre ciel et nature",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="default" size="lg" asChild>
                <Link href="/reserver">Vivez l'expérience <ArrowRight size={18} /></Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Sécurité</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Voler en toute <span className="text-gradient-sunset">confiance</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Le paramoteur : un aéronef ultraléger sûr, stable et parfaitement adapté au tourisme.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Paramoteur certifié", desc: "Appareil parmi les plus sûrs, offrant stabilité et contrôle." },
              { icon: Award, title: "Équipements complets", desc: "Casques, harnais, protection ventrale et communication." },
              { icon: Eye, title: "Maintenance rigoureuse", desc: "Chaque appareil vérifié et entretenu dans nos hangars." },
              { icon: Heart, title: "Briefing personnalisé", desc: "Consignes claires pour se sentir serein dès le premier instant." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-luxury hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Territory */}
      <section className="py-24 bg-gradient-navy text-primary-foreground">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Un territoire exceptionnel pour <span className="text-gradient-sunset">voler</span>
              </h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                Bienvenue là où le ciel rencontre les plus beaux paysages du Maroc.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Taghazout & Agadir", desc: "340 jours de soleil, vents favorables, côte à couper le souffle.", img: agadirImg },
              { title: "Dunes du Sud", desc: "Décor désertique grandiose, chaud et doré.", img: dunesImg },
              { title: "Vallées de l'Atlas", desc: "Reliefs impressionnants, panorama majestueux.", img: atlasImg },
              { title: "Plaines du Haouz", desc: "Mosaïque naturelle entre terres, villages et oasis.", img: pilotImg },
            ].map((loc, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden aspect-[3/4]">
                  <img src={loc.img} alt={loc.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width={800} height={600} />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-heading font-bold text-xl text-primary-foreground mb-2">{loc.title}</h3>
                    <p className="text-primary-foreground/70 text-sm">{loc.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Rejoignez <span className="text-gradient-sunset">l'aventure</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Élevez vos découvertes. Écrivez vos souvenirs dans le ciel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" asChild>
                <Link href="/reserver">Réserver votre vol</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/contact">Contacter l'équipe</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default AProposPage;
