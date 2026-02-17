import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-background py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2">
                            <Image src="/images/infinitehome-logo-remove.png" alt="Logo" width={100} height={100} className="size-20" />
                            <h4 className="font-bold text-center hover:text-primary transition">Infinite <br /> Home Health care</h4>
                        </div>
                        <p className="text-sm opacity-80 md:w-2/3 w-full">
                            Providing compassionate, professional in-home care services to seniors and individuals with special needs in the Commerce City area.
                        </p>
                        <p className="text-sm opacity-80 md:w-2/3 w-full mt-4 flex items-center gap-2">
                            <MapPin className="size-4" />
                            14178 E. 101st Place, Commerce City, CO 80022
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><a href="/" className="hover:opacity-100 hover:text-primary transition">Home</a></li>
                            <li><a href="/about" className="hover:opacity-100 hover:text-primary transition">About Us</a></li>
                            <li><a href="/services" className="hover:opacity-100 hover:text-primary transition">Services</a></li>
                            <li><a href="/contact" className="hover:opacity-100 hover:text-primary transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Contact Info</h4>
                        <div className="text-sm opacity-80 flex flex-col gap-2">
                            <a href="tel:7207032196" className="hover:opacity-100 hover:text-secondary transition flex items-center gap-2">
                                <Phone className="size-4" />(720) 703-2196
                            </a>
                            <a href="mailto:infinitehealthcare21@gmail.com" className="hover:opacity-100 hover:text-secondary transition break-all flex items-center gap-2">
                                <Mail className="size-4" />infinitehealthcare21@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
                    <p>&copy; 2026 Infinite Home Health Care. All rights reserved. | Caring for All</p>
                </div>
            </div>
        </footer>
    )
}