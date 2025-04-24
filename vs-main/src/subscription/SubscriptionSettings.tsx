'use client';

import axios from 'axios';
import { useQuery } from 'react-query';
import Sidebar from 'src/settings/Sidebar';
import InvoicesList from './InvoicesList';
import useSession from 'src/hooks/useSession';
import InvoiceCardSkeleton from 'src/placeholders/InvoiceCardSkeleton';
import { GetProfileQuery, User } from 'services/types/generated';
import { getProfile } from 'services/user.service';
import Link from 'next/link';

export default function SubscriptionSettings() {
  const { session, loading } = useSession();

  const { data, error, isLoading } = useQuery(
    'invoices',
    async () => {
      const response = await axios.post('/api/invoices', {
        stripeCustomerId: session?.user?.stripeCustomerId,
      });
      return response.data.data;
    },
    {
      enabled: session?.user?.stripeCustomerId !== undefined,
    }
  );

  const { isLoading: isUserDataLoading, data: userData } = useQuery<
    GetProfileQuery,
    unknown,
    User
  >(
    ['get-user', session?.user?.sub, session?.user?.sub || 'guest'],
    getProfile,
    {
      select: (data) => data.user as User,
    }
  );

  if (
    !isLoading &&
    !isUserDataLoading &&
    !(userData?.subscriptionStatus === 'active')
  ) {
    return (
      <>
        <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
          <h2 className="text-4xl text-heading dark:text-dark-heading">
            Subscription
          </h2>
          <p className="pt-3 pb-5">
            You don&apos;t have an active subscription.
          </p>
          <p className="max-w-2xl pb-8 text-base">
            Experience the best in livestreaming with Virtuoso. Sign up today
            and enjoy a 7-day free trial. Our on-demand subscription model means
            you start with $0 and only pay for what you use.
          </p>
          <Link href="/subscription" className="">
            <button className="c-btn-primary">Get Started</button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
        <section className="flex items-center justify-between pb-5">
          <h2 className="text-2xl font-bold color-heading">Invoices</h2>
        </section>
        <section>
          {!isLoading && !isUserDataLoading && data?.invoices && (
            <InvoicesList invoices={data.invoices} />
          )}
          {(isLoading || isUserDataLoading || loading) && (
            <InvoiceCardSkeleton />
          )}
        </section>
      </div>
    </>
  );
}
