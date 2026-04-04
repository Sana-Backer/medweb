import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, ChevronRight, Send } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-1 max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
                {/* Header Section */}
                <div className="max-w-3xl mb-8">
                    <h1 className="text-[30px] md:text-[42px] font-bold text-[#1a1c1e] leading-[1.1] mb-4 tracking-tight">
                        How can we <span className="text-[#0e5fa3]">support your health journey</span> today?
                    </h1>
                    <p className="text-[#5f6c7b] text-[14px] md:text-[15px] leading-relaxed max-w-2xl">
                        Whether you have questions about your prescription, need help finding a local DreamsPharma pharmacy, or want to speak with a pharmacist, we're here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">

                    {/* Left Column: Contact Form */}
                    <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100">
                        <h2 className="text-lg font-bold text-[#1a1c1e] mb-6">Send us a message</h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Jane Doe"
                                        className="w-full bg-[#f1f3f5] border-none rounded-2xl px-5 py-3.5 text-sm text-gray-700 focus:ring-2 focus:ring-[#0e5fa3] transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="jane@example.com"
                                        className="w-full bg-[#f1f3f5] border-none rounded-2xl px-5 py-3.5 text-sm text-gray-700 focus:ring-2 focus:ring-[#0e5fa3] transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Subject</label>
                                <div className="relative">
                                    <select className="w-full bg-[#f1f3f5] border-none rounded-2xl px-5 py-3.5 text-sm text-gray-700 focus:ring-2 focus:ring-[#0e5fa3] transition-all outline-none appearance-none cursor-pointer">
                                        <option>Prescription Inquiry</option>
                                        <option>General Support</option>
                                        <option>Technical Issue</option>
                                        <option>Insurance Question</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="w-full bg-[#f1f3f5] border-none rounded-2xl px-5 py-3.5 text-sm text-gray-700 focus:ring-2 focus:ring-[#0e5fa3] transition-all outline-none resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full bg-[#0e5fa3] hover:bg-[#0b4d84] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-[#0e5fa3]/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Sidebar Cards */}
                    <div className="space-y-6">

                        {/* Direct Channels Card */}
                        <div className="bg-[#004c99] rounded-[28px] p-6 text-white shadow-xl">
                            <h3 className="text-lg font-bold mb-6">Direct Channels</h3>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-sm">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-blue-100/70 text-[10px] font-bold uppercase tracking-widest mb-1">Call us </p>
                                        <p className="text-base font-bold">+91 9878899888</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-sm">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-blue-100/70 text-[10px] font-bold uppercase tracking-widest mb-1">General support</p>
                                        <p className="text-base font-bold truncate">support@dreamspharma.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Headquarters Card */}
                        <div className="bg-[#f8f9fa] rounded-[28px] overflow-hidden border border-gray-100 shadow-sm">
                            <div className="h-40 bg-gray-200 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=600"
                                    alt="Map"
                                    className="w-full h-full object-cover grayscale opacity-80"
                                />
                                <div className="absolute top-4 left-4 bg-emerald-700 text-white text-[9px] font-black px-2.5 py-1 rounded-full tracking-widest uppercase shadow-sm">
                                    Main Office
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-base font-bold text-[#1a1c1e] mb-2">Corporate Headquarters</h3>
                                <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                                 
                                    Palakkad, Kerala, India
                                </p>
                                <button className="flex items-center gap-2 text-[#0e5fa3] font-bold text-[12px] hover:gap-3 transition-all">
                                    Open in Store Locator <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>

                        {/* Operating Hours Card */}
                        <div className="bg-[#e0f9f1] rounded-[24px] p-5 flex gap-4 items-center border border-[#c1ebd7]">
                            <div className="bg-white p-2.5 rounded-xl shadow-sm text-emerald-600">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#1a1c1e] text-[13px] mb-0.5">Operating Hours</h4>
                                <p className="text-[11px] text-gray-600 leading-tight">
                                    Pharmacists available: Mon-Fri 8am-8pm.<br />
                                    <span className="font-bold text-emerald-700">24/7 support</span> for urgent prescription needs.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
