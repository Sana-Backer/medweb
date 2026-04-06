import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditionsPage = () => {
    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="min-h-screen flex flex-col bg-white font-sans">
            <Navbar />

            <main className="flex-1 max-w-7xl mx-auto px-6 py-8 lg:py-5 w-full">
                {/* Header Section */}
                <div className="border-b border-gray-200 pb-4 mb-6">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-2 tracking-tight">
                        Terms & Conditions
                    </h1>
                    <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">
                        Last Updated: {today}
                    </p>
                </div>

                {/* Introduction */}
                <div className="prose prose-blue max-w-none mb-2">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Welcome to <strong>DreamsPharma</strong>. These Terms & Conditions  constitute a legally binding agreement between you and DreamsPharma governing your access to and use of our website and the services offered through it.</p>
                    <p className="text-lg text-gray-700 leading-relaxed ">
                        By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms, along with our Privacy Policy and other applicable policies.
                    </p>
                </div>

                <hr className="my-2 border-gray-100" />

                {/* Content Sections */}
                <div className="space-y-2">
                    {/* 1. Use of Website */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">1</span>
                            Use of Website
                        </h2>
                        <p className="text-gray-700 leading-relaxed pl-11">
                            You agree to use this website only for lawful purposes. You must not misuse the website, attempt unauthorized access, or disrupt its functionality.
                        </p>
                    </section>

                    {/* 2. Nature of Services */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">2</span>
                            Nature of Services
                        </h2>
                        <div className="pl-11">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                DreamsPharma is an online platform that facilitates the purchase of pharmaceutical products and healthcare items.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Certain medicines may require a <strong>valid prescription</strong></span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Users may upload prescriptions for verification before order processing</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Orders are subject to approval based on compliance with applicable laws</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 3. User Responsibilities */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">3</span>
                            User Responsibilities
                        </h2>
                        <div className="pl-11">
                            <p className="text-gray-700 leading-relaxed mb-4">By using our website, you agree that:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>All information provided is accurate and up to date</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>You will not upload false, invalid, or misleading prescriptions</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>You are responsible for maintaining the confidentiality of your account</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 4. Product Information */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">4</span>
                            Product Information
                        </h2>
                        <div className="pl-11">
                            <p className="text-gray-700 leading-relaxed mb-4">We strive to ensure that product descriptions, images, and prices are accurate. However:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Prices may change without prior notice</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Availability of products is subject to stock</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Images are for representation purposes only</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 5. Orders & Acceptance */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">5</span>
                            Orders & Acceptance
                        </h2>
                        <div className="pl-11">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>All orders placed on the website are subject to acceptance</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>We reserve the right to cancel or refuse any order, including in cases of:</span>
                                </li>
                                <li className="pl-6 space-y-2">
                                    <div className="flex items-center gap-2 text-gray-600 italic">
                                        <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                                        Invalid prescription
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 italic">
                                        <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                                        Incorrect pricing
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 italic">
                                        <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                                        Suspicious or fraudulent activity
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 6. Payments */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">6</span>
                            Payments
                        </h2>
                        <div className="pl-11">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Payments are processed securely via third-party payment gateways such as Razorpay</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>We do not store your card or banking details</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>All transactions are subject to successful authorization</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 7. Prescription Verification */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">7</span>
                            Prescription Verification
                        </h2>
                        <div className="pl-11">
                            <p className="text-gray-700 leading-relaxed mb-4">For prescription-based medicines:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Users must upload a valid prescription issued by a licensed medical practitioner</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>We reserve the right to verify prescriptions before processing orders</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Orders may be delayed or cancelled if verification fails</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 8. Delivery & Shipping */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">8</span>
                            Delivery & Shipping
                        </h2>
                        <div className="pl-11">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Delivery timelines are estimates and may vary based on location</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>We are not responsible for delays caused by courier services or external factors</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 9. Refunds & Cancellations */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">9</span>
                            Refunds & Cancellations
                        </h2>
                        <p className="text-gray-700 leading-relaxed pl-11">
                            All refunds and cancellations are governed by our Refund Policy available on the website.
                        </p>
                    </section>

                    {/* 10. Limitation of Liability */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">10</span>
                            Limitation of Liability
                        </h2>
                        <div className="pl-11">
                            <p className="text-gray-700 leading-relaxed mb-4">DreamsPharma shall not be liable for:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Any indirect or consequential damages</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Delays or disruptions beyond our control</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Misuse of products purchased through the website</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 11. Intellectual Property */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">11</span>
                            Intellectual Property
                        </h2>
                        <p className="text-gray-700 leading-relaxed pl-11">
                            All content on this website, including text, images, logos, and design, is the property of DreamsPharma and is protected by applicable laws.
                        </p>
                    </section>

                    {/* 12. Privacy */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">12</span>
                            Privacy
                        </h2>
                        <p className="text-gray-700 leading-relaxed pl-11">
                            Your use of the website is also governed by our Privacy Policy.
                        </p>
                    </section>

                    {/* 13. Changes to Terms */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">13</span>
                            Changes to Terms
                        </h2>
                        <p className="text-gray-700 leading-relaxed pl-11">
                            We reserve the right to update these Terms at any time. Continued use of the website constitutes acceptance of the updated Terms.
                        </p>
                    </section>

                    {/* 14. Governing Law */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">14</span>
                            Governing Law
                        </h2>
                        <p className="text-gray-700 leading-relaxed pl-11">
                            These Terms shall be governed by and interpreted in accordance with the laws of India.
                        </p>
                    </section>

                    {/* 15. Contact Information */}
                    <section className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                            Contact Information
                        </h2>
                        <p className="text-gray-700 mb-6 font-medium">For any questions or concerns, please contact us:</p>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                                    <span className="text-blue-600 font-bold text-lg">@</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Email</p>
                                    <p className="text-blue-600 font-bold text-sm">support@dreamspharma.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                                    <span className="text-blue-600 font-bold text-lg">#</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Phone</p>
                                    <p className="text-gray-900 font-bold text-sm">+91 9878898888</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                                    <span className="text-blue-600 font-bold text-lg">^</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Address</p>
                                    <p className="text-gray-900 font-bold text-sm">DreamsPharma, Palakkad, India</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsAndConditionsPage;
