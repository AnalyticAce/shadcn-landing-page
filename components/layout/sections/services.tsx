"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap } from "lucide-react";

interface ServiceProps {
  title: string;
  step: number;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Connect your favorite accounts",
    description:
      "Add the influencers, experts, and thought leaders you follow on Twitter. Whether it's finance gurus, tech founders, or political analysts.",
    step: 1,
  },
  {
    title: "Choose your topics",
    description:
      "Select what matters to you — finance, macroeconomics, venture capital, politics, or custom topics. Our AI learns what's relevant.",
    step: 2,
  },
  {
    title: "Get the signal",
    description:
      "Receive filtered tweets in your daily digest or browse them in our distraction-free web app. Skip the scroll, get the insights.",
    step: 3,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative">
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border-primary/20">
            <Zap className="w-3 h-3 mr-1" />
            How It Works
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Three{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-purple-600 bg-clip-text">
              Simple Steps
            </span>
          </h2>
          
          <p className="md:w-1/2 mx-auto text-lg text-muted-foreground">
            Get started in minutes. No complex setup, no learning curve.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-[80%] mx-auto">
          {serviceList.map(({ title, description, step }, index) => (
            <Card
              key={title}
              className="relative overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Step number - large background */}
              <div className="absolute -right-8 -top-8 text-[120px] font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-300">
                {step}
              </div>

              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <Badge
                    className="bg-gradient-to-r from-primary to-primary/80 text-white border-0 shadow-md"
                  >
                    STEP {step}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {title}
                </CardTitle>
                
                <CardDescription className="text-base leading-relaxed">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Connection lines for desktop */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-1 -z-10">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};
