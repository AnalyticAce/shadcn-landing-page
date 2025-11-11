"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Ban",
    title: "No more doomscrolling",
    description:
      "Get insights without opening X. Receive curated updates that matter to you without falling into the endless scroll.",
  },
  {
    icon: "Brain",
    title: "AI-powered filters",
    description:
      "Powered by NLP to detect what's truly relevant. Our AI understands context and filters out the noise automatically.",
  },
  {
    icon: "Mail",
    title: "Daily digest emails",
    description:
      "Clean summaries at your chosen time. Stay informed on your schedule without constant notifications.",
  },
  {
    icon: "Globe",
    title: "Distraction-free web app",
    description:
      "Simple, fast, and calm interface. Focus on the signal that drives smarter thinking and better decisions.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32 relative">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24 gap-12">
        <div className="space-y-6">
          <Badge className="bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border-primary/20">
            Why NoNoiseTweets
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Your Time and Focus
            <br />
            <span className="text-transparent bg-gradient-to-r from-primary to-purple-600 bg-clip-text">
              Deserve Better
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Whether you&apos;re a trader, analyst, or founder — NoNoiseTweets helps you stay informed 
            without the distraction. We believe information should empower, not exhaust.
          </p>

          {/* Decorative element */}
          <div className="hidden lg:block relative h-24">
            <div className="absolute left-0 top-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute left-20 top-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="relative overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative">
                <div className="flex justify-between items-start">
                  <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      name={icon as keyof typeof icons}
                      size={24}
                      color="hsl(var(--primary))"
                      className="text-primary"
                    />
                  </div>
                  <span className="text-6xl font-bold text-muted-foreground/10 group-hover:text-muted-foreground/20 transition-colors duration-300">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle className="mt-4 group-hover:text-primary transition-colors">
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative text-muted-foreground leading-relaxed">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
