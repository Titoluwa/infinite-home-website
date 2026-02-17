import Image from "next/image";
import { Button } from "./ui/button";
import { Phone, Mail, Check } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            {/* <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full w-fit">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Professional Care Services</span>
            </div> */}

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Professional Home<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Care You Can Trust
                </span>
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Compassionate in-home healthcare services designed to help seniors and individuals with special needs maintain independence and dignity.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium text-foreground">Licensed Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium text-foreground">24/7 Available</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="tel:7207032196" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold group transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Call: (720) 703-2196
                </Button>
              </a>
              <a href="mailto:infinitehealthcare21@gmail.com" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-2 border-primary text-primary hover:bg-primary/5 font-semibold group transition-all duration-300"
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Decorative shapes */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
              <Image 
                src="/images/health-1.jpg" 
                alt="Home healthcare professional" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-border z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">1000+</p>
                  <p className="text-sm text-muted-foreground">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}