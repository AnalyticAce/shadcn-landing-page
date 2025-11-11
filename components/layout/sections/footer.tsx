"use client";

import { Separator } from "@/components/ui/separator";
import { Twitter } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 border-primary/10 rounded-3xl shadow-xl relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
            <div className="col-span-full xl:col-span-2">
              <Link href="#" className="flex font-bold items-center group">
                <div className="relative">
                  <Twitter className="w-9 h-9 mr-2 bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-xl border-2 border-primary/20 p-2 text-white group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md group-hover:blur-lg transition-all" />
                </div>

                <h3 className="text-2xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  NoNoiseTweets
                </h3>
              </Link>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                NoNoiseTweets helps you stay informed without the noise of Twitter.
                AI-curated tweets, topic filters, distraction-free reading — all in one calm experience.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg mb-2">Product</h3>
              <div>
                <Link 
                  href="#features" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Features
                </Link>
              </div>

              <div>
                <Link 
                  href="#benefits" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Benefits
                </Link>
              </div>

              <div>
                <Link 
                  href="#faq" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg mb-2">Use Cases</h3>
              <div>
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Finance & Trading
                </Link>
              </div>

              <div>
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Politics
                </Link>
              </div>

              <div>
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Tech & Startups
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg mb-2">Company</h3>
              <div>
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </div>

              <div>
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>

              <div>
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg mb-2">Contact</h3>
              <div>
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Twitter
                </Link>
              </div>

              <div>
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Email
                </Link>
              </div>

              <div>
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Support
                </Link>
              </div>
            </div>
          </div>

          <Separator className="my-6 bg-primary/10" />
          <section className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 NoNoiseTweets. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
};
