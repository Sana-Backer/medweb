import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    Lock,
    CreditCard,
    Wallet,
    Building2,
    Truck,
    Shield,
    ChevronRight,
    CheckCircle2,
    Pill,
    Droplets,
} from 'lucide-react';

// ── Order items ──────────────────────────────────────────────────────────────
const orderItems = [
    {
        id: 1,
        name: 'Atorvastatin 20mg',
        detail: '30 Tablets • Refill',
        price: 24.0,
        Icon: Pill,
        iconBg: 'bg-blue-50',
        iconColor: 'text-blue-600',
    },
    {
        id: 2,
        name: 'Multivitamin Daily',
        detail: '60 Capsules • Wellness',
        price: 18.5,
        Icon: Droplets,
        iconBg: 'bg-indigo-50',
        iconColor: 'text-indigo-500',
    },
];

// ── Saved cards data ─────────────────────────────────────────────────────────
const savedCards = [
    {
        id: 'card1',
        last4: '4242',
        expiry: '12/26',
        gradient: 'from-blue-500 via-blue-600 to-indigo-700',
    },
    {
        id: 'card2',
        last4: '8890',
        expiry: '08/25',
        gradient: 'from-gray-700 via-gray-800 to-gray-900',
    },
];

// ── Small card chip SVG ───────────────────────────────────────────────────────
const CardChip = () => (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="22" rx="4" fill="#FFD700" fillOpacity="0.85" />
        <rect x="9" y="0" width="10" height="22" rx="0" fill="#FFC200" fillOpacity="0.5" />
        <rect x="0" y="7" width="28" height="8" rx="0" fill="#FFC200" fillOpacity="0.4" />
        <rect x="9" y="7" width="10" height="8" fill="#FFB300" fillOpacity="0.6" />
    </svg>
);

export default function PaymentMethodsPage() {
    const navigate = useNavigate();
    const [selectedPayment, setSelectedPayment] = useState('card1');
    const [promoCode, setPromoCode] = useState('');
    const [promoApplied, setPromoApplied] = useState(false);
    const [promoError, setPromoError] = useState('');

    const subtotal = 42.5;
    const shipping = 0;
    const tax = 2.1;
    const total = subtotal + shipping + tax;

    const handleApplyPromo = () => {
        if (promoCode.trim().toUpperCase() === 'HEALTH10') {
            setPromoApplied(true);
            setPromoError('');
        } else if (promoCode.trim() === '') {
            setPromoError('Please enter a promo code.');
        } else {
            setPromoApplied(false);
            setPromoError('Invalid promo code.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* ── Top Nav ─────────────────────────────────────────────────────────── */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate(-1)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                            aria-label="Go back"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <span className="font-bold text-xl text-gray-900 tracking-tight">
                            Guardian <span className="text-blue-600">Pharmacy</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                        <Lock className="w-4 h-4" />
                        Secure Checkout
                    </div>
                </div>
            </header>

            {/* ── Main ────────────────────────────────────────────────────────────── */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">

                {/* ── LEFT COLUMN ─────────────────────────────────────────────────── */}
                <div className="space-y-8">

                    {/* Heading */}
                    <div>
                        <h1 className="text-3xl font-extrabold text-blue-900">Payment Methods</h1>
                        <p className="text-gray-500 mt-1 text-sm">
                            Choose your preferred way to pay. All transactions are encrypted and secure.
                        </p>
                    </div>

                    {/* ── Saved Cards ──────────────────────────────────────────────── */}
                    <section>
                        <div className="flex items-center gap-2 mb-4">
                            <CreditCard className="w-5 h-5 text-blue-600" />
                            <h2 className="font-bold text-gray-800 text-base">Saved Cards</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {savedCards.map((card) => {
                                const isSelected = selectedPayment === card.id;
                                return (
                                    <button
                                        key={card.id}
                                        onClick={() => setSelectedPayment(card.id)}
                                        className={`relative rounded-2xl p-5 text-left transition-all border-2 shadow-sm focus:outline-none ${isSelected
                                                ? 'border-blue-500 ring-2 ring-blue-200 bg-white'
                                                : 'border-gray-200 bg-white hover:border-blue-300'
                                            }`}
                                    >
                                        {/* Mini card visual */}
                                        <div className={`w-full h-20 rounded-xl bg-gradient-to-br ${card.gradient} flex flex-col justify-between p-3 mb-3 shadow-md`}>
                                            <div className="flex items-center justify-between">
                                                <CardChip />
                                                <div className="flex gap-1">
                                                    <div className="w-5 h-5 rounded-full bg-red-400 opacity-90" />
                                                    <div className="w-5 h-5 rounded-full bg-yellow-400 opacity-90 -ml-2" />
                                                </div>
                                            </div>
                                            <div className="text-white text-xs font-mono tracking-widest">
                                                •••• •••• •••• {card.last4}
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-400 font-medium">
                                            •••• •••• •••• {card.last4}
                                        </p>
                                        <p className="text-xs text-gray-400">EXP {card.expiry}</p>
                                        {isSelected && (
                                            <CheckCircle2 className="absolute top-3 right-3 w-5 h-5 text-blue-500" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    {/* ── Digital Wallets ──────────────────────────────────────────── */}
                    <section>
                        <div className="flex items-center gap-2 mb-4">
                            <Wallet className="w-5 h-5 text-blue-600" />
                            <h2 className="font-bold text-gray-800 text-base">Digital Wallets</h2>
                        </div>
                        <div className="space-y-3">

                            {/* Apple Pay */}
                            <label
                                className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${selectedPayment === 'apple'
                                        ? 'border-blue-500 bg-white ring-2 ring-blue-200'
                                        : 'border-gray-200 bg-white hover:border-blue-300'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="apple"
                                        checked={selectedPayment === 'apple'}
                                        onChange={() => setSelectedPayment('apple')}
                                        className="accent-blue-600 w-4 h-4"
                                    />
                                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.27.06 2.15.73 2.93.73.86 0 2.47-.9 4.08-.77 1.95.16 3.3 1.15 3.97 2.95-3.62 2.17-2.84 7.27.82 9.04a8.77 8.77 0 01-3.8 1.91zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-gray-800 text-sm">Apple Pay</span>
                                </div>
                                <span className="text-xs bg-blue-50 text-blue-600 font-bold px-3 py-1 rounded-full">
                                    Fast Checkout
                                </span>
                            </label>

                            {/* Google Pay */}
                            <label
                                className={`flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${selectedPayment === 'google'
                                        ? 'border-blue-500 bg-white ring-2 ring-blue-200'
                                        : 'border-gray-200 bg-white hover:border-blue-300'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="payment"
                                    value="google"
                                    checked={selectedPayment === 'google'}
                                    onChange={() => setSelectedPayment('google')}
                                    className="accent-blue-600 w-4 h-4"
                                />
                                <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-gray-800 text-sm">Google Pay</span>
                            </label>
                        </div>
                    </section>

                    {/* ── More Ways to Pay ─────────────────────────────────────────── */}
                    <section>
                        <div className="flex items-center gap-2 mb-4">
                            <Building2 className="w-5 h-5 text-blue-600" />
                            <h2 className="font-bold text-gray-800 text-base">More Ways to Pay</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Net Banking */}
                            <label
                                className={`flex items-center gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${selectedPayment === 'netbanking'
                                        ? 'border-blue-500 bg-white ring-2 ring-blue-200'
                                        : 'border-gray-200 bg-white hover:border-blue-300'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="payment"
                                    value="netbanking"
                                    checked={selectedPayment === 'netbanking'}
                                    onChange={() => setSelectedPayment('netbanking')}
                                    className="accent-blue-600 w-4 h-4 hidden"
                                />
                                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                    <Building2 className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 text-sm">Net Banking</p>
                                    <p className="text-xs text-gray-400 mt-0.5">Choose from 50+ banks</p>
                                </div>
                            </label>

                            {/* Cash on Delivery */}
                            <label
                                className={`flex items-center gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${selectedPayment === 'cod'
                                        ? 'border-blue-500 bg-white ring-2 ring-blue-200'
                                        : 'border-gray-200 bg-white hover:border-blue-300'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    checked={selectedPayment === 'cod'}
                                    onChange={() => setSelectedPayment('cod')}
                                    className="accent-blue-600 w-4 h-4 hidden"
                                />
                                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                                    <Truck className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 text-sm">Cash on Delivery</p>
                                    <p className="text-xs text-gray-400 mt-0.5">Pay when you receive</p>
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* ── Security Notice ───────────────────────────────────────────── */}
                    <div className="flex gap-4 p-5 rounded-2xl border border-blue-100 bg-blue-50/60">
                        <Shield className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                            <p className="font-bold text-blue-700 text-sm">Secure Payment Guarantee</p>
                            <p className="text-blue-600/80 text-xs mt-1 leading-relaxed">
                                Your health data and payment information are protected by industry-standard
                                256-bit encryption. We never store your full CVV or card details.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT COLUMN – Order Summary ─────────────────────────────────── */}
                <aside className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <h2 className="font-bold text-gray-900 text-lg mb-5">Order Summary</h2>

                        {/* Items */}
                        <div className="space-y-4 mb-5">
                            {orderItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                                        <item.Icon className={`w-5 h-5 ${item.iconColor}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                                        <p className="text-xs text-gray-400">{item.detail}</p>
                                    </div>
                                    <p className="text-sm font-bold text-gray-800">₹{item.price.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>

                        {/* Breakdown */}
                        <div className="space-y-3 border-t border-gray-100 pt-4 mb-4">
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Shipping</span>
                                <span className="text-green-500 font-semibold">FREE</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Estimated Tax</span>
                                <span>₹{tax.toFixed(2)}</span>
                            </div>
                            {promoApplied && (
                                <div className="flex justify-between text-sm text-green-600 font-semibold">
                                    <span>Promo (HEALTH10)</span>
                                    <span>-₹4.25</span>
                                </div>
                            )}
                        </div>

                        {/* Total */}
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-bold text-gray-900 text-base">Total</span>
                            <span className="font-extrabold text-blue-600 text-2xl">
                                ₹{promoApplied ? (total - 4.25).toFixed(2) : total.toFixed(2)}
                            </span>
                        </div>

                        {/* Promo Code */}
                        <div className="mb-5">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                Promo Code
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={promoCode}
                                    onChange={(e) => {
                                        setPromoCode(e.target.value);
                                        setPromoError('');
                                        setPromoApplied(false);
                                    }}
                                    placeholder="Enter code"
                                    className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                                />
                                <button
                                    onClick={handleApplyPromo}
                                    className="bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
                                >
                                    Apply
                                </button>
                            </div>
                            {promoError && <p className="text-red-500 text-xs mt-1">{promoError}</p>}
                            {promoApplied && (
                                <p className="text-green-600 text-xs mt-1 font-semibold">
                                    ✓ Promo applied! Saved ₹4.25
                                </p>
                            )}
                        </div>

                        {/* CTA */}
                        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-200 text-base">
                            Pay &amp; Place Order
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        <p className="text-center text-xs text-gray-400 mt-3 leading-relaxed">
                            By placing your order, you agree to Guardian Pharmacy's{' '}
                            <a href="#" className="underline hover:text-blue-600 transition-colors">Terms of Service</a> and{' '}
                            <a href="#" className="underline hover:text-blue-600 transition-colors">Privacy Policy</a>.
                        </p>
                    </div>
                </aside>
            </main>

            {/* ── Footer ──────────────────────────────────────────────────────────── */}
            <footer className="border-t border-gray-100 bg-white mt-10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-900 font-bold">
                        Guardian <span className="text-blue-600">Pharmacy</span>{' '}
                        <span className="font-normal text-gray-400">| © 2024 Your Health, Our Priority.</span>
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Help Center</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
