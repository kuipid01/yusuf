import { useState } from 'react';

export interface PaystackInitializeResponse {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}

export interface PaystackVerifyResponse {
  status: boolean;
  message: string;
  data: {
    status: string; // 'success', 'failed', 'abandoned'
    reference: string;
    amount: number;
    gateway_response: string;
    paid_at: string;
    channel: string;
    currency: string;
    customer: {
      email: string;
      customer_code: string;
    };
  };
}

export const usePaystackPayment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initializePayment = async (email: string, amount: number, currency: string = 'NGN'): Promise<PaystackInitializeResponse | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/paystack/initialize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, amount, currency }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to initialize payment');
      }
      
      return result;
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const verifyPayment = async (reference: string): Promise<PaystackVerifyResponse | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/paystack/verify?reference=${reference}`);
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to verify payment');
      }
      
      return result;
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    initializePayment,
    verifyPayment,
    loading,
    error,
  };
};
