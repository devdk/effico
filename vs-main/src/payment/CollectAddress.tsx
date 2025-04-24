import { AddressElement, useElements } from '@stripe/react-stripe-js';
import { ShippingAddress } from '@stripe/stripe-js';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  Contact,
  GetUserAddressQuery,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  User,
} from 'services/types/generated';
import { getUserAddress, updateUser } from 'services/user.service';
import Loading from 'src/common/Loading';
import useSession from 'src/hooks/useSession';

interface ICollectAddressProps {
  isPreviewCartLoading: boolean;
  previewCart: (address: ShippingAddress | undefined) => void;
}

export default function CollectAddress({
  isPreviewCartLoading,
  previewCart,
}: ICollectAddressProps) {
  const [rawAddress, setRawAddress] = useState<ShippingAddress>();
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    null
  );
  const [saveAddress, setSaveAddress] = useState(false);
  const { session } = useSession();
  const queryClient = useQueryClient();

  const onSuccess = (data: UpdateUserMutation) => {
    queryClient.invalidateQueries(['get-user-address']);
  };

  const onError = (err: any) => {
    // console.error({ err });
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

  const { isLoading: isGetUserLoading, data: user } = useQuery<
    GetUserAddressQuery,
    unknown,
    User
  >(['get-user-address', session?.user?.sub], getUserAddress, {
    select: (data) => {
      const userWithIds = {
        ...data.user,
        addresses: data?.user?.addresses?.map((address, index) => ({
          ...address,
          id: `address-${index}`,
        })),
      };
      return userWithIds as User;
    },
    enabled: !!session?.user?.sub,
  });

  const elements = useElements();

  const handleSelectAddress = (contactId: string) => {
    if (selectedAddressId === contactId) {
      setRawAddress(undefined);
      setSelectedAddressId(null);
    } else {
      const selectedAddress = user?.addresses?.find(
        (contact) => contact?.id === contactId
      );
      if (selectedAddress) {
        setRawAddress({
          name: selectedAddress?.name || '',
          phone: selectedAddress?.phone || '',
          address: {
            line1: selectedAddress?.address?.line1 || '',
            line2: selectedAddress?.address?.line2 || null,
            city: selectedAddress?.address?.city || '',
            country: selectedAddress?.address?.country || 'US',
            postal_code: selectedAddress?.address?.postal_code || '',
            state: selectedAddress?.address?.state || '',
          },
        } as ShippingAddress);
        setSelectedAddressId(contactId);
      }
    }
  };

  const handleSubmitAddress = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!elements) return;
    if (!session?.user?.sub) return toast.error('session expired');

    const { error: submitError } = await elements.submit();
    if (submitError) {
      console.error(submitError);
      return;
    }
    if (saveAddress) {
      mutate({
        sub: session?.user?.sub,
        addresses: [
          ...((user?.addresses || []) as Contact[]),
          {
            ...rawAddress,
          } as Contact,
        ],
      });
    }
    previewCart(rawAddress);
  };

  return (
    <div className="col-span-12">
      <div className="mx-auto space-y-3">
        {!!user?.addresses?.length && (
          <div className="flex flex-wrap gap-4 py-8">
            {user?.addresses?.map((contact) => (
              <div
                className={`p-4 rounded-md min-w-48 bg-base-300 dark:bg-dark-base-300 cursor-pointer ${
                  selectedAddressId === contact?.id
                    ? 'border border-blue-500'
                    : ''
                }`}
                key={contact?.id}
                onClick={() => contact?.id && handleSelectAddress(contact?.id)}
              >
                <div
                  className={`w-4 flex justify-center items-center h-4 mb-2 border-2 rounded-sm ${selectedAddressId === contact?.id ? 'border-primary' : 'border-gray-300'}`}
                >
                  {selectedAddressId === contact?.id ? '✓' : ''}
                </div>

                <p>{contact?.name}</p>
                <p>{contact?.phone}</p>
                <p>{contact?.address?.city}</p>
                <p>{contact?.address?.country}</p>
                <p>{contact?.address?.line1}</p>
                <p>{contact?.address?.line2}</p>
                <p>{contact?.address?.postal_code}</p>
                <p>{contact?.address?.state}</p>
                <div className="border-t border-base-300 dark:border-dark-base-300"></div>
              </div>
            ))}
          </div>
        )}
      </div>
      {!selectedAddressId && (
        <>
          <div className="mb-4">
            <h2 className="font-bold">Add new Address</h2>
          </div>
          <div className="mx-auto space-y-3">
            <AddressElement
              onChange={(e) => {
                setRawAddress(e.value);
                setSelectedAddressId(null);
              }}
              options={{
                mode: 'billing',
                fields: { phone: 'always' },
                allowedCountries: ['us'],
                validation: { phone: { required: 'always' } },
              }}
            />
          </div>
        </>
      )}
      {!selectedAddressId && (
        <div className="flex items-center mt-5">
          <input
            type="checkbox"
            id="saveAddress"
            checked={saveAddress}
            onChange={(e) => setSaveAddress(e.target.checked)}
            className="w-4 h-4 mr-2"
          />
          <label htmlFor="saveAddress" className="text-sm">
            Save this address for future use
          </label>
        </div>
      )}
      <button
        onClick={handleSubmitAddress}
        disabled={isPreviewCartLoading || !rawAddress}
        type="button"
        className={`!mt-6 flex w-full items-center justify-center !rounded-md ${
          rawAddress ? 'c-btn-primary' : 'c-btn'
        }`}
      >
        <Loading alt="Next" isLoading={isPreviewCartLoading} />
      </button>
    </div>
  );
}
