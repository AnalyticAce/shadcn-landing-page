"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CallToActionTailark = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-primary/20" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />
        </div>
        <div className="absolute left-1/4 top-1/4">
          <div className="h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl animate-pulse-slow animation-delay-1000" />
        </div>
        <div className="absolute right-1/4 bottom-1/4">
          <div className="h-[300px] w-[300px] rounded-full bg-primary/20 blur-3xl animate-pulse-slow animation-delay-2000" />
        </div>
      </div>

      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border-2 border-primary/20 bg-card/50 backdrop-blur-xl">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
          
          <div className="relative px-6 py-16 sm:px-12 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex">
                <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Limited Time Offer</span>
                  </div>
                </div>
              </div>

              {/* Heading */}
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Ready to{" "}
                <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                  reclaim your time?
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground sm:text-xl">
                Join thousands of professionals who&apos;ve transformed their Twitter experience. 
                Start filtering the noise today — completely free.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="group h-14 gap-2 rounded-full px-8 text-lg font-semibold shadow-xl transition-all hover:shadow-2xl hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 gap-2 rounded-full border-2 px-8 text-lg font-semibold backdrop-blur-sm transition-all hover:bg-accent/50"
                >
                  Schedule a Demo
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-primary/10 pt-8 sm:flex-row sm:gap-12">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>No credit card required</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Free for 14 days</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
