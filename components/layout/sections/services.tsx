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
      {/* Background decoration with brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-twitter-blue/5 to-transparent pointer-events-none" />
      
      <div className="relative">
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-gradient-to-r from-brand-teal/20 to-twitter-blue/20 text-brand-teal border-brand-teal/30 font-semibold transition-all duration-250">
            <Zap className="w-3 h-3 mr-1" />
            How It Works
          </Badge>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Three{" "}
            <span className="text-transparent bg-gradient-to-r from-twitter-blue to-brand-teal bg-clip-text">
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
              className="relative overflow-hidden bg-card backdrop-blur-sm border-2 border-secondary hover:border-brand-teal/50 hover:shadow-xl hover:shadow-brand-teal/10 transition-all duration-250 ease-in-out group animate-fade-in-up hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay with brand colors */}
              <div className="absolute inset-0 bg-gradient-to-br from-twitter-blue/0 to-brand-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
              
              {/* Step number - large background */}
              <div className="absolute -right-8 -top-8 text-[120px] font-bold text-brand-teal/5 group-hover:text-brand-teal/10 transition-colors duration-250">
                {step}
              </div>

              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <Badge
                    className="bg-gradient-to-r from-twitter-blue to-brand-teal text-white border-0 shadow-md"
                  >
                    STEP {step}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl mb-3 group-hover:text-brand-teal transition-colors duration-250 text-sleek">
                  {title}
                </CardTitle>
                
                <CardDescription className="text-base leading-relaxed text-sleek">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Connection lines for desktop with brand color */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-1 -z-10">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};
