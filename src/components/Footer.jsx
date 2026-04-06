import { Send, Globe, Camera, Briefcase, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white pt-24 pb-12 border-t border-gray-100 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="space-y-6">
                    <div className="text-primary font-extrabold text-2xl">
                        Dreams<span className="text-primary-dark">Pharma</span>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-sm">
                        Empowering healthier lives through technology-driven pharmaceutical care and human compassion.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"><Globe className="w-5 h-5" /></a>
                        <a href="#" className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"><Send className="w-5 h-5" /></a>
                        <a href="#" className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"><Camera className="w-5 h-5" /></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Services</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-500">
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Support Center</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Drug Safety</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Resources</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-500">
                        <li><a href="#" className="hover:text-primary transition-colors">Health Resources</a></li>
                        <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        <li><Link to="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link></li>
                        <li><Link to="/shipping-policy" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
                    </ul>
                </div>


                <div>
                    <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Stay Updated</h4>
                    <p className="text-sm text-gray-500 mb-4 font-medium">Get health tips and office reference to your inbox.</p>
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-6 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                        />
                        <button className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-12 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-gray-400 text-sm font-medium">
                    © {new Date().getFullYear()} Dreams<span className="text-primary-dark">Pharma</span>. All Rights Reserved.
                </div>
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <ShieldCheck className="w-4 h-4" />
                        FDA Approved
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <Heart className="w-4 h-4" />
                        PCI DSS Secure
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
