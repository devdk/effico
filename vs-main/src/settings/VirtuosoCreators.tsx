'use client';

import { useState } from 'react';
import useStripeConnect from 'src/hooks/useStripeConnect';
import {
  ConnectAccountOnboarding,
  ConnectComponentsProvider,
} from '@stripe/react-connect-js';
import useSession from 'src/hooks/useSession';
import { useQuery } from 'react-query';
import { GetProfileQuery, User } from 'services/types/generated';
import { getProfile } from 'services/user.service';

export default function VirtuosoCreators() {
  const { session } = useSession();
  const [accountCreatePending, setAccountCreatePending] = useState(false);
  const [onboardingExited, setOnboardingExited] = useState(false);
  const [error, setError] = useState(false);
  const [connectedAccountId, setConnectedAccountId] = useState('');
  const stripeConnectInstance = useStripeConnect(connectedAccountId);

  const { isLoading, data } = useQuery<GetProfileQuery, unknown, User>(
    ['get-user', session?.user?.sub, session?.user?.sub || 'guest'],
    getProfile,
    {
      select: (data) => data.user as User,
    }
  );

  if (data?.connectedStripeAccountId) {
    return (
      <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
        <section className="flex items-center justify-between pb-5 border-b border-quarternary dark:border-dark-quarternary">
          <h2 className="flex-1 text-lg font-bold color-heading md:text-2xl">
            Monetization
          </h2>
        </section>
        <div className="pt-8">
          <p>You&apos;r monetization is on.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
        <section className="flex items-center justify-between pb-5 border-b border-quarternary dark:border-dark-quarternary">
          <h2 className="flex-1 text-lg font-bold color-heading md:text-2xl">
            Monetization
          </h2>
        </section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="pt-8 space-y-6">
            <p>
              Join Virtuoso and start earning from your livestreams and events.
              As a Virtuoso Creator, you’ll receive 50% of all the revenue
              generated from ticket sales.
            </p>
            <p>
              Whether you&apos;re hosting a concert, a workshop, or any live
              event, we&apos;ve got you covered.
            </p>
            <ul className="list-disc list-inside">
              <li>Get Started: Click on the ’Get Started’ button below.</li>
              <li>
                Fill Out the Form: Complete a simple registration to join our
                platform.
              </li>
              <li>
                Start Earning: Livestream your events, and we&apos;ll handle the
                ticket sales, sending 50% of the revenue directly to you.
              </li>
            </ul>
          </div>
          <div className="h-full pt-8 content">
            {/* {!connectedAccountId && <h2>Create and get paid!</h2>} */}
            {connectedAccountId && !stripeConnectInstance && (
              <h2>Add information to start accepting money</h2>
            )}
            {/* {!connectedAccountId && <p>Virtuoso livestream</p>} */}
            {!accountCreatePending && !connectedAccountId && (
              <div className="flex items-center justify-center h-full">
                <button
                  className="c-btn-primary"
                  onClick={async () => {
                    setAccountCreatePending(true);
                    setError(false);
                    fetch('/api/account', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ sub: session?.user?.sub || '' }),
                    })
                      .then((response) => response.json())
                      .then((json) => {
                        setAccountCreatePending(false);
                        const { account, error } = json;

                        if (account) {
                          setConnectedAccountId(account);
                        }

                        if (error) {
                          setError(true);
                        }
                      });
                  }}
                >
                  Get Started!
                </button>
              </div>
            )}
            {stripeConnectInstance && (
              <ConnectComponentsProvider
                connectInstance={stripeConnectInstance}
              >
                <ConnectAccountOnboarding
                  onExit={() => setOnboardingExited(true)}
                />
              </ConnectComponentsProvider>
            )}
            {error && <p className="error">Something went wrong!</p>}
            {(connectedAccountId ||
              accountCreatePending ||
              onboardingExited) && (
              <div className="dev-callout">
                {/* {connectedAccountId && (
              <p>
                Your connected account ID is:{' '}
                <code className="bold">{connectedAccountId}</code>
              </p>
            )} */}
                {accountCreatePending && <p>Creating a connected account...</p>}
                {onboardingExited && (
                  <p>The Account Onboarding component has exited</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
