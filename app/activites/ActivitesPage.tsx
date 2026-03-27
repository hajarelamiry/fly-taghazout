"use client";
import Link from "next/link";
import { ArrowRight, Plane, Heart, Wind, Camera, Check, Users, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const agadirImg = "/images/agadir-coast.jpg";
const sunsetImg = "/images/sunset-couple.jpg";
const dunesImg = "/images/dunes-flight.jpg";
const atlasImg = "/images/atlas-flight.jpg";
const heroImg = "/images/hero-flight.jpg";

const baptemes = [
  {
    title: "Baptême Découverte",
    emotion: "Douce découverte",
    desc: "Votre premier envol. Juste vous, le ciel et l'adrénaline… en douceur.",
    points: ["Sensations douces, envol progressif", "Adapté à tous, même sans expérience", "Panoramas océaniques splendides"],
    cta: "Je commence l'aventure",
    img: agadirImg,
  },
  {
    title: "Baptême Instagram",
    emotion: "Moment magique",
    desc: "Une lumière dorée, l'océan brillant, et vous… au-dessus de tout.",
    points: ["Sunrise ou Sunset", "Pack média inclus", "Contenu 100% partageable"],
    cta: "Je capture la magie",
    img: sunsetImg,
  },
  {
    title: "Baptême Premium",
    emotion: "Expérience exceptionnelle",
    desc: "Plus haut, plus loin, plus longtemps. 20+ minutes d'émerveillement.",
    points: ["Parcours étendu", "Expérience VIP personnalisée", "Champagne ou message personnalisé en option"],
    cta: "Je choisis l'exception",
    img: heroImg,
  },
];

const ActivitesPage = () => {
  return (
    <main className="pt-24 pb-16 lg:pb-0">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <img src={heroImg} alt="Activités paramoteur" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-secondary/60" />
        <div className="relative z-10 container text-center text-primary-foreground">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Nos activités</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
            Vivez l'aventure en <span className="text-gradient-sunset">paramoteur</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Ressentez la liberté et l'adrénaline en contemplant le sud du Maroc depuis le ciel.
          </p>
        </div>
      </section>

      {/* Activities overview */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Nos <span className="text-gradient-sunset">activités phares</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez toutes les façons de vivre l'aventure aérienne !
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Plane, title: "Baptêmes de l'air", desc: "Découvrez Taghazout & Agadir entre mer et falaises, en douceur.", cta: "Voir les baptêmes" },
              { icon: Wind, title: "Voyages paramoteur", desc: "Circuits à travers les plus beaux paysages du Maroc.", cta: "Explorer les sorties" },
              { icon: Heart, title: "Événements dans les airs", desc: "Mariage, gender reveal, anniversaire… Vos plus belles émotions.", cta: "Créer un événement" },
              { icon: Camera, title: "Publicité aérienne", desc: "Visibilité spectaculaire au-dessus des plages.", cta: "Solutions B2B" },
            ].map((act, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-luxury hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <act.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{act.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">{act.desc}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1">
                    {act.cta} <ArrowRight size={14} />
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Baptêmes section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Baptêmes de l'air</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Nos offres <span className="text-gradient-sunset">baptêmes</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {baptemes.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="group bg-card rounded-2xl overflow-hidden shadow-luxury hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img src={b.img} alt={b.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width={800} height={600} />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {b.emotion}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-xl mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{b.desc}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {b.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <Check size={16} className="text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="default" size="lg" className="w-full" asChild>
                      <Link href="/reserver">{b.cta}</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inclus */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Ce qui est inclus</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
                Tout est prévu pour votre <span className="text-gradient-sunset">confort</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {["Pilote certifié", "Harnais + casque audio", "Briefing avant le vol", "Assurance", "Souvenirs mémorables", "Équipement complet"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Check size={16} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <img src={agadirImg} alt="Équipement paramoteur" className="rounded-2xl shadow-luxury w-full aspect-[4/3] object-cover" loading="lazy" width={800} height={600} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* À qui s'adresse */}
      <section className="py-24 bg-gradient-navy text-primary-foreground">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                À qui s'adressent <span className="text-gradient-sunset">nos activités</span> ?
              </h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                Une expérience pour tous, selon vos envies.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Users, title: "Premiers vols", desc: "Découvrir le ciel en toute confiance" },
              { icon: Heart, title: "Couples & familles", desc: "Partager un moment inoubliable" },
              { icon: Wind, title: "Groupes & passionnés", desc: "Explorer, voler et voyager ensemble" },
              { icon: Camera, title: "Créateurs de contenu", desc: "Photos & vidéos époustouflantes" },
              { icon: Sparkles, title: "Marques & événements", desc: "Visibilité maximale et impact garanti" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <item.icon className="mx-auto text-primary mb-4" size={28} />
                  <h4 className="font-heading font-semibold text-sm mb-2">{item.title}</h4>
                  <p className="text-primary-foreground/60 text-xs">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="premium" size="xl" asChild>
              <Link href="/reserver">Réservez votre évasion</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Comment ça se <span className="text-gradient-sunset">passe</span> ?
              </h2>
              <p className="text-muted-foreground">Une aventure fluide, sécurisée… et pleine d'émotions.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Accueil & briefing", desc: "Rencontrez notre équipe et recevez toutes les consignes." },
              { step: "02", title: "Installation & préparation", desc: "Équipement vérifié, tout est prêt pour le décollage." },
              { step: "03", title: "Décollage & vol", desc: "Envolez-vous et vivez des sensations inoubliables." },
              { step: "04", title: "Atterrissage & souvenir", desc: "Revenez en douceur avec des souvenirs mémorables." },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-heading font-bold text-gradient-sunset mb-4">{s.step}</div>
                  <h4 className="font-heading font-bold text-lg mb-2">{s.title}</h4>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ActivitesPage;
