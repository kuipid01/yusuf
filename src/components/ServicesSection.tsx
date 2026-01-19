import React from 'react';

const ServicesSection: React.FC = () => {
    const services = [
        {
            title: "Hajj Packages",
            category: "Service 01",
            description: "Comprehensive visa processing, flight/ground transport, and accessible accommodation with experienced guides.",
            image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Umrah Packages",
            category: "Service 02",
            description: "Convenient Haram-near stays, guided spiritual tours, and our flexible Pay-Small-Small payment plan.",
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Airline Ticket",
            category: "Service 03",
            description: "Reliable domestic and international booking with transparent pricing and immediate confirmation.",
            image: "https://images.unsplash.com/photo-1565019054316-0158df8a28e4?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <section id="services" className="py-24 bg-blue-50/30">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-white text-[10px] font-bold text-blue-600 uppercase tracking-widest shadow-sm">
                        What We Offer
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                        Our Main <span className="text-blue-600">Travel & Pilgrimage</span> Services
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed italic">
                        At Al-Yusuff International, we provide comprehensive travel solutions beyond religious trips, ensuring peace of mind for every traveler.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-blue-900/5 hover:-translate-y-2 transition-all duration-500 group">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6 bg-blue-600 text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                                    {service.category}
                                </div>
                            </div>
                            <div className="p-8 space-y-4">
                                <h3 className="text-2xl font-black text-gray-900">{service.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="pt-4 flex items-center justify-between">
                                    <button
                                        onClick={() => {
                                            const text = `Hello, I'm interested in ${service.title}. Please provide more details.`;
                                            const url = `https://wa.me/2348089299201?text=${encodeURIComponent(text)}`;
                                            window.open(url, '_blank');
                                        }}
                                        className="text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                        Read More
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Services List (Simplified) */}
                <div className="mt-20 p-8 bg-white/50 backdrop-blur-sm rounded-[2rem] border border-blue-100 flex flex-wrap justify-center gap-x-12 gap-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">International Travel Services</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Hotel Reservation</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Group Tours</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Flexible Payment Plans</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
