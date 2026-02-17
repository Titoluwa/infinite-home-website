import { ArrowRight, ChevronRight, Heart, Sparkles, Check, AlarmClockCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import { coreValues, servicesList } from "@/lib/constant";
import { FaUserMd } from "react-icons/fa";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="w-full py-24 bg-background relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Who We Are</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              About <span className="text-primary">Infinite</span> Home Health Care
            </h2>

            <div className="flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-20">
            <p className="text-xl text-muted-foreground leading-relaxed text-center">
              Infinite Home Health Care provides <span className="text-primary font-semibold">compassionate and dependable</span> home care services for families and caregivers
              seeking a safe, welcoming, and nurturing environment for their loved ones. Our services are designed to promote <span className="text-primary font-semibold">dignity, independence, and peace of mind</span>.
            </p>
          </div>

          {/* Values Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {coreValues.slice(0, 3).map((value, index) => (
              <div 
                key={index + "values"} 
                className="group relative"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                {/* Card */}
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-10 border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col hover:shadow-2xl">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <div className="text-center">
            <a href="/about">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold group transition-all duration-300 px-8"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mr-48 -mb-48 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">What We Offer</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Our <span className="text-primary">Services</span>
            </h2>

            <div className="flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive home care services designed to support your loved ones
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {servicesList.map((service, index) => (
              <div 
                key={index + "services"} 
                className="group relative"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                {/* Card */}
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-10 border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col hover:shadow-2xl">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <div className="h-0.5 w-12 bg-secondary rounded-full"></div>
                  </div>

                  {/* Services List */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex + "services"} 
                        className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link */}
                  <a href="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group/link">
                    Explore More
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Services CTA */}
          <div className="text-center">
            <a href="/services">
              <Button  size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold group transition-all duration-300 px-8">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section  */}
      <section className="w-full py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Infinite</span>
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUserMd className="size-10 text-primary" />,
                title: "Expert Care",
                description: "Licensed professionals dedicated to providing exceptional, compassionate care tailored to each patient's needs."
              },
              {
                icon: <Heart className="size-10 fill-primary/80 text-primary"/>,
                title: "Compassionate Service",
                description: "We treat every patient like family, providing dignified, respectful care that promotes independence and well-being."
              },
              {
                icon: <AlarmClockCheck className="size-10 text-primary" />,
                title: "24/7 Support",
                description: "Available around the clock with responsive support and emergency services whenever you need us."
              }
            ].map((benefit, index) => (
              <div 
                key={index + benefit.title}
                className="bg-white dark:bg-slate-900 rounded-2xl p-10 border border-border text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-gradient-to-r from-primary/90 to-primary relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact us today for a free consultation and let us help you find the perfect care solution for your loved one. We're here to support you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:7207032196">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 group transition-all duration-300"
              >
                <span>Call Now: (720) 703-2196</span>
              </Button>
            </a>
            <a href="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 hover:text-white font-semibold px-8 group transition-all duration-300 bg-transparent"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-12 border-t border-white/20 flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-white/90">Licensed Professionals</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-white/90">24/7 Available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="text-white/90">1000+ Happy Patients</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}