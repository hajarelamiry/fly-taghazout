"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Activités", href: "/activites" },
  { label: "À propos", href: "/a-propos" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-luxury py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/logo.svg" alt="Fly Taghazout" className="h-10 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-[#1e3a5f]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="navCta" size="default" asChild>
              <Link href="/reserver">Réserver votre vol</Link>
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              "text-[#1e3a5f]"
            )}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col pt-20 px-6",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-2xl font-heading font-semibold py-2 transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8">
          <Button variant="hero" size="xl" className="w-full" asChild>
            <Link href="/reserver">Réserver votre vol</Link>
          </Button>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-md border-t border-border p-3">
        <Button variant="premium" size="lg" className="w-full" asChild>
          <Link href="/reserver">Réserver votre expérience</Link>
        </Button>
      </div>
    </>
  );
};

export default Navbar;