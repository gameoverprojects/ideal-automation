import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Trusted by 500+ Businesses</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Reduce Call Center Costs by{" "}
              <span className="text-primary">70%</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Transform your business with AI automation. Save time, reduce costs, and enhance customer satisfaction with our intelligent automation solutions for e-commerce, SaaS, and healthcare.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                data-testid="button-hero-start"
              >
                Start Saving Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('results')}
                data-testid="button-hero-case-studies"
              >
                View Case Studies
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary font-mono">70%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-mono">24/7</div>
                <div className="text-sm text-muted-foreground">AI Availability</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-mono">10x</div>
                <div className="text-sm text-muted-foreground">Faster Response</div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 p-8">
              <div className="h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-md bg-card border border-card-border">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm">AI</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">How can I help you today?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-md bg-card/50 border border-card-border ml-8">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground">Track my order #12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-md bg-card border border-card-border">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm">AI</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">Your order is out for delivery and will arrive by 3 PM today.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
