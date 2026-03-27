import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Shield, Wind, Heart, Award, MapPin, Star, ArrowRight, Plane, Users, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/hero-flight.jpg";
import dunesImg from "@/assets/dunes-flight.jpg";
import atlasImg from "@/assets/atlas-flight.jpg";
import sunsetImg from "@/assets/sunset-couple.jpg";
import agadirImg from "@/assets/agadir-coast.jpg";
import pilotImg from "@/assets/pilot-safety.jpg";

const HomePage = () => {
  return (
    <main className="pb-16 lg:pb-0">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Vol en paramoteur au-dessus de la côte de Taghazout au coucher du soleil"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        <div className="relative z-10 container text-center text-primary-foreground px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-primary-foreground/80 font-body">
              Paramoteur biplace · Taghazout & Agadir
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
              Prenez de la<br />
              <span className="text-gradient-sunset">hauteur</span>
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-primary-foreground/85 font-light">
              L'adrénaline, en toute confiance. Découvrez le Maroc comme vous ne l'avez jamais vu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/reserver">Réserver votre expérience</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/activites">Explorer les vols</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* SLIDER BAR */}
      <section className="bg-secondary py-6 overflow-hidden">
        <div className="flex animate-[slide_20s_linear_infinite] gap-12 whitespace-nowrap px-8">
          {["Liberté en toute maîtrise", "100% Adrénaline douce", "Émotion au rendez-vous", "Pilotes certifiés DGAC", "Défi à votre portée", "Évasion unique", "Liberté en toute maîtrise", "100% Adrénaline douce", "Émotion au rendez-vous", "Pilotes certifiés DGAC"].map((text, i) => (
            <span key={i} className="text-secondary-foreground/80 text-sm font-medium tracking-wide uppercase flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {text}
            </span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">L'expérience</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Une aventure, une émotion,<br />
                <span className="text-gradient-sunset">un souvenir.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fly Taghazout, c'est un vol spectaculaire qui vous transporte au-dessus des paysages les plus iconiques du sud du Maroc. Accompagné de pilotes certifiés ULM par la DGAC, vous vivez un moment rare, sécurisé et inoubliable.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Un souvenir qui restera gravé longtemps après l'atterrissage.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/a-propos">En savoir plus <ArrowRight size={18} /></Link>
              </Button>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img
                  src={sunsetImg}
                  alt="Vol en paramoteur au coucher du soleil"
                  className="rounded-2xl shadow-luxury w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-5 shadow-luxury">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm">Certifiés DGAC</p>
                      <p className="text-xs text-muted-foreground">Sécurité maximale</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Nos activités</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Choisissez votre <span className="text-gradient-sunset">aventure</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez nos expériences aériennes phares et choisissez celle qui vous ressemble.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Plane, title: "Baptêmes de l'air", desc: "S'initier en douceur, admirer les paysages et ressentir ce frisson aérien incomparable.", cta: "Partir à l'aventure", img: agadirImg },
              { icon: Heart, title: "Événements dans les airs", desc: "Mariages, gender reveal, surprises… Vivez des moments uniques dans les hauteurs.", cta: "Créer un moment unique", img: sunsetImg },
              { icon: Wind, title: "Voyages paramoteur", desc: "Explorez le Maroc vu du ciel, entre mer, dunes et montagnes.", cta: "Oser l'exceptionnel", img: dunesImg },
              { icon: Camera, title: "Publicité aérienne", desc: "Visibilité exceptionnelle pour votre marque au-dessus des plages.", cta: "Solutions B2B", img: atlasImg },
            ].map((activity, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group bg-card rounded-2xl overflow-hidden shadow-luxury hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={activity.img}
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary-foreground/90 flex items-center justify-center">
                      <activity.icon className="text-primary" size={20} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg mb-2">{activity.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{activity.desc}</p>
                    <Link to="/activites" className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      {activity.cta} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Où voler</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Sites de <span className="text-gradient-sunset">l'aventure</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Offrez-vous un moment suspendu. Là où le ciel touche les plus beaux paysages du Maroc.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Plages d'Agadir", desc: "Vue panoramique sur l'océan à perte de vue, entre vagues, soleil et lumière dorée.", img: agadirImg },
              { title: "Dunes du Sud", desc: "Décor naturel majestueux, entre sable doré et lignes infinies sculptées par le vent.", img: dunesImg },
              { title: "Vallées de l'Atlas", desc: "Contraste saisissant entre montagnes, lumières et reliefs impressionnants.", img: atlasImg },
              { title: "Plaines du Haouz", desc: "Mosaïque de paysages naturels qui s'étend à l'horizon, calme et spectaculaire.", img: pilotImg },
            ].map((loc, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
                  <img
                    src={loc.img}
                    alt={loc.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <MapPin size={16} />
                      <span className="text-xs uppercase tracking-wider font-semibold text-primary-foreground/80">Destination</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-primary-foreground mb-2">{loc.title}</h3>
                    <p className="text-primary-foreground/70 text-sm">{loc.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="py-24 lg:py-32 bg-gradient-navy text-primary-foreground">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Vos occasions</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Vivez vos grandes occasions…<br />
                <span className="text-gradient-sunset">les pieds dans le vide.</span>
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-8">
                Demande en mariage au coucher de soleil, annonce du bébé, surprise d'anniversaire, moment inoubliable en duo… Offrez à vos proches un souvenir qui restera gravé à jamais.
              </p>
              <Button variant="premium" size="lg" asChild>
                <Link to="/reserver">Essayez l'aventure ultime</Link>
              </Button>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <img
                src={sunsetImg}
                alt="Vol romantique en paramoteur au coucher du soleil"
                className="rounded-2xl shadow-luxury w-full aspect-[4/3] object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHY FLY TAGHAZOUT */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Pourquoi nous</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Pourquoi <span className="text-gradient-sunset">Fly Taghazout</span> ?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                L'aventure, l'adrénaline… mais surtout la sécurité. Vous profitez du ciel, nous nous occupons de tout le reste.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Wind, title: "Aventure", desc: "Un vol doux, fluide et panoramique au-dessus d'un des plus beaux littoraux du Maroc." },
              { icon: Shield, title: "Adrénaline maîtrisée", desc: "Le juste équilibre entre sensations aériennes et total confort, même pour les débutants." },
              { icon: Award, title: "Pilotes certifiés", desc: "Nos pilotes sont formés, certifiés ULM et respectent des standards stricts de sécurité." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center p-8 rounded-2xl bg-card shadow-luxury hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/a-propos">En savoir davantage <ArrowRight size={18} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Témoignages</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Ils l'ont fait… et ils ont <span className="text-gradient-sunset">adoré !</span>
              </h2>
              <p className="text-muted-foreground">Parce que rien ne vaut la parole de ceux qui ont déjà décollé.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sophie M.", text: "Une expérience absolument magique. Le coucher de soleil vu du ciel, c'était irréel. Les pilotes sont incroyablement professionnels.", stars: 5 },
              { name: "Karim A.", text: "J'ai fait ma demande en mariage pendant le vol. Elle a dit oui ! Merci à toute l'équipe pour cette organisation parfaite.", stars: 5 },
              { name: "Claire & Tom", text: "On avait un peu peur, mais dès le décollage, c'était que du bonheur. Doux, sécurisé et grandiose. On recommande à 100%.", stars: 5 },
            ].map((testimonial, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 shadow-luxury">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.stars }).map((_, j) => (
                      <Star key={j} className="fill-accent text-accent" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                  <p className="font-heading font-semibold">{testimonial.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Galerie</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Nos plus beaux <span className="text-gradient-sunset">moments</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[heroImg, dunesImg, atlasImg, sunsetImg, agadirImg, pilotImg, heroImg, dunesImg].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer">
                  <img
                    src={img}
                    alt={`Galerie Fly Taghazout ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={400}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/30 transition-colors duration-300" />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/galerie">Voir la galerie complète <ArrowRight size={18} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 overflow-hidden">
        <img
          src={heroImg}
          alt="Réservez votre vol en paramoteur"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-secondary/70 backdrop-blur-sm" />
        <div className="relative z-10 container text-center text-primary-foreground">
          <ScrollReveal>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Prêt à décoller ?</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Le ciel de Taghazout<br />
              <span className="text-gradient-sunset">n'attend que vous.</span>
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10 text-lg">
              Choisissez votre vol, réservez votre créneau… et laissez-vous porter par une aventure unique au-dessus de l'Atlantique.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/reserver">Réserver maintenant</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
