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
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        </div>
      </div>

      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4 gap-1 bg-primary/10 text-primary hover:bg-primary/20">
            <Sparkles className="h-3 w-3" />
            Features
          </Badge>
          
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything you need to
            <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              stay informed
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
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
                className="group relative overflow-hidden border-2 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br p-3 ring-4 ring-primary/10 transition-all group-hover:scale-110 group-hover:ring-primary/20"
                    style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                      backgroundImage: `linear-gradient(135deg, rgb(var(--primary) / 0.1), rgb(var(--primary) / 0.05))`
                    }}
                  >
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative gradient */}
                  <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
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
