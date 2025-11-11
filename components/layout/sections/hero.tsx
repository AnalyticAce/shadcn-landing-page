"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container relative">
        <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
          <div className="text-center space-y-8">
            {/* Updated Badge with animation */}
            <div className="animate-fade-in-up">
              <Badge 
                variant="outline" 
                className="text-sm py-2 px-4 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 backdrop-blur-sm"
              >
                <span className="mr-2">
                  <Badge className="bg-gradient-to-r from-[#1DA1F2] to-primary border-0">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered
                  </Badge>
                </span>
                <span className="text-foreground/80">Stay informed without the noise</span>
              </Badge>
            </div>

            {/* Enhanced Heading with better gradients */}
            <div className="max-w-screen-md mx-auto text-center space-y-6 animate-fade-in-up animation-delay-100">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="inline-block mb-2">🕊️</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-[#1DA1F2] via-primary to-purple-600 bg-clip-text animate-gradient">
                  NoNoiseTweets
                </span>
              </h1>
              <p className="text-2xl md:text-4xl font-semibold text-foreground/90">
                Only the signal.{" "}
                <span className="text-transparent bg-gradient-to-r from-primary to-purple-600 bg-clip-text">
                  No noise.
                </span>
              </p>
            </div>

            {/* Enhanced Description */}
            <p className="max-w-screen-sm mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-200">
              {`Twitter (X) is a goldmine of insights — but also a minefield of distractions.
              NoNoiseTweets filters the noise so you only get the updates that matter.`}
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
              <Button 
                size="lg"
                className="w-full sm:w-auto font-semibold group/arrow bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all"
              >
                Join the Waitlist
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-semibold border-2 hover:bg-accent/50 backdrop-blur-sm"
              >
                <Link href="#features">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative group mt-14 w-full animate-fade-in-up animation-delay-400">
            {/* Enhanced glow effects */}
            <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-gradient-to-r from-primary/30 via-purple-500/30 to-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[70%] h-32 bg-primary/20 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <Image
                width={1200}
                height={1200}
                className="w-full md:w-[1200px] mx-auto rounded-xl relative border-2 border-primary/20 shadow-2xl group-hover:border-primary/30 transition-all duration-300"
                src={
                  theme === "light"
                    ? "/hero-image-light.jpeg"
                    : "/hero-image-dark.jpeg"
                }
                alt="NoNoiseTweets Dashboard"
                priority
              />

              {/* Enhanced gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 bg-gradient-to-b from-background/0 via-background/80 to-background rounded-xl"></div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
