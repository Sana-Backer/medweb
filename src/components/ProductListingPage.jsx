import React, { useState } from 'react';
import { ShoppingCart, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Placeholder images (we'll use colored divs if images aren't available, but let's emulate the design)
import product1 from '../assets/atorvastatin_product_1775131313326.png';
import product2 from '../assets/multivitamin_bottle_1775125347332.png';
import product3 from '../assets/omega3_capsules_1775125382853.png';
import product4 from '../assets/muscle_relief_gel_bottle_1775125412027.png';
import product5 from '../assets/blood_pressure_monitor_1775125366361.png';

const products = [
    {
        id: 1,
        manufacturer: 'Merck KGaA',
        name: 'Glucophage Relief',
        desc: 'Used to manage type 2 diabetes by controlling blood sugar levels. Helps improve insulin response and prevent complications.',
        dosage: 'Pack of 60 Extended Release Tablets',
        price: 42.00,
        tag: 'PRESCRIPTION REQUIRED',
        tagColor: 'bg-amber-700',
        imageBg: 'bg-gray-50',
        image: product1,
        inCart: false,
        requiresPrescription: true
    },
    {
        id: 2,
        manufacturer: 'Haleon',
        name: 'Ibuprofen 200mg',
        desc: 'Effective for relieving pain from various conditions such as headache, dental pain, and muscle aches. Reduces fever and inflammation.',
        dosage: 'Fast-acting Liquid Gels (50ct)',
        price: 18.50,
        tag: 'IN STOCK',
        tagColor: 'bg-emerald-500',
        imageBg: 'bg-gray-50',
        image: product2,
        inCart: true,
        requiresPrescription: false
    },
    {
        id: 3,
        manufacturer: "Nature's Own Pharma",
        name: 'Vitamin D3 1000IU',
        desc: 'Crucial for bone health, immune function, and overall well-being. Helps the body absorb calcium and maintain optimal wellness.',
        dosage: 'Bone Health Support (120 Softgels)',
        price: 24.99,
        tag: 'LOW STOCK',
        tagColor: 'bg-orange-400',
        imageBg: 'bg-gray-50',
        image: product3,
        inCart: false,
        requiresPrescription: false
    },
    {
        id: 4,
        manufacturer: 'Procter & Gamble',
        name: 'DayQuil & NyQuil',
        desc: 'Provides powerful multi-symptom relief for cough, cold, and flu symptoms. Non-drowsy DayQuil for work and NyQuil for restful sleep.',
        dosage: 'Severe Relief Combo Pack (24 LiquiCaps)',
        price: 15.99,
        imageBg: 'bg-gray-50',
        image: product4,
        inCart: true,
        requiresPrescription: false
    },
    {
        id: 5,
        manufacturer: 'Omron Healthcare',
        name: 'BP Monitor Series 7',
        desc: 'Professional-grade monitoring at home. Track heart rate and blood pressure with clinical accuracy and sync with your smartphone.',
        dosage: 'Wireless Upper Arm Blood Pressure Monitor',
        price: 89.99,
        imageBg: 'bg-gray-50',
        image: product5,
        inCart: true,
        requiresPrescription: false
    },
    {
        id: 6,
        manufacturer: 'Bayer AG',
        name: 'Loratadine 10mg',
        desc: 'Long-lasting, non-drowsy relief from allergy symptoms such as runny nose, itchy watery eyes, and sneezing caused by triggers.',
        dosage: 'Non-Drowsy 24-Hour Allergy Relief (30ct)',
        price: 21.50,
        imageBg: 'bg-gray-50',
        image: product1,
        inCart: true,
        requiresPrescription: false
    }
];

const ProductListingPage = () => {
    const [priceRange, setPriceRange] = useState(50);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
            <Navbar />

            <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-8 py-7">

                {/* Header Section */}
                <div className="mb-6 text-center lg:text-left">
                    <h1 className="text-4xl font-black text-[#004c99] mb-1 tracking-tight">Our Pharmacy Store</h1>
                    <p className="text-gray-500 text-base max-w-2xl font-medium">Premium pharmaceutical care and healthcare products delivered to your doorstep with clinical precision.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
                        {/* Category */}
                        <div>
                            <h3 className="font-extrabold text-[#004c99] mb-4 text-sm uppercase tracking-wider">Category</h3>
                            <div className="space-y-3">
                                {['Pain Relief', 'Cold & Cough', 'Vitamins & Supplements', 'Diabetes Care'].map((item, idx) => (
                                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded-md border-gray-300 text-blue-600 focus:ring-blue-500 transition-all"
                                            defaultChecked={idx === 0}
                                        />
                                        <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors font-medium">{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div>
                            <h3 className="font-extrabold text-[#004c99] mb-4 text-sm uppercase tracking-wider">Availability</h3>
                            <div className="space-y-3">
                                {[
                                    { id: 'instock', label: 'In Stock', checked: true },
                                    { id: 'prescription', label: 'Prescription Ready', checked: false }
                                ].map((item, idx) => (
                                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="availability"
                                            defaultChecked={item.checked}
                                            className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors font-medium">{item.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Range */}
                        <div>
                            <h3 className="font-extrabold text-[#004c99] mb-4 text-sm uppercase tracking-wider">Price Range</h3>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between items-center mt-3 text-xs text-gray-700 font-bold uppercase">
                                <span>₹0</span>
                                <span>₹500+</span>
                            </div>
                        </div>

                        {/* Top Brands */}
                        <div>
                            <h3 className="font-extrabold text-[#004c99] mb-4 text-sm uppercase tracking-wider">Top Brands</h3>
                            <div className="space-y-3">
                                {['Novartis', 'Pfizer', 'Bayer', 'Merck'].map((item, idx) => (
                                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded-md border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors font-medium">{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Medical Disclaimer */}
                        <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-[13px] text-amber-800 mb-6 flex items-start gap-4 shadow-sm">
                            <span className="text-xl">⚠️</span>
                            <div>
                                <p className="font-black uppercase tracking-wider text-[11px] mb-1">Medical Disclaimer</p>
                                <p className="font-medium">Medicines are sold only on valid prescription. Please consult a registered medical practitioner before use. Inform your pharmacist about other medications you are taking to avoid potential drug interactions.</p>
                            </div>
                        </div>

                        {/* Toolbar */}
                        <div className="flex flex-wrap flex-col sm:flex-row justify-between items-center mb-6 pb-2 border-b border-gray-200 gap-4">
                            <p className="text-gray-500 text-sm font-bold tracking-tight">Showing 6 of 48 products</p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500 font-semibold uppercase text-[10px] tracking-widest">Sort by:</span>
                                <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-sm">
                                    Popularity
                                    <ChevronDown className="w-4 h-4 text-blue-600" />
                                </button>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {products.map((product) => (
                                <div key={product.id} className="bg-white rounded-[2rem] p-5 shadow-sm border border-gray-100 transition-all hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 group flex flex-col">
                                    {/* Image Card */}
                                    <Link to="/product-detail" className={`block w-full aspect-square rounded-3xl relative mb-6 overflow-hidden flex items-center justify-center ${product.imageBg} overflow-hidden`}>
                                        {product.tag && (
                                            <div className={`absolute top-4 left-4 ${product.tagColor} text-white text-[9px] uppercase font-black px-2.5 py-1.5 flex items-center rounded-lg shadow-lg z-10 tracking-widest`}>
                                                {product.tag}
                                            </div>
                                        )}
                                        <img src={product.image} alt={product.name} className="w-full h-full object-contain p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out" />
                                        
                                        {/* Overlay with View Details for hover */}
                                        <div className="absolute inset-0 bg-[#004c99]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="bg-white text-[#004c99] font-bold py-2 px-6 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Product</span>
                                        </div>
                                    </Link>

                                    {/* Product Info */}
                                    <div className="px-1 flex-1 flex flex-col">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="text-teal-600 text-[10px] font-black uppercase tracking-[0.15em]">{product.manufacturer}</p>
                                            <span className="text-xs text-gray-400 font-bold">{product.dosage.split('(')[0]}</span>
                                        </div>
                                        
                                        <Link to="/product-detail" className="block mb-2">
                                            <h3 className="font-extrabold text-gray-900 text-xl leading-tight hover:text-[#004c99] transition-colors">{product.name}</h3>
                                        </Link>
                                        
                                        <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-3 h-14 font-medium">
                                            {product.desc}
                                        </p>

                                        <div className="mt-auto space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pricing</span>
                                                    <span className="text-2xl font-black text-[#004c99]">₹{product.price.toFixed(2)}</span>
                                                </div>
                                                
                                                {product.requiresPrescription ? (
                                                    <div className="group/pop relative">
                                                        <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-300 cursor-not-allowed">
                                                            <ShoppingCart className="w-5 h-5" />
                                                        </div>
                                                        <span className="absolute bottom-full right-0 mb-2 w-32 bg-gray-900 text-white text-[10px] p-2 rounded-lg opacity-0 group-hover/pop:opacity-100 transition-opacity pointer-events-none text-center">
                                                            Requires Prescription to Purchase
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <button className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${product.inCart
                                                        ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 hover:bg-blue-700'
                                                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'
                                                        }`}>
                                                        <ShoppingCart className="w-5 h-5" />
                                                    </button>
                                                )}
                                            </div>

                                            {product.requiresPrescription && (
                                                <button className="w-full bg-[#f57c00] hover:bg-[#e65100] text-white py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-md active:scale-95">
                                                    Upload Prescription
                                                </button>
                                            )}

                                            <Link 
                                                to="/product-detail" 
                                                className="block w-full text-center bg-gray-900 text-white py-3.5 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-200"
                                            >
                                                View Full Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trust Signals */}
                        <div className="mt-20 py-10 border-t border-gray-200 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                           <div className="flex items-center gap-3">
                               <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-lg">✔</div>
                               <span className="text-sm font-extrabold text-gray-900 uppercase tracking-widest">Licensed Pharmacy</span>
                           </div>
                           <div className="flex items-center gap-3">
                               <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 font-bold text-lg">✔</div>
                               <span className="text-sm font-extrabold text-gray-900 uppercase tracking-widest">100% Genuine</span>
                           </div>
                           <div className="flex items-center gap-3">
                               <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-lg">✔</div>
                               <span className="text-sm font-extrabold text-gray-900 uppercase tracking-widest">Razorpay Secure</span>
                           </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-2 mt-12 pb-10">
                            <button className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white border border-gray-200 text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-all shadow-sm">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-2xl bg-blue-600 text-white font-black text-sm shadow-xl shadow-blue-200">
                                1
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white border border-gray-200 text-gray-700 font-bold text-sm hover:bg-blue-50 transition-all shadow-sm">
                                2
                            </button>
                            <span className="text-gray-400 mx-2">•••</span>
                            <button className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white border border-gray-200 text-gray-700 font-bold text-sm hover:bg-blue-50 transition-all shadow-sm">
                                12
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white border border-gray-200 text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-all shadow-sm">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProductListingPage;
