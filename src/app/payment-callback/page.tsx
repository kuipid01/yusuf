'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { usePaystackPayment } from '@/hooks/usePaystackPayment';
import { PaymentStatusModal } from '@/components/PaymentStatusModal';

function CallbackContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { verifyPayment } = usePaystackPayment();
    const [modalState, setModalState] = useState<{
        isOpen: boolean;
        status: 'loading' | 'success' | 'failure';
        message: string;
        reference: string;
    }>({
        isOpen: true,
        status: 'loading',
        message: '',
        reference: '',
    });

    const reference = searchParams.get('reference');

    useEffect(() => {
        if (reference) {
            handleVerification(reference);
        } else {
            setModalState({
                isOpen: true,
                status: 'failure',
                message: 'No transaction reference found.',
                reference: '',
            });
        }
    }, [reference]);

    const handleVerification = async (ref: string) => {
        const result = await verifyPayment(ref);

        if (result?.status && result.data.status === 'success') {
            setModalState({
                isOpen: true,
                status: 'success',
                message: 'Your payment was successful. Thank you for booking with Al-Yusuff!',
                reference: ref,
            });
        } else {
            setModalState({
                isOpen: true,
                status: 'failure',
                message: result?.message || 'Transaction verification failed.',
                reference: ref,
            });
        }
    };

    const handleClose = () => {
        setModalState(prev => ({ ...prev, isOpen: false }));
        router.push('/'); // Go back to home
    };

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-6">
            <div className="text-center">
                <h1 className="text-2xl font-black text-zinc-900 dark:text-white mb-2">Processing Transaction</h1>
                <p className="text-zinc-500 dark:text-zinc-400 italic">Please do not close this window...</p>
            </div>

            <PaymentStatusModal
                isOpen={modalState.isOpen}
                status={modalState.status}
                message={modalState.message}
                reference={modalState.reference}
                onClose={handleClose}
            />
        </div>
    );
}

export default function PaymentCallbackPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        }>
            <CallbackContent />
        </Suspense>
    );
}
