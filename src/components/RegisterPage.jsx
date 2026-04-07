import React from 'react';
import { ShieldCheck, Truck, Phone, User, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import loginBg from '../assets/login_bg_1775130595685.png';
import Navbar from './Navbar';

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-1 flex flex-col lg:flex-row">
                {/* Left Side: Branding & Visuals (Matching Login) */}
                <div className="hidden lg:flex lg:w-1/2 relative bg-primary/10 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={loginBg}
                            alt="Medical Professional"
                            className="w-full h-full object-cover opacity-60 mix-blend-multiply"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
                    </div>

                    <div className="relative z-10 px-10 flex flex-col justify-center max-w-2xl">
                        <h1 className="text-5xl font-black text-gray-900 leading-tight mb-4">
                            Join Our <br />
                            Health Network.
                        </h1>
                        <p className="text-xl text-gray-700 leading-relaxed mb-5">
                            Create an account to start managing your health profile and access premium pharmacy services.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/80 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-white/50 space-y-3">
                                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Secure Profile</div>
                                    <div className="text-sm text-gray-500">HIPAA compliant</div>
                                </div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-white/50 space-y-3">
                                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                                    <Truck className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Member Perks</div>
                                    <div className="text-sm text-gray-500">Free shipping always</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Register Form */}
                <div className="flex-1 flex items-center justify-center p-8 md:p-10 lg:p-5 bg-white">
                    <div className="w-full max-w-md space-y-5">
                        <div className="space-y-1">
                            <h2 className="text-3xl font-black text-gray-900">Create Account</h2>
                            <p className="text-gray-500">Start your journey to better healthcare.</p>
                        </div>

                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs text-gray-700 ml-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-gray-50 border border-transparent focus:border-primary/20 focus:bg-white rounded-2xl py-4 pl-12 pr-6 text-sm transition-all focus:ring-4 focus:ring-primary/5 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs text-gray-700 ml-1">Email or Mobile Number</label>
                                <div className="relative">
                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="example@email.com"
                                        className="w-full bg-gray-50 border border-transparent focus:border-primary/20 focus:bg-white rounded-2xl py-4 pl-12 pr-6 text-sm transition-all focus:ring-4 focus:ring-primary/5 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs text-gray-700 ml-1">Create Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="password"
                                        placeholder="********"
                                        className="w-full bg-gray-50 border border-transparent focus:border-primary/20 focus:bg-white rounded-2xl py-4 pl-12 pr-6 text-sm transition-all focus:ring-4 focus:ring-primary/5 outline-none"
                                    />
                                </div>
                            </div>

                            <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-95">
                                Sign Up
                            </button>
                        </form>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-100"></div>
                            </div>
                            <div className="relative flex justify-center text-xs font-medium uppercase tracking-widest text-gray-400">
                                <span className="bg-white px-4">Or sign up with</span>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <button className="w-full bg-gray-50 text-gray-700 py-2 rounded-2xl hover:bg-gray-100 transition-all flex items-center justify-center gap-3 group text-sm font-semibold">
                                <Phone className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                Sign up with Mobile OTP
                            </button>

                            <div className="text-center text-sm font-medium text-gray-500">
                                Already have an account? <Link to="/login" className="font-bold text-primary hover:underline">Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RegisterPage;
