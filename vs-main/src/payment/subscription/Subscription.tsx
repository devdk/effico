import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { BillingDetails } from '@stripe/stripe-js';
import useSession from 'src/hooks/useSession';
import { FormEvent, useState } from 'react';
import { PaymentIntentTypeEnum } from 'services/payment.service';
import Loading from 'src/common/Loading';
import ErrorMessage from 'src/common/message/ErrorMessage';

type SubscriptionProps = {
  address: BillingDetails | undefined;
};

export default function Subscription({ address }: SubscriptionProps) {
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const { session } = useSession();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    const stripeCustomerId = session?.user?.stripeCustomerId;
    if (!stripeCustomerId) return;
    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // handleError(submitError);
      return;
    }

    // Create the subscription
    const res = await fetch('/api/subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stripeCustomerId,
        sub: session?.user?.sub,
      }),
    });

    const { type, clientSecret } = await res.json();
    // console.log({ type, clientSecret });

    const confirmIntent =
      type === 'setup' ? stripe.confirmSetup : stripe.confirmPayment;

    // Confirm the Intent using the details collected by the Payment Element
    const { error } = await confirmIntent({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      },
    });

    if (error) {
      // handleError(error);
    } else {
      // Your customer is redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer is redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form
      style={{
        display: 'contents',
      }}
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsFormSubmitted(true);
        handleSubmit(event);
      }}
    >
      <div className="space-y-6">
        <section id="col-2" className="space-y-6">
          <div className="space-y-4 rounded-xl bg-base-200 dark:bg-dark-base-200">
            <div className="p-5">
              {/* Show error message to your customers */}
              {errorMessage && <ErrorMessage errorText={errorMessage} />}
              <PaymentElement />
              <div className="col-span-4 pt-4">
                <div className="flex justify-center">
                  <button
                    className="w-full c-btn-primary disabled:bg-neutral-600"
                    type="submit"
                    disabled={isFormSubmitted}
                  >
                    <span className="inline-block">
                      <Loading alt="Confirm Payment" isLoading={false} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
}

Subscription.defualtProps = {
  type: PaymentIntentTypeEnum.PRODUCT,
};

Subscription.auth = true;
