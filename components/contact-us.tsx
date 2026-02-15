import { Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactUs() {
    return (
        <section id="contact" className="w-full py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Get in Touch
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg p-8 border border-border text-center hover:shadow-lg transition">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
                        <a href="tel:7207032196" className="text-primary hover:text-primary/80 font-semibold">
                            (720) 703-2196
                        </a>
                    </div>
                    <div className="bg-white rounded-lg p-8 border border-border text-center hover:shadow-lg transition">
                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-6 h-6 text-secondary" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                        <a href="mailto:infinitehealthcare21@gmail.com" className="text-primary hover:text-primary/80 font-semibold break-all">
                            infinitehealthcare21@gmail.com
                        </a>
                    </div>
                    <div className="bg-white rounded-lg p-8 border border-border text-center hover:shadow-lg transition">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">Address</h3>
                        <p className="text-muted-foreground">
                            14178 E. 101st Place<br />
                            Commerce City, CO 80022
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="mt-16 max-w-2xl mx-auto bg-gradient-to-b from-primary/5 to-secondary/5 rounded-lg p-8 border border-border">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <textarea
                            placeholder="How can we help you?"
                            rows={5}
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        ></textarea>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}