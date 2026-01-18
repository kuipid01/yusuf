import React from 'react';

interface HajjPlan {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    price4: string;
    price2: string;
    icon: string;
    isPopular?: boolean;
    buttonVariant: 'solid' | 'outline';
    features: string[];
}

const hajjPlans: HajjPlan[] = [
    {
        id: 1,
        title: "Basic 1 Package",
        subtitle: "Tent D - 1 Star Hotel",
        description: "Affordable Hajj experience with essential amenities.",
        price4: "8,900,000",
        price2: "10,704,000",
        icon: "⛺",
        buttonVariant: 'outline',
        features: [
            "Hajj Visa",
            "Economy Flight",
            "1-Star Hotel",
            "Breakfast & Dinner",
            "Shared Transport",
            "Historical Visits",
            "Souvenirs",
            "Grand Lectures"
        ]
    },
    {
        id: 2,
        title: "Basic 2 Package",
        subtitle: "Tent D - 3 Star Hotel",
        description: "Comfortable stay with improved hotel rating.",
        price4: "9,900,000",
        price2: "13,900,000",
        icon: "🏨",
        buttonVariant: 'outline',
        features: [
            "Hajj Visa",
            "Economy Flight",
            "3-Star Hotel",
            "Breakfast & Dinner",
            "Shared Transport",
            "Historical Visits",
            "Souvenirs",
            "Grand Lectures"
        ]
    },
    {
        id: 3,
        title: "Standard Tent D",
        subtitle: "Tent D - 4 Star Hotel",
        description: "Premium comfort with 4-Star accommodation involved.",
        price4: "13,400,000",
        price2: "18,500,000",
        icon: "🌟",
        buttonVariant: 'solid',
        isPopular: true,
        features: [
            "Hajj Visa",
            "Economy Flight",
            "4-Star Hotel",
            "Breakfast & Dinner",
            "Shared Transport",
            "Historical Visits",
            "Souvenirs",
            "Grand Lectures"
        ]
    },
    {
        id: 4,
        title: "Standard Tent A",
        subtitle: "Tent A - 4 Star Hotel",
        description: "Superior Tent A location with 4-Star hotel comfort.",
        price4: "16,400,000",
        price2: "21,400,000",
        icon: "✨",
        buttonVariant: 'solid',
        features: [
            "Hajj Visa",
            "Economy Flight",
            "4-Star Hotel",
            "Tent A Access",
            "Breakfast & Dinner",
            "Shared Transport",
            "Historical Visits",
            "Grand Lectures"
        ]
    },
    {
        id: 5,
        title: "Gold Package",
        subtitle: "Tent A - 5 Star Hotel",
        description: "Luxury experience with 5-Star hotels (Clock Tower/Medina) & Tent A.",
        price4: "22,850,000",
        price2: "31,842,500",
        icon: "👑",
        buttonVariant: 'solid',
        features: [
            "Hajj Visa",
            "Economy Flight",
            "5-Star Hotel (Clock Tower)",
            "Tent A Access",
            "Breakfast & Dinner",
            "Shared Transport",
            "Historical Visits",
            "Grand Lectures"
        ]
    }
];

const HajjPlanCard: React.FC<{ plan: HajjPlan }> = ({ plan }) => {
    return (
        <div className={`bg-white rounded-[2rem] p-8 shadow-xl shadow-amber-900/5 hover:shadow-amber-900/10 transition-all duration-500 border-2 ${plan.isPopular ? 'border-amber-500 scale-105 z-10' : 'border-transparent'} flex flex-col`}>
            {/* Icon Area */}
            <div className="mb-8">
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-amber-100 text-white">
                    {plan.icon}
                </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mb-1">{plan.title}</h3>
            <p className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-3">{plan.subtitle}</p>
            <p className="text-gray-500 text-xs mb-8 leading-relaxed font-medium">
                {plan.description}
            </p>

            <div className="mb-8 space-y-3">
                <div className="bg-amber-50 p-3 rounded-xl">
                    <p className="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-1">4 in a Room</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-gray-900">₦</span>
                        <span className="text-xl font-black text-gray-900">{plan.price4}</span>
                    </div>
                </div>
                <div className="bg-amber-50 p-3 rounded-xl">
                    <p className="text-amber-700 text-[10px] font-black uppercase tracking-widest mb-1">2 in a Room</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-gray-900">₦</span>
                        <span className="text-xl font-black text-gray-900">{plan.price2}</span>
                    </div>
                </div>
            </div>

            <button className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all mb-8 ${plan.buttonVariant === 'solid'
                ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-xl shadow-amber-100'
                : 'border-2 border-amber-600 text-amber-600 hover:bg-amber-50'
                }`}>
                Select Package
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                </svg>
            </button>

            {/* Features List */}
            <div className="space-y-4 mt-auto">
                {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-[11px] font-bold text-gray-600 uppercase tracking-tight">
                        <div className="flex-shrink-0 w-5 h-5 bg-amber-50 rounded-lg flex items-center justify-center">
                            <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

const HajjSection: React.FC = () => {
    return (
        <section className="py-24 bg-amber-50/30">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-amber-200 bg-white text-[10px] font-bold text-amber-600 uppercase tracking-widest shadow-sm">
                        Hajj 2026
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                        Fulfill Your Pillar <br />
                        <span className="text-amber-600">With Excellence</span>
                    </h2>

                    {/* Important Info Card */}
                    <div className="grid md:grid-cols-3 gap-6 bg-white p-6 rounded-2xl shadow-lg border border-amber-100 max-w-3xl mx-auto mt-8">
                        <div className="bg-amber-50 rounded-xl p-4 flex flex-col items-center justify-center">
                            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">Hajj Form</span>
                            <span className="text-2xl font-black text-slate-900">₦20,000</span>
                        </div>
                        <div className="bg-amber-50 rounded-xl p-4 flex flex-col items-center justify-center">
                            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">Departure</span>
                            <span className="text-lg font-black text-slate-900">17th May, 2026</span>
                        </div>
                        <div className="bg-amber-50 rounded-xl p-4 flex flex-col items-center justify-center">
                            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">Arrival</span>
                            <span className="text-lg font-black text-slate-900">4th June, 2026</span>
                        </div>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed italic max-w-2xl mx-auto">
                        Pilgrims can upgrade from Economy to First or Business Class. Accommodation includes Clock Tower Haram and 5-Star Hotel in Medina (less than 5 mins walk to Haram).
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 items-start justify-center">
                    {hajjPlans.map((plan) => (
                        <HajjPlanCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HajjSection;
