import { Switch } from '@headlessui/react';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { BillingDetails } from '@stripe/stripe-js';
import { AxiosError } from 'axios';
import useSession from 'src/hooks/useSession';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { IAuthServerError } from 'services/clients/axios';
import {
  IAmountDetails,
  IConfirmPaymentIntentPayload,
  ISavedCardPaymentPayload,
  PaymentIntentTypeEnum,
  chargeUserForSavedCard,
  confirmPayment,
  retrieveCustomerSavedMethods,
} from 'services/payment.service';
import Loading from 'src/common/Loading';
import ErrorMessage from 'src/common/message/ErrorMessage';

type PaymentProps = {
  address: BillingDetails | undefined;
  amount: IAmountDetails | undefined;
};

export default function Payment({ amount, address }: PaymentProps) {
  const [isSaveCard, setIsSaveCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [seletedPaymentMethodId, setSelectedPaymentMethod] = useState<
    string | undefined
  >(undefined);

  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { session } = useSession();
  const params = useSearchParams();
  const id = params?.get('id');
  const type = params?.get('type');
  const assetType = params?.get('assetType');
  const promocode = params?.get('promocode');

  // CONFIRM PAYMENT MUTATION
  const { mutate: mutateConfirmPayment, isLoading: isConfirmPaymentLoading } =
    useMutation(
      async (variables: IConfirmPaymentIntentPayload) => {
        return await confirmPayment(variables);
      },
      {
        mutationKey: 'confirm-payment',
        onSuccess: (data) => {
          // console.log({ data });
          router.push(`/payment/status?payment_intent=${data.data.data.id}`);
        },
        onError: (e: AxiosError<IAuthServerError>) => {
          router.push(`/payment/error?error=${e.response?.data.msg}`);
        },
      }
    );

  // LOAD SAVED CARDS
  const { data: savedCards = [], isLoading: isLoadingSavedCards } = useQuery(
    ['user-saved-payment-methods', session?.user?.sub],
    async () => {
      return await retrieveCustomerSavedMethods();
    },
    {
      select: (response) => {
        return response.data.data;
      },
      retry: false,
    }
  );

  // CARD PAYMENT MUTATION
  const {
    mutate,
    isLoading: isCardPaymentLoading,
    data: paymentIntentOffSession,
    error,
  } = useMutation(
    async (payload: ISavedCardPaymentPayload) => {
      return await chargeUserForSavedCard(payload);
    },
    {
      onSuccess: (data) => {
        const paymentIntent = data.data.data;
        router.push(`/payment/status?payment_intent=${paymentIntent.id}`);
      },
      onError: (e: AxiosError<IAuthServerError>) => {
        setErrorMessage(e?.response?.data?.msg);
      },
    }
  );

  // CONFIRM NEW CARD PAYMENT
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    // trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      elements,
      params: {
        billing_details: address as any,
      },
    });
    if (error) return;

    mutateConfirmPayment({
      promocode: (promocode as string)?.toUpperCase() || '',
      items: [{ productId: id as string }],
      address,
      paymentMethodId: paymentMethod.id,
      futureUsage: isSaveCard,
      assetType: assetType as string,
      type: type as string,
    });
  };

  // CONFIRM CARD PAYMENT
  const cardPayment = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || !id) return;

    mutate({
      paymentMethodId: seletedPaymentMethodId,
      currency: 'usd',
      assetType,
      promocode: (promocode as string)?.toUpperCase(),
      items: [{ productId: id as string }],
      type,
      address,
    } as any);
  };

  const toggleIsSaveCard = () => {
    let needToSaveCard = !isSaveCard;
    localStorage.setItem('issavecard', needToSaveCard.toString());
    setIsSaveCard(needToSaveCard);
  };

  const renderSavedCards =
    savedCards?.length === 0 ? (
      <div className="flex my-4 rounded-lg h-28 gap-x-4 bg-white/10">
        <div className="flex flex-col items-center justify-center flex-1 gap-y-2">
          <h2 className="text-lg font-bold text-primary">No Card Saved</h2>
        </div>
      </div>
    ) : (
      <table className="table w-full my-4 table-compact">
        <thead>
          <tr className="h-8">
            <th className="normal-case text-md bg-white/10"></th>
            <th className="normal-case text-md bg-white/10">Card Type</th>
            <th className="normal-case text-md bg-white/10">Card Number</th>
            <th className="normal-case text-md bg-white/10">Expires on</th>
          </tr>
        </thead>
        <tbody className="border-t divide-y">
          {savedCards?.map((cardDetail) => {
            return (
              <tr
                key={cardDetail.id}
                className="h-8"
                onClick={() => {
                  if (seletedPaymentMethodId != cardDetail.id) {
                    setSelectedPaymentMethod(cardDetail.id);
                  } else {
                    setSelectedPaymentMethod(undefined);
                  }
                }}
              >
                <td className="px-4 bg-white/10">
                  <input
                    type="checkbox"
                    className="bg-white checkbox checkbox-sm"
                    checked={seletedPaymentMethodId === cardDetail.id}
                  />
                </td>
                <td className="text-xs normal-case bg-white/10">
                  {cardDetail?.card?.brand}
                </td>
                <td className="text-xs normal-case bg-white/10">
                  **** **** **** {cardDetail?.card?.last4}
                </td>
                <td className="text-xs normal-case bg-white/10">
                  {cardDetail?.card?.exp_month} / {cardDetail?.card?.exp_year}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );

  return (
    <form
      style={{
        display: 'contents',
      }}
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsFormSubmitted(true);
        if (seletedPaymentMethodId !== undefined) {
          cardPayment(event);
        } else {
          handleSubmit(event);
        }
      }}
    >
      <div className="space-y-6">
        <section id="col-1" className="space-y-6">
          <div className="space-y-5 rounded-xl bg-base-200 dark:bg-dark-base-200">
            <div className="space-y-4 rounded-lg md:p-5">
              <h1 className="text-lg font-semibold">Order Summary</h1>
              <div>
                <div className="flex items-center justify-between">
                  <p>Cart Total:</p>
                  <p className="text-lg font-bold">
                    ${amount?.cartTotal ? amount?.cartTotal / 100 : ''}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Discount:</p>
                  <p className="">
                    ${amount?.discount ? amount?.discount / 100 : 0}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Tax:</p>
                  <p className="">
                    ${amount?.tax_amount ? amount?.tax_amount / 100 : 0}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Sum Total:</p>
                  <p className="text-lg font-bold text-green-600">
                    ${amount?.subTotal ? amount?.subTotal / 100 : ''}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="col-2" className="space-y-6">
          <div className="space-y-4 rounded-xl bg-base-200 dark:bg-dark-base-200">
            <div className="p-5 space-y-4 rounded-lg">
              <section>
                <h3 className="text-sm">Your saved Debit and Credit cards</h3>
                {isLoadingSavedCards ? (
                  <div className="flex my-4 rounded-lg sp h-28 animate-pulse gap-x-4 bg-white/10 " />
                ) : (
                  renderSavedCards
                )}
              </section>
            </div>
            <div className="p-5">
              {/* Show error message to your customers */}
              {errorMessage && <ErrorMessage errorText={errorMessage} />}
              <PaymentElement />
              {/* <CardElement  /> */}
              <div className="col-span-4 pt-4">
                <div className="flex items-center mb-9">
                  <div className="flex items-center h-5">
                    <Switch
                      checked={isSaveCard}
                      onChange={toggleIsSaveCard}
                      className={`${
                        isSaveCard
                          ? 'bg-primary'
                          : 'bg-quarternary dark:bg-dark-quarternary'
                      } relative inline-flex h-7 w-12 items-center rounded-full`}
                    >
                      <span
                        className={`${
                          isSaveCard ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                      />
                    </Switch>
                  </div>
                  <label
                    htmlFor="issavecard"
                    className="ml-2 font-medium text-gray-300 text-md"
                  >
                    Save Card Details
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    className="w-full c-btn-primary disabled:bg-neutral-600"
                    type="submit"
                    disabled={isFormSubmitted}
                  >
                    <span className="inline-block">
                      <Loading
                        alt="Confirm Payment"
                        isLoading={
                          isConfirmPaymentLoading || isCardPaymentLoading
                        }
                      />
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

Payment.defualtProps = {
  type: PaymentIntentTypeEnum.PRODUCT,
};

Payment.auth = true;
// need to work on this area
