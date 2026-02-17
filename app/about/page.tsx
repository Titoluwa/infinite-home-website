import { coreValues } from "@/lib/constant";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Sparkles, CheckCircle2, AlarmClockCheck } from "lucide-react";
import { TbTargetArrow } from "react-icons/tb";
import { MdSupervisedUserCircle } from "react-icons/md";

export default function AboutUs() {
    return (
        <section id="about" className="w-full">
            {/* Hero Section */}
            <div className="relative w-full py-24 bg-gradient-to-r from-primary/10 via-background to-secondary/20 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            {/* <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                                <Heart className="w-4 h-4 text-primary" />
                                <span className="text-sm font-semibold text-primary">About Our Company</span>
                            </div> */}
                            
                            <div className="space-y-2">
                                <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                                    About <span className="text-primary">Us</span>
                                </h1>
                                <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                            </div>

                            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                                Providing compassionate and dependable home care services for families and caregivers seeking a safe, welcoming, and nurturing environment for their loved ones.
                            </p>

                            <Link 
                                href="/contact" 
                                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 group"
                            >
                                <span>Contact Us</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                            <Image 
                                src="/images/healthcare-2.jpg" 
                                alt="Infinite Home Health Care" 
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mission Card */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-10 border border-border hover:border-primary/30 transition-all duration-300 h-full">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    At Infinite Home Health, our mission is to place patients first by being the
                                    preferred provider for individuals seeking the highest level of skilled,
                                    dependable, and compassionate care. We are committed to treating every patient
                                    as a valued individual by delivering culturally sensitive, respectful, and
                                    personalized home healthcare services.
                                </p>
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-10 border border-border hover:border-secondary/30 transition-all duration-300 h-full">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="p-3 bg-secondary/10 rounded-lg">
                                        <Sparkles className="w-6 h-6 text-secondary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    To consistently exceed client expectations by delivering excellent, compassionate,
                                    and nurturing care to every patient we serve. We strive to be the trusted partner
                                    for patients and families in achieving their health and wellness goals at home.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Our <span className="text-primary">Core Values</span>
                        </h2>
                        <div className="flex justify-center">
                            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                        </div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            These principles guide everything we do and shape how we care for our patients
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {coreValues.map((value, index) => (
                            <div  key={index + value.title} className="group relative" >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                                <div className="relative bg-white dark:bg-slate-900 rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                                    <div className="flex items-start space-x-4 mb-4">
                                        <div className="p-2.5 bg-primary/10 rounded-lg flex-shrink-0 mt-0.5">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {value.title}
                                        </h4>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Why Choose <span className="text-primary">Infinite</span>
                        </h2>
                        <div className="flex justify-center">
                            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Expert Care",
                                description: "Our team consists of trained, compassionate professionals dedicated to providing the highest quality care.",
                                icon: <MdSupervisedUserCircle className="size-16 text-primary" />
                            },
                            {
                                title: "Personalized Services",
                                description: "We tailor our services to meet the unique needs and preferences of each patient and family.",
                                icon: <TbTargetArrow className="size-16 text-primary" />
                            },
                            {
                                title: "24/7 Support",
                                description: "We're here when you need us, with reliable support and emergency response capabilities.",
                                icon: <AlarmClockCheck className="size-16 text-primary" />
                            }
                        ].map((item, index) => (
                            <div 
                                key={index + item.title}
                                className="group bg-white dark:bg-slate-900 rounded-xl p-8 border border-border hover:border-primary/30 text-center transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="text-5xl mb-4 flex justify-center">{item.icon}</div>
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
            <div className="py-16 bg-gradient-to-r from-primary/90 to-primary rounded-2xl mx-4 sm:mx-6 lg:mx-8 mb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Experience Compassionate Care?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Contact us today to learn more about our services and how we can support your loved ones.
                    </p>
                    <Link 
                        href="mailto:infinitehealthcare21@gmail.com"
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 group"
                    >
                        <span>Get in Touch</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}