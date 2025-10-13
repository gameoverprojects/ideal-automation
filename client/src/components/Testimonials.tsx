import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Mr Idealhhat's AI automation reduced our call center costs by 75% in just 3 months. The ROI was incredible, and our customer satisfaction actually improved.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "ShopifyPlus Store",
    rating: 5,
  },
  {
    quote: "The AI chatbot handles 90% of our support tickets automatically. Our team now focuses on complex issues while routine queries are resolved instantly.",
    author: "Michael Chen",
    role: "Head of Operations",
    company: "HealthTech Solutions",
    rating: 5,
  },
  {
    quote: "Implementation was seamless and the results were immediate. We're saving 20 hours per week on customer support and our response times are 10x faster.",
    author: "Emily Rodriguez",
    role: "Customer Success Director",
    company: "CloudSaaS Inc",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            See how businesses are transforming their operations with our AI automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
