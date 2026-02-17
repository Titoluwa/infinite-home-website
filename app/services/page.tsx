import { servicesDetails } from "@/lib/constant";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { TbTargetArrow } from "react-icons/tb";
import { FaHospitalUser } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services-detail" className="w-full">
      {/* Hero Section */}
      <div className="relative w-full py-20 bg-gradient-to-r from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Check className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Comprehensive Care Solutions</span>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of services designed to support independence, well-being, 
            and community connection for you and your loved ones.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesDetails.map((service, index) => (
              <div 
                key={index + service.title}
                className="group relative"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                {/* Card */}
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-border hover:border-primary/30 overflow-hidden transition-all duration-300 h-full flex flex-col hover:shadow-2xl">
                  {/* Image Container */}
                  <div className="relative w-full h-72 overflow-hidden bg-gray-200 dark:bg-slate-800">
                    <Image 
                      src={service.image} 
                      alt={service.alt} 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Container */}
                  <div className="p-10 flex-1 flex flex-col">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <div className="h-0.5 w-12 bg-primary rounded-full"></div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    {/* Features Section */}
                    <div className="mb-8 flex-1">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        What We Offer
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li 
                            key={idx + feature}
                            className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors"
                          >
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    {/* <Link 
                      href="/contact"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services Info */}
      <div className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Personalized Care Plans",
                description: "Each patient receives a customized care plan tailored to their unique needs and health goals.",
                icon: <TbTargetArrow className="w-12 h-12 text-primary" />
              },
              {
                title: "Licensed Professionals",
                description: "Our team consists of trained, certified healthcare professionals committed to excellence.",
                icon: <FaHospitalUser className="w-10 h-10 text-primary" />
              },
              {
                title: "Flexible Scheduling",
                description: "We offer flexible scheduling options to accommodate your lifestyle and preferences.",
                icon: <FaCalendarDay className="w-10 h-10 text-primary" />
              }
            ].map((item, index) => (
                <div  key={index + item.title} className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-border text-center hover:shadow-lg transition-all duration-300 group">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                        {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                    </p>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary/90 to-primary p-12 md:p-16 text-center">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>

              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Interested in any of our services? We're here to help. Contact us today to discuss your care needs 
                and find the perfect solution for you or your loved one.
              </p>

              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-all duration-300 group"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}