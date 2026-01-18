import React from 'react';

interface Package {
    id: number;
    type: string;
    badge: string;
    title: string;
    description: string;
    price: string;
    image: string;
    features: string[];
}

const packages: Package[] = [
    {
        id: 1,
        type: "Hajj",
        badge: "HAJJ PACKAGE",
        title: "Premium Hajj Experience",
        description: "Fulfill your Hajj obligations with Al-Yusuff's complete travel support and experienced guides.",
        price: "₦8,500,000.00",
        image: "/hajj.jpg",
        features: [
            "Visa & Document Processing",
            "Flight & Ground Transport",
            "Accommodation in Safe Units",
            "Experienced On-Ground Support",
            "Tailored for Individuals/Groups",
            "Spiritual Orientation"
        ]
    },
    {
        id: 2,
        type: "Umrah",
        badge: "UMRAH PACKAGE",
        title: "Seamless Umrah Pilgrimage",
        description: "Comfortable accommodation near the Haram and flexible Pay-Small-Small payment options.",
        price: "₦4,500,000.00",
        image: "https://images.unsplash.com/photo-1565019054316-0158df8a28e4?q=80&w=800&auto=format&fit=crop",
        features: [
            "Flight Bookings & Transfers",
            "Stays Near the Haram",
            "Guided Spiritual Tours",
            "Visa Assistance",
            "Pay-Small-Small Plan",
            "Religious Guidance"
        ]
    }
];

const PackageCard: React.FC<{ pkg: Package, index: number }> = ({ pkg, index }) => {
    const isEven = index % 2 === 1;

    return (
        <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-blue-50/20 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-blue-100/30`}>
            {/* Image Section */}
            <div className="lg:w-1/2 relative min-h-[400px]">
                <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Floating Label */}
                <div className="absolute top-8 left-8 bg-blue-600 text-white text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-widest shadow-2xl">
                    {pkg.badge}
                </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center space-y-8">
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">{pkg.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-lg italic">
                    "{pkg.description}"
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-[11px] font-bold text-gray-700 uppercase tracking-tight">
                            <div className="w-5 h-5 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="truncate">{feature}</span>
                        </div>
                    ))}
                </div>

                {/* Pricing & CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pt-8 border-t border-blue-100/50">
                    <div>
                        <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-1">Pricing Start From</p>
                        <p className="text-3xl font-black text-gray-900">{pkg.price}</p>
                    </div>
                    <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-xs hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all flex items-center justify-center gap-3 group uppercase tracking-widest">
                        BOOK NOW
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

const PackagesSection: React.FC = () => {
    return (
        <section id="packages" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-gray-100 bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Featured Packages
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
                        Spirited Journeys <br />
                        <span className="text-blue-600">Tailored For You</span>
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed italic">
                        Al-Yusuff International Travels ensures that your sacred journeys are not just trips, but memorable spiritual milestones.
                    </p>
                </div>

                {/* Packages List */}
                <div className="space-y-16">
                    {packages.map((pkg, index) => (
                        <PackageCard key={pkg.id} pkg={pkg} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackagesSection;
