import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Meddelande skickat!",
      description: "Vi återkommer så snart som möjligt.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Kontakta</span> oss
          </h1>
          <p className="text-muted-foreground text-lg">
            Har du frågor eller behöver hjälp? Skicka ett meddelande så återkommer vi så snart vi kan.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gradient-card rounded-2xl border border-border p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Vårt team</h3>
                <div className="text-muted-foreground">
                  <p className="font-medium text-foreground">Emil Roos</p>
                  <p className="text-sm">Grundare & Projektledare</p>
                </div>
              </div>

              <div className="bg-gradient-card rounded-2xl border border-border p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">E-post</h3>
                <p className="text-muted-foreground text-sm">
                  Använd formuläret för att kontakta oss direkt.
                </p>
              </div>

              <div className="bg-gradient-card rounded-2xl border border-border p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Svarstid</h3>
                <p className="text-muted-foreground text-sm">
                  Vi svarar vanligtvis inom 24 timmar på vardagar.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-card rounded-2xl border border-border p-8">
                <h2 className="text-xl font-semibold mb-6">Skicka ett meddelande</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div className="space-y-2">
                    <Label htmlFor="subject">Ämne</Label>
                    <Input 
                      id="subject" 
                      placeholder="Vad gäller det?" 
                      className="h-12 bg-secondary border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Meddelande</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Skriv ditt meddelande här..."
                      className="min-h-[180px] bg-secondary border-border resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Skickar..." : "Skicka meddelande"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
