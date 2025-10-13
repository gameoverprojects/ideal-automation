import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">Mr Idealhhat</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('industries')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-industries"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-results"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              data-testid="mobile-link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('industries')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              data-testid="mobile-link-industries"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              data-testid="mobile-link-results"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              data-testid="mobile-link-contact"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full"
              data-testid="mobile-button-get-started"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
