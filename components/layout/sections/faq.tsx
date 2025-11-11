"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQ
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
