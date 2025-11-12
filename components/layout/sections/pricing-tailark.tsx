"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for trying out NoNoiseTweets",
    features: [
      "Up to 5 influencers",
      "2 topic filters",
      "Daily email digest",
      "Basic AI filtering",
      "Web timeline view",
      "Community support"
    ],
    popular: false,
    cta: "Start Free"
  },
  {
    name: "Professional",
    price: "19",
    description: "Best for individuals and power users",
    features: [
      "Unlimited influencers",
      "Unlimited topic filters",
      "Custom digest schedule",
      "Advanced AI filtering",
      "Priority notifications",
      "Analytics dashboard",
      "API access",
      "Priority support"
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and organizations",
    features: [
      "Everything in Professional",
      "Team collaboration",
      "Custom integrations",
      "Advanced analytics",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom AI training",
      "White-label options"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

export const PricingTailark = () => {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background decoration with brand colors */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-twitter-blue/5 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-brand-teal/10 blur-3xl" />
        </div>
      </div>

      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4 gap-1 bg-brand-teal/10 text-brand-teal hover:bg-brand-teal/20 border-brand-teal/20 transition-all duration-250">
            <Sparkles className="h-3 w-3" />
            Pricing
          </Badge>
          
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-sleek sm:text-4xl md:text-5xl">
            Simple, transparent
            <span className="block bg-gradient-to-r from-twitter-blue to-brand-teal bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-sleek">
            Choose the perfect plan for your needs. Always know what you&apos;ll pay.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden border-2 bg-card/50 backdrop-blur-sm transition-all duration-250 ease-in-out ${
                plan.popular
                  ? "border-twitter-blue shadow-xl shadow-twitter-blue/20 lg:scale-105 hover-scale"
                  : "border-secondary hover:border-brand-teal/30 hover-scale"
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
            >
              {plan.popular && (
                <div className="absolute right-0 top-0 -mr-1 -mt-1">
                  <div className="rounded-bl-lg rounded-tr-lg bg-gradient-to-r from-twitter-blue to-brand-teal px-3 py-1">
                    <span className="text-xs font-semibold text-white">POPULAR</span>
                  </div>
                </div>
              )}

              <CardHeader className="pb-8 pt-6">
                <div className="mb-2 text-sm font-medium text-muted-foreground text-sleek">
                  {plan.name}
                </div>
                <div className="mb-2 flex items-baseline gap-2">
                  {plan.price === "Custom" ? (
                    <span className="text-4xl font-semibold text-sleek">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-semibold text-sleek">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground text-sleek">{plan.description}</p>
              </CardHeader>

              <CardContent className="pb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-brand-teal/10 p-1">
                        <Check className="h-4 w-4 text-brand-teal" />
                      </div>
                      <span className="text-sm text-sleek">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full transition-all duration-250 ease-in-out ${
                    plan.popular
                      ? "bg-gradient-to-r from-twitter-blue to-brand-teal hover:shadow-lg hover:shadow-twitter-blue/30 hover-scale"
                      : "hover:bg-twitter-blue/10 hover:border-twitter-blue"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Have questions?{" "}
            <a href="#faq" className="font-medium text-primary hover:underline">
              Check our FAQ
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
