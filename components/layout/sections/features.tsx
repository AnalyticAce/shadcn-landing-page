"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons, Sparkles } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "UserPlus",
    title: "Secure Sign-up",
    description:
      "Quick and secure onboarding process. Connect your account and start filtering tweets in minutes.",
  },
  {
    icon: "Users",
    title: "Add Influencers",
    description:
      "Follow the experts that matter to you. Add usernames of influencers, analysts, and thought leaders.",
  },
  {
    icon: "Filter",
    title: "Custom Topic Filters",
    description:
      "Choose your topics like finance, macroeconomics, or venture capital to get only relevant content.",
  },
  {
    icon: "Sparkles",
    title: "AI Relevance Filter",
    description:
      "Advanced NLP-powered filtering ensures you only see tweets that truly match your interests.",
  },
  {
    icon: "Mail",
    title: "Daily Email Digest",
    description:
      "Receive curated summaries delivered to your inbox at your preferred time each day.",
  },
  {
    icon: "LayoutList",
    title: "Web Timeline View",
    description:
      "Beautiful, distraction-free timeline view to browse filtered tweets in a calm interface.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none rounded-3xl" />
      
      <div className="relative">
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 mr-1" />
            Key Features
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Everything You Need to
            <br />
            <span className="text-transparent bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text">
              Stay Informed
            </span>
          </h2>

          <p className="md:w-2/3 lg:w-1/2 mx-auto text-lg text-muted-foreground">
            Our MVP provides all the essential tools to filter Twitter noise and focus on what matters.
            More features are coming soon.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map(({ icon, title, description }, index) => (
            <div 
              key={title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                <CardHeader className="flex justify-center items-center pb-4">
                  <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 p-4 rounded-2xl ring-8 ring-primary/5 mb-4 group-hover:ring-primary/10 group-hover:scale-110 transition-all duration-300">
                    <Icon
                      name={icon as keyof typeof icons}
                      size={28}
                      color="hsl(var(--primary))"
                      className="text-primary"
                    />
                  </div>

                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground text-center leading-relaxed">
                  {description}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
