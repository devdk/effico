import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-04-10',
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const customerId = searchParams.get('customerId');

    if (!customerId) {
      return NextResponse.json(
        { error: 'Customer ID is required' },
        { status: 400 }
      );
    }

    const customer: any = await stripe.customers.retrieve(customerId, {
      expand: ['address'],
    });

    const address = customer.address;

    return NextResponse.json({ address }, { status: 200 });
  } catch (error: any) {
    console.error(
      'An error occurred when calling the Stripe API to retrieve the customer address',
      error
    );

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'GET, OPTIONS',
    },
  });
}
