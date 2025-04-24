import { AxiosError } from 'axios';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { IAuthServerError } from 'services/clients/axios';
import { validatePromoCode } from 'services/payment.service';

interface IValidatePromoCodeVariables {
  promocode: string;
}

interface IUseValidatePromocodeProps {
  subTotal: number;
  promo: string;
}

export default function useValidatePromocode({
  subTotal,
  promo,
}: IUseValidatePromocodeProps) {
  const [discount, setDiscount] = useState(0);
  const [percentDiscount, setPercentDiscount] = useState(0);
  const [finalPromo, setFinalPromo] = useState('');
  const [error, setError] = useState('');

  // LOAD THE CARDS
  const { mutate, isLoading } = useMutation(
    async (variables: IValidatePromoCodeVariables) => {
      setError('');
      setFinalPromo('');
      return await validatePromoCode(variables.promocode);
    },
    {
      mutationKey: 'validate-promocode',
      onSuccess: (data) => {
        setDiscount(data?.data?.data?.amount_off || 0);
        setPercentDiscount(data?.data?.data?.percent_off || 0);
        setFinalPromo(promo);
        // console.log(data.data.data);
      },
      onError: (e: AxiosError<IAuthServerError>) => {
        // console.log(e.response?.data);
        setError(e.response?.data?.msg || '');
      },
    }
  );

  return {
    mutate,
    isLoading,
    discount: discount ? discount : (percentDiscount / 100) * subTotal,
    promotioncode: finalPromo,
    error,
  };
}
