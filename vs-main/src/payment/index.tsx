'use client';

import { Elements } from '@stripe/react-stripe-js';
import { BillingDetails } from '@stripe/stripe-js';
import { ShippingAddress, loadStripe } from '@stripe/stripe-js';
import { AxiosError } from 'axios';
import useSession from 'src/hooks/useSession';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { useMutation } from 'react-query';
import { IAuthServerError } from 'services/clients/axios';
import {
  IAmountDetails,
  IPreviewCartVariables,
  previewUserCart,
} from 'services/payment.service';
import useTheme from 'src/hooks/useTheme';
import CollectAddress from 'src/payment/CollectAddress';
import Navigation from 'src/payment/Navigation';
import Payment from './Payment';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function PaymentPage() {
  const [step, setStep] = useState(0);
  const [address, setAddress] = useState<BillingDetails>();
  const [amount, setAmount] = useState<IAmountDetails | undefined>();

  const router = useRouter();
  const { session } = useSession();
  const params = useSearchParams();
  const id = params?.get('id');
  const type = params?.get('type');
  const assetType = params?.get('assetType');
  const promocode = params?.get('promocode');

  // fetch payment details
  const { mutate: mutateCreatePaymentIntent, isLoading: isPreviewCartLoading } =
    useMutation(
      async (variables: IPreviewCartVariables) => {
        return await previewUserCart(variables);
      },
      {
        mutationKey: 'preview-cart',
        onSuccess: (data) => {
          // console.log({ data });
          setAmount(data.data.data.amount_details);
          setStep(1);
        },
        onError: (e: AxiosError<IAuthServerError>) => {
          router.push(`/payment/error?error=${e.response?.data.msg}`);
        },
      }
    );

  const previewCart = (address: ShippingAddress | undefined) => {
    if (!address) return;
    const sub = session?.user?.sub;
    const customerId = session?.user?.stripeCustomerId;

    setAddress(address);

    // console.log({ address, customerId, id, sub });
    if (!sub || !customerId || !id) return;

    mutateCreatePaymentIntent({
      items: [{ productId: id as string }],
      promocode: (promocode as string)?.toUpperCase() || '',
      address,
      type: type as string,
    });
  };

  const theme = useTheme();

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
    mode: 'payment',
    amount: amount?.subTotal || 1000,
    currency: 'usd',
    paymentMethodCreation: 'manual',
    appearance,
  };

  return (
    <Suspense>
      <Elements stripe={stripePromise} options={options}>
        <div className="grid grid-cols-1 py-20 md:grid-cols-2 c-container">
          <Navigation step={step === 0 ? 1 : 2} />
          {step === 0 && (
            <div className="p-5 space-y-5 rounded-xl bg-base-200 dark:bg-dark-base-200">
              <CollectAddress
                isPreviewCartLoading={isPreviewCartLoading}
                previewCart={previewCart}
              />
            </div>
          )}
          {step === 1 && <Payment address={address} amount={amount} />}
        </div>
      </Elements>
    </Suspense>
  );
}
