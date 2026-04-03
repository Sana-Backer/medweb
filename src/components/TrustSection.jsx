import React from 'react';
import { Zap, ShieldCheck, CreditCard, Headphones, UserCircle } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: 'Fast Delivery',
        desc: 'Guaranteed next-day delivery for all essential healthcare products.',
        color: 'blue'
    },
    {
        icon: ShieldCheck,
        title: 'Certified Pharmacists',
        desc: 'Every order is double-checked by our licensed pharmacist professionals.',
        color: 'teal'
    },
    {
        icon: CreditCard,
        title: 'Secure Payments',
        desc: 'Enterprise-grade encryption for all medical data and payment transactions.',
        color: 'indigo'
    },
    {
        icon: Headphones,
        title: '24/7 Support',
        desc: 'Our health experts are available around the clock for any consultations.',
        color: 'violet'
    }
];

const TrustSection = () => {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((f, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group">
                        <div className={`w-12 h-12 bg-${f.color}-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${f.color}-600 group-hover:text-white transition-colors`}>
                            <f.icon className={`w-6 h-6 text-${f.color}-600 group-hover:text-white`} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>

            <div className="flex-1 space-y-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Your Health, <br />
                    <span className="text-primary">Protected by Experts</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    We combine cutting-edge logistics with traditional pharmaceutical care to ensure you never have to worry about your medications again.
                </p>

                <div className="inline-flex items-center gap-6 bg-blue-50/50 p-6 rounded-3xl border border-blue-100 group cursor-default">
                    <div className="flex -space-x-4">
                        <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                            <img src="https://i.pravatar.cc/150?u=doc1" alt="Doctor" />
                        </div>
                        <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                            <img src="https://i.pravatar.cc/150?u=doc2" alt="Doctor" />
                        </div>
                        <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                            <img src="https://i.pravatar.cc/150?u=doc3" alt="Doctor" />
                        </div>
                    </div>
                    <div>
                        <div className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">5,000+ Doctor Network</div>
                        <div className="text-sm text-gray-500">Trusted by healthcare providers nationwide</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
