"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NavLink = ({ href, label, active }: { href: string; label: string; active: boolean }) => (
    <Link
        href={href}
        className={`relative px-1 py-2 font-medium transition-colors duration-200 ${active
            ? "text-primary underline decoration-secondary decoration-2 underline-offset-8"
            : "text-foreground hover:text-primary hover:underline hover:decoration-primary hover:underline-offset-8 hover:decoration-2 transition"
            }`}
    >
        {label}
    </Link>
);

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Navigation links
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/contact", label: "Contact" },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <Image src="/images/infinitehome-logo-remove.png" alt="Infinite Home Health Care" width={50} height={50} className="size-20 object-contain"
                        />
                        <div className="flex flex-col justify-center hidden md:block font-serif">
                            <h4 className="font-bold text-md text-left">
                                <span className="text-primary text-xl">Infinite</span> <br /> Home Health Care
                            </h4>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink key={link.href} href={link.href} label={link.label} active={isActive(link.href)} />
                        ))}
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:block">
                        <a href="tel:7207032196">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold">
                                Call Now
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMobileMenu} className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-accent transition-colors duration-200" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="mobile-menu-container md:hidden border-t border-border">
                        <nav className="flex flex-col space-y-1 py-4 px-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${isActive(link.href)
                                        ? "bg-primary text-primary-foreground"
                                        : "text-foreground hover:bg-accent"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <a href="tel:7207032196" onClick={closeMobileMenu} className="block">
                                    <Button
                                        size="lg"
                                        className="w-full bg-primary hover:bg-primary/90 font-semibold"
                                    >
                                        Call Now
                                    </Button>
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}