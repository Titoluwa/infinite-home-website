'use client'

import { ArrowRight, ChevronRight } from 'lucide-react'
import HeroSection from '@/components/hero-section'
import { Button } from '@/components/ui/button'
import { servicesList, coreValues } from '@/lib/constant'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-background">
        {/* <div className="flex justify-center mb-12 w-full">
          <Image src="/images/healthcare-2.jpg" alt="Infinite Home Health Care" width={50} height={50} className="object-cover" />
        </div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Infinite Home Health Care
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto">
              <span className="w-12 h-1 bg-primary rounded-full mx-auto"></span>
            </div>
          </div>
          <div className="prose prose-lg max-w-none text-center mb-12 md:w-4/6 w-full mx-auto">
            <p className="text-muted-foreground leading-relaxed ">
              Infinite Home Health Care provides compassionate and dependable home care services for families and caregivers
              seeking a safe, welcoming, and nurturing environment for their loved ones. Our services are designed to promote dignity, independence, and peace of mind.
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* display only the first 3 values */}
            {coreValues.slice(0, 3).map((value, index) => (
              <div key={index + "values"} className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="/about">
              <Button className="bg-primary hover:bg-primary/90">Learn More <ArrowRight className='animate-pulse' /></Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service, index) => (
              <div key={index + "services"} className="bg-white rounded-lg p-8 border border-border hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex + "services"} className="flex items-start gap-3">
                      <span className={`text-${service.color} font-bold mt-1`}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-1 flex justify-end">
                  <a href="/services">
                    <Button size="sm" variant="outline" className={`text-${service.color} border-${service.color} hover:bg-${service.color}/90 hover:text-white`}>More <ChevronRight className='animate-pulse' /> </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-b from-background to-[#E6DBCD] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you find the perfect care solution for your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:7207032196">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Call Us Now
              </Button>
            </a>
            {/* <a href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </a> */}
          </div>
        </div>
      </section>
    </div>
  )
}
