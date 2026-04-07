import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RefundPolicyPage = () => {
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
                        Refund & Cancellation Policy
                    </h1>
                    <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">
                        Last Updated: {today}
                    </p>
                </div>

                {/* Introduction */}
                <div className="prose prose-blue max-w-none mb-2">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        This Refund & Cancellation Policy outlines the terms under which <strong>DreamsPharma</strong> processes cancellations, returns, and refunds for orders placed through our website
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-2">
                        By placing an order on our website, you agree to the terms stated below.
                    </p>
                </div>

                <hr className="my-2 border-gray-100" />

                {/* Content Sections */}
                <div className="space-y-2">
                    {/* 1. Order Cancellation */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                            Order Cancellation
                        </h2>
                        <div className="pl-11">
                            <ul className="space-y-1">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Orders can be cancelled <strong>only before dispatch</strong>.</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Once an order has been shipped, it <strong>cannot be cancelled</strong>.</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>To request cancellation, users must contact our support team immediately after placing the order.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 2. Refund Eligibility */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                            Refund Eligibility
                        </h2>
                        <div className="pl-11">
                            <p className="text-gray-700 mb-2">Refunds will be considered only under the following conditions:</p>
                            <ul className="space-y-1">
                                <li className="flex items-start gap-3 text-gray-700 font-medium">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Incorrect product delivered</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700 font-medium">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Damaged product received at the time of delivery</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700 font-medium">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Expired product delivered</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700 font-medium">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>Order not delivered within the committed time</span>
                                </li>
                            </ul>
                            <p className="text-gray-600 italic mt-3 text-sm border-l-2 border-blue-500 pl-4 py-1 bg-blue-50/30">
                                All such issues must be reported within <strong>48 hours of delivery</strong> with proper proof (images/videos).
                            </p>
                        </div>
                    </section>

                    {/* 3. Non-Refundable Products */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                            Non-Refundable Products
                        </h2>
                        <div className="pl-11">
                            <p className="text-gray-700 mb-2 uppercase text-xs font-bold tracking-widest text-gray-400">Due to the sensitive nature of pharmaceutical products:</p>
                            <ul className="space-y-1">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>Medicines once delivered (unless damaged or incorrect)</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>Opened, used, or tampered products</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>Products returned without original packaging</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 4. Prescription Medicines */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                            Prescription Medicines
                        </h2>
                        <div className="pl-11">
                            <ul className="space-y-1 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="font-semibold ">DRx</span>
                                    <span>Orders involving prescription medicines are <strong>non-returnable</strong> once verified and delivered.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="font-semibold ">DRx</span>
                                    <span>Refunds will not be issued for incorrect prescriptions provided by the user.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 5. Refund Process */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">5</span>
                            Refund Process
                        </h2>
                        <div className="pl-11">
                            <ul className="space-y-1 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                                    <span>Approved refunds will be processed within <strong>5–7 business days</strong></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                                    <span>Refunds will be credited via the <strong>original payment method</strong></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                                    <span>In case of COD (if applicable), refunds may be processed via bank transfer</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 6. Order Rejection */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">6</span>
                            Order Rejection
                        </h2>
                        <div className="pl-11">
                            <p className="text-gray-700 mb-2 font-medium">We reserve the right to cancel or reject any order due to:</p>
                            <ul className="space-y-1 text-gray-700">
                                <li className="flex items-start gap-3 italic">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                                    <span>Invalid or missing prescription</span>
                                </li>
                                <li className="flex items-start gap-3 italic">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                                    <span>Suspected fraudulent activity</span>
                                </li>
                                <li className="flex items-start gap-3 italic">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                                    <span>Product unavailability</span>
                                </li>
                            </ul>
                            <div className="mt-2 bg-green-50 border border-green-100 rounded-xl p-3 text-green-800 text-sm font-bold flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                In such cases, a FULL REFUND will be issued.
                            </div>
                        </div>
                    </section>

                    {/* 7. Contact for Refunds */}
                    <section className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                            7. Contact for Refunds
                        </h2>
                        <p className="text-gray-700 mb-6 font-medium">For any refund or cancellation requests, please contact:</p>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                                    <span className="text-blue-600 font-bold text-lg">@</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Email</p>
                                    <p className="text-blue-600 font-bold text-sm">admin@dreamspharma.in</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                                    <span className="text-blue-600 font-bold text-lg">#</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Phone</p>
                                    <p className="text-gray-900 font-bold text-sm">+91 9995432343</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                                    <span className="text-blue-600 font-bold text-lg">^</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Address</p>
                                    <p className="text-gray-900 font-bold text-sm leading-tight text-[13px]">7/815,7/816, Dreams pharma , Krishna complex 1st floor , Marutharoad PO , Palakkad -678007</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 8. Policy Updates */}
                    <section>
                        <h2 className="text-lg font-bold text-gray-900 mb-1">
                            8. Policy Updates
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-sm italic">
                            DreamsPharma reserves the right to update this policy at any time. Changes will be reflected on this page.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default RefundPolicyPage;
