import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="min-h-screen flex flex-col bg-white font-sans">
            <Navbar />

            <main className="flex-1  mx-auto px-6 py-8 lg:py-8 w-full">
                {/* Header Section */}
                <div className="border-b border-gray-200 pb-4 mb-6">
                    <h1 className="text-3xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-gray-500 font-medium tracking-wide">
                        Last Updated: {today}
                    </p>
                </div>

                {/* Introduction */}
                <div className="prose prose-blue max-w-none mb-8">
                    <p className="text-gray-700 leading-relaxed text-base">
                        This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the <strong>DreamsPharma</strong> service and tells you about your privacy rights and how the law protects you. We use your personal data to provide and improve the service. By using the website you agree to the collection and use of information in accordance with this Privacy Policy.
                    </p>
                </div>

                {/* Policy Content */}
                <div className="space-y-8">
                    {/* 1. Information We Collect */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-4">
                            1. Information We Collect
                        </h2>
                        <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
                        <ul className="list-disc pl-8 space-y-3 text-gray-700">
                            <li><strong>Personal Information:</strong> Name, phone number, email address, delivery address.</li>
                            <li><strong>Health Information:</strong> Prescription details uploaded by users (if applicable).</li>
                            <li><strong>Payment Information:</strong> Processed securely via third-party payment providers (we do not store card details).</li>
                            <li><strong>Usage Data:</strong> IP address, browser type, pages visited.</li>
                        </ul>
                    </section>

                    {/* 2. How We Use Your Information */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-4">
                            2. How We Use Your Information
                        </h2>
                        <p className="text-gray-700 mb-4">We use your data to:</p>
                        <ul className="list-disc pl-8 space-y-3 text-gray-700">
                            <li>Process orders and deliver medicines</li>
                            <li>Verify prescriptions (if required)</li>
                            <li>Provide customer support</li>
                            <li>Improve our website and services</li>
                        </ul>
                    </section>

                    {/* 3. Sharing of Information */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-4">
                            3. Sharing of Information
                        </h2>
                        <p className="text-gray-700 mb-4">
                            We do not sell or rent your personal data. We may share information with:
                        </p>
                        <ul className="list-disc pl-8 space-y-3 text-gray-700">
                            <li>Delivery partners for order fulfillment</li>
                            <li>Payment gateways (like Razorpay) for secure transactions</li>
                            <li>Legal authorities if required by law</li>
                        </ul>
                    </section>

                    {/* 4. Data Security */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-4">
                            4. Data Security
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We use industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    {/* 5. Cookies */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-4">
                            5. Cookies
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may use cookies to enhance your browsing experience.
                        </p>
                    </section>

                    {/* 6. User Rights */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-4">
                            6. User Rights
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            You can request access, correction, or deletion of your personal data by contacting us.
                        </p>
                    </section>

                    {/* 7. Contact Us */}
                    <section className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
                            7. Contact Us
                        </h2>
                        <p className="text-gray-700 mb-8 font-medium">If you have any questions, contact us at:</p>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                                    <span className="text-blue-600 font-bold">@</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                                    <p className="text-blue-600 font-bold">admin@dreamspharma.in</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                                    <span className="text-blue-600 font-bold">#</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                                    <p className="text-gray-900 font-bold">+91 9995432343</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                                    <span className="text-blue-600 font-bold">^</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Address</p>
                                    <p className="text-gray-900 font-bold">7/815,7/816, Dreams pharma , Krishna complex 1st floor , Marutharoad PO , Palakkad -678007</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 8. Updates to Policy */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-600 pl-4">
                            8. Updates to Policy
                        </h2>
                        <p className="text-gray-700 leading-relaxed italic text-sm">
                            We may update this policy from time to time. Changes will be posted on this page.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
