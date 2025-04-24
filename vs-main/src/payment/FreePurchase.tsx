'use client';

import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoTicket } from 'react-icons/io5';
import { useMutation } from 'react-query';
import { IAuthServerError } from 'services/clients/axios';
import {
  acquireFreeTickets,
  IAcquireFreeTicketsVariables,
} from 'services/payment.service';
import Loading from 'src/common/Loading';

export default function FreePurchase({
  assetId,
  assetType,
  type,
}: {
  assetId: string | null;
  assetType: string;
  type: string | null;
}) {
  const router = useRouter();

  // fetch payment details
  const { mutate, isLoading } = useMutation(
    async (variables: IAcquireFreeTicketsVariables) => {
      return await acquireFreeTickets(variables);
    },
    {
      mutationKey: 'free-purchase',
      onSuccess: (data) => {
        router.push('/payment/free');
      },
      onError: (e: AxiosError<IAuthServerError>) => {
        router.push(`/payment/error`);
      },
    }
  );

  const handleAcquireTicket = () => {
    mutate({
      items: [{ productId: assetId as string }],
      type: type as string,
      assetType: assetType,
    });
  };

  return (
    <button
      onClick={handleAcquireTicket}
      className="c-btn-primary !flex !w-full items-center gap-2 justify-center"
    >
      <Loading
        alt={
          <>
            <IoTicket />
            <span>Free Purchase</span>
          </>
        }
        isLoading={isLoading}
      />
    </button>
  );
}
