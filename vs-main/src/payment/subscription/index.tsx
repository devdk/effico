'use client';

import { Elements } from '@stripe/react-stripe-js';
import { BillingDetails, loadStripe } from '@stripe/stripe-js';
import useSession from 'src/hooks/useSession';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { GetProfileQuery, User } from 'services/types/generated';
import { getProfile } from 'services/user.service';
import useTheme from 'src/hooks/useTheme';
import Subscription from 'src/payment/subscription/Subscription';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function SubscriptionWrapper() {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState<BillingDetails>();
  const { session } = useSession();

  const theme = useTheme();

  const { isLoading, data } = useQuery<GetProfileQuery, unknown, User>(
    ['get-user', session?.user?.sub, session?.user?.sub || 'guest'],
    getProfile,
    {
      select: (data) => data.user as User,
    }
  );

  const router = useRouter();

  useEffect(() => {
    if (data?.subscriptionId) router.push('/subscription/active');
  }, [data, router]);

  const appearance = {
    // theme: "flat",
    theme: theme === 'dark' ? 'night' : 'flat',
    variables: {
      // colorPrimary: "#042013",
      // colorBackground: "#f1f2f3",
      // colorText: "#1f2937",
      // fontFamily: "Inter, sans-serif",
      // borderRadius: "4px",
    },
  };

  const options: any = {
    mode: 'subscription',
    amount: 0,
    currency: 'usd',
    paymentMethodCreation: 'manual',
    appearance,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-2 c-container-sm">
        <div className="space-y-6">
          <h1 className="text-4xl c-title-sm">
            Virtuoso On-Demand Subscription
          </h1>
          <p className="text-base">
            Experience the best in livestreaming with Virtuoso. Sign up today
            and enjoy a 7-day free trial. Our on-demand subscription model means
            you start with $0 and only pay for what you use.
          </p>
          <ul className="space-y-4">
            <li className="space-y-2">
              <p className="text-lg c-title-sm">
                Pay $5 per hour of livestream
              </p>
              <p className="max-w-sm">
                Stream your live events at a competitive rate. Only pay for the
                time you broadcast live.
              </p>
            </li>
            <li className="space-y-2">
              <p className="text-lg c-title-sm">Pay $2 per GB of storage</p>
              <p className="max-w-sm">
                Store your files, including large uploads and pak files,
                securely in the cloud. Pay only for the storage you use.
              </p>
            </li>
          </ul>
          <p className="">
            Join now and take advantage of our flexible, pay-per-use pricing.
            Stream your live events and store your files securely without any
            upfront costs.
          </p>
        </div>

        {step === 1 && <Subscription address={address} />}
      </div>
    </Elements>
  );
}

SubscriptionWrapper.auth = true;
