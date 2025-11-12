"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Filter, 
  Mail, 
  Sparkles, 
  Target, 
  Zap 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Filtering",
    description: "Advanced machine learning algorithms analyze and filter tweets based on your interests and preferences.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Smart Topic Selection",
    description: "Choose from curated topics or create custom filters to match your unique information needs.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Filter,
    title: "Noise Reduction",
    description: "Automatically filter out spam, ads, and irrelevant content to focus on what truly matters.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Mail,
    title: "Daily Digest",
    description: "Receive personalized email summaries of the most important tweets at your preferred time.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Stay current with instant notifications for critical updates from your selected sources.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Sparkles,
    title: "Clean Interface",
    description: "Enjoy a beautiful, distraction-free reading experience designed for focus and productivity.",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export const FeaturesTailark = () => {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background decoration with brand colors */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/5 to-transparent" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-twitter-blue/10 blur-3xl" />
        </div>
      </div>

      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4 gap-1 bg-brand-teal/10 text-brand-teal hover:bg-brand-teal/20 border-brand-teal/20 transition-all duration-250">
            <Sparkles className="h-3 w-3" />
            Features
          </Badge>
          
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-sleek sm:text-4xl md:text-5xl">
            Everything you need to
            <span className="block bg-gradient-to-r from-twitter-blue to-brand-teal bg-clip-text text-transparent">
              stay informed
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-sleek">
            Powerful features designed to help you cut through the noise and focus on what matters most.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-2 border-secondary bg-card/50 backdrop-blur-sm transition-all duration-250 ease-in-out hover:border-brand-teal/50 hover:shadow-lg hover:shadow-brand-teal/10 hover-scale"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-6">
                  {/* Icon with brand colors */}
                  <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-twitter-blue/10 to-brand-teal/10 p-3 ring-4 ring-brand-teal/10 transition-all duration-250 group-hover:scale-110 group-hover:ring-brand-teal/20">
                    <Icon className="h-6 w-6 text-brand-teal" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-xl font-semibold transition-colors duration-250 group-hover:text-brand-teal text-sleek">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sleek">
                    {feature.description}
                  </p>

                  {/* Decorative gradient with brand teal */}
                  <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-brand-teal/10 to-transparent opacity-0 blur-2xl transition-opacity duration-250 group-hover:opacity-100" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            And much more coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};
