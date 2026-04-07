import { Send, Globe, Camera, Briefcase, ShieldCheck, Heart, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white pt-8 pb-2 border-t border-gray-100 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <div className="text-primary font-extrabold text-2xl">
                        Dreams<span className="text-primary-dark">Pharma</span>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-sm">
                        Empowering healthier lives through technology-driven pharmaceutical care and human compassion.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 group cursor-default">
                            <MapPin className="w-4 h-4 text-gray-400 group-hover:text-[#004c99] transition-colors flex-shrink-0" />
                            <span className="text-sm text-gray-500 leading-relaxed group-hover:text-primary-dark transition-colors">
                                7/815,7/816, Dreams pharma , Krishna complex 1st floor , Marutharoad PO , Palakkad -678007
                            </span>
                        </div>

                        <a href="mailto:support@dreamspharma.com" className="flex items-center gap-3 group">
                            <Mail className="w-4 h-4 text-gray-400 group-hover:text-[#004c99] transition-colors flex-shrink-0" />
                            <span className="text-sm text-gray-500 font-medium group-hover:text-[#004c99] transition-colors">admin@dreamspharma.in</span>
                        </a>

                        <a href="tel:+918001234567" className="flex items-center gap-3 group">
                            <Phone className="w-4 h-4 text-gray-400 group-hover:text-[#004c99] transition-colors flex-shrink-0" />
                            <span className="text-sm text-gray-500 font-medium group-hover:text-[#004c99] transition-colors">+91 9995432343</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4 pt-1">
                        <a href="#" className="w-10 h-10 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-[#004c99] hover:text-white transition-all shadow-sm"><Globe className="w-5 h-5" /></a>
                        <a href="#" className="w-10 h-10 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-[#004c99] hover:text-white transition-all shadow-sm"><Send className="w-5 h-5" /></a>
                        <a href="#" className="w-10 h-10 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-[#004c99] hover:text-white transition-all shadow-sm"><Camera className="w-5 h-5" /></a>
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
                    <div className="flex flex-col gap-3 text-sm text-gray-500">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms">Terms & Conditions</Link>
                        <Link to="/refund-policy">Refund Policy</Link>
                        <Link to="/shipping-policy">Shipping Policy</Link>
                    </div>
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

            <div className="max-w-7xl mx-auto pt-5 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-gray-400 text-sm font-medium">
                    © {new Date().getFullYear()} Dreams<span className="text-primary-dark">Pharma</span>. All Rights Reserved.
                </div>
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 text-gray-400 text-xs ">
                        <ShieldCheck className="w-4 h-4" />
                        Licensed Pharmacy
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-xs ">
                        <Heart className="w-4 h-4" />
                        Secure Payments via Razorpay
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
