import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ShoppingCart, Zap, ChevronRight, Minus, Plus, Shield,
    Truck, AlertTriangle, Package, Info, CheckCircle, MessageCircle
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import prod1 from '../assets/multivitamin_bottle_1775125347332.png';
import prod2 from '../assets/blood_pressure_monitor_1775125366361.png';
import prod3 from '../assets/omega3_capsules_1775125382853.png';
import prod4 from '../assets/muscle_relief_gel_bottle_1775125412027.png';
import productImg from '../assets/atorvastatin_product_1775131313326.png';

const relatedProducts = [
    { image: prod3, category: 'SUPPLEMENTS', name: 'Premium Omega-3', price: 24.99 },
    { image: prod2, category: 'DEVICES', name: 'Smart BP Monitor', price: 59.00 },
    { image: prod1, category: 'SUPPLEMENTS', name: 'CoQ10 100mg', price: 32.50 },
    { image: prod4, category: 'PROFESSIONAL', name: 'Clinical Stethoscope', price: 85.00 },
];

const ProductDetailPage = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(q => q + 1);
    const decrement = () => setQuantity(q => Math.max(1, q - 1));

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-100 px-6 md:px-12 py-3">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-500">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="hover:text-primary cursor-pointer transition-colors">Medicines</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="hover:text-primary cursor-pointer transition-colors">Heart Care</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="font-bold text-gray-900">Atorvastatin</span>
                </div>
            </div>

            <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-12">
                {/* Product Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    {/* Left: Product Image */}
                    <div>
                        <div className="rounded-3xl bg-gray-50 border border-gray-100 p-12 flex items-center justify-center aspect-square relative overflow-hidden">
                            <img
                                src={productImg}
                                alt="Atorvastatin 20mg"
                                className="max-w-full max-h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        {/* Pharmacist Badge */}
                        <div className="mt-6 flex items-center gap-4 bg-green-50 border border-green-100 rounded-2xl px-6 py-4">
                            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-900 text-sm">Verified Pharmacist Approved</div>
                                <div className="text-xs text-gray-500">Quality checks complete</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="space-y-8">
                        {/* Prescription badge */}
                        <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-200">
                            <AlertTriangle className="w-3 h-3" />
                            Prescription Required
                        </div>

                        <div>
                            <h1 className="text-4xl font-black text-primary mb-2">Atorvastatin 20mg</h1>
                            <p className="text-gray-500 font-medium">Manufactured by LipiCore Pharmaceuticals</p>
                        </div>

                        <div className="flex items-baseline gap-3">
                            <span className="text-4xl font-extrabold text-gray-900">₹18.50</span>
                            <span className="text-gray-400 font-medium">/ 30 Tablets Pack</span>
                        </div>

                        {/* Quantity & CTA */}
                        <div className="space-y-5">
                            <div className="flex items-center gap-6">
                                <span className="text-sm font-bold text-gray-700">Quantity</span>
                                <div className="flex items-center gap-4 bg-gray-100 rounded-2xl px-2 py-2">
                                    <button
                                        onClick={decrement}
                                        className="w-9 h-9 bg-white rounded-xl shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
                                    >
                                        <Minus className="w-4 h-4 text-gray-600" />
                                    </button>
                                    <span className="font-bold text-gray-900 w-6 text-center">{quantity}</span>
                                    <button
                                        onClick={increment}
                                        className="w-9 h-9 bg-white rounded-xl shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
                                    >
                                        <Plus className="w-4 h-4 text-gray-600" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 hover:scale-[1.02]">
                                    <ShoppingCart className="w-5 h-5" />
                                    Add to Cart
                                </button>
                                <Link to="/checkout" className="flex-1 flex items-center justify-center gap-2 bg-teal-500 text-white py-4 rounded-2xl font-bold hover:bg-teal-600 transition-all">
                                    <Zap className="w-5 h-5" />
                                    Buy Now
                                </Link>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                                <Truck className="w-4 h-4" />
                                Safe &amp; Secure Shipping (2–3 business days)
                            </div>
                        </div>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            {[
                                { icon: Package, label: 'Tablet Form' },
                                { icon: Shield, label: 'Clinical Grade' },
                                { icon: CheckCircle, label: 'Sustainable Packaging' }
                            ].map((tag, i) => (
                                <div key={i} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-xs font-bold text-gray-600">
                                    <tag.icon className="w-3.5 h-3.5 text-gray-400" />
                                    {tag.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Description Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Product Description</h2>
                            <p className="text-gray-600 leading-[1.9]">
                                Atorvastatin belongs to a group of medicines called statins. It works by reducing the amount of cholesterol made by the liver. Lowering "bad" cholesterol and triglycerides and raising "good" cholesterol decreases the risk of heart disease and helps prevent strokes and heart attacks. This premium pharmaceutical preparation is formulated for optimal absorption and stability.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Usage */}
                            <div className="bg-blue-50/60 border border-blue-100 rounded-3xl p-8 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <Info className="w-4 h-4 text-primary" />
                                    </div>
                                    <h3 className="font-extrabold text-gray-900">Usage</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        Take exactly as prescribed by your doctor.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        Can be taken with or without food.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        Take at the same time each day.
                                    </li>
                                </ul>
                            </div>

                            {/* Dosage Form */}
                            <div className="bg-blue-50/60 border border-blue-100 rounded-3xl p-8 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <Package className="w-4 h-4 text-primary" />
                                    </div>
                                    <h3 className="font-extrabold text-gray-900">Dosage Form</h3>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Each film-coated tablet contains 20mg of Atorvastatin calcium.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                    In Stock
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Important Notice Sidebar */}
                    <div className="bg-amber-700 text-white rounded-3xl p-8 flex flex-col justify-between gap-8 h-full">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <AlertTriangle className="w-5 h-5 text-amber-200 flex-shrink-0" />
                                <h3 className="font-extrabold text-lg">Important Notice</h3>
                            </div>
                            <p className="text-amber-100 text-sm leading-relaxed">
                                Always consult your physician before starting Atorvastatin. Inform your pharmacist about other medications you are taking to avoid potential drug interactions.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="text-sm font-bold text-amber-200">Need a consultation?</div>
                            <button className="w-full bg-white text-amber-800 py-3 rounded-2xl font-bold text-sm hover:bg-amber-50 transition-colors flex items-center justify-center gap-2">
                                <MessageCircle className="w-4 h-4" />
                                Talk to a Pharmacist
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div>
                    <div className="flex items-end justify-between mb-10">
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900">Support Your Heart Health</h2>
                            <p className="text-gray-500 mt-1">Patients who take Atorvastatin also find these helpful.</p>
                        </div>
                        <button className="flex items-center gap-1 text-primary font-bold hover:underline group text-sm">
                            View All Care
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {relatedProducts.map((product, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="bg-gray-50 rounded-3xl overflow-hidden mb-4 aspect-square flex items-center justify-center p-6 border border-gray-100 group-hover:shadow-xl transition-all">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="space-y-1 px-1">
                                    <div className="text-[10px] font-bold text-teal-600 uppercase tracking-widest">{product.category}</div>
                                    <div className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors">{product.name}</div>
                                    <div className="flex items-center justify-between pt-1">
                                        <span className="text-lg font-extrabold text-gray-900">₹{product.price.toFixed(2)}</span>
                                        <button className="w-9 h-9 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetailPage;
