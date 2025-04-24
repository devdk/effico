import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-04-10',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const account = await stripe.accounts.create({
      type: 'custom',
      email: body.email,
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
      metadata: {
        sub: body.sub,
      },
    });

    return NextResponse.json({ account: account.id }, { status: 200 });
  } catch (error: any) {
    console.error(
      'An error occurred when calling the Stripe API to create an account:',
      error
    );

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS',
    },
  });
}
