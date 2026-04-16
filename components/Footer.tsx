"use client";
import Link from "next/link";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src="/images/logo-white-text.svg" className="h-12 w-auto" />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Le ciel de Taghazout n'attend que vous. Vols en paramoteur biplace au-dessus des plus beaux paysages du Maroc.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/flytaghazout?igsh=MWxwczMwaG1lZ2ptag==" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@flytaghazout?_r=1&_t=ZS-95aQLSLAXS5" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          {/* Activities */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Activités</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link href="/activites" className="hover:text-primary transition-colors">Baptêmes de l'air</Link></li>
              <li><Link href="/activites" className="hover:text-primary transition-colors">Événements dans les airs</Link></li>
              <li><Link href="/activites" className="hover:text-primary transition-colors">Voyages paramoteur</Link></li>
              <li><Link href="/activites" className="hover:text-primary transition-colors">Publicité aérienne</Link></li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Navigation</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="/a-propos" className="hover:text-primary transition-colors">À propos</Link></li>
              <li><Link href="/galerie" className="hover:text-primary transition-colors">Galerie</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/reserver" className="hover:text-primary transition-colors">Réserver</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Contact</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+212 661-607001</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>contact@flytaghazout.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>Agadir / Taghazout, Maroc</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/50">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://extremesportsevents.ma/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-primary transition-colors"
            >
              Etreme Sports Events
            </a>
            , appuyé par{" "}
            <a
              href="https://monarkit.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-primary transition-colors"
            >
              MONARK IT
            </a>
            . Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;