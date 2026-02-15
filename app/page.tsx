'use client'

import { Heart, Users, Shield } from 'lucide-react'
import HeroSection from '@/components/hero-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Infinite Home Healthcare
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="prose prose-lg max-w-none text-center mb-12">
            <p className="text-muted-foreground leading-relaxed">
              At Infinite Home Healthcare, we believe that everyone deserves access to quality, compassionate care. Our mission is to provide professional in-home healthcare services that enable our clients to live with dignity, independence, and peace of mind. We understand the unique challenges families face when managing the healthcare needs of their loved ones, and we're here to support you every step of the way.
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Compassionate Care</h3>
              <p className="text-muted-foreground">
                We treat every client with the care and dignity they deserve, understanding that healthcare is deeply personal.
              </p>
            </div>
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Professional Team</h3>
              <p className="text-muted-foreground">
                Our trained and certified caregivers are committed to providing the highest standard of professional care.
              </p>
            </div>
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Trust & Safety</h3>
              <p className="text-muted-foreground">
                Your safety and security are our top priorities. We maintain the highest standards of care and confidentiality.
              </p>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Personal Care Assistance</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Bathing, grooming, and hygiene assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Dressing and toileting support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Mobility assistance and fall prevention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Medication reminders and management</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Companion & Support Care</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>Emotional support and companionship</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>Light housekeeping and meal preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>Transportation to appointments and errands</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>Activity coordination and social engagement</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Specialized Care</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Dementia and Alzheimer's care</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Post-recovery and rehabilitation support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Wound care assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Palliative and end-of-life care</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Respite Care</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>Temporary care to support family caregivers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>Short-term or extended care programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>Emergency care availability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
