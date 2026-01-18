import React from 'react';

import TrustBadge from './TrustBadge';

const HeroSection: React.FC = () => {
    // Placeholder avatars
    const clientAvatars = [
        'https://i.pravatar.cc/150?img=1',
        'https://i.pravatar.cc/150?img=2',
        'https://i.pravatar.cc/150?img=3',
        'https://i.pravatar.cc/150?img=4',
    ];

    return (
        <section className="min-h-screen pt-24 pb-12 bg-linear-to-br from-blue-50 via-white to-blue-50/40 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-fade-in relative z-10">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
                            We lead, others follow
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] text-gray-900">
                            Partner For <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-blue-500">Umrah & Hajj</span>
                            <br />
                            <span className="text-gray-900">& Seamless Travel</span>
                        </h1>

                        <p className="text-gray-600 text-lg leading-relaxed max-w-xl font-medium">
                            AL-YUSUFF International provides reliable pilgrimage services with flexible
                            <span className="text-blue-600 font-bold px-1 italic">"Pay-Small-Small"</span> options and complete professional travel support.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href='#packages' className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                                View Packages
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                            </a >
                        </div>

                        <TrustBadge
                            avatars={clientAvatars}
                            text="Trusted by 5000+ Happy Pilgrims"
                        />
                    </div>

                    {/* Right Content - Image with Stats */}
                    <div className="relative">
                        {/* Main Image Container */}
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                            <div className="aspect-4/3 bg-blue-600 relative group">
                                <img
                                    src="/landing.jpg"
                                    alt="Pilgrims at Kaaba"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay Stats */}
                                {/* <div className="absolute top-6 left-6">
                                    <StatCard
                                        icon={
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                            </svg>
                                        }
                                        value="15K"
                                        label="Umrah Pilgrims"
                                        bgColor="bg-blue-600/90"
                                    />
                                </div>

                                <div className="absolute bottom-6 left-6">
                                    <StatCard
                                        icon={
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                            </svg>
                                        }
                                        value="10k"
                                        label="Hajj Members"
                                        bgColor="bg-gray-900/90"
                                    />
                                </div>

                                <div className="absolute top-6 right-6">
                                    <StatCard
                                        icon={
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        }
                                        value="10+"
                                        label="Years Excellence"
                                        bgColor="bg-blue-400/90"
                                    />
                                </div> */}
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-10 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute -z-10 bottom-10 left-10 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/234XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-2xl shadow-xl hover:bg-green-600 hover:scale-110 hover:-rotate-6 transition-all duration-300"
            >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </a>
        </section>
    );
};

export default HeroSection;
