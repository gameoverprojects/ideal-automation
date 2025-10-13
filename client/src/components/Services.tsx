import { Card } from "@/components/ui/card";
import { Bot, Workflow, MessageSquare, Phone, Zap, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent chatbots that handle customer inquiries 24/7, reducing the need for human agents by up to 80%.",
    color: "text-primary",
  },
  {
    icon: Phone,
    title: "Call Automation",
    description: "Automate routine calls and inquiries with AI voice assistants that understand natural language and provide instant responses.",
    color: "text-chart-2",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline business processes with intelligent automation that connects your tools and eliminates manual tasks.",
    color: "text-chart-3",
  },
  {
    icon: MessageSquare,
    title: "Customer Service AI",
    description: "AI-powered customer service that provides personalized support across all channels, improving satisfaction scores.",
    color: "text-chart-4",
  },
  {
    icon: Zap,
    title: "Integration Services",
    description: "Seamlessly integrate AI automation with your existing CRM, helpdesk, and business tools for unified operations.",
    color: "text-chart-5",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Gain actionable insights from AI-powered analytics to optimize operations and improve customer experiences.",
    color: "text-primary",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Automation Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI automation solutions designed to reduce costs, save time, and transform your customer service operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-transform duration-300"
              data-testid={`card-service-${index}`}
            >
              <div className={`w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
