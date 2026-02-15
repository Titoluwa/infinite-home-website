import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
                <div className="flex items-center gap-3">
                    <Image src="/images/infinitehome-logo-remove.png" alt="Infinite Home Healthcare" width={50} height={50} className="size-20" />
                    <div className="flex flex-col items-center justify-center hidden md:block">
                        <h4 className="font-bold text-md text-center">Infinite <br /> Home Health care</h4>
                    </div>
                </div>
                <nav className="hidden md:flex items-center gap-8 font-semibold text-base ">
                    <a href="#about" className="hover:text-primary hover:underline hover:decoration-secondary hover:underline-offset-4 hover:decoration-2 transition">About</a>
                    <a href="#services" className="hover:text-primary hover:underline hover:decoration-secondary hover:underline-offset-4 hover:decoration-2 transition">Services</a>
                    <a href="#contact" className="hover:text-primary hover:underline hover:decoration-secondary hover:underline-offset-4 hover:decoration-2 transition">Contact</a>
                </nav>
                <a href="tel:7207032196" className="md:hidden">
                    <Button size="sm" className="bg-primary hover:bg-primary/90">Call Now</Button>
                </a>
            </div>
        </header>
    )
}