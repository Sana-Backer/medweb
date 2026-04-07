import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ShippingPolicyPage = () => {
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
                        Shipping Policy
                    </h1>
                    <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">
                        Last Updated: {today}
                    </p>
                </div>

                {/* Introduction */}
                <div className="prose prose-blue max-w-none mb-2">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        This Shipping Policy outlines the terms and conditions related to the delivery of products ordered from <strong>DreamsPharma</strong> through our website.
                    </p>
                </div>

                <hr className="my-2 border-gray-100" />

                {/* Content Sections */}
                <div className="space-y-2">
                    {/* 1. Delivery Locations */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                            Delivery Locations
                        </h2>
                        <p className="text-gray-700 leading-relaxed pl-11">
                            DreamsPharma currently delivers pharmaceutical products across India. Delivery availability may vary depending on location and serviceability.
                        </p>
                    </section>

                    {/* 2. Order Processing */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                            Order Processing
                        </h2>
                        <div className="pl-11">
                            <ul className="space-y-1">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>Orders are processed within <strong>1–2 business days</strong> after confirmation.</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700 font-medium">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>Orders requiring <strong>prescription verification</strong> may take additional time before dispatch.</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>Orders are processed only on working days (excluding Sundays and public holidays).</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 3. Delivery Timeline */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                            Delivery Timeline
                        </h2>
                        <div className="pl-11">
                            <ul className="space-y-1 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>Estimated delivery time is <strong>3–7 business days</strong>, depending on the delivery location.</span>
                                </li>
                                <li className="flex items-start gap-3 italic text-gray-500 text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0"></span>
                                    <span>Remote or non-serviceable areas may experience longer delivery times.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 4. Shipping Charges */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                            Shipping Charges
                        </h2>
                        <div className="pl-11 text-gray-700">
                            <ul className="space-y-1">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>Shipping charges (if applicable) will be displayed at checkout before payment.</span>
                                </li>
                                <li className="flex items-start gap-3  ">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                    <span>We may offer FREE SHIPPING on selected orders or promotional offers.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 5. Order Tracking */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">5</span>
                            Order Tracking
                        </h2>
                        <div className="pl-11 text-gray-700">
                            <ul className="space-y-1">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>Once your order is shipped, tracking details will be shared via SMS or email (if available).</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-500 italic">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0"></span>
                                    <span>Users are responsible for providing accurate contact details to receive updates.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 6. Delivery Attempts */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">6</span>
                            Delivery Attempts
                        </h2>
                        <div className="pl-11 text-gray-700">
                            <ul className="space-y-1">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>Our delivery partners will attempt delivery at the provided address.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>If the customer is unavailable, additional delivery attempts may be made.</span>
                                </li>
                                <li className="flex items-start gap-3 ">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>Failure to accept delivery may result in order cancellation.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 7. Delays in Delivery */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">7</span>
                            Delays in Delivery
                        </h2>
                        <div className="pl-11 text-gray-700">
                            <p className="mb-2 italic opacity-75">While we strive to deliver orders within the estimated timeframe, delays may occur due to:</p>
                            <div className="grid grid-cols-2 gap-2 mb-3">
                                <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                    Courier partner delays
                                </div>
                                <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                    Weather conditions
                                </div>
                                <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                    Public holidays
                                </div>
                                <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                                    Operational issues
                                </div>
                            </div>
                            <p className="font-semibold text-gray-600 text-sm">DreamsPharma shall not be held liable for delays caused by such external factors.</p>
                        </div>
                    </section>

                    {/* 8. Damaged or Missing Items */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">8</span>
                            Damaged or Missing Items
                        </h2>
                        <div className="pl-11 text-gray-700">
                            <p className="mb-2">If you receive a damaged package or if any item is missing:</p>
                            <ul className="space-y-1 mb-3">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>Report the issue within <strong>48 hours of delivery</strong></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>Provide supporting images/videos for verification</span>
                                </li>
                            </ul>
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-blue-800 text-sm font-medium">
                                We will review and take appropriate action as per our Refund Policy.
                            </div>
                        </div>
                    </section>

                    {/* 9. Incorrect Address */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">9</span>
                            Incorrect Address
                        </h2>
                        <div className="pl-11 text-gray-700">
                            <ul className="space-y-1">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                    <span>Customers must provide accurate and complete delivery details.</span>
                                </li>
                                <li className="flex items-start gap-3 font-medium text-gray-500 italic">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                    <span>DreamsPharma will not be responsible for delays or failed deliveries due to incorrect address information.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 10. Contact Information */}
                    <section className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                            10. Contact Information
                        </h2>
                        <p className="text-gray-700 mb-6 font-medium">For any shipping-related queries, please contact:</p>
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

                    {/* 11. Policy Updates */}
                    <section>
                        <h2 className="text-lg font-bold text-gray-900 mb-1">
                            11. Policy Updates
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

export default ShippingPolicyPage;
