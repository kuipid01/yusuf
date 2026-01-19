import React from 'react';

interface Plan {
    id: number;
    title: string;
    description: string;
    price: string;
    price2?: string;
    icon: string;
    isPopular?: boolean;
    buttonVariant: 'solid' | 'outline';
    features: string[];
}

const plans: Plan[] = [
    {
        id: 1,
        title: "Basic Package",
        description: "Affordable spiritual journey with shared accommodation and essential services.",
        price: "3,999,000 (4/Room)",
        price2: "4,350,000 (2/Room)",
        icon: "🌙",
        buttonVariant: 'solid',
        features: [
            "Umra Visa",
            "Economy Flight Ticket",
            "Hotel Accommodation",
            "Daily Breakfast & Dinner",
            "Shared Transportation",
            "Historical Sites Visit",
            "Grand Lectures"
        ]
    },
    {
        id: 2,
        title: "Standard Package",
        description: "Balanced comfort with improved accommodation options.",
        price: "4,450,000 (4/Room)",
        price2: "4,700,000 (2/Room)",
        icon: "🕌",
        isPopular: true,
        buttonVariant: 'outline',
        features: [
            "Umra Visa",
            "Economy Flight Ticket",
            "Standard Hotel Stay",
            "Daily Breakfast & Dinner",
            "Shared Transportation",
            "Historical Sites Visit",
            "Grand Lectures"
        ]
    },
    {
        id: 3,
        title: "Gold Package",
        description: "Premium 5-Star experience for maximum comfort and proximity.",
        price: "5,450,000 (4/Room)",
        price2: "6,200,000 (2/Room)",
        icon: "🌟",
        buttonVariant: 'solid',
        features: [
            "Umra Visa",
            "Economy Flight Ticket",
            "5-Star Hotel Accommodation",
            "Daily Breakfast & Dinner",
            "Shared Transportation",
            "Historical Sites Visit",
            "Grand Lectures"
        ]
    }
];

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
    return (
        <div className={`bg-white rounded-[2rem] p-8 shadow-xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-500 border-2 ${plan.isPopular ? 'border-blue-600 scale-105 z-10' : 'border-transparent'} flex flex-col`}>
            {/* Icon Area */}
            <div className="mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-100">
                    {plan.icon}
                </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mb-3">{plan.title}</h3>
            <p className="text-gray-500 text-xs mb-8 leading-relaxed font-medium">
                {plan.description}
            </p>

            <div className="mb-8 space-y-2">
                <div>
                    <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-1">Price (4 in a room)</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-gray-900">₦</span>
                        <span className="text-2xl font-black text-gray-900">{plan.price.split(' ')[0]}</span>
                    </div>
                </div>
                {plan.price2 && (
                    <div>
                        <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-1">Price (2 in a room)</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold text-gray-900">₦</span>
                            <span className="text-2xl font-black text-gray-900">{plan.price2.split(' ')[0]}</span>
                        </div>
                    </div>
                )}
            </div>

            <button
                onClick={() => {
                    const text = `Hello, I'm interested in booking the ${plan.title} (Umrah 2026). Please provide more details.`;
                    const url = `https://wa.me/2348089299201?text=${encodeURIComponent(text)}`;
                    window.open(url, '_blank');
                }}
                className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all mb-8 ${plan.buttonVariant === 'solid'
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-100'
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                    }`}>
                Book This Package
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                </svg>
            </button>

            {/* Features List */}
            <div className="space-y-4 mt-auto">
                {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-[11px] font-bold text-gray-600 uppercase tracking-tight">
                        <div className="flex-shrink-0 w-5 h-5 bg-blue-50 rounded-lg flex items-center justify-center">
                            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const UmrahPlansSection: React.FC = () => {
    return (
        <section id="packages" className="py-24 bg-blue-50/20">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-white text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                        August - November 2026
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
                        Umrah Packages <br />
                        <span className="text-blue-600">2026 Season</span>
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed italic">
                        Join us for a spiritually uplifting journey. Secure your spot for August, September, October, or November 2026.
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
                    {plans.map((plan) => (
                        <PlanCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UmrahPlansSection;
