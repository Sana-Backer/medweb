import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-primary/5">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <div className="flex justify-center flex-col items-center gap-4">
                    <Quote className="w-16 h-16 text-primary/20 fill-primary/10" />
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight italic">
                        "Dreams Pharma changed the way I manage my elderly parents' medication. The reminders and fast delivery are lifesavers."
                    </h2>
                </div>

                <div className="flex flex-col items-center gap-3">
                    <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                        <img
                            src="https://i.pravatar.cc/150?u=sarah"
                            alt="Sarah Mitchell"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-gray-900 text-lg">Sarah Mitchell</div>
                        <div className="text-primary font-medium">Verified Customer, New Delhi</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
