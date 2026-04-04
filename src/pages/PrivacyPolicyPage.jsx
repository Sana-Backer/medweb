import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Database, Share2, ShieldCheck, Lock, Cookie, Scale, CheckCircle2, ArrowRight } from 'lucide-react';

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
            <Navbar />

            <main className="flex-1 max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-8">
                {/* Header Section */}
                <div className="mb-6 lg:mb-8">
                    <h1 className="text-4xl lg:text-4xl font-semibold text-[#004c99] mb-4 tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-600 text-[15px] lg:text-[17px] max-w-3xl leading-relaxed">
                        Last updated: May 24, 2024. Your privacy is our priority. This policy outlines how Dreams Pharma Pharmacy protects your health and personal information.
                    </p>
                </div>

                {/* Main Content Sections */}
                <div className="space-y-6">

                    {/* Information We Collect */}
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                <Database className="w-6 h-6 text-[#004c99]" />
                            </div>
                            <div>
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Information We Collect</h2>
                                <p className="text-gray-500 text-sm lg:text-base">Details on the types of data we gather to provide our pharmaceutical services.</p>
                            </div>
                        </div>

                        <p className="text-gray-700 mb-6 text-[15px]">
                            To provide personalized healthcare, we collect information that identifies you:
                        </p>

                        <ul className="space-y-4 text-[15px] text-gray-700">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-semibold text-gray-900">Personal Identifiers:</span> Name, address, date of birth, and contact information.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-semibold text-gray-900">Health Records:</span> Prescription history, medical conditions, and clinical notes provided by your doctor.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-semibold text-gray-900">Insurance Data:</span> Provider details, policy numbers, and billing history.
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* How We Use Your Data */}
                    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border-l-4 border-emerald-500 relative overflow-hidden">
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                                <Share2 className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">How We Use Your Data</h2>
                                <p className="text-gray-500 text-sm lg:text-base">Transparency in how we utilize your information for care delivery.</p>
                            </div>
                        </div>

                        <p className="text-gray-700 mb-6 text-[15px]">
                            Your data is exclusively used for professional pharmacy operations including:
                        </p>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="bg-gray-50/80 p-5 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-[#004c99] mb-3 text-[15px]">Service Fulfillment</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Processing prescriptions and coordinating with your healthcare providers for medication safety.</p>
                            </div>
                            <div className="bg-gray-50/80 p-5 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-[#004c99] mb-3 text-[15px]">Billing & Claims</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Submitting claims to your insurance carrier and managing payment transactions.</p>
                            </div>
                        </div>
                    </div>

                    {/* HIPAA Compliance */}
                    <div className="bg-[#004c99] rounded-2xl p-6 lg:p-8 shadow-md text-white relative overflow-hidden">
                        {/* Background Shield Icon */}
                        <ShieldCheck className="absolute -right-8 -bottom-8 w-64 h-64 text-white/5 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex items-start gap-4 mb-8">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm">
                                    <ShieldCheck className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">HIPAA Compliance & Health Records</h2>
                                    <p className="text-blue-100 text-sm lg:text-base">Strict adherence to federal health privacy standards.</p>
                                </div>
                            </div>

                            <p className="text-blue-50/90 mb-8 max-w-3xl leading-relaxed text-[15px]">
                                Dreams Pharma Pharmacy is fully compliant with the Health Insurance Portability and Accountability Act (HIPAA). We implement rigorous physical, technical, and administrative safeguards to ensure your Protected Health Information (PHI) remains confidential.
                            </p>

                            <div className="bg-black/10 rounded-xl p-4 flex items-center gap-3 w-fit border border-white/10">
                                <Lock className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm font-medium italic text-blue-50">Encryption at rest and in transit for all patient communication.</span>
                            </div>
                        </div>
                    </div>

                    {/* Cookies and Rights Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Cookies Card */}
                        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <Cookie className="w-6 h-6 text-orange-700" />
                                <h3 className="text-lg lg:text-xl font-bold text-gray-900">Cookies and Tracking</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                                We use essential cookies to maintain your login session and pharmacy cart. Analytical cookies help us improve our platform performance without identifying individuals.
                            </p>
                            <button className="text-[#004c99] hover:text-[#003366] font-semibold text-sm flex items-center gap-1 transition-colors w-fit">
                                Manage Cookie Preferences <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Your Rights Card */}
                        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <Scale className="w-6 h-6 text-blue-600" />
                                <h3 className="text-lg lg:text-xl font-bold text-gray-900">Your Rights</h3>
                            </div>
                            <ul className="space-y-3 text-sm text-gray-600 flex-1">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#004c99]"></div>
                                    Right to access medical records
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#004c99]"></div>
                                    Right to request corrections
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#004c99]"></div>
                                    Right to data portability
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#004c99]"></div>
                                    Right to opt-out of marketing
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Contact Banner */}
                    <div className="bg-[#f1f5f9] rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mt-6 border border-gray-200">
                        <div className="text-center md:text-left">
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Have questions about your privacy?</h3>
                            <p className="text-gray-600 text-sm">Our dedicated Privacy Officer is available to discuss any concerns.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
                            <button className="bg-white hover:bg-gray-50 text-[#004c99] border border-[#004c99] font-bold py-3 px-6 rounded-xl transition-colors shadow-sm text-sm">
                                Contact Support
                            </button>
                            <button className="bg-[#004c99] hover:bg-[#003366] text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-sm text-sm border-transparent">
                                Submit Request
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
