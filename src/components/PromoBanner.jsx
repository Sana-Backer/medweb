import React from 'react';

const PromoBanner = () => {
    return (
        <div className="bg-primary text-white py-3 px-6 text-center text-sm font-semibold tracking-wide">
            <div className="flex items-center justify-center gap-4">
                <span>Get 10% Off Your First Order with code: <span className="underline decoration-2 underline-offset-4 font-bold bg-white/20 px-2 py-0.5 rounded ml-1">WELCOME10</span></span>
                <a href="#" className="text-white/80 hover:text-white transition-colors border-l border-white/20 pl-4 ml-4 hidden sm:inline">Terms apply</a>
            </div>
        </div>
    );
};

export default PromoBanner;
