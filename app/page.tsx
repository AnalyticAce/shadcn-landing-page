import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";

// Tailark enhanced components
import { HeroTailark } from "@/components/layout/sections/hero-tailark";
import { FeaturesTailark } from "@/components/layout/sections/features-tailark";
import { TestimonialsTailark } from "@/components/layout/sections/testimonials-tailark";
import { PricingTailark } from "@/components/layout/sections/pricing-tailark";
import { FooterTailark } from "@/components/layout/sections/footer-tailark";

export const metadata = {
  title: "NoNoiseTweets - Only the signal. No noise.",
  description: "Stay informed without the distraction. AI-curated tweets, topic filters, distraction-free reading.",
  openGraph: {
    type: "website",
    url: "https://analyticace.github.io/shadcn-landing-page",
    title: "NoNoiseTweets - Only the signal. No noise.",
    description: "Stay informed without the distraction. AI-curated tweets, topic filters, distraction-free reading.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "NoNoiseTweets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://analyticace.github.io/shadcn-landing-page",
    title: "NoNoiseTweets - Only the signal. No noise.",
    description: "Stay informed without the distraction. AI-curated tweets, topic filters, distraction-free reading.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroTailark />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesTailark />
      <TestimonialsTailark />
      <ServicesSection />
      <PricingTailark />
      <FAQSection />
      <FooterTailark />
    </>
  );
}
