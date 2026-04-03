import React from 'react';
import { Truck, Clock, FileText, ChevronRight } from 'lucide-react';
import heroImg from '../assets/pharmacist_hero_1775125270901.png';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-blue-50/50 to-white pt-12 pb-20 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 space-y-8 z-10">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-primary border border-primary/10">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Licensed Pharmacy Network
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        Your Trusted <br />
                        <span className="text-primary">Online Pharmacy</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                        Order prescriptions and healthcare essentials from the comfort of your home. Expert care delivered to your doorstep.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-hover transition-all hover:scale-[1.02] shadow-lg shadow-primary/20">
                            <FileText className="w-5 h-5" />
                            Upload Prescription
                        </button>
                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all border border-gray-200">
                            Browse Medicines
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50">
                        <img
                            src={heroImg}
                            alt="Pharmacist at work"
                            className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-1000"
                        />
                    </div>

                    {/* Overlay Card */}
                    <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-bounce-slow max-w-[240px] border border-gray-50">
                        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <Clock className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <div className="font-bold text-gray-900 leading-tight">30 Min Delivery</div>
                            <div className="text-xs text-gray-500">In select locations</div>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-1/2 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-100/30 rounded-full blur-2xl -z-10" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
