"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Venture Capitalist",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "NoNoiseTweets has transformed how I consume Twitter. I now get only the VC insights I need without the endless scroll. Game-changer for staying informed.",
    rating: 5,
    verified: true
  },
  {
    name: "Marcus Johnson",
    role: "Tech Entrepreneur",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    content: "As someone who follows 500+ accounts, this tool is invaluable. The AI filtering is incredibly accurate at surfacing content that actually matters to my work.",
    rating: 5,
    verified: true
  },
  {
    name: "Emily Rodriguez",
    role: "Financial Analyst",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    content: "The daily digest feature saves me hours every week. I get all the market insights I need without the distraction. Absolutely worth it.",
    rating: 5,
    verified: true
  },
  {
    name: "David Park",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "Clean interface, powerful filtering, and actually works as advertised. This is how Twitter should have been built from the start.",
    rating: 5,
    verified: true
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/women/13.jpg",
    content: "I can finally keep up with industry trends without getting overwhelmed. The topic filters are spot-on and save me so much time.",
    rating: 5,
    verified: true
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    content: "The best investment I've made in my productivity this year. No more doom scrolling, just pure signal.",
    rating: 5,
    verified: true
  }
];

export const TestimonialsTailark = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background decoration with brand colors */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-teal/5 to-transparent" />
      </div>

      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4 gap-1 bg-brand-teal/10 text-brand-teal hover:bg-brand-teal/20 border-brand-teal/20 transition-all duration-250">
            <Star className="h-3 w-3 fill-current" />
            Testimonials
          </Badge>
          
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-sleek sm:text-4xl md:text-5xl">
            Loved by professionals
            <span className="block bg-gradient-to-r from-twitter-blue to-brand-teal bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-sleek">
            Join thousands of professionals who&apos;ve reclaimed their time and focus.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="group relative overflow-hidden border-2 border-secondary bg-card/50 backdrop-blur-sm transition-all duration-250 ease-in-out hover:border-brand-teal/30 hover:shadow-lg hover-scale"
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-6">
                {/* Quote icon with brand teal */}
                <div className="mb-4 inline-flex rounded-lg bg-brand-teal/10 p-2">
                  <Quote className="h-5 w-5 text-brand-teal" />
                </div>

                {/* Rating with brand teal */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brand-teal text-brand-teal"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="mb-6 text-muted-foreground leading-relaxed text-sleek">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-brand-teal/10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-sm text-sleek">{testimonial.name}</p>
                      {testimonial.verified && (
                        <svg
                          className="h-4 w-4 text-twitter-blue"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground text-sleek">{testimonial.role}</p>
                  </div>
                </div>

                {/* Decorative gradient with brand teal */}
                <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand-teal/10 to-transparent opacity-0 blur-2xl transition-opacity duration-250 group-hover:opacity-100" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary">1000+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary">50K+</div>
            <div className="text-sm text-muted-foreground">Tweets Filtered Daily</div>
          </div>
        </div>
      </div>
    </section>
  );
};
