"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export const HeroTailark = () => {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      <div className="container relative">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex animate-fade-in">
            <Badge 
              variant="outline" 
              className="gap-2 rounded-full border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all hover:bg-primary/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              AI-Powered Twitter Filtering
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 animate-fade-in-up text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">Only the</span>
            <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent animate-gradient">
              Signal
            </span>
            <span className="block">No Noise</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-2xl animate-fade-in-up text-lg text-muted-foreground animation-delay-100 sm:text-xl">
            Transform your Twitter experience with AI-powered curation. 
            Get only the insights that matter, delivered distraction-free.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 animate-fade-in-up animation-delay-200 sm:flex-row">
            <Button 
              size="lg"
              className="group h-12 gap-2 rounded-full px-8 text-base font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="group h-12 gap-2 rounded-full border-2 px-8 text-base font-semibold backdrop-blur-sm transition-all hover:bg-accent/50"
              asChild
            >
              <Link href="#demo">
                <Play className="h-4 w-4" />
                Watch Demo
              </Link>
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex flex-col items-center justify-center gap-6 animate-fade-in-up animation-delay-300 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary/20 to-purple-500/20"
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">1000+</span> early users
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
