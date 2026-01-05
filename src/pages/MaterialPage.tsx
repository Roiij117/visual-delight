import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

type MaterialType = "all" | "pla" | "petg" | "abs";

interface FilamentColor {
  id: string;
  name: string;
  hex: string;
  material: MaterialType;
  image?: string;
}

const filamentColors: FilamentColor[] = [
  // PLA Colors
  { id: "pla-black", name: "Svart", hex: "#1a1a1a", material: "pla" },
  { id: "pla-white", name: "Vit", hex: "#f5f5f5", material: "pla" },
  { id: "pla-gray", name: "Grå", hex: "#6b7280", material: "pla" },
  { id: "pla-red", name: "Röd", hex: "#dc2626", material: "pla" },
  { id: "pla-blue", name: "Blå", hex: "#2563eb", material: "pla" },
  { id: "pla-green", name: "Grön", hex: "#16a34a", material: "pla" },
  { id: "pla-yellow", name: "Gul", hex: "#eab308", material: "pla" },
  { id: "pla-orange", name: "Orange", hex: "#ea580c", material: "pla" },
  { id: "pla-purple", name: "Lila", hex: "#9333ea", material: "pla" },
  { id: "pla-pink", name: "Rosa", hex: "#ec4899", material: "pla" },
  { id: "pla-cyan", name: "Cyan", hex: "#06b6d4", material: "pla" },
  { id: "pla-lime", name: "Limegrön", hex: "#84cc16", material: "pla" },
  // PETG Colors
  { id: "petg-black", name: "Svart", hex: "#0f0f0f", material: "petg" },
  { id: "petg-white", name: "Vit", hex: "#fafafa", material: "petg" },
  { id: "petg-transparent", name: "Transparent", hex: "#e0f2fe", material: "petg" },
  { id: "petg-blue", name: "Blå", hex: "#1d4ed8", material: "petg" },
  { id: "petg-red", name: "Röd", hex: "#b91c1c", material: "petg" },
  { id: "petg-green", name: "Grön", hex: "#15803d", material: "petg" },
  { id: "petg-orange", name: "Orange", hex: "#c2410c", material: "petg" },
  // ABS Colors
  { id: "abs-black", name: "Svart", hex: "#171717", material: "abs" },
  { id: "abs-white", name: "Vit", hex: "#f0f0f0", material: "abs" },
  { id: "abs-gray", name: "Grå", hex: "#525252", material: "abs" },
  { id: "abs-red", name: "Röd", hex: "#991b1b", material: "abs" },
];

const materials = [
  {
    id: "pla" as MaterialType,
    name: "PLA",
    description: "Polylaktid - Det mest populära materialet för 3D-printing",
    properties: [
      "Miljövänligt och biologiskt nedbrytbart",
      "Enkel att printa med hög precision",
      "Stor färgvariation tillgänglig",
      "Idealisk för prototyper och dekoration",
    ],
    useCase: "Prototyper, dekoration, presenter, leksaker",
  },
  {
    id: "petg" as MaterialType,
    name: "PETG",
    description: "Polyetylentereftalat - Stark och flexibel kombination",
    properties: [
      "Utmärkt mekanisk styrka",
      "Bra kemisk resistens",
      "Värmetålig upp till 70°C",
      "Flexibel och slagtålig",
    ],
    useCase: "Funktionella delar, verktyg, utomhusanvändning",
  },
  {
    id: "abs" as MaterialType,
    name: "ABS",
    description: "Akrylnitrilbutadienstyren - Industriell styrka",
    properties: [
      "Hög värmetålighet (100°C+)",
      "Utmärkt slagtålighet",
      "Slät yta, lätt att efterbearbeta",
      "Beständig mot kemikalier",
    ],
    useCase: "Mekaniska delar, fordonskomponenter, höga temperatur",
  },
];

const filterTabs: { value: MaterialType; label: string }[] = [
  { value: "all", label: "Alla" },
  { value: "pla", label: "PLA" },
  { value: "petg", label: "PETG" },
  { value: "abs", label: "ABS" },
];

export default function MaterialPage() {
  const [activeFilter, setActiveFilter] = useState<MaterialType>("all");

  const filteredColors =
    activeFilter === "all"
      ? filamentColors
      : filamentColors.filter((color) => color.material === activeFilter);

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Material & <span className="text-gradient">Färger</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Vi erbjuder ett brett utbud av högkvalitativa material och färger för att passa alla typer av projekt.
          </p>
        </div>

        {/* Color Gallery Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Tillgängliga färger</h2>
          
          {/* Filter Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-secondary rounded-xl p-1.5 gap-1">
              {filterTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeFilter === tab.value
                      ? "bg-gradient-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Color Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredColors.map((color) => (
              <div
                key={color.id}
                className="group bg-gradient-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Color Swatch */}
                <div className="aspect-square relative overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background:
                        color.id === "petg-transparent"
                          ? `linear-gradient(135deg, ${color.hex} 0%, rgba(255,255,255,0.3) 50%, ${color.hex} 100%)`
                          : color.hex,
                    }}
                  />
                  {/* Spool visual overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                    <div className="w-1/2 h-1/2 rounded-full border-4 border-white/50" />
                  </div>
                </div>
                {/* Info */}
                <div className="p-3 bg-background">
                  <p className="font-medium text-sm text-foreground">{color.name}</p>
                  <p className="text-xs text-muted-foreground uppercase">
                    {color.material.toUpperCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-6">
            Ser du inte den färg du letar efter? <Link to="/kontakt" className="text-primary hover:underline">Kontakta oss</Link> så hjälper vi dig!
          </p>
        </div>

        {/* Materials Details */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Materialegenskaper</h2>
          
          <div className="space-y-6">
            {materials.map((material) => (
              <div
                key={material.id}
                className="bg-gradient-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Material Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center glow">
                          <span className="text-primary-foreground font-bold text-xl">
                            {material.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">
                            {material.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {material.description}
                          </p>
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

                    {/* Use Case & Colors Count */}
                    <div className="lg:w-72 space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          Tillgängliga färger
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {filamentColors
                            .filter((c) => c.material === material.id)
                            .slice(0, 6)
                            .map((color) => (
                              <div
                                key={color.id}
                                className="w-8 h-8 rounded-lg border border-border shadow-sm"
                                style={{ backgroundColor: color.hex }}
                                title={color.name}
                              />
                            ))}
                          {filamentColors.filter((c) => c.material === material.id).length > 6 && (
                            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-xs font-medium text-muted-foreground">
                              +{filamentColors.filter((c) => c.material === material.id).length - 6}
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          Användningsområden
                        </h4>
                        <p className="text-foreground">{material.useCase}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
