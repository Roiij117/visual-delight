import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Calculator, 
  ArrowRight, 
  Info, 
  Layers, 
  Maximize, 
  Puzzle,
  Sparkles
} from "lucide-react";

const materials = [
  { 
    id: "pla", 
    name: "PLA", 
    pricePerCm3: 2.5, 
    description: "Miljövänligt och lätt att skriva ut",
    color: "hsl(var(--primary))"
  },
  { 
    id: "petg", 
    name: "PETG", 
    pricePerCm3: 3.0, 
    description: "Stark och vattenresistent",
    color: "hsl(200 80% 50%)"
  },
  { 
    id: "abs", 
    name: "ABS", 
    pricePerCm3: 3.5, 
    description: "Tålig och värmebeständig",
    color: "hsl(0 70% 55%)"
  },
];

const complexityLevels = [
  { id: "simple", name: "Enkel", multiplier: 1.0, description: "Enkla geometriska former" },
  { id: "medium", name: "Medium", multiplier: 1.5, description: "Måttlig detaljnivå" },
  { id: "complex", name: "Komplex", multiplier: 2.0, description: "Hög detaljnivå och stöd" },
  { id: "extreme", name: "Extrem", multiplier: 3.0, description: "Mycket komplex geometri" },
];

export default function PricingPage() {
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
  const [dimensions, setDimensions] = useState({ width: 50, height: 50, depth: 50 });
  const [complexity, setComplexity] = useState(complexityLevels[0]);
  const [quantity, setQuantity] = useState(1);

  const estimatedPrice = useMemo(() => {
    // Calculate volume in cm³
    const volume = (dimensions.width * dimensions.height * dimensions.depth) / 1000; // Convert mm³ to cm³
    
    // Base price calculation
    const materialCost = volume * selectedMaterial.pricePerCm3;
    const complexityCost = materialCost * complexity.multiplier;
    
    // Minimum price
    const baseFee = 50;
    
    // Quantity discount
    let discount = 1;
    if (quantity >= 10) discount = 0.8;
    else if (quantity >= 5) discount = 0.9;
    
    const totalPerUnit = Math.max(baseFee, complexityCost);
    const total = totalPerUnit * quantity * discount;
    
    return {
      perUnit: Math.round(totalPerUnit),
      total: Math.round(total),
      volume: volume.toFixed(1),
      discount: discount < 1 ? Math.round((1 - discount) * 100) : 0
    };
  }, [selectedMaterial, dimensions, complexity, quantity]);

  return (
    <main className="min-h-screen pt-32 pb-24">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-slide-up">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Prisuppskattning</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-slide-up animation-delay-100">
            Beräkna ditt <span className="text-gradient">pris</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-slide-up animation-delay-200">
            Få en snabb prisuppskattning baserat på material, storlek och komplexitet. 
            Det slutliga priset kan variera beroende på din fil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Calculator Controls */}
          <div className="lg:col-span-2 space-y-8">
            {/* Material Selection */}
            <div className="bg-gradient-card rounded-2xl p-8 border border-border opacity-0 animate-slide-up animation-delay-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Välj material</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {materials.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => setSelectedMaterial(material)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedMaterial.id === material.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 bg-secondary/30"
                    }`}
                  >
                    <div 
                      className="w-8 h-8 rounded-lg mb-3"
                      style={{ backgroundColor: material.color }}
                    />
                    <h3 className="font-semibold text-foreground">{material.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{material.description}</p>
                    <p className="text-sm text-primary mt-2 font-mono">{material.pricePerCm3} kr/cm³</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-gradient-card rounded-2xl p-8 border border-border opacity-0 animate-slide-up animation-delay-400">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Maximize className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Dimensioner (mm)</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm text-muted-foreground">Bredd</label>
                    <span className="text-sm font-mono text-primary">{dimensions.width} mm</span>
                  </div>
                  <Slider
                    value={[dimensions.width]}
                    onValueChange={([value]) => setDimensions({ ...dimensions, width: value })}
                    min={10}
                    max={200}
                    step={5}
                    className="cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm text-muted-foreground">Höjd</label>
                    <span className="text-sm font-mono text-primary">{dimensions.height} mm</span>
                  </div>
                  <Slider
                    value={[dimensions.height]}
                    onValueChange={([value]) => setDimensions({ ...dimensions, height: value })}
                    min={10}
                    max={200}
                    step={5}
                    className="cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm text-muted-foreground">Djup</label>
                    <span className="text-sm font-mono text-primary">{dimensions.depth} mm</span>
                  </div>
                  <Slider
                    value={[dimensions.depth]}
                    onValueChange={([value]) => setDimensions({ ...dimensions, depth: value })}
                    min={10}
                    max={200}
                    step={5}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-secondary/50 flex items-center gap-3">
                <Info className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Uppskattad volym: <span className="text-primary font-mono">{estimatedPrice.volume} cm³</span>
                </p>
              </div>
            </div>

            {/* Complexity */}
            <div className="bg-gradient-card rounded-2xl p-8 border border-border opacity-0 animate-slide-up animation-delay-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Puzzle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Komplexitet</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {complexityLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setComplexity(level)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      complexity.id === level.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 bg-secondary/30"
                    }`}
                  >
                    <h3 className="font-semibold text-foreground">{level.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{level.description}</p>
                    <p className="text-sm text-primary mt-2 font-mono">×{level.multiplier}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="bg-gradient-card rounded-2xl p-8 border border-border opacity-0 animate-slide-up animation-delay-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Antal</h2>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-1">
                  <div className="flex justify-between mb-3">
                    <label className="text-sm text-muted-foreground">Antal exemplar</label>
                    <span className="text-sm font-mono text-primary">{quantity} st</span>
                  </div>
                  <Slider
                    value={[quantity]}
                    onValueChange={([value]) => setQuantity(value)}
                    min={1}
                    max={20}
                    step={1}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              {estimatedPrice.discount > 0 && (
                <div className="mt-4 p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-sm text-primary">
                    Mängdrabatt! Du sparar {estimatedPrice.discount}% vid {quantity} exemplar
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-gradient-card rounded-2xl p-8 border border-primary/30 opacity-0 animate-slide-up animation-delay-600">
              <h2 className="text-xl font-semibold text-foreground mb-6">Prisuppskattning</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Material</span>
                  <span className="text-foreground font-medium">{selectedMaterial.name}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Volym</span>
                  <span className="text-foreground font-medium">{estimatedPrice.volume} cm³</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Komplexitet</span>
                  <span className="text-foreground font-medium">{complexity.name}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Antal</span>
                  <span className="text-foreground font-medium">{quantity} st</span>
                </div>
                {estimatedPrice.discount > 0 && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Rabatt</span>
                    <span className="text-primary font-medium">-{estimatedPrice.discount}%</span>
                  </div>
                )}
                <div className="h-px bg-border my-4" />
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Pris per enhet</span>
                  <span className="text-foreground font-mono">{estimatedPrice.perUnit} kr</span>
                </div>
              </div>

              <div className="bg-gradient-primary rounded-xl p-6 text-center mb-6">
                <p className="text-sm text-primary-foreground/80 mb-1">Totalt uppskattat pris</p>
                <p className="text-4xl font-bold text-primary-foreground font-mono">
                  {estimatedPrice.total} kr
                </p>
              </div>

              <div className="space-y-3">
                <Button asChild variant="hero" className="w-full">
                  <Link to="/bestall" className="gap-2">
                    Beställ nu
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/kontakt">Få exakt offert</Link>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-6 text-center">
                * Detta är en uppskattning. Det faktiska priset beräknas efter att vi analyserat din fil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
