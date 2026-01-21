"use client"
import React, { useState } from 'react';
import { BookingModal } from './BookingModal';

interface RamadanPlan {
    id: number;
    title: string;
    description: string;
    hotels: string[];
    price4: string;
    price3: string;
    price2: string;
    icon: string;
    buttonVariant: 'solid' | 'outline';
    features: string[];
}

const ramadanPlans: RamadanPlan[] = [
    {
        id: 1,
        title: "Silver Package",
        description: "Comfortable spiritual retreat with quality 3-Star accommodations.",
        hotels: ["Royal Almedina Hotel (Medina)", "Albustan Hotel (Makkah)"],
        price4: "5,500,000",
        price3: "6,000,000",
        price2: "6,600,000",
        icon: "🌙",
        buttonVariant: 'outline',
        features: [
            "Umrah Visa Procurement",
            "Economy Return Ticket",
            "Iftar & Sahor Meals",
            "Local Transportation",
            "Historical Sites Visit"
        ]
    },
    {
        id: 2,
        title: "Diamond Package",
        description: "Elevated experience with selected luxury hotels.",
        hotels: ["5-Star Hotel (Medina)", "Marriott/Double Tree/Anjum (Makkah)"],
        price4: "9,800,000",
        price3: "11,700,000",
        price2: "12,500,000",
        icon: "💎",
        buttonVariant: 'solid',
        features: [
            "Umrah Visa Procurement",
            "Economy Return Ticket",
            "Iftar & Sahor Meals",
            "Local Transportation",
            "Historical Sites Visit"
        ]
    },
    {
        id: 3,
        title: "Gold Package",
        description: "Ultimate luxury with premium 5-Star hotels steps from the Haram.",
        hotels: ["Anwar Movenpick (Medina)", "Pullman Zamzam (Makkah)"],
        price4: "12,500,000",
        price3: "14,100,000",
        price2: "15,500,000",
        icon: "👑",
        buttonVariant: 'solid',
        features: [
            "Umrah Visa Procurement",
            "Economy Return Ticket",
            "Iftar & Sahor Meals",
            "Local Transportation",
            "Historical Sites Visit"
        ]
    }
];

const RamadanPlanCard: React.FC<{ plan: RamadanPlan; onBook: (plan: RamadanPlan) => void }> = ({ plan, onBook }) => {
    return (
        <div className="bg-slate-900 text-white rounded-4xl p-8 shadow-2xl border border-slate-700 hover:border-purple-500 transition-all duration-500 flex flex-col relative overflow-hidden group">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 to-slate-900 pointer-events-none group-hover:from-purple-900/40 transition-all" />

            {/* Icon Area */}
            <div className="mb-6 relative z-10">
                <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-purple-900/50">
                    {plan.icon}
                </div>
            </div>

            <h3 className="text-2xl font-black mb-2 relative z-10">{plan.title}</h3>
            <p className="text-slate-400 text-xs mb-6 leading-relaxed relative z-10">
                {plan.description}
            </p>

            {/* Hotels */}
            <div className="mb-6 bg-white/5 rounded-xl p-4 relative z-10">
                <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-2">Accommodations</p>
                <ul className="space-y-1">
                    {plan.hotels.map((hotel, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                            <span className="text-purple-500 mt-0.5">▪</span> {hotel}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Pricing */}
            <div className="space-y-3 mb-8 relative z-10">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-[10px] uppercase text-slate-500 font-bold">4 in a Room</span>
                    <span className="text-lg font-bold text-white">₦{plan.price4}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-[10px] uppercase text-slate-500 font-bold">3 in a Room</span>
                    <span className="text-lg font-bold text-white">₦{plan.price3}</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                    <span className="text-[10px] uppercase text-slate-500 font-bold">2 in a Room</span>
                    <span className="text-lg font-bold text-white">₦{plan.price2}</span>
                </div>
            </div>

            <button
                onClick={() => onBook(plan)}
                className={`w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all mb-8 relative z-10 hover:scale-105 active:scale-95 ${'bg-white text-slate-900 hover:bg-purple-50'
                    }`}>
                Book Ramadan
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                </svg>
            </button>

            {/* Features List */}
            <div className="space-y-3 mt-auto relative z-10 border-t border-white/10 pt-6">
                {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-tight">
                        <div className="shrink-0 w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

const RamadanSection: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<RamadanPlan | null>(null);

    const parsePrice = (priceStr: string) => {
        return parseInt(priceStr.replace(/,/g, ''));
    };

    return (
        <section className="py-24 bg-slate-950">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                        Ramadan 2026
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white">
                        Experience Ramadan <br />
                        <span className="text-purple-500">In The Holy Lands</span>
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed italic">
                        Immerse yourself in the spirituality of Ramadan with our curated packages including Iftar, Sahor, and premium accommodations.
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {ramadanPlans.map((plan) => (
                        <RamadanPlanCard key={plan.id} plan={plan} onBook={(p) => setSelectedPlan(p)} />
                    ))}
                </div>
            </div>

            {selectedPlan && (
                <BookingModal
                    isOpen={!!selectedPlan}
                    onClose={() => setSelectedPlan(null)}
                    packageTitle={`${selectedPlan.title} - Ramadan 2026`}
                    packageDescription={selectedPlan.description}
                    pricingOptions={[
                        { label: '4 in a Room', price: parsePrice(selectedPlan.price4), displayPrice: selectedPlan.price4 },
                        { label: '3 in a Room', price: parsePrice(selectedPlan.price3), displayPrice: selectedPlan.price3 },
                        { label: '2 in a Room', price: parsePrice(selectedPlan.price2), displayPrice: selectedPlan.price2 }
                    ]}
                    onSuccess={(ref) => alert('Payment Successful: ' + ref)}
                    onFailure={(msg) => alert('Payment Failed: ' + msg)}
                />
            )}
        </section>
    );
};

export default RamadanSection;
