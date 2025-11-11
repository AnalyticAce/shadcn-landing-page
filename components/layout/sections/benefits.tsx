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
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Why NoNoiseTweets</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Time and Focus Deserve Better
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you&apos;re a trader, analyst, or founder — NoNoiseTweets helps you stay informed 
            without the distraction. We believe information should empower, not exhaust.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
