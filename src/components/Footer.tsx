import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">R</span>
              </div>
              <span className="font-bold text-xl text-foreground">Roos Engineering</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Professionell 3D-printing med hög kvalitet och snabb leverans. Vi hjälper dig med prototyper, reservdelar och specialbeställningar.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigering</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link to="/bestall" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Beställ
                </Link>
              </li>
              <li>
                <Link to="/material" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Material
                </Link>
              </li>
              <li>
                <Link to="/om" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Om oss
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Kontakta oss
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                Emil Roos
              </li>
              <li className="text-sm text-muted-foreground">
                Grundare & Projektledare
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Roos Engineering. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
