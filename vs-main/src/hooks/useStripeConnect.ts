import { useState, useEffect } from 'react';
import { loadConnectAndInitialize } from '@stripe/connect-js';
import useTheme from './useTheme';

export const useStripeConnect = (connectedAccountId: string) => {
  const [stripeConnectInstance, setStripeConnectInstance] = useState<any>();
  const theme = useTheme();

  useEffect(() => {
    if (connectedAccountId) {
      const fetchClientSecret = async () => {
        const response = await fetch('/api/account_session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            account: connectedAccountId,
          }),
        });

        if (!response.ok) {
          // Handle errors on the client side here
          const { error } = await response.json();
          throw error;
        } else {
          const { client_secret: clientSecret } = await response.json();
          return clientSecret;
        }
      };

      setStripeConnectInstance(
        loadConnectAndInitialize({
          publishableKey: `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
          fetchClientSecret,
          appearance: {
            overlays: 'dialog',
            variables: {
              colorPrimary: '#fff',
              colorBackground: '#121519',
              colorText: '#fff',
              fontFamily: 'Inter, sans-serif',
              borderRadius: '4px',
            },
          },
        })
      );
    }
  }, [connectedAccountId]);

  return stripeConnectInstance;
};

export default useStripeConnect;
