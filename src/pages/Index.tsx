import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layers, Zap, Shield, ArrowRight, Sparkles, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-3d-printer.jpg";

export default function Index() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        {/* Animated Glow */}
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />

        {/* Content */}
        <div className="relative container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-slide-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Professionell 3D-printing</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 opacity-0 animate-slide-up animation-delay-100">
              Förverkliga dina
              <span className="text-gradient block">idéer i 3D</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-xl opacity-0 animate-slide-up animation-delay-200">
              Vi erbjuder 3D-utskrifter med hög kvalitet och snabb leverans. Oavsett om du behöver prototyper, reservdelar eller reparationer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-up animation-delay-300">
              <Button asChild variant="hero" size="lg">
                <Link to="/bestall" className="gap-2">
                  Beställ nu
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/material">Se våra material</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-16 opacity-0 animate-slide-up animation-delay-400">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">24-48h</p>
                  <p className="text-sm text-muted-foreground">Leveranstid</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">100+</p>
                  <p className="text-sm text-muted-foreground">Nöjda kunder</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">3+</p>
                  <p className="text-sm text-muted-foreground">Materialtyper</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground">Scrolla ner</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Varför välja <span className="text-gradient">Roos Engineering</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vi kombinerar teknisk expertis med passion för kvalitet för att leverera utskrifter som överträffar förväntningarna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover-lift">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:glow transition-all">
                <Zap className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Snabb leverans</h3>
              <p className="text-muted-foreground">
                Vi prioriterar snabba leveranstider utan att kompromissa med kvaliteten. De flesta beställningar skickas inom 24-48 timmar.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover-lift">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:glow transition-all">
                <Shield className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Hög kvalitet</h3>
              <p className="text-muted-foreground">
                Med moderna 3D-skrivare och premium-material garanterar vi utskrifter med hög precision och hållbarhet.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover-lift">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:glow transition-all">
                <Layers className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Flexibla material</h3>
              <p className="text-muted-foreground">
                Välj mellan PLA, PETG, ABS och fler material i olika färger för att passa just ditt projekt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Vad vi kan <span className="text-gradient">hjälpa dig med</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Oavsett om du är privatperson eller företag, har vi lösningar för dina behov. Vårt team hjälper dig från idé till färdig produkt.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Prototyper</h4>
                    <p className="text-sm text-muted-foreground">Snabb och kostnadseffektiv prototypframtagning för produktutveckling.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Reservdelar</h4>
                    <p className="text-sm text-muted-foreground">Tillverkning av reservdelar som inte längre finns i produktion.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Specialbeställningar</h4>
                    <p className="text-sm text-muted-foreground">Unika produkter efter dina specifikationer och önskemål.</p>
                  </div>
                </li>
              </ul>

              <Button asChild variant="hero" className="mt-8">
                <Link to="/bestall" className="gap-2">
                  Starta din beställning
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-card border border-border overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="3D printing process"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-card border border-border p-12 md:p-16 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Redo att <span className="text-gradient">förverkliga din idé</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Skicka in din fil och få en offert inom 24 timmar. Vi hjälper dig hela vägen från design till färdig produkt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="lg">
                  <Link to="/bestall" className="gap-2">
                    Beställ nu
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/kontakt">Kontakta oss</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
