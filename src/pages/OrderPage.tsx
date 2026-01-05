import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, FileType, CheckCircle, Hash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const generateQuoteNumber = () => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `RE-${timestamp}-${random}`;
};

const materials = [
  { value: "pla", label: "PLA", description: "Miljövänligt, enkelt att printa" },
  { value: "petg", label: "PETG", description: "Stark, flexibel, värmetålig" },
  { value: "abs", label: "ABS", description: "Hållbar, värmetålig" },
];

const colors = [
  { value: "svart", label: "Svart" },
  { value: "vit", label: "Vit" },
  { value: "gra", label: "Grå" },
  { value: "rod", label: "Röd" },
  { value: "bla", label: "Blå" },
  { value: "gron", label: "Grön" },
  { value: "gul", label: "Gul" },
  { value: "orange", label: "Orange" },
];

export default function OrderPage() {
  const { toast } = useToast();
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState("");
  const [fileName, setFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteNumber, setQuoteNumber] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      const newQuoteNumber = generateQuoteNumber();
      setQuoteNumber(newQuoteNumber);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Förfrågan skickad!",
      description: `Din offertförfrågan ${quoteNumber} har mottagits. Vi återkommer inom 24 timmar.`,
    });
    
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Beställ <span className="text-gradient">3D-utskrift</span>
          </h1>
          <p className="text-muted-foreground">
            Fyll i formuläret nedan för att få en offert på din 3D-utskrift. Vi återkommer inom 24 timmar.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Material & Color */}
            <div className="bg-gradient-card rounded-2xl border border-border p-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">1</span>
                Välj material och färg
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="material">Material</Label>
                  <Select value={material} onValueChange={setMaterial}>
                    <SelectTrigger className="h-12 bg-secondary border-border">
                      <SelectValue placeholder="Välj material" />
                    </SelectTrigger>
                    <SelectContent>
                      {materials.map((mat) => (
                        <SelectItem key={mat.value} value={mat.value}>
                          <div className="flex flex-col">
                            <span className="font-medium">{mat.label}</span>
                            <span className="text-xs text-muted-foreground">{mat.description}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="color">Färg</Label>
                  <Select value={color} onValueChange={setColor}>
                    <SelectTrigger className="h-12 bg-secondary border-border">
                      <SelectValue placeholder="Välj färg" />
                    </SelectTrigger>
                    <SelectContent>
                      {colors.map((col) => (
                        <SelectItem key={col.value} value={col.value}>
                          {col.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* File Upload */}
            <div className="bg-gradient-card rounded-2xl border border-border p-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">2</span>
                Ladda upp din fil
              </h2>

              <div className="relative">
                <input
                  type="file"
                  accept=".stl,.step,.stp"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                  fileName ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                }`}>
                  {fileName ? (
                    <div className="flex flex-col items-center gap-3">
                      <CheckCircle className="w-12 h-12 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{fileName}</p>
                        <p className="text-sm text-muted-foreground">Fil uppladdad</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center">
                        <Upload className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Klicka för att ladda upp</p>
                        <p className="text-sm text-muted-foreground">STL eller STEP-filer (max 50MB)</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quote Number Display */}
                {quoteNumber && (
                  <div className="mt-4 flex items-center gap-3 p-4 bg-primary/10 border border-primary/30 rounded-xl animate-fade-in">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Hash className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Ditt offertnummer</p>
                      <p className="font-mono font-bold text-primary text-lg">{quoteNumber}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-card rounded-2xl border border-border p-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">3</span>
                Kontaktuppgifter
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Namn</Label>
                    <Input 
                      id="name" 
                      placeholder="Ditt namn" 
                      className="h-12 bg-secondary border-border"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-post</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="din@email.se" 
                      className="h-12 bg-secondary border-border"
                      required 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+46 70 123 45 67" 
                      className="h-12 bg-secondary border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Adress</Label>
                    <Input 
                      id="address" 
                      placeholder="Gata, postnummer, ort" 
                      className="h-12 bg-secondary border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments">Specifikationer / Kommentarer</Label>
                  <Textarea 
                    id="comments" 
                    placeholder="Beskriv ditt projekt, speciella önskemål eller frågor..."
                    className="min-h-[120px] bg-secondary border-border resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Skickar..." : "Be om offert"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
