import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    SlidersHorizontal, ChevronDown, ArrowRight,
    Pill, Wind, Baby, Sparkles, Apple, Activity,
    Heart, Leaf, Cross, MessageCircle, Zap, Star, ShieldCheck
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const DEPARTMENTS = [
    { label: 'All Categories', active: true },
    { label: 'Prescription Drugs', active: false },
    { label: 'Over-the-Counter', active: false },
    { label: 'Wellness & Diet', active: false },
    { label: 'Home Healthcare', active: false },
];

const QUICK_ACCESS = [
    'Express Delivery',
    'Top Rated Only',
    'Insurance Covered',
];

const CATEGORIES = [
    {
        icon: Pill,
        name: 'Pain Relief',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        accent: 'text-blue-600',
        desc: 'Effective solutions for headaches, joint pain, and muscle soreness.',
        items: ['Analgesics', 'Topical Creams'],
    },
    {
        icon: Wind,
        name: 'Cold & Cough',
        color: 'text-green-600',
        bg: 'bg-green-50',
        accent: 'text-green-600',
        desc: 'Combat seasonal symptoms with our specialized care products.',
        items: ['Syrups', 'Nasal Sprays'],
    },
    {
        icon: Baby,
        name: 'Baby Care',
        color: 'text-pink-600',
        bg: 'bg-pink-50',
        accent: 'text-pink-500',
        desc: "Gentle and safe essentials for your little one's daily needs.",
        items: ['Diapers & Wipes', 'Baby Food'],
    },
    {
        icon: Sparkles,
        name: 'Skin Care',
        color: 'text-orange-500',
        bg: 'bg-orange-50',
        accent: 'text-orange-500',
        desc: 'Dermatologically tested treatments for all skin types.',
        items: ['Moisturizers', 'Sun Protection'],
    },
    {
        icon: Apple,
        name: 'Vitamins & Supplements',
        color: 'text-yellow-600',
        bg: 'bg-yellow-50',
        accent: 'text-yellow-600',
        desc: 'Boost your daily vitality with premium dietary supplements.',
        items: ['Multivitamins', 'Probiotics'],
    },
    {
        icon: Activity,
        name: 'Diabetes Care',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        accent: 'text-indigo-600',
        desc: 'Comprehensive management tools and monitoring devices.',
        items: ['Glucometers', 'Test Strips'],
    },
    {
        icon: Heart,
        name: 'Heart Care',
        color: 'text-red-600',
        bg: 'bg-red-50',
        accent: 'text-red-500',
        desc: 'Maintain cardiovascular health with monitored support.',
        items: ['BP Monitors', 'Omega-3'],
    },
    {
        icon: Leaf,
        name: 'Digestive Care',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        accent: 'text-emerald-600',
        desc: 'Balanced relief for all your digestive health concerns.',
        items: ['Antacids', 'Laxatives'],
    },
    {
        icon: Cross,
        name: 'First Aid',
        color: 'text-sky-600',
        bg: 'bg-sky-50',
        accent: 'text-sky-600',
        desc: 'Essential kits and equipment for immediate emergency care.',
        items: ['Bandages', 'Antiseptics'],
    },
];

const CategoryCard = ({ cat }) => (
    <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-gray-100 transition-all group cursor-pointer flex flex-col gap-5">
        <div className={`w-14 h-14 ${cat.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <cat.icon className={`w-7 h-7 ${cat.color}`} />
        </div>
        <div>
            <h3 className="text-lg font-extrabold text-gray-900 mb-2">{cat.name}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{cat.desc}</p>
            <ul className="space-y-1.5 mb-5">
                {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full ${cat.bg} border ${cat.color.replace('text-', 'border-')}`} />
                        {item}
                    </li>
                ))}
            </ul>
            <div className={`flex items-center gap-1.5 text-sm font-bold ${cat.accent} group-hover:gap-3 transition-all`}>
                Explore items <ArrowRight className="w-4 h-4" />
            </div>
        </div>
    </div>
);

const BrowseCategoriesPage = () => {
    const [activeFilter, setActiveFilter] = useState('All Categories');
    const [quickFilters, setQuickFilters] = useState({});

    const toggleQuick = (label) => {
        setQuickFilters((prev) => ({ ...prev, [label]: !prev[label] }));
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50/30">
            <Navbar />

            <main className="flex-1 max-w-[1400px] mx-auto w-full px-6 md:px-12 py-10 flex gap-10">
                {/* Left Sidebar */}
                <aside className="hidden lg:flex flex-col gap-8 w-64 flex-shrink-0">
                    {/* Departments */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Main Departments</h4>
                        <ul className="space-y-1">
                            {DEPARTMENTS.map((d) => (
                                <li key={d.label}>
                                    <button
                                        onClick={() => setActiveFilter(d.label)}
                                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeFilter === d.label
                                                ? 'bg-primary text-white shadow-md shadow-primary/20'
                                                : 'text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm'
                                            }`}
                                    >
                                        {d.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Access */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Quick Access</h4>
                        <ul className="space-y-3">
                            {QUICK_ACCESS.map((label) => (
                                <li key={label} className="flex items-center gap-3">
                                    <button
                                        onClick={() => toggleQuick(label)}
                                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${quickFilters[label]
                                                ? 'bg-primary border-primary'
                                                : 'border-gray-300 bg-white'
                                            }`}
                                    >
                                        {quickFilters[label] && (
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </button>
                                    <span className="text-sm font-medium text-gray-600">{label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Need Help */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-6 space-y-4 shadow-sm">
                        <h4 className="font-extrabold text-gray-900">Need Help?</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Chat with our pharmacist for expert advice.</p>
                        <button className="w-full bg-primary text-white py-3 rounded-2xl text-sm font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Consult Now
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
                        <div>
                            <h1 className="text-4xl font-extrabold text-gray-900">Browse Categories</h1>
                            <p className="text-gray-500 mt-2 max-w-md">
                                Find the specialized care you need. Browse our extensive range of certified pharmaceutical products and wellness essentials.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                            <button className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-3 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
                                <SlidersHorizontal className="w-4 h-4" />
                                Filter
                            </button>
                            <button className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-3 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
                                Sort by: Featured
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Category Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {CATEGORIES.map((cat, i) => (
                            <CategoryCard key={i} cat={cat} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BrowseCategoriesPage;
