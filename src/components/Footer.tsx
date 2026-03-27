import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Fly Taghazout" className="h-12 w-auto brightness-0 invert" />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Le ciel de Taghazout n'attend que vous. Vols en paramoteur biplace au-dessus des plus beaux paysages du Maroc.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Activities */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Activités</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link to="/activites" className="hover:text-primary transition-colors">Baptêmes de l'air</Link></li>
              <li><Link to="/activites" className="hover:text-primary transition-colors">Événements dans les airs</Link></li>
              <li><Link to="/activites" className="hover:text-primary transition-colors">Voyages paramoteur</Link></li>
              <li><Link to="/activites" className="hover:text-primary transition-colors">Publicité aérienne</Link></li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Navigation</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/a-propos" className="hover:text-primary transition-colors">À propos</Link></li>
              <li><Link to="/galerie" className="hover:text-primary transition-colors">Galerie</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/reserver" className="hover:text-primary transition-colors">Réserver</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Contact</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+212 XX XXX XXX</span>
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
          <p>© {new Date().getFullYear()} Fly Taghazout. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-primary transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
