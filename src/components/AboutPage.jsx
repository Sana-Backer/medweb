// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { ArrowRight, ShieldCheck } from 'lucide-react';
// import pharmacistImg from '../assets/about.png';
// import secondImg from '../assets/about-2.png';

// const AboutPage = () => {
//     return (
//         <div className="min-h-screen flex flex-col bg-white">
//             <Navbar />
//             <main className="flex-1 w-full">
//                 {/* Section 1 */}
//                 <div className="relative  mx-auto px-6 md:px-12 pt-20 pb-20 lg:pt-32 lg:pb-28">
//                     {/* Mint Green Glow Background Element */}
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#e0f7fa]/60 blur-[100px] rounded-full -z-10 pointer-events-none hidden lg:block"></div>

//                     <div className="flex flex-col lg:flex-row gap-12 lg:gap-2 items-center lg:items-start justify-between">
//                         {/* Left Content */}
//                         <div className="flex-[0.8] space-y-6 lg:pt-1 w-full lg:max-w-[700px] z-10">
//                             <h3 className="text-[16px] xl:text-[18px] font-medium uppercase tracking-[0.15em] text-[#009688] mb-1">REDEFINING CARE</h3>
//                             <h1 className="text-[48px] md:text-[64px] lg:text-[80px] xl:text-[72px] font-[600] text-[#1a1c1e] leading-[1.05] tracking-tight">
//                                 The Empathetic <br className="hidden lg:block" />
//                                 <span className="text-[#0e5fa3]">Guardian</span> of <br className="hidden lg:block" />
//                                 Your Health.
//                             </h1>
//                             <p className="text-[#5f6c7b] text-[18px] xl:text-[22px] max-w-[580px] leading-[1.65] pt-2 font-medium">
//                                 At Vitalis Health, we believe pharmacy care should be more than a transaction. It's a commitment to your long-term vitality.
//                             </p>
//                             <div className="flex items-center gap-8 pt-6">
//                                 <button className="bg-[#0e5fa3] hover:bg-[#0b4d84] text-white font-bold py-4 px-10 rounded-[14px] transition-colors text-[18px] shadow-sm">
//                                     Our Services
//                                 </button>
//                                 <button className="flex items-center gap-3 text-[#0e5fa3] font-bold hover:text-[#0b4d84] transition-colors group text-[18px]">
//                                     Read the Story
//                                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Right Image */}
//                         <div className="flex-1 relative w-full  mt-12 lg:mt-0">
//                             <div className="relative z-0 pl-0 lg:pl-6">
//                                 {/* Mint green glow specifically behind the top-left of the image */}
//                                 <div className="absolute -top-16 -left-8 lg:left-0 w-3/4 h-3/4 bg-teal-100/80 blur-[70px] rounded-full -z-10"></div>
//                                 <div className="rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] h-[600px]">
//                                     <img src={pharmacistImg} alt="Pharmacist" className="w-full h-auto object-cover block relative z-10" />
//                                 </div>
//                                 {/* Floating Card positioned bottom right */}
//                                 <div className="absolute -bottom-10 right-0 lg:-right-4 bg-white p-7 rounded-[20px] shadow-[0_15px_35px_-5px_rgba(0,0,0,0.1)] w-[320px] flex gap-4 items-start z-10 hidden sm:flex">
//                                     <div className="mt-1 shrink-0">
//                                         <ShieldCheck className="w-[28px] h-[28px]" fill="#009688" stroke="white" strokeWidth={2.5} />
//                                     </div>
//                                     <div>
//                                         <div className="text-[28px] font-black text-[#1a1c1e] mb-2 leading-none tracking-tight">15+</div>
//                                         <p className="text-[13px] text-[#5f6c7b] leading-[1.45] font-medium">
//                                             Years of trusted pharmaceutical <br /> excellence in the industry.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Section 2 */}
//                 <div className="bg-[#f8f9fa] w-full pt-20 pb-28 lg:pt-32 lg:pb-40 mt-12">
//                     <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-32 items-stretch">
//                         {/* Left Image */}
//                         <div className="flex-1 w-full order-2 lg:order-1 flex items-center justify-center">
//                             <div className="w-full max-w-[480px] aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50">
//                                 <img src={secondImg} alt="Doctor and patient" className="w-full h-full object-cover" />
//                             </div>
//                         </div>
//                         {/* Right Content */}
//                         <div className="flex-1 order-1 lg:order-2 flex flex-col justify-center">
//                             <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-[#005a9c] mb-10 tracking-tight">About Vitalis Health</h2>
//                             <div className="space-y-4 text-md md:text-lg lg:text-4xl text-gray-600  max-w-lg">
//                                 <p>
//                                     At <span className="text-[#005a9c] font-semibold">Vitalis Health</span>, we are driven by a singular vision — to deliver high-quality, reliable, and accessible pharmaceutical solutions that improve lives and strengthen healthcare systems.
//                                 </p>
//                                 <p>
//                                     Backed by a highly experienced leadership team with over 15 years of expertise in the pharmaceutical industry, we bring deep domain knowledge, operational excellence, and a strong understanding of market dynamics.
//                                 </p>
//                                 <p>
//                                     We have established a wide and trusted network of reputed manufacturers, ensuring seamless access to a diverse portfolio of pharmaceutical products. This allows us to supply a comprehensive range of medications across multiple therapeutic segments with efficiency and consistency.
//                                 </p>
//                                 <p>
//                                     Quality is at the core of everything we do. We maintain a strict commitment to quality assurance and regulatory compliance, ensuring that all products adhere to the highest industry standards.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//             <Footer />
//         </div>
//     );
// };

// export default AboutPage;
