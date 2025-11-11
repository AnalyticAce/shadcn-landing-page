"use client";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons, Users } from "lucide-react";

interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "TrendingUp",
    name: "Finance & Trading",
  },
  {
    icon: "Landmark",
    name: "Politics",
  },
  {
    icon: "Rocket",
    name: "Tech & Startups",
  },
  {
    icon: "LineChart",
    name: "Macroeconomics",
  },
  {
    icon: "Briefcase",
    name: "Venture Capital",
  },
  {
    icon: "Users",
    name: "Founders",
  },
  {
    icon: "Target",
    name: "Analysts",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="container pb-24 sm:pb-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative space-y-8">
        <div className="text-center space-y-4">
          <Badge className="bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border-primary/20">
            <Users className="w-3 h-3 mr-1" />
            Perfect For
          </Badge>
          
          <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground">
            Built for{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-purple-600 bg-clip-text">
              Focused Professionals
            </span>
          </h2>
        </div>

        <div className="mx-auto">
          <Marquee
            className="gap-[3rem] py-8"
            fade
            innerClassName="gap-[3rem]"
            pauseOnHover
          >
            {sponsors.map(({ icon, name }) => (
              <div
                key={name}
                className="flex items-center gap-3 text-lg md:text-xl font-semibold px-6 py-4 rounded-full bg-card/50 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Icon
                  name={icon as keyof typeof icons}
                  size={28}
                  color="hsl(var(--primary))"
                  className="text-primary"
                />
                <span className="text-foreground/80">{name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
