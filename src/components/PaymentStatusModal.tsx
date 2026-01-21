'use client';

import React from 'react';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

interface PaymentStatusModalProps {
    isOpen: boolean;
    status: 'loading' | 'success' | 'failure';
    message?: string;
    reference?: string;
    onClose: () => void;
}

export const PaymentStatusModal: React.FC<PaymentStatusModalProps> = ({
    isOpen,
    status,
    message,
    reference,
    onClose,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
                <div className="p-8 text-center">
                    {status === 'loading' && (
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                                <Loader2 className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-spin" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Verifying Payment</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">Please wait while we confirm your transaction...</p>
                        </div>
                    )}

                    {status === 'success' && (
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Payment Successful!</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                                {message || 'Your payment has been processed successfully.'}
                            </p>
                            {reference && (
                                <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg mb-6 w-full">
                                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Reference</p>
                                    <p className="text-sm font-mono text-zinc-800 dark:text-zinc-200">{reference}</p>
                                </div>
                            )}
                            <button
                                onClick={onClose}
                                className="w-full py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold rounded-xl hover:opacity-90 transition-opacity"
                            >
                                Close
                            </button>
                        </div>
                    )}

                    {status === 'failure' && (
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-4">
                                <XCircle className="w-8 h-8 text-rose-600 dark:text-rose-400" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Payment Failed</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                                {message || 'Something went wrong with your payment. Please try again.'}
                            </p>
                            <button
                                onClick={onClose}
                                className="w-full py-3 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-colors"
                            >
                                Try Again
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
