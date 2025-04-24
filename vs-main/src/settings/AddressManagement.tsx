import { AddressElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe, ShippingAddress } from '@stripe/stripe-js';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { MdOutlineChevronLeft } from 'react-icons/md';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  Contact,
  GetUserAddressQuery,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  User,
} from 'services/types/generated';
import { getUserAddress, updateUser } from 'services/user.service';
import AddressCard from 'src/cards/AddressCard';
import Loading from 'src/common/Loading';
import useSession from 'src/hooks/useSession';
import useTheme from 'src/hooks/useTheme';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function AddressManagement({
  setTab,
}: {
  setTab: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [rawAddress, setRawAddress] = React.useState<ShippingAddress>();
  const [activeAddress, setActiveAddress] = useState({});

  const theme = useTheme();
  const { session } = useSession();
  const queryClient = useQueryClient();

  const { isLoading: isGetUserLoading, data: user } = useQuery<
    GetUserAddressQuery,
    unknown,
    User
  >(['get-user-address', session?.user?.sub], getUserAddress, {
    select: (data) => data.user as User,
    enabled: !!session?.user?.sub,
  });

  const onSuccess = (data: UpdateUserMutation) => {
    queryClient.invalidateQueries(['get-user-address']);
  };

  const onError = (err: any) => {
    // console.log({ err });
  };

  const { mutate, isLoading } = useMutation<
    UpdateUserMutation,
    unknown,
    UpdateUserMutationVariables
  >(updateUser, {
    mutationKey: 'update-user',
    onSuccess,
    onError,
  });

  const handleDeleteAddress = (index: number) => {
    if (!user) return toast.error('user not found');
    if (!rawAddress) return toast.error('address is required');
    if (!session?.user?.sub) return toast.error('session expired');

    mutate({
      sub: session?.user?.sub,
      addresses: user.addresses?.filter((_, i) => i !== index) as Contact[],
    });
  };

  const handleSaveAddress = () => {
    if (!user) return toast.error('user not found');
    if (!session?.user?.sub) return toast.error('session expired');
    if (!rawAddress) return toast.error('address is required');

    mutate({
      sub: session?.user?.sub,
      addresses: [
        ...((user.addresses || []) as Contact[]),
        {
          ...rawAddress,
        } as Contact,
      ],
    });

    setRawAddress(undefined);
  };

  const appearance = {
    theme: theme === 'dark' ? 'night' : 'flat',
    variables: {},
  };

  const options: any = {
    mode: 'payment',
    amount: 1000,
    currency: 'usd',
    paymentMethodCreation: 'manual',
    appearance,
  };

  return (
    <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
      <div
        className="flex items-center text-lg font-semibold cursor-pointer color-heading"
        onClick={() => setTab(0)}
      >
        <HiArrowLongLeft className="inline mr-2 text-2xl" /> Manage Address
      </div>
      {!user?.addresses?.length && (
        <div className="py-8">
          <div className="flex flex-col max-w-[600px] bg-base-200 rounded-md dark:bg-dark-base-200 items-center justify-center gap-4 py-8">
            No saved addresses!
          </div>
        </div>
      )}
      {!!user?.addresses?.length && (
        <div className="flex flex-wrap gap-4 py-8">
          {user?.addresses?.map((contact, index) => (
            <AddressCard
              contact={contact}
              index={index}
              handleDeleteAddress={handleDeleteAddress}
              isLoading={isLoading}
              key={index}
            />
          ))}
        </div>
      )}
      <div className="py-4">
        <div className="max-w-[600px] space-y-6">
          <h2 className="text-base font-semibold text-heading dark:text-dark-heading">
            Add another Address
          </h2>
          <Elements stripe={stripePromise} options={options}>
            <AddressElement
              onChange={(e) => setRawAddress(e.value)}
              options={{
                mode: 'billing',
                fields: { phone: 'always' },
                allowedCountries: ['us'],
                validation: { phone: { required: 'always' } },
                defaultValues: activeAddress
                  ? activeAddress
                  : { name: session?.user?.name },
              }}
            />
          </Elements>
          <div>
            {rawAddress?.address.postal_code && (
              <button
                onClick={handleSaveAddress}
                disabled={isLoading}
                type="button"
                className="c-btn-primary !mt-6 flex w-full items-center justify-center !rounded-md"
              >
                <Loading alt="Save Address" isLoading={isLoading} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
