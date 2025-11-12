"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export const HeroTailark = () => {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32">
      {/* Dark elegant background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-twitter-blue/5 via-background to-brand-teal/5">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </div>
      
      {/* Calm radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-twitter-blue/10 via-transparent to-transparent" />

      <div className="container relative">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge with brand teal accent */}
          <div className="mb-8 inline-flex animate-fade-in">
            <Badge 
              variant="outline" 
              className="gap-2 rounded-full border-brand-teal/20 bg-brand-teal/5 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-250 ease-in-out hover:bg-brand-teal/10 hover-scale"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-teal opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal"></span>
              </span>
              AI-Powered Twitter Filtering
            </Badge>
          </div>

          {/* Main heading with sleek typography */}
          <h1 className="mb-6 animate-fade-in-up text-4xl font-semibold tracking-tight text-sleek sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">Only the</span>
            <span className="bg-gradient-to-r from-twitter-blue via-brand-teal to-twitter-blue bg-clip-text text-transparent animate-gradient">
              Signal
            </span>
            <span className="block">No Noise</span>
          </h1>

          {/* Description with proper contrast */}
          <p className="mx-auto mb-8 max-w-2xl animate-fade-in-up text-lg text-muted-foreground animation-delay-100 sm:text-xl text-sleek">
            Transform your Twitter experience with AI-powered curation. 
            Get only the insights that matter, delivered distraction-free.
          </p>

          {/* CTA Buttons with updated styles */}
          <div className="flex flex-col items-center justify-center gap-4 animate-fade-in-up animation-delay-200 sm:flex-row">
            <Button 
              size="lg"
              className="group h-12 gap-2 rounded-full bg-twitter-blue px-8 text-base font-semibold shadow-lg transition-all duration-250 ease-in-out hover:shadow-xl hover-scale hover-glow"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="group h-12 gap-2 rounded-full border-2 border-twitter-blue/50 px-8 text-base font-semibold backdrop-blur-sm transition-all duration-250 ease-in-out hover:bg-twitter-blue/10 hover:border-twitter-blue"
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
                    className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-twitter-blue/20 to-brand-teal/20"
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
                    className="h-5 w-5 fill-brand-teal text-brand-teal"
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
