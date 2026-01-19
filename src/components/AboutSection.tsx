import React from 'react';

const AboutSection: React.FC = () => {
    const points = [
        "24/7 Customer Support",
        "Experienced Travel Consultants",
        "Best Price Guarantee",
        "Personalized Itineraries",
        "Comprehensive Visa Assistance",
        "Trusted Partnerships"
    ];

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Creative Image Composition */}
                    <div className="relative">
                        <div className="relative rounded-4xl overflow-hidden shadow-2xl transform  transition-transform duration-500">
                            <img
                                src="/ceo2.jpg"
                                alt="About AL-YUSUFF"
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Badge */}
                            <div className="hidden lg:absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-xl lg:flex items-center gap-3 animate-bounce-slow">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">AY</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">AL-YUSUFF</h4>
                                    <p className="text-gray-500 text-xs text-nowrap">Travels & Tours</p>
                                </div>
                            </div>


                        </div>

                        {/* Background Decorative Element */}
                        <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="space-y-8">
                        <div className="inline-block">
                            <div className="rounded-full border border-blue-200 px-6 py-2 bg-blue-50 text-center">
                                <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest leading-none">
                                    About AL-YUSUFF Travels
                                </p>
                            </div>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                            Making Every Journey <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-blue-500">
                                Smooth & Spiritual.
                            </span>
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-blue-600 pl-6 py-2 italic font-medium">
                            "Al-Yusuff International Travels and Tours makes your Umrah, Hajj, and international travel seamless and stress free. Your journey, your pace, our expertise."
                        </p>

                        <div className="space-y-4 text-gray-600 text-sm">
                            <p>
                                AL-YUSUFF INTERNATIONAL TRAVELS AND TOURS LTD is a trusted travel and pilgrimage service provider dedicated to delivering seamless Umrah and Hajj experiences, alongside reliable local and international travel solutions.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {points.map((point) => (
                                    <div key={point} className="flex items-center gap-3">
                                        <div className="shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-bold text-[11px] uppercase tracking-wide">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mission & Vision */}
                        <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                            <div className="space-y-2">
                                <h4 className="font-black text-blue-600 text-xs uppercase tracking-widest">Our Mission</h4>
                                <p className="text-[11px] text-gray-500 leading-relaxed italic">
                                    To provide reliable, transparent, and spiritually enriching travel services, making sacred journeys accessible and stress free.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-black text-blue-600 text-xs uppercase tracking-widest">Our Vision</h4>
                                <p className="text-[11px] text-gray-500 leading-relaxed italic">
                                    To be the most trusted travel and pilgrimage provider in Nigeria, known for excellence and integrity.
                                </p>
                            </div>
                        </div>

                        <button className="bg-blue-700 text-white px-10 py-4 rounded-full font-black text-xs flex items-center gap-3 hover:bg-blue-800 transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-100 uppercase tracking-widest">
                            Get Started
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
        </section>
    );
};

export default AboutSection;
