import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, amount, currency = 'NGN', channels = ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'] } = body;

    if (!email || !amount) {
      return NextResponse.json(
        { status: false, message: 'Email and amount are required' },
        { status: 400 }
      );
    }

    const paystackUrl = 'https://api.paystack.co/transaction/initialize';
    const secretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!secretKey) {
      console.error('PAYSTACK_SECRET_KEY is not defined');
      return NextResponse.json(
        { status: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }

    const response = await fetch(paystackUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount: amount * 100, // Paystack expects amount in kobo
        currency,
        channels,
        callback_url: `${request.headers.get('origin')}/payment-callback`, // Optional: Client can handle this
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Paystack initialization error:', error);
    return NextResponse.json(
      { status: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
