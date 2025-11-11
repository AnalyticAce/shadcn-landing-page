"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceProps {
  title: string;
  step: number;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Connect your favorite accounts",
    description:
      "Add the influencers, experts, and thought leaders you follow on Twitter. Whether it's finance gurus, tech founders, or political analysts.",
    step: 1,
  },
  {
    title: "Choose your topics",
    description:
      "Select what matters to you — finance, macroeconomics, venture capital, politics, or custom topics. Our AI learns what's relevant.",
    step: 2,
  },
  {
    title: "Get the signal",
    description:
      "Receive filtered tweets in your daily digest or browse them in our distraction-free web app. Skip the scroll, get the insights.",
    step: 3,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        How It Works
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Three Simple Steps
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Get started in minutes. No complex setup, no learning curve.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-[70%] mx-auto">
        {serviceList.map(({ title, description, step }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="text-md mt-2">
                {description}
              </CardDescription>
            </CardHeader>
            <Badge
              variant="secondary"
              className="absolute -top-2 -right-3"
            >
              STEP {step}
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
