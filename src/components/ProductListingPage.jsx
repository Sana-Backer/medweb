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
        brand: 'Metformin 500mg',
        name: 'Glucophage Relief',
        desc: 'Pack of 60 Extended Release Tablets',
        price: 42.00,
        tag: 'PRESCRIPTION REQUIRED',
        tagColor: 'bg-amber-700',
        imageBg: 'bg-gray-50',
        image: product1,
        inCart: false
    },
    {
        id: 2,
        brand: 'Advil',
        name: 'Ibuprofen 200mg',
        desc: 'Fast-acting Liquid Gels (50ct)',
        price: 18.50,
        tag: 'IN STOCK',
        tagColor: 'bg-emerald-500',
        imageBg: 'bg-gray-50',
        image: product2,
        inCart: true
    },
    {
        id: 3,
        brand: "Nature's Own",
        name: 'Vitamin D3 1000IU',
        desc: 'Bone Health Support (120 Softgels)',
        price: 24.99,
        tag: 'LOW STOCK',
        tagColor: 'bg-orange-400',
        imageBg: 'bg-gray-50',
        image: product3,
        inCart: false
    },
    {
        id: 4,
        brand: 'Vicks',
        name: 'DayQuil & NyQuil',
        desc: 'Severe Relief Combo Pack (24 LiquiCaps)',
        price: 15.99,
        imageBg: 'bg-gray-50',
        image: product4,
        inCart: true
    },
    {
        id: 5,
        brand: 'Omron',
        name: 'BP Monitor Series 7',
        desc: 'Wireless Upper Arm Blood Pressure Monitor',
        price: 89.99,
        imageBg: 'bg-gray-50',
        image: product5,
        inCart: true
    },
    {
        id: 6,
        brand: 'Claritin',
        name: 'Loratadine 10mg',
        desc: 'Non-Drowsy 24-Hour Allergy Relief (30ct)',
        price: 21.50,
        imageBg: 'bg-gray-50',
        image: product1,
        inCart: true
    }
];

const ProductListingPage = () => {
    const [priceRange, setPriceRange] = useState(50);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
            <Navbar />

            <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-8 py-7">

                {/* Header Section */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-[#004c99] mb-2">Our Pharmacy Store</h1>
                    <p className="text-gray-500 text-sm">High-quality pharmaceutical care delivered to your doorstep.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
                        {/* Category */}
                        <div>
                            <h3 className="font-bold text-blue-900 mb-4 text-sm">Category</h3>
                            <div className="space-y-3">
                                {['Pain Relief', 'Cold & Cough', 'Vitamins & Supplements', 'Diabetes Care'].map((item, idx) => (
                                    <label key={idx} className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            defaultChecked={idx === 0}
                                        />
                                        <span className="text-sm text-gray-600">{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div>
                            <h3 className="font-bold text-blue-900 mb-4 text-sm">Availability</h3>
                            <div className="space-y-3">
                                {[
                                    { id: 'instock', label: 'In Stock', checked: true },
                                    { id: 'prescription', label: 'Prescription Ready', checked: false }
                                ].map((item, idx) => (
                                    <label key={idx} className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="availability"
                                            defaultChecked={item.checked}
                                            className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-600">{item.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Range */}
                        <div>
                            <h3 className="font-bold text-blue-900 mb-4 text-sm">Price Range</h3>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="flex justify-between items-center mt-3 text-xs text-gray-600 font-medium">
                                <span>₹0</span>
                                <span>₹500+</span>
                            </div>
                        </div>

                        {/* Top Brands */}
                        <div>
                            <h3 className="font-bold text-blue-900 mb-4 text-sm">Top Brands</h3>
                            <div className="space-y-3">
                                {['Novartis', 'Pfizer'].map((item, idx) => (
                                    <label key={idx} className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-600">{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-wrap flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-gray-200 gap-4">
                            <p className="text-gray-500 text-sm font-medium">Showing 12 of 48 products</p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500 font-medium">Sort by:</span>
                                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 transition-colors">
                                    Popularity
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {products.map((product) => (
                                <div key={product.id} className="bg-white rounded-3xl p-4 transition-all hover:shadow-xl hover:-translate-y-1">
                                    {/* Image Card */}
                                    <Link to="/product-detail" className={`block w-full aspect-square rounded-2xl relative mb-5 overflow-hidden flex items-center justify-center ${product.imageBg} group`}>
                                        {product.tag && (
                                            <div className={`absolute top-3 left-3 ${product.tagColor} text-white text-[10px] uppercase font-bold px-2 py-1 flex items-center rounded z-10`}>
                                                {product.tag}
                                            </div>
                                        )}
                                        <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4 mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                                    </Link>

                                    {/* Product Info */}
                                    <div className="px-2">
                                        <p className="text-teal-600 text-[11px] font-bold uppercase tracking-wider mb-1">{product.brand}</p>
                                        <Link to="/product-detail" className="block">
                                            <h3 className="font-bold text-gray-900 text-base mb-1 truncate hover:text-[#004c99] transition-colors">{product.name}</h3>
                                        </Link>
                                        <p className="text-gray-400 text-xs mb-4 line-clamp-2 h-8">{product.desc}</p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold text-blue-900">₹{product.price.toFixed(2)}</span>
                                            <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${product.inCart
                                                ? 'bg-blue-600 text-white shadow-md shadow-blue-200 hover:bg-blue-700'
                                                : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'
                                                }`}>
                                                <ShoppingCart className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-2 mt-8">
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xs shadow-md">
                                1
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 font-bold text-xs hover:bg-gray-200 transition-colors">
                                2
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 font-bold text-xs hover:bg-gray-200 transition-colors">
                                3
                            </button>
                            <span className="text-gray-400">...</span>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 font-bold text-xs hover:bg-gray-200 transition-colors">
                                12
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
                                <ChevronRight className="w-4 h-4" />
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
