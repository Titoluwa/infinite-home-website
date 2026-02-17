import { Phone, Mail, MapPin, ArrowRight, Send, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
    return (
        <section id="contact" className="w-full">
        {/* Hero Section */}
        <div className="relative w-full py-20 bg-gradient-to-r from-primary/10 via-background to-secondary/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Get in <span className="text-primary">Touch</span>
            </h1>
            <div className="flex justify-center mb-6">
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions? We're here to help. Reach out to us using any of the methods below.
            </p>
            </div>
        </div>

        {/* Contact Info Cards */}
        <div className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Phone Card */}
                <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-10 border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Phone className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                            Phone
                        </h3>
                        <p className="text-muted-foreground">
                            Call us directly for immediate assistance
                        </p>
                        <a href="tel:7207032196" className="text-primary hover:text-primary/80 font-semibold text-lg flex items-center justify-center gap-2 group/link mt-auto">
                            (720) 703-2196
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Email Card */}
                <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-10 border border-border hover:border-secondary/30 transition-all duration-300 h-full flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                    Email
                    </h3>
                    <p className="text-muted-foreground mb-4">
                    Send us a message anytime
                    </p>
                    <a 
                    href="mailto:infinitehealthcare21@gmail.com" 
                    className="text-primary hover:text-primary/80 font-semibold break-all flex items-center justify-center gap-2 group/link mt-auto"
                    >
                    infinitehealthcare21@gmail.com
                    </a>
                </div>
                </div>

                {/* Address Card */}
                <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-10 border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    Address
                    </h3>
                    <p className="text-muted-foreground mb-4">
                    Visit us at our office
                    </p>
                    <address className="text-primary font-semibold not-italic leading-relaxed">
                    14178 E. 101st Place<br />
                    Commerce City, CO 80022
                    </address>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Map Section */}
      <div className=" bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-4">
            {/* <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Find <span className="text-primary">Us</span>
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div> */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <span className="text-secondary font-semibold">Visit</span> us at our office location in Commerce City, Colorado
            </p>
          </div>

          {/* Map Container */}
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-border shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <iframe title="Map for Infinte home"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.5234567!2d-104.8743!3d39.8045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7d5e5e5e5e5d%3A0x1234567890abcdef!2s14178%20E%20101st%20Place%2C%20Commerce%20City%2C%20CO%2080022!5e0!3m2!1sen!2sus!4v1707000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Address Info Below Map */}
          {/* <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl p-10 border border-border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Location</h3>
            <address className="text-lg text-muted-foreground not-italic space-y-2">
              <p className="text-primary font-semibold text-xl">Infinite Home Healthcare</p>
              <p>14178 E. 101st Place</p>
              <p>Commerce City, CO 80022</p>
              <p className="pt-4 border-t border-border mt-4">
                <a href="tel:7207032196" className="text-primary hover:text-primary/80 font-semibold">
                  (720) 703-2196
                </a>
              </p>
            </address>
          </div> */}
        </div>
      </div>

        {/* Contact Form Section */}
        <div className="py-5 bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Send us a <span className="text-primary">Message</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
                </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 border border-border shadow-lg">
                <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                        First Name <span className="text-primary">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="John"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background dark:bg-slate-800"
                        required
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                        Last Name <span className="text-primary">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Doe"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background dark:bg-slate-800"
                        required
                    />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background dark:bg-slate-800"
                    required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                    </label>
                    <input
                    type="tel"
                    placeholder="(720) 000-0000"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background dark:bg-slate-800"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                    Subject <span className="text-primary">*</span>
                    </label>
                    <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background dark:bg-slate-800"
                    required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                    Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none bg-background dark:bg-slate-800"
                    required
                    ></textarea>
                </div>

                <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 text-lg group transition-all duration-300"
                >
                    <Send className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Send Message
                </Button>

                <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-6">
                    <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                        Response within <strong>24 hours</strong>
                    </span>
                    </div>
                    <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                        Your data is <strong>secure & private</strong>
                    </span>
                    </div>
                </div>
                </form>
            </div> */}

            {/* Additional Info */}

            {/* <div className="py-10 flex flex-col justify-center items-center sm:flex-row gap-6">
                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                        Response within <strong>24 hours</strong>
                    </span>
                    </div>
                    <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                        Your data is <strong>secure & private</strong>
                    </span>
                    </div>
                </div>
            </div> */}
            <div className="mt-12 mb-24 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-border text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                <p className="text-sm text-muted-foreground">
                    Monday - Friday<br />
                    8:00 AM - 5:00 PM MST<br />
                </p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-border text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Service Area</h4>
                <p className="text-sm text-muted-foreground">
                    Commerce City, CO<br />
                    Denver Metro Area<br />
                    And Surrounding Regions
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}