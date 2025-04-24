import { PaymentIntent, PaymentMethod, Stripe } from '@stripe/stripe-js';
import axios from './clients/axios';

const paymentEndPoints = {
  acquireFreeTickets: `/api/payment/acquire-free-tickets`,
  previewCart: `/api/payment/preview-cart`,
  confirmPayment: `/api/payment/confirm-payment`,
  chargeCardOffSession: `/api/payment/charge-card-off-session`,
  getUserPaymentMethods: `/api/payment/payment-methods`,
  validatePromoCode: '/api/payment/validate-promocode',
};

// new
export interface IConfirmPaymentIntentPayload {
  promocode?: string;
  items: ICartItemTypePayload[];
  address: any;
  paymentMethodId: any;
  futureUsage: boolean;
  assetType: string;
  type: string;
}

export interface IAmountDetails {
  cartTotal: number;
  discount: number;
  subTotal: number;
  shippingCharge: number;
  tax_amount: number;
}

export interface IPreviewCartResponseData {
  clientSecret: string;
  paymentIntentId: string;
  amount_details: IAmountDetails;
}

export interface IPreviewCartVariables {
  promocode?: string;
  items: ICartItemTypePayload[];
  address: any;
  type?: string;
}

export interface IAcquireFreeTicketsVariables {
  items: ICartItemTypePayload[];
  type?: string;
  assetType: string;
}

export const previewUserCart = (payload: IPreviewCartVariables) =>
  axios.post<Response<IPreviewCartResponseData>>(
    paymentEndPoints.previewCart,
    payload
  );

export const acquireFreeTickets = (payload: IAcquireFreeTicketsVariables) =>
  axios.post<Response<{}>>(paymentEndPoints.acquireFreeTickets, payload);

export const confirmPayment = (payload: IConfirmPaymentIntentPayload) =>
  axios.post<Response<PaymentIntent>>(paymentEndPoints.confirmPayment, payload);

// new

interface TicketRequiredPayload {
  eventId: string;
  amountPerItem: number;
  numberOfticket: number;
  ticketType: 'VIP' | 'GENERAL';
}

interface ICartItemTypePayload {
  productId: string;
}

interface ProductRequiredPayload {
  items: ICartItemTypePayload[];
  type: string;
  promocode?: string;
}

export interface IClientSecretResponseData {
  clientSecret: string;
}

// Response Generic Type
export interface Response<T> {
  status: number;
  msg: string;
  data: T;
}

export enum PaymentIntentTypeEnum {
  EVENT = 'EVENT',
  PRODUCT = 'PRODUCT',
  TICKET = 'TICKET',
}

export const validatePromoCode = (promocode: string) =>
  axios.post<Response<any>>(paymentEndPoints.validatePromoCode, {
    promocode,
  });

export const attachPaymentMethodToCustomer = (paymentMethodID: string) =>
  axios.post(paymentEndPoints.getUserPaymentMethods, {
    paymentMethodID,
  });

export const retrievePaymentIntent = (stripe: Stripe, secret: string) =>
  stripe.retrievePaymentIntent(secret);

// export const getClientSecretForPayment = (
//   type: PaymentIntentTypeEnum,
//   payload: TicketRequiredPayload | ProductRequiredPayload
// ) =>
//   axios.post<Response<IClientSecretResponseData>>(
//     paymentEndPoints.getSecretForPayment,

//     {
//       type: type,
//       ...payload,
//     }
//   );

export const retrieveCustomerSavedMethods = () =>
  axios.get<Response<PaymentMethod[]>>(paymentEndPoints.getUserPaymentMethods);

// export const chargeUserForSavedCard = (
//   type: PaymentIntentTypeEnum,
//   paymentMethodId: string,
//   payload: TicketRequiredPayload | ProductRequiredPayload
// ) =>
//   axios.post<Response<PaymentIntent>>(paymentEndPoints.chargeCardOffSession, {
//     type: type,
//     paymentMethodId,
//     ...payload,
//   });

export const chargeUserForSavedCard = (payload: ISavedCardPaymentPayload) =>
  axios.post<Response<PaymentIntent>>(
    paymentEndPoints.chargeCardOffSession,
    payload
  );

export interface ISavedCardPaymentPayload {
  paymentMethodId: string;
  assetType: string;
  currency?: string;
  promocode?: string;
  type?: string;
}
