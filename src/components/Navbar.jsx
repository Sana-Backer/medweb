import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, HelpCircle, Phone, FileText, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4 lg:gap-8">
        <button 
          className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <Link to="/" className="text-primary font-bold text-2xl tracking-tight">
          Dreams<span className="text-primary-dark">Pharma</span>
        </Link>
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link to="/medicines" className="hover:text-primary transition-colors">Medicines</Link>
          <Link to="/aboutus" className="hover:text-primary transition-colors">About us</Link>
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>

      <div className="flex-1 max-w-md mx-8 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search medicines..."
            className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button className="hidden sm:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-hover transition-colors shadow-sm">
          <FileText className="w-4 h-4" />
          Upload Prescription
        </button>
        <div className="flex items-center gap-3 text-gray-500">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-1 right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <Link to="/login" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
            <User className="w-5 h-5" />
          </Link>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 lg:hidden z-50 shadow-xl animate-slide-down">
          <div className="flex flex-col p-6 gap-4 bg-white/95 backdrop-blur-md">
            <Link 
              to="/medicines" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-gray-600 font-medium hover:text-primary py-2 transition-colors border-b border-gray-50"
            >
              Medicines
            </Link>
            <Link 
              to="/aboutus" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-gray-600 font-medium hover:text-primary py-2 transition-colors border-b border-gray-50"
            >
              About us
            </Link>
            <Link 
              to="/privacy-policy" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-gray-600 font-medium hover:text-primary py-2 transition-colors border-b border-gray-50"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-gray-600 font-medium hover:text-primary py-2 transition-colors border-b border-gray-50"
            >
              Contact
            </Link>
            <div className="pt-2 sm:hidden">
              <button className="w-full flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-primary-hover transition-colors shadow-md">
                <FileText className="w-4 h-4" />
                Upload Prescription
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
