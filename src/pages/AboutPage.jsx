import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, ShieldCheck, MapPin, TrendingUp, CheckCircle2, Clock, Eye, Rocket, History, Network, Package, Map, Truck } from 'lucide-react';
import pharmacistImg from '../assets/about.png';
import secondImg from '../assets/about-2.png';
import about3 from '../assets/about-3.png';

const AboutPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-1 w-full ">
                {/* Section 1 */}
                <div className="relative pt-20 pb-20 lg:pt-18 lg:pb-28">
                    {/* Mint Green Glow Background Element */}
                    {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#e0f7fa]/60 blur-[100px] rounded-full -z-10 pointer-events-none hidden lg:block"></div> */}

                    <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-2 items-center lg:items-start justify-between">
                        {/* Left Content */}
                        <div className="flex-[0.8] space-y-6 lg:pt-2 w-full lg:max-w-[700px] z-10">
                            <h3 className="text-[16px] xl:text-[15px] font-medium uppercase tracking-[0.15em] text-[#009688] mb-1">REDEFINING CARE</h3>
                            <h1 className="text-[48px] md:text-[50px] lg:text-[50px] xl:text-[60px] font-[600] text-[#1a1c1e] leading-[1.05] tracking-tight">
                                The Empathetic <br className="hidden lg:block" />
                                <span className="text-[#0e5fa3]">Guardian</span> of <br className="hidden lg:block" />
                                Your Health.
                            </h1>
                            <p className="text-[#5f6c7b] text-[15px] xl:text-[18px]  leading-[1.65] pt-2 font-medium">
                                At Dreams Pharma, we believe pharmacy care should be more than a transaction. It's a commitment to your long-term vitality.
                            </p>
                            {/* <div className="flex items-center gap-8 pt-6">
                                <button className="bg-[#0e5fa3] hover:bg-[#0b4d84] text-white font-bold py-4 px-10 rounded-[14px] transition-colors text-[18px] shadow-sm">
                                    Our Services
                                </button>
                                <button className="flex items-center gap-3 text-[#0e5fa3] font-bold hover:text-[#0b4d84] transition-colors group text-[18px]">
                                    Read the Story
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div> */}
                        </div>

                        {/* Right Image */}
                        <div className="flex-1 relative w-full  lg:mt-2">
                            <div className="relative z-0 pl-0 lg:pl-6">
                    
                                <div className="absolute -top-8 -left-1 w-2/3 h-1/2 bg-teal-100/80 blur-[70px] rounded-full -z-10"></div>
                                <div className="rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] h-[450px]">
                                    <img src={pharmacistImg} alt="Pharmacist" className="w-full h-auto object-cover block relative z-10" />
                                </div>
                                <div className="absolute -bottom-10 right-0 lg:-right-4 bg-white p-7 rounded-[20px] shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] w-[320px] flex gap-4 items-start z-10 hidden sm:flex">
                                    <div className="mt-1 shrink-0">
                                        <ShieldCheck className="w-[28px] h-[28px]" fill="#009688" stroke="white" strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <div className="text-[28px] font-black text-[#1a1c1e] mb-2 leading-none tracking-tight">15+</div>
                                        <p className="text-[13px] text-[#5f6c7b] leading-[1.45] font-medium">
                                            Years of trusted pharmaceutical <br /> excellence in the industry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="bg-[#f8f9fa] w-full pt-5 pb-10 lg:pt-15 lg:pb-15">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-22 items-center lg:items-stretch">
                        {/* Left Image */}
                        <div className="flex-[0.8] w-full order-2 lg:order-1 flex items-center justify-center lg:justify-end">
                            <div className="w-full max-w-[400px] aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-lg shadow-gray-200/50">
                                <img src={secondImg} alt="Doctor and patient" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        {/* Right Content */}
                        <div className="flex-1 order-1 lg:order-2 flex flex-col justify-center">
                            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#004c99] mb-5 tracking-tight">About Dreams Pharma</h2>
                            <div className="space-y-4 text-[15px] md:text-[16px] text-gray-700 leading-[1.8] font-normal max-w-2xl">
                                <p>
                                    At Dreams Pharma, we are driven by a singular vision — to deliver high-quality, reliable, and accessible pharmaceutical solutions that improve lives and strengthen healthcare systems.
                                </p>
                                <p>
                                    Backed by a highly experienced leadership team with over 15 years of expertise in the pharmaceutical industry, we bring deep domain knowledge, operational excellence, and a strong understanding of market dynamics.
                                </p>
                                <p>
                                    We have established a wide and trusted network of reputed manufacturers, ensuring seamless access to a diverse portfolio of pharmaceutical products. This allows us to supply a comprehensive range of medications across multiple therapeutic segments with efficiency and consistency.
                                </p>
                                <p>
                                    Quality is at the core of everything we do. We maintain a strict commitment to quality assurance and regulatory compliance, ensuring that all products adhere to the highest industry standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Our Presence */}
                <div className="bg-white w-full pt-10 pb-20 lg:pt-18 lg:pb-32">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-15 lg:gap-6 items-center">

                        {/* Left Content */}
                        <div className="flex-[0.9] flex flex-col justify-center order-2 lg:order-1">
                            <h2 className="text-[28px] md:text-[22px] lg:text-[30px]  font-semibold text-[#1a1c1e] mb-2">Our Presence</h2>
                            <p className="text-md  md:text-lg text-gray-500  mb-10 ">
                                Dreams Pharma is steadily expanding its footprint across South India, with a robust operational foundation and ambitious growth plans.
                            </p>

                            <div className="space-y-5">
                                {/* Existing Operations Card */}
                                <div className="bg-[#f8f9fa] rounded-[24px] px-4 py-5 flex flex-col border-l-[3px] border-[#005a9c] shadow-sm">
                                    <div className="flex items-center gap-3 mb-5">
                                        <MapPin className="w-5 h-5 text-[#005a9c]" />
                                        <h3 className="text-xl font-semibold text-[#005a9c]">Kerala – Existing Operations</h3>
                                    </div>
                                    <div className="flex items-center gap-20 text-lg text-gray-600 pl-3">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                            <span>Palakkad</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                            <span>Kollam</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Upcoming Branches Card */}
                                <div className="bg-[#f8f9fa] rounded-[24px] px-5 py-6 flex flex-col border-l-[3px] border-emerald-700 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <TrendingUp className="w-5 h-5 text-emerald-700" />
                                        <h3 className="text-xl font-semibold text-emerald-700">Upcoming Branches</h3>
                                    </div>
                                    <div className="pl-8">
                                        <div className="text-md font-semibold text-gray-500 tracking-wide mb-2">TAMIL NADU</div>
                                        <div className="flex items-center gap-2 text-md text-gray-600">
                                            <Clock className="w-3 h-3 text-[#005a9c]" />
                                            <span>Pondicherry</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex-[1.1] w-full flex items-center justify-center lg:justify-end order-1 lg:order-2">
                            <div className="w-full max-w-[550px] aspect-[1.4] rounded-[28px] overflow-hidden shadow-md">
                                <img src={about3} alt="Pharmacy shelves" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4: Vision & Mission */}
                <div className="bg-[#f8f9fa] w-full py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <div className="bg-[#004c99] rounded-[24px] p-10 lg:p-12 shadow-lg text-white">
                            <Eye className="w-12 h-12 text-blue-300 mb-8 opacity-70" strokeWidth={1.5} />
                            <h3 className="text-[28px] lg:text-[32px] font-bold mb-6 tracking-tight">Our Vision</h3>
                            <p className="text-[16px] lg:text-[18px] text-blue-50 leading-relaxed font-medium">
                                To become a trusted leader in pharmaceutical distribution, known for quality, reliability, and expansive reach across India.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-white rounded-[24px] p-10 lg:p-12 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] border border-gray-400 flex flex-col justify-start text-[#1a1c1e]">
                            <Rocket className="w-12 h-12 text-[#004c99] mb-8" strokeWidth={1.5} />
                            <h3 className="text-[28px] lg:text-[32px] font-bold mb-6 tracking-tight">Our Mission</h3>
                            <p className="text-[16px] lg:text-[18px] text-gray-600 leading-relaxed font-medium">
                                To ensure timely access to safe and effective medicines through strong partnerships, efficient logistics, and unwavering quality standards.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 5: Why Choose Dreams Pharma */}
                <div className="bg-white w-full py-10 lg:py-12">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1a1c1e] mb-2">Why Choose Dreams Pharma</h2>
                            <p className="text-[16px] lg:text-[18px] text-gray-500 max-w-2xl mx-auto tracking-wider">
                                Our commitment to excellence makes us the preferred choice for pharmaceutical solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="bg-white rounded-[24px] p-8 border border-gray-200/80 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] transition-all hover:shadow-md">
                                <div className="w-12 h-12 bg-blue-50/80 rounded-xl flex items-center justify-center mb-6">
                                    <History className="w-8 h-8 text-[#005a9c]" />
                                </div>
                                <h3 className="text-[20px] font-semibold text-[#000000] mb-3">15+ years of industry expertise</h3>
                                <p className="text-[16px] text-gray-600 leading-relaxed font-normal">
                                    Over a decade of specialized experience in pharmaceutical management and distribution.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-[24px] p-8 border border-gray-200/80 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] transition-all hover:shadow-md">
                                <div className="w-12 h-12 bg-blue-50/80 rounded-xl flex items-center justify-center mb-6">
                                    <Network className="w-6 h-6 text-[#005a9c]" />
                                </div>
                                <h3 className="text-[20px] font-semibold text-[#000000] mb-3">Strong manufacturer network</h3>
                                <p className="text-[16px] text-gray-600 leading-relaxed font-normal">
                                    Strategic partnerships with reputed manufacturers ensuring a steady supply chain.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-[24px] p-8 border border-gray-200/80 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] transition-all hover:shadow-md">
                                <div className="w-12 h-12 bg-blue-50/80 rounded-xl flex items-center justify-center mb-6">
                                    <Package className="w-6 h-6 text-[#005a9c]" />
                                </div>
                                <h3 className="text-[20px] font-semibold text-[#000000] mb-3">Wide product availability</h3>
                                <p className="text-[16px] text-gray-600 leading-relaxed font-normal">
                                    A diverse portfolio covering essential medications across all major therapeutic segments.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white rounded-[24px] p-8 border border-gray-200/80 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] transition-all hover:shadow-md">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h3 className="text-[20px] font-semibold text-[#000000] mb-3">Strict quality & compliance standards</h3>
                                <p className="text-[16px] text-gray-600 leading-relaxed font-normal">
                                    Adherence to the highest regulatory benchmarks to ensure medication safety and efficacy.
                                </p>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white rounded-[24px] p-8 border border-gray-200/80 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] transition-all hover:shadow-md">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                                    <Map className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h3 className="text-[20px] font-semibold text-[#000000] mb-3">Expanding regional presence</h3>
                                <p className="text-[16px] text-gray-600 leading-relaxed font-normal">
                                    Growing infrastructure across South India to bring healthcare closer to communities.
                                </p>
                            </div>

                            {/* Card 6 */}
                            <div className="bg-white rounded-[24px] p-8 border border-gray-200/80 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] transition-all hover:shadow-md">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                                    <Truck className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h3 className="text-[20px] font-semibold text-[#000000] mb-3">Reliable and timely distribution</h3>
                                <p className="text-[16px] text-gray-600 leading-relaxed font-normal">
                                    Advanced logistics optimized for speed and careful oversight of medical supplies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
