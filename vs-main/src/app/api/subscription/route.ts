import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-04-10',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { stripeCustomerId, sub } = body;

    if (!stripeCustomerId || !sub) {
      return NextResponse.json(
        { error: 'Stripe Customer ID and sub are required' },
        { status: 400 }
      );
    }

    const items =
      process.env.NODE_ENV === 'development'
        ? [
            { price: 'price_1PVIMRAxcEj31w1WX6xgZ0Vm' },
            { price: 'price_1PPyPsAxcEj31w1WH6CiyZsO' },
          ]
        : [
            { price: 'price_1PY2PiAxcEj31w1WEMpG9rCa' },
            { price: 'price_1PY2HHAxcEj31w1Wy2rTQfOQ' },
          ];

    const subscription = await stripe.subscriptions.create({
      customer: stripeCustomerId,
      items,
      payment_behavior: 'default_incomplete',
      payment_settings: { save_default_payment_method: 'on_subscription' },
      expand: ['latest_invoice.payment_intent', 'pending_setup_intent'],
      trial_period_days: 7,
      metadata: {
        user: sub,
      },
    });

    if (subscription.pending_setup_intent !== null) {
      return NextResponse.json(
        {
          type: 'setup',
          clientSecret: (subscription.pending_setup_intent as any)
            .client_secret,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          type: 'payment',
          clientSecret: (subscription.latest_invoice as any)?.payment_intent
            .client_secret,
        },
        { status: 200 }
      );
    }
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
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
