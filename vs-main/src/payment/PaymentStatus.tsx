import { useStripe } from '@stripe/react-stripe-js';
import { Stripe } from '@stripe/stripe-js';
import useSession from 'src/hooks/useSession';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import * as paymentService from 'services/payment.service';

const PaymentStatus = () => {
  const router = useRouter();
  const stripe = useStripe();
  const { session } = useSession();
  const [message, setMessage] = useState<string | null>(null);

  const { mutate, isLoading: isAttachingMethodToCustomer } = useMutation<
    any,
    any,
    {
      paymentMethodId: string;
    }
  >(
    (payload) => {
      const { paymentMethodId } = payload;
      return paymentService.attachPaymentMethodToCustomer(paymentMethodId);
    },
    {
      onSuccess: (data) => {
        // console.log('till this card details are saved');
        localStorage.removeItem('issavecard');
      },
      onSettled: (data, error, variables, context) => {
        setMessage('Success! Payment received.');
        localStorage.removeItem('issavecard');
      },
    }
  );
  const { isLoading, data, refetch } = useQuery(
    'retrieve-payment-indent-status',
    async () => {
      const clientSecret = new URLSearchParams(window.location.search).get(
        'payment_intent_client_secret'
      );
      return await paymentService.retrievePaymentIntent(
        stripe as Stripe,
        clientSecret as string
      );
    },
    {
      onSuccess: ({ paymentIntent }) => {
        // console.log(paymentIntent);
        switch (paymentIntent?.status) {
          case 'succeeded': {
            const isSaveCard = localStorage.getItem('issavecard');
            if (isSaveCard === Boolean(true).toString()) {
              // console.log({
              //   paymentMethodId: paymentIntent?.payment_method,
              //   stripeCustomerId: session?.user?.stripeCustomerId,
              // });
              mutate({
                paymentMethodId: paymentIntent?.payment_method as string,
              });
            } else {
              setMessage('Success! Payment received.');
            }

            // saveCardDetailHArere
            break;
          }

          case 'processing':
            setMessage(
              "Payment processing. We'll update you when payment is received."
            );
            break;

          case 'requires_payment_method':
            // Redirect your user back to your payment page to attempt collecting
            // payment again
            setMessage('Payment failed. Please try another payment method.');
            break;

          default:
            setMessage('Something went wrong.');
            break;
        }
      },
      onError: (error) => {
        // console.log(error);
      },
      enabled: false,
    }
  );

  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!session) {
      return;
    }

    refetch();
  }, [stripe, session]);

  return (
    <>
      <section id="payment" className="py-10 c-container">
        <div className="flex justify-between">
          {/* <button
            className="text-lg font-bold"
            onClick={() => {
              router.push('/');
            }}
          >
            <MdOutlineChevronLeft className="inline text-2xl" /> Go Back
          </button> */}
          <button
            className="c-btn"
            onClick={() => {
              router.push('/');
            }}
          >
            Home
          </button>
        </div>
        <div className="pt-20">
          <div className="max-w-xl p-6 px-10 py-12 mx-auto space-y-6 rounded-xl bg-base-200 dark:bg-dark-base-200">
            <div className="flex items-center justify-center">
              <img
                src="/assets/logo/tick.png"
                alt="tick"
                className="block w-16 h-16"
              />
            </div>
            <div className="py-4 pb-6 space-y-2 border-b border-quarternary dark:border-dark-quarternary/40">
              <h2 className="text-xl text-center color-heading">
                Your payment was successful.
              </h2>
              <p className="text-center">
                Thank you for you purchase. We will immediatly start preparing
                your order and ship it to you.
              </p>
            </div>
            {/* <div className="py-6 space-y-4">
              <h3 className="mb-4 text-center color-heading">ORDER SUMMARY</h3>
              <div className="flex items-center justify-between">
                <h4>Transaction ID</h4>
                <p>Y/T/D</p>
              </div>
              <div className="flex items-center justify-between">
                <h4>Subtotal</h4>
                <p>
                  USD <span>${(data?.paymentIntent?.amount || 10) / 100}</span>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <h4>Taxes</h4>
                <p>USD Y/T/D</p>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-primary">Total</h4>
                <p>
                  USD{' '}
                  <span className="text-primary">
                    ${(data?.paymentIntent?.amount || 10) / 100}
                  </span>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentStatus;
