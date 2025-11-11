import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

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
    icon: "Layout",
    title: "Web Timeline View",
    description:
      "Beautiful, distraction-free timeline view to browse filtered tweets in a calm interface.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Key Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Everything You Need to Stay Informed
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Our MVP provides all the essential tools to filter Twitter noise and focus on what matters.
        More features are coming soon.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
