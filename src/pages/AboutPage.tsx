import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Heart, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-3d-printer.jpg";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Om <span className="text-gradient">Roos Engineering</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Vi startades med ett enkelt mål: att leverera högkvalitativa 3D-utskrifter snabbt och pålitligt till alla som behöver dem.
            </p>
          </div>

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-video">
            <img 
              src={heroImage} 
              alt="Roos Engineering workshop" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-foreground font-semibold text-lg">Modern teknik för moderna lösningar</p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Vår historia</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Roos Engineering grundades av Emil Roos med visionen att göra professionell 3D-printing tillgänglig för alla. 
              Från hobbyprojekt till företagslösningar - vi tror att alla ska kunna förverkliga sina idéer.
            </p>
            <p>
              Vi fokuserar på prototyper, reservdelar och specialbeställningar för både företag och privatpersoner. 
              Vår passion för teknik och noggrannhet genomsyrar allt vi gör, och vi strävar alltid efter att överträffa kundens förväntningar.
            </p>
            <p>
              Med modern utrustning och djup kunskap inom 3D-printing kan vi ta oss an projekt av alla storlekar och komplexitet. 
              Varje utskrift behandlas med samma omsorg och precision, oavsett om det är en enkel prototyp eller en komplex mekanisk del.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Våra värderingar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-card rounded-2xl border border-border p-8 text-center hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 glow">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Precision</h3>
              <p className="text-muted-foreground">
                Vi kompromissar aldrig med kvaliteten. Varje detalj är viktig för oss.
              </p>
            </div>

            <div className="bg-gradient-card rounded-2xl border border-border p-8 text-center hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 glow">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Passion</h3>
              <p className="text-muted-foreground">
                3D-printing är inte bara vårt jobb - det är vår passion som driver oss framåt.
              </p>
            </div>

            <div className="bg-gradient-card rounded-2xl border border-border p-8 text-center hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 glow">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                Vi håller oss uppdaterade med den senaste tekniken för att leverera det bästa.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Vårt team</h2>
          <div className="bg-gradient-card rounded-2xl border border-border p-8 inline-block">
            <div className="w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 glow">
              <span className="text-primary-foreground font-bold text-3xl">ER</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Emil Roos</h3>
            <p className="text-primary font-medium">Grundare & Projektledare</p>
            <p className="text-muted-foreground mt-3 max-w-md">
              Med flera års erfarenhet av 3D-printing leder Emil Roos Engineering med fokus på kvalitet och kundnöjdhet.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Redo att starta ett projekt? Vi finns här för att hjälpa dig.
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
    </main>
  );
}
