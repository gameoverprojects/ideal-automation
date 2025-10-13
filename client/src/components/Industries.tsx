import { Card } from "@/components/ui/card";
import { ShoppingCart, Laptop, Heart } from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    description: "Automate customer support, order tracking, and product recommendations for online stores.",
    features: [
      "24/7 order status updates",
      "Automated product recommendations",
      "Returns and refunds handling",
      "Live chat automation"
    ],
    color: "text-primary",
  },
  {
    icon: Laptop,
    name: "SaaS Companies",
    description: "Reduce support tickets and onboard users faster with AI-powered automation.",
    features: [
      "Automated user onboarding",
      "Technical support automation",
      "Feature usage guidance",
      "Billing inquiries handling"
    ],
    color: "text-chart-2",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "Streamline appointment scheduling and patient inquiries while maintaining compliance.",
    features: [
      "Appointment scheduling automation",
      "Patient inquiry responses",
      "Prescription refill requests",
      "HIPAA-compliant AI solutions"
    ],
    color: "text-chart-3",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored AI automation solutions for your specific industry needs and compliance requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-transform duration-300"
              data-testid={`card-industry-${index}`}
            >
              <div className={`w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mb-6`}>
                <industry.icon className={`w-8 h-8 ${industry.color}`} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {industry.name}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {industry.description}
              </p>
              <ul className="space-y-3">
                {industry.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
