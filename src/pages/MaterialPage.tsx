import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const materials = [
  {
    name: "PLA",
    description: "Polylaktid - Det mest populära materialet för 3D-printing",
    properties: [
      "Miljövänligt och biologiskt nedbrytbart",
      "Enkel att printa med hög precision",
      "Stor färgvariation tillgänglig",
      "Idealisk för prototyper och dekoration",
    ],
    colors: ["Svart", "Vit", "Grå", "Röd", "Blå", "Grön", "Gul", "Orange"],
    useCase: "Prototyper, dekoration, presenter, leksaker",
  },
  {
    name: "PETG",
    description: "Polyetylentereftalat - Stark och flexibel kombination",
    properties: [
      "Utmärkt mekanisk styrka",
      "Bra kemisk resistens",
      "Värmetålig upp till 70°C",
      "Flexibel och slagtålig",
    ],
    colors: ["Svart", "Vit", "Transparent", "Blå", "Röd"],
    useCase: "Funktionella delar, verktyg, utomhusanvändning",
  },
  {
    name: "ABS",
    description: "Akrylnitrilbutadienstyren - Industriell styrka",
    properties: [
      "Hög värmetålighet (100°C+)",
      "Utmärkt slagtålighet",
      "Slät yta, lätt att efterbearbeta",
      "Beständig mot kemikalier",
    ],
    colors: ["Svart", "Vit", "Grå", "Röd"],
    useCase: "Mekaniska delar, fordonskomponenter, höga temperatur",
  },
];

export default function MaterialPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Material & <span className="text-gradient">Färger</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Vi erbjuder ett brett utbud av högkvalitativa material för att passa alla typer av projekt. Varje material har sina unika egenskaper och fördelar.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="space-y-8 mb-16">
          {materials.map((material, index) => (
            <div 
              key={material.name}
              className="bg-gradient-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Material Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center glow">
                        <span className="text-primary-foreground font-bold text-xl">{material.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">{material.name}</h2>
                        <p className="text-sm text-muted-foreground">{material.description}</p>
                      </div>
                    </div>

                    <ul className="space-y-3 mt-6">
                      {material.properties.map((prop, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{prop}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Colors & Use Case */}
                  <div className="lg:w-72 space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Tillgängliga färger</h3>
                      <div className="flex flex-wrap gap-2">
                        {material.colors.map((color) => (
                          <span 
                            key={color}
                            className="px-3 py-1.5 rounded-lg bg-secondary text-sm text-foreground"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Användningsområden</h3>
                      <p className="text-foreground">{material.useCase}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Osäker på vilket material som passar ditt projekt? Kontakta oss så hjälper vi dig!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/bestall" className="gap-2">
                Beställ nu
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/kontakt">Fråga oss</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
