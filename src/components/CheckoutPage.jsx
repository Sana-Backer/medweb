import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Trash2, ShieldCheck, Lock, ArrowRight, Minus, Plus, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import productImg from '../assets/atorvastatin_product_1775131313326.png';
import prod1 from '../assets/multivitamin_bottle_1775125347332.png';

const CheckoutPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-gray-50/30">
            <Navbar />
            <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-6">
                <button 
                    onClick={() => navigate(-1)} 
                    className="flex items-center gap-2 text-[#0066CC] font-bold text-sm hover:underline mb-3 group transition-all"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back 
                </button>

                <div className="mb-3">
                    <h1 className="text-3xl font-bold text-[#003B73]">Review Your Order</h1>
                    <p className="text-gray-600 mt-2">You have 2 items in your medical cart.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left side cart items */}
                    <div className="flex-1 space-y-4">
                        {/* Item 1 */}
                        <div className="bg-white rounded-2xl p-4 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-sm border border-gray-100">
                            {/* image container */}
                            <div className="w-24 h-24 rounded-xl flex items-center justify-center p-2 flex-shrink-0">
                                <img src={productImg} alt="Atorvastatin 20mg" className="max-w-full max-h-full object-contain mix-blend-multiply" />
                            </div>

                            <div className="flex-1 w-full">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-gray-900">Atorvastatin 20mg</h3>
                                    <span className="text-lg font-bold text-[#0066CC]">₹24.50</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-6">Prescription Medication &bull; 30 Day Supply</p>

                                <div className="flex items-center justify-start gap-6">
                                    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-4">
                                        <button className="text-gray-500 hover:text-gray-900"><Minus className="w-4 h-4" /></button>
                                        <span className="font-bold text-sm">1</span>
                                        <button className="text-[#0066CC] hover:text-[#004C99]"><Plus className="w-4 h-4" /></button>
                                    </div>
                                    <button className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-700">
                                        <Trash2 className="w-4 h-4" />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="bg-white rounded-2xl p-4 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-sm border border-gray-100">
                            <div className="w-24 h-24 rounded-xl flex items-center justify-center p-2 flex-shrink-0">
                                <img src={prod1} alt="Multivitamin Daily" className="max-w-full max-h-full object-contain mix-blend-multiply" />
                            </div>

                            <div className="flex-1 w-full">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-gray-900">Multivitamin Daily</h3>
                                    <span className="text-lg font-bold text-[#0066CC]">₹18.99</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-6">Dietary Supplement &bull; 60 Tablets</p>

                                <div className="flex items-center justify-start gap-6">
                                    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-4">
                                        <button className="text-gray-500 hover:text-gray-900"><Minus className="w-4 h-4" /></button>
                                        <span className="font-bold text-sm">2</span>
                                        <button className="text-[#0066CC] hover:text-[#004C99]"><Plus className="w-4 h-4" /></button>
                                    </div>
                                    <button className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-700">
                                        <Trash2 className="w-4 h-4" />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Pharmacist Verified Banner */}
                        <div className="bg-[#f4f8ff] rounded-2xl p-4 flex gap-4 items-start border border-[#e1ecff]">
                            <div className="bg-[#004C99] text-white p-2 text-sm rounded-full flex-shrink-0">
                                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 mb-1">Pharmacist Verified</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Our pharmacists review all prescription orders for safety and accuracy. Your Atorvastatin 20mg requires a valid prescription which will be verified during checkout.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side Order Summary */}
                    <div className="w-full lg:w-[400px]">
                        <div className="bg-[#f8f9fa] rounded-3xl p-4 border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6 text-sm">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-gray-900">₹62.48</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="font-semibold tracking-wide text-green-600">FREE</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Estimated Tax</span>
                                    <span className="font-semibold text-gray-900">₹4.99</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-2 mb-2 flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-900">Total</span>
                                <span className="text-2xl font-extrabold text-gray-900">₹67.47</span>
                            </div>

                            {/* Promo Code */}
                            <div className="mb-5">
                                <label className="block text-xs font-bold text-gray-900 mb-3">Promo Code</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Enter code"
                                        className="flex-1 bg-gray-200/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#0066CC] outline-none"
                                    />
                                    <button className="bg-[#eaf2ff] text-[#0066CC] hover:bg-[#d5e5ff] font-bold px-6 py-3 rounded-xl text-sm transition-colors">
                                        Apply
                                    </button>
                                </div>
                            </div>

                            {/* Proceed button */}
                            <button className="w-full bg-[#0052a3] hover:bg-[#003d7a] text-white font-bold py-4 rounded-full flex justify-center items-center gap-2 transition-colors mb-6 shadow-md shadow-[#0052a3]/20">
                                Proceed to Checkout
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <div className="flex justify-center items-center gap-2 text-xs text-gray-500 font-medium mb-6">
                                <Lock className="w-3.5 h-3.5" />
                                Secure encrypted transaction
                            </div>

                            {/* Payment icons placeholder */}
                            <div className="flex justify-center gap-2">
                                <div className="w-10 h-7 bg-gray-200/80 rounded flex items-center justify-center">
                                    {/* Visa-like placeholder */}
                                    <div className="w-6 h-1.5 bg-gray-300 rounded-sm"></div>
                                </div>
                                <div className="w-10 h-7 bg-gray-200/80 rounded flex items-center justify-center">
                                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                                </div>
                                <div className="w-10 h-7 bg-gray-200/80 rounded flex items-center justify-center">
                                    <div className="w-5 h-3 bg-gray-300 rounded-sm"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CheckoutPage;
