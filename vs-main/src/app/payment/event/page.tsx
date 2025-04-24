'use client';

import { loadStripe } from '@stripe/stripe-js';
import useSession from 'src/hooks/useSession';
import { useRouter } from 'next/navigation';
import * as paymentService from 'services/payment.service';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const { PaymentIntentTypeEnum } = paymentService;

export default function BuyTicketPage() {
  const router = useRouter();
  const { session } = useSession();

  // const { eventId, quantity, amount: price, ticketType } = router.query;

  // const onSuccess = (data: IClientSecretResponseData) => {
  //   console.log('client secret fetched successfully');
  // };

  // const onError = (error: any) => {
  //   console.log(error);
  // };

  // const { data, isLoading } = useQuery(
  //   'get-client-secret',
  //   async () => {
  //     return await paymentService.getClientSecretForPayment(
  //       PaymentIntentTypeEnum.TICKET,
  //       {
  //         amountPerItem: Number(price),
  //         eventId: eventId as string,
  //         numberOfticket: Number(quantity),
  //         ticketType: ticketType === 'VIP' ? 'VIP' : 'GENERAL',
  //       }
  //     );
  //   },
  //   {
  //     select: (response) => response.data.data,
  //     onSuccess,
  //     onError,
  //   }
  // );

  // if (isLoading) {
  //   return <Loading isLoading alt fullScreen />;
  // }

  return (
    <></>
    // <Elements
    //   stripe={stripePromise}
    //   options={{
    //     // clientSecret: data?.clientSecret,
    //     appearance: {
    //       theme:
    //         localStorage.getItem('color-theme') === 'dark' ? 'night' : 'flat',
    //     },
    //   }}
    // >
    //   {/* <Payment paymentInitiatedFor={PaymentIntentTypeEnum.TICKET} /> */}
    // </Elements>
  );
}
