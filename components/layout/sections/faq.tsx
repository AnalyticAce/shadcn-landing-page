"use client";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How does NoNoiseTweets filter tweets?",
    answer: "Our AI uses advanced NLP to understand the context and topic of each tweet. You select your topics of interest, and our algorithm filters out tweets that don't match your preferences, showing you only relevant content.",
    value: "item-1",
  },
  {
    question: "Who is NoNoiseTweets for?",
    answer:
      "NoNoiseTweets is perfect for finance & stock enthusiasts, political observers, startup founders, tech lovers, and anyone who wants to follow thought leaders without the distraction. If you value your time and focus, this is for you.",
    value: "item-2",
  },
  {
    question: "How much does it cost?",
    answer:
      "We're currently in the waitlist phase. Join early to be among the first to experience NoNoiseTweets when we launch. Pricing details will be announced soon.",
    value: "item-3",
  },
  {
    question: "Can I filter multiple topics?",
    answer: "Yes! Multi-topic filters per user is coming soon. You'll be able to track different topics and get organized digests for each.",
    value: "item-4",
  },
  {
    question: "How do I receive my filtered tweets?",
    answer: "You can receive filtered tweets via daily email digest at your chosen time, or browse them anytime in our clean, distraction-free web app.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[800px] py-24 sm:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none rounded-3xl" />
      
      <div className="relative">
        <div className="text-center mb-12 space-y-4">
          <Badge className="bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border-primary/20">
            <HelpCircle className="w-3 h-3 mr-1" />
            FAQ
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-purple-600 bg-clip-text">
              Questions
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Everything you need to know about NoNoiseTweets
          </p>
        </div>

        <Accordion 
          type="single" 
          collapsible 
          className="space-y-4"
        >
          {FAQList.map(({ question, answer, value }, index) => (
            <AccordionItem 
              key={value} 
              value={value}
              className="border-2 rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <AccordionTrigger className="text-left hover:text-primary hover:no-underline py-5 text-base font-semibold">
                {question}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
