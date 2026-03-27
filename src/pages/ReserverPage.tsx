import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, ChevronRight, Calendar, User, Heart, Camera, Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/hero-flight.jpg";
import agadirImg from "@/assets/agadir-coast.jpg";
import sunsetImg from "@/assets/sunset-couple.jpg";
import { toast } from "sonner";

const experiences = [
  { id: "decouverte", title: "Baptême Découverte", emotion: "Douce découverte", duration: "10-15 min", img: agadirImg },
  { id: "instagram", title: "Baptême Instagram", emotion: "Moment magique", duration: "15 min", img: sunsetImg },
  { id: "premium", title: "Baptême Premium", emotion: "Expérience exceptionnelle", duration: "20+ min", img: heroImg },
];

const occasions = [
  "Découverte", "Demande en mariage", "Anniversaire", "Gender reveal", "Cadeau", "Autre",
];

const ReserverPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [addPhotos, setAddPhotos] = useState(false);
  const [addMessage, setAddMessage] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const canProceed = () => {
    switch (step) {
      case 1: return !!selectedExperience;
      case 2: return !!selectedDate;
      case 3: return formData.name && formData.email && formData.phone;
      default: return false;
    }
  };

  const getExperienceTitle = () => {
    const exp = experiences.find(e => e.id === selectedExperience);
    return exp ? exp.title : "votre vol";
  };

  const handleSubmit = () => {
    const name = formData.name.split(" ")[0];
    toast.success(
      `Merci ${name} ! 🎉 Demande envoyée. On vous contacte très vite !`,
      { duration: 5000 }
    );
    setStep(1);
    setSelectedExperience("");
    setSelectedOccasion("");
    setAddPhotos(false);
    setAddMessage(false);
    setSelectedDate(undefined);
    setFormData({ name: "", email: "", phone: "" });
    navigate("/");
  };

  return (
    <main className="pt-24 pb-20 lg:pb-0 min-h-screen">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <img src={heroImg} alt="Réservation Fly Taghazout" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="relative z-10 container text-center text-primary-foreground">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">
            Votre expérience <span className="text-gradient-sunset">commence ici</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Nous adaptons chaque vol à votre moment.
          </p>
        </div>
      </section>

      {/* Progress */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {["Expérience", "Date & heure", "Confirmation"].map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                  i + 1 <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>
                  {i + 1 < step ? <Check size={16} /> : i + 1}
                </div>
                <span className={cn(
                  "text-sm hidden md:inline font-medium",
                  i + 1 <= step ? "text-foreground" : "text-muted-foreground"
                )}>
                  {label}
                </span>
                {i < 2 && <ChevronRight size={16} className="text-muted-foreground" />}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-2">Étape {step} sur 3</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12">
        <div className="container max-w-3xl">
          {/* Step 1: Choose experience + Personalize */}
          {step === 1 && (
            <ScrollReveal>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-center">
                Choisissez votre expérience
              </h2>
              <p className="text-muted-foreground text-center mb-8">Sélectionnez le vol qui vous ressemble.</p>
              
              {/* Experience cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-10">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedExperience(exp.id)}
                    className={cn(
                      "group rounded-2xl overflow-hidden border-2 transition-all duration-300 text-left",
                      selectedExperience === exp.id
                        ? "border-primary shadow-glow-primary"
                        : "border-border hover:border-primary/30"
                    )}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={300} />
                      <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs font-semibold">
                        {exp.emotion}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-bold text-sm mb-1">{exp.title}</h3>
                      <p className="text-xs text-muted-foreground">{exp.duration}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Personalization section */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
                    <Heart size={18} className="text-primary" /> Occasion (optionnel)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {occasions.map((occ) => (
                      <button
                        key={occ}
                        onClick={() => setSelectedOccasion(selectedOccasion === occ ? "" : occ)}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium border transition-all",
                          selectedOccasion === occ
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border hover:border-primary/30"
                        )}
                      >
                        {occ}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
                    <Camera size={18} className="text-primary" /> Options
                  </h3>
                  <div className="space-y-3">
                    <label className={cn(
                      "flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all",
                      addPhotos ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                    )}>
                      <input type="checkbox" checked={addPhotos} onChange={() => setAddPhotos(!addPhotos)} className="sr-only" />
                      <div className={cn("w-5 h-5 rounded border-2 flex items-center justify-center transition-all", addPhotos ? "bg-primary border-primary" : "border-muted-foreground")}>
                        {addPhotos && <Check size={12} className="text-primary-foreground" />}
                      </div>
                      <div>
                        <p className="font-medium text-sm">Pack photos & vidéos</p>
                        <p className="text-xs text-muted-foreground">Immortalisez votre vol avec des images professionnelles</p>
                      </div>
                    </label>
                    <label className={cn(
                      "flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all",
                      addMessage ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                    )}>
                      <input type="checkbox" checked={addMessage} onChange={() => setAddMessage(!addMessage)} className="sr-only" />
                      <div className={cn("w-5 h-5 rounded border-2 flex items-center justify-center transition-all", addMessage ? "bg-primary border-primary" : "border-muted-foreground")}>
                        {addMessage && <Check size={12} className="text-primary-foreground" />}
                      </div>
                      <div>
                        <p className="font-medium text-sm">Message personnalisé</p>
                        <p className="text-xs text-muted-foreground">Ajoutez un message spécial visible pendant le vol</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Step 2: Date */}
          {step === 2 && (
            <ScrollReveal>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-center">
                Choisissez votre date
              </h2>
              <p className="text-muted-foreground text-center mb-8">Sélectionnez un créneau qui vous convient.</p>
              
              <div className="flex justify-center mb-6">
                <CalendarUI
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-xl border shadow-luxury p-4 pointer-events-auto"
                  disabled={(date) => date < new Date()}
                />
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-xl p-4">
                <Shield size={16} className="text-primary" />
                Conditions météo vérifiées pour votre sécurité
              </div>
            </ScrollReveal>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <ScrollReveal>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-center">
                Finalisez votre réservation
              </h2>
              <p className="text-muted-foreground text-center mb-8">Notre équipe vous contacte rapidement pour finaliser votre expérience.</p>
              
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nom et prénom *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom complet"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Téléphone *</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+212 XX XXX XXX"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted/50 rounded-xl text-sm text-muted-foreground flex items-start gap-3">
                <User size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Notre équipe vous contactera dans les 24h pour confirmer les détails de votre expérience et répondre à vos questions.</span>
              </div>
            </ScrollReveal>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-10">
            {step > 1 ? (
              <Button variant="ghost" onClick={() => {
                const prev = step - 1;
                if (prev === 1) {
                  setSelectedExperience("");
                  setSelectedOccasion("");
                  setAddPhotos(false);
                  setAddMessage(false);
                }
                if (prev <= 2) {
                  setSelectedDate(undefined);
                }
                if (prev <= 2) {
                  setFormData({ name: "", email: "", phone: "" });
                }
                setStep(prev);
              }} className="gap-2">
                <ArrowLeft size={16} /> Retour
              </Button>
            ) : (
              <div />
            )}
            {step < 3 ? (
              <Button
                variant="premium"
                size="lg"
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="gap-2"
              >
                Continuer <ChevronRight size={18} />
              </Button>
            ) : (
              <Button
                variant="premium"
                size="lg"
                onClick={handleSubmit}
                disabled={!canProceed()}
              >
                Confirmer ma réservation
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReserverPage;
