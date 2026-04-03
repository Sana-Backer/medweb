import React from 'react';
import { Pill, Baby, Sparkles, HeartPulse, Heart, Apple, ChevronRight } from 'lucide-react';

const categories = [
    { name: 'Pain Relief', icon: Pill, color: 'bg-blue-50', iconColor: 'text-blue-600' },
    { name: 'Baby Care', icon: Baby, color: 'bg-indigo-50', iconColor: 'text-indigo-600' },
    { name: 'Skin Care', icon: Sparkles, color: 'bg-pink-50', iconColor: 'text-pink-600' },
    { name: 'Wellness', icon: HeartPulse, color: 'bg-teal-50', iconColor: 'text-teal-600' },
    { name: 'Heart Care', icon: Heart, color: 'bg-red-50', iconColor: 'text-red-600' },
    { name: 'Nutrition', icon: Apple, color: 'bg-orange-50', iconColor: 'text-orange-600' },
];

const Categories = () => {
    return (
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
                <div className="space-y-2">
                    <h2 className="text-3xl font-extrabold text-gray-900">Shop by Popular Category</h2>
                    <p className="text-gray-500">Top searched and needed health essentials.</p>
                </div>
                <button className="flex items-center gap-1 text-primary font-bold hover:underline group">
                    View All Categories
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.map((cat, i) => (
                    <div
                        key={i}
                        className="group bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:shadow-gray-200/50 transition-all cursor-pointer hover:-translate-y-1"
                    >
                        <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <cat.icon className={`w-8 h-8 ${cat.iconColor}`} />
                        </div>
                        <span className="font-bold text-gray-700 text-sm">{cat.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
