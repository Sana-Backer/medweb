import React from 'react';
import { Search, FileText, Truck } from 'lucide-react';

const steps = [
    {
        number: '1',
        title: 'Search Medicine',
        description: 'Search from over 20,000 certified medicines and health products in our database.',
        icon: Search,
        color: 'bg-blue-600',
    },
    {
        number: '2',
        title: 'Upload Prescription',
        description: 'Snap a photo of your prescription. Our pharmacists will verify it within minutes.',
        icon: FileText,
        color: 'bg-teal-600',
    },
    {
        number: '3',
        title: 'Doorstep Delivery',
        description: 'Get your order delivered securely at your preferred time. Real-time tracking included.',
        icon: Truck,
        color: 'bg-orange-600',
    },
];

const ProcessSteps = () => {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
            <div className="max-w-2xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">Effortless Ordering Process</h2>
                <p className="text-gray-500 text-lg">Skip the pharmacy lines with our streamlined 3-step digital prescription service.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connector lines (Desktop) */}
                <div className="hidden md:block absolute top-[45px] left-[20%] right-[20%] h-0.5 bg-dashed bg-gray-100 -z-10" />

                {steps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center gap-6 group">
                        <div className={`w-20 h-20 ${step.color} text-white rounded-3xl flex items-center justify-center text-3xl font-black shadow-xl shadow-gray-200 group-hover:scale-110 transition-transform cursor-default relative`}>
                            {step.number}
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-xl shadow-lg flex items-center justify-center">
                                <step.icon className={`w-4 h-4 text-gray-700`} />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProcessSteps;
