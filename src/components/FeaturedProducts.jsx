import { Link } from 'react-router-dom';
import { Plus, Star } from 'lucide-react';
import prod1 from '../assets/multivitamin_bottle_1775125347332.png';
import prod2 from '../assets/blood_pressure_monitor_1775125366361.png';
import prod3 from '../assets/omega3_capsules_1775125382853.png';
import prod4 from '../assets/muscle_relief_gel_bottle_1775125412027.png';

const products = [
    {
        image: prod1,
        category: 'Vitamins & Minerals',
        name: 'Daily Essential Multivitamin (60 Capsules)',
        price: 24.99,
        tag: 'HOT DEAL',
        rating: 4.8
    },
    {
        image: prod2,
        category: 'Diagnostic Devices',
        name: 'Smart Pro Blood Pressure Monitor',
        price: 59.00,
        tag: 'BEST SELLER',
        rating: 4.9
    },
    {
        image: prod3,
        category: 'Heart Health',
        name: 'Ultra Pure Omega-3 Fish Oil 1000mg',
        price: 18.50,
        tag: '',
        rating: 4.7
    },
    {
        image: prod4,
        category: 'Pain Relief',
        name: 'Fast-Acting Muscle Relief Gel 150g',
        price: 12.99,
        tag: '',
        rating: 4.6
    },
];

const ProductCard = ({ product }) => (
    <Link
        to="/product-detail"
        className="bg-white rounded-3xl border border-gray-100 p-6 hover:shadow-2xl hover:shadow-gray-200/50 transition-all group relative overflow-hidden block cursor-pointer"
    >
        {product.tag && (
            <div className="absolute top-4 left-4 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
                {product.tag}
            </div>
        )}
        <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center p-8 group-hover:scale-[1.02] transition-transform">
            <img src={product.product_image || product.image} alt={product.name} className="max-w-full h-auto object-contain mix-blend-multiply" />
        </div>
        <div className="space-y-3">
            <div className="text-[10px] uppercase tracking-wider font-bold text-gray-400">{product.category}</div>
            <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 min-h-[44px]">
                {product.name}
            </h3>
            <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-bold text-gray-700">{product.rating}</span>
            </div>
            <div className="flex items-center justify-between pt-2">
                <div className="text-xl font-extrabold text-gray-900">₹{product.price.toFixed(2)}</div>
                <button
                    onClick={(e) => e.preventDefault()}
                    className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:rotate-90"
                >
                    <Plus className="w-5 h-5" />
                </button>
            </div>
        </div>
    </Link>
);

const FeaturedProducts = () => {
    return (
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50 rounded-[4rem]">
            <div className="mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900">Featured Health Products</h2>
                <p className="text-gray-500">Carefully curated for your well-being.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, i) => (
                    <ProductCard key={i} product={product} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
