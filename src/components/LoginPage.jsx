import React from 'react';
import { ShieldCheck, Truck, Phone, ArrowRight } from 'lucide-react';
import loginBg from '../assets/login_bg_1775130595685.png';
import Navbar from './Navbar';

const LoginPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-1 flex flex-col lg:flex-row">
                {/* Left Side: Branding & Visuals */}
                <div className="hidden lg:flex lg:w-1/2 relative bg-primary/10 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={loginBg}
                            alt="Medical Professional"
                            className="w-full h-full object-cover opacity-60 mix-blend-multiply"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
                    </div>

                    <div className="relative z-10 p-16 flex flex-col justify-center max-w-2xl">
                        <h1 className="text-5xl font-black text-gray-900 leading-tight mb-6">
                            Your Health, <br />
                            Our Promise.
                        </h1>
                        <p className="text-xl text-gray-700 leading-relaxed mb-12">
                            Experience a smarter way to manage your prescriptions with our personalized pharmacy care and express delivery.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50 space-y-3">
                                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Certified Care</div>
                                    <div className="text-sm text-gray-500">Pharmacist verified</div>
                                </div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50 space-y-3">
                                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                                    <Truck className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Fast Track</div>
                                    <div className="text-sm text-gray-500">24hr Home delivery</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="flex-1 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white">
                    <div className="w-full max-w-md space-y-10">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black text-gray-900">Welcome back</h2>
                            <p className="text-gray-500">Access your prescriptions and health records.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Email or Mobile Number</label>
                                <input
                                    type="text"
                                    placeholder="example@email.com"
                                    className="w-full bg-gray-50 border border-transparent focus:border-primary/20 focus:bg-white rounded-2xl py-4 px-6 text-sm transition-all focus:ring-4 focus:ring-primary/5 outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between px-1">
                                    <label className="text-sm font-bold text-gray-700">Password</label>
                                    <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot Password?</a>
                                </div>
                                <input
                                    type="password"
                                    placeholder="********"
                                    className="w-full bg-gray-50 border border-transparent focus:border-primary/20 focus:bg-white rounded-2xl py-4 px-6 text-sm transition-all focus:ring-4 focus:ring-primary/5 outline-none"
                                />
                            </div>

                            <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-95">
                                Sign In
                            </button>
                        </form>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-100"></div>
                            </div>
                            <div className="relative flex justify-center text-xs font-bold uppercase tracking-widest text-gray-400">
                                <span className="bg-white px-4">Or continue with</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <button className="w-full bg-gray-50 text-gray-700 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-3 group">
                                <Phone className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                Login with OTP
                            </button>

                            <div className="text-center text-sm font-medium text-gray-500">
                                New User? <a href="#" className="font-bold text-primary hover:underline">Create Account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LoginPage;
