import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-background py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2">
                            <Image src="/images/infinitehome-logo-remove.png" alt="Logo" width={100} height={100} className="size-20" />
                            <h4 className="font-bold text-center">Infinite <br /> Home Health care</h4>
                        </div>
                        <p className="text-sm opacity-80 w-2/3">
                            Providing compassionate, professional in-home care services to seniors and individuals with special needs in the Commerce City area.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><a href="#about" className="hover:opacity-100 transition">About Us</a></li>
                            <li><a href="#services" className="hover:opacity-100 transition">Services</a></li>
                            <li><a href="#contact" className="hover:opacity-100 transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Contact Info</h4>
                        <p className="text-sm opacity-80">
                            <a href="tel:7207032196" className="hover:opacity-100 transition">(720) 703-2196</a><br />
                            <a href="mailto:infinitehealthcare21@gmail.com" className="hover:opacity-100 transition break-all">infinitehealthcare21@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
                    <p>&copy; 2026 Infinite Home Healthcare. All rights reserved. | Caring for All</p>
                </div>
            </div>
        </footer>
    )
}