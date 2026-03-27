"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";


const heroImg = "/images/hero-flight.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé ! Notre équipe vous contactera rapidement.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main className="pt-24 pb-16 lg:pb-0">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <img src={heroImg} alt="Contact Fly Taghazout" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-secondary/60" />
        <div className="relative z-10 container text-center text-primary-foreground">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
            Contactez-<span className="text-gradient-sunset">nous</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Nous sommes là pour répondre à toutes vos questions et vous aider à réserver votre vol en toute sécurité.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-heading text-3xl font-bold mb-8">
                  Comment nous <span className="text-gradient-sunset">joindre</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: Phone, label: "Téléphone", value: "+212 XX XXX XXX" },
                    { icon: Mail, label: "Email", value: "contact@flytaghazout.com" },
                    { icon: MapPin, label: "Adresse", value: "Agadir / Taghazout, Maroc" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="text-primary" size={22} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-heading font-semibold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.2}>
                <div className="bg-card rounded-2xl p-8 shadow-luxury">
                  <h3 className="font-heading text-2xl font-bold mb-6">Envoyez-nous un message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Nom et prénom</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Téléphone</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+212 XX XXX XXX"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Sujet</label>
                        <Input
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Réservation, information..."
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Votre message..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button variant="premium" size="lg" type="submit" className="w-full">
                      <Send size={18} /> Envoyer le message
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
