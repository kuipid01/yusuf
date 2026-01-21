'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, CreditCard, User, Mail, Phone, Info } from 'lucide-react';
import { usePaystackPayment } from '@/hooks/usePaystackPayment';

interface PricingOption {
    label: string;
    price: number;
    displayPrice: string;
}

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    packageTitle: string;
    packageDescription: string;
    pricingOptions: PricingOption[];
    onSuccess: (reference: string) => void;
    onFailure: (message: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
    isOpen,
    onClose,
    packageTitle,
    packageDescription,
    pricingOptions,
    onSuccess,
    onFailure,
}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [selectedOption, setSelectedOption] = useState<PricingOption>(pricingOptions[0]);
    const { initializePayment, loading } = usePaystackPayment();

    if (!isOpen) return null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.email || !formData.name || !formData.phone) {
            alert('Please fill in all fields');
            return;
        }

        const response = await initializePayment(formData.email, selectedOption.price);

        if (response?.status && response.data.authorization_url) {
            // Store the reference in localStorage to verify on callback if needed
            localStorage.setItem('last_payment_reference', response.data.reference);
            // Redirect to Paystack
            globalThis.location.href = response.data.authorization_url;
        } else {
            onFailure(response?.message || 'Failed to initialize payment');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <div className="bg-white max-h-[95vh] overflow-y-auto  dark:bg-zinc-900 rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 border border-zinc-200 dark:border-zinc-800">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left Side: Package Info */}
                    <div className="md:w-5/12 bg-zinc-50 dark:bg-zinc-800/50 p-8 border-r border-zinc-100 dark:border-zinc-800">
                        <button
                            onClick={onClose}
                            className="md:hidden absolute top-4 right-4 p-2 bg-white dark:bg-zinc-800 rounded-full shadow-lg"
                        >
                            <X size={20} />
                        </button>
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                                <ShieldCheck size={12} />
                                Secure Booking
                            </div>
                            <h2 className="text-2xl font-black text-zinc-900 dark:text-white leading-tight mb-3">
                                {packageTitle}
                            </h2>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed italic">
                                {packageDescription}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Select Room Type</p>
                            {pricingOptions.map((option, idx) => (
                                <button
                                    key={option.label}
                                    onClick={() => setSelectedOption(option)}
                                    className={`w-full p-4 rounded-2xl text-left transition-all border-2 ${selectedOption.label === option.label
                                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 shadow-lg shadow-blue-500/10'
                                        : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-200'
                                        }`}
                                >
                                    <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${selectedOption.label === option.label ? 'text-blue-600' : 'text-zinc-400'
                                        }`}>
                                        {option.label}
                                    </p>
                                    <p className="text-lg font-black text-zinc-900 dark:text-white">
                                        ₦{option.displayPrice}
                                    </p>
                                </button>
                            ))}
                        </div>

                        <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                            <div className="flex gap-3">
                                <Info size={18} className="text-amber-600 shrink-0" />
                                <p className="text-[11px] leading-relaxed text-amber-700 dark:text-amber-400 font-medium">
                                    By proceeding, you agree to our terms of service and booking policies for the 2026 season.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="md:w-7/12 p-8 relative">
                        <button
                            onClick={onClose}
                            className="hidden md:block absolute top-4 right-4 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                        >
                            <X size={24} className="text-zinc-400" />
                        </button>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">Guest Details</h3>
                            <p className="text-sm text-zinc-500">Please provide your contact information to complete your booking.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <label htmlFor="booking-name" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                                    <input
                                        id="booking-name"
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="John Doe"
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:text-white transition-all text-sm font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="booking-email" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                                    <input
                                        id="booking-email"
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="john@example.com"
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:text-white transition-all text-sm font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="booking-phone" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                                    <input
                                        id="booking-phone"
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+234 800 000 0000"
                                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:text-white transition-all text-sm font-medium"
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-5 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-xs uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Pay ₦{selectedOption.displayPrice}
                                            <CreditCard size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                                <p className="text-center text-[10px] text-zinc-400 mt-4 uppercase tracking-tighter">
                                    Transactions are encrypted and processed securely via Paystack
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
