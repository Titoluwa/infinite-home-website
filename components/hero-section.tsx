import Image from "next/image";
import { Button } from "./ui/button";
import { Phone, Mail } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative w-full bg-gradient-to-b from-[#E6DBCD] to-background py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                <div className="space-y-2 md:text-left text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                        Professional Home<br /> Care  You Can <span className="text-primary">Trust</span>
                    </h2>
                    <p className="text-lg  md:w-4/5 w-full text-muted-foreground">
                        Compassionate in-home healthcare services designed to help seniors and individuals with special needs maintain independence and dignity.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:7207032196">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                        <Phone className="w-4 h-4 mr-2" />
                        Call: (720) 703-2196
                    </Button>
                    </a>
                    <a href="mailto:infinitehealthcare21@gmail.com">
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:text-primary hover:bg-primary/5 w-full sm:w-auto">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                    </Button>
                    </a>
                </div>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                    <Image src="/images/health-1.jpg" alt="Home healthcare professional" fill className="object-cover"/>
                </div>
            </div>
            </div>
        </section>
    )
}