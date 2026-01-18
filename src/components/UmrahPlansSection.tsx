import React from 'react';

interface Plan {
    id: number;
    title: string;
    description: string;
    price: string;
    icon: string;
    isPopular?: boolean;
    buttonVariant: 'solid' | 'outline';
    features: string[];
}

const plans: Plan[] = [
    {
        id: 1,
        title: "Basic Pilgrimage",
        description: "Essential services for a focused and spiritually rewarding Umrah journey.",
        price: "4,000,000",
        icon: "✈️",
        buttonVariant: 'solid',
        features: [
            "Visa Documentation",
            "Standard Flight",
            "Group Transportation",
            "Standard Hotel Stay",
            "Religious Orientation",
            "24/7 Support"
        ]
    },
    {
        id: 2,
        title: "Flexi-Pay Umrah",
        description: "Our popular Pay-Small-Small option designed for stress-free planning.",
        price: "6,000,000",
        icon: "💳",
        isPopular: true,
        buttonVariant: 'outline',
        features: [
            "Installment Payments",
            "Better Flight Options",
            "Guided Haram Tours",
            "Stay Near the Square",
            "Halal Meals Included",
            "Personal Consultant"
        ]
    },
    {
        id: 3,
        title: "Premium Executive",
        description: "Highest standard of comfort, safety, and personalized assistance.",
        price: "8,500,000",
        icon: "🌟",
        buttonVariant: 'solid',
        features: [
            "VIP Fast-Track Visa",
            "Business Class Flight",
            "Private VIP Car",
            "5-Star Hotel Stay",
            "Private Spiritual Guide",
            "Exclusive Ground Support"
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

            <div className="mb-8">
                <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-1">Estimated Cost</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-gray-900">₦</span>
                    <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                </div>
            </div>

            <button className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all mb-8 ${plan.buttonVariant === 'solid'
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-100'
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}>
                Reserve My Spot
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
        <section className="py-24 bg-blue-50/20">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-blue-100 bg-white text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                        Umrah Planning
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
                        Flexible Payment <br />
                        <span className="text-blue-600">Stress-Free</span> Planning
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed italic">
                        Don't let finances delay your spiritual goals. Start with our <span className="text-blue-600 font-black">Pay-Small-Small</span> plan today.
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
