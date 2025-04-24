import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-04-10',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const accountSession = await stripe.accountSessions.create({
      account: body.account,
      components: {
        account_onboarding: { enabled: true },
      },
    });

    return NextResponse.json(
      { client_secret: accountSession.client_secret },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      'An error occurred when calling the Stripe API to create an account session',
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
