'use client';

import useSession from 'src/hooks/useSession';
import Link from 'next/link';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {
  GetVenuePageQuery,
  VirtuosoVenueDetailsFragment,
} from 'services/types/generated';
import { getVenuePage } from 'services/venue.service';
import EditVenueForm from './EditVenueForm';
import { useParams } from 'next/navigation';

export default function CreateVenue() {
  const [step, setStep] = useState<number>(0);
  const { session } = useSession();
  const params = useParams();
  const id = params?.id;

  const { isLoading, data } = useQuery<
    GetVenuePageQuery,
    unknown,
    VirtuosoVenueDetailsFragment
  >(['venue', id, session?.user?.sub], getVenuePage, {
    select: (data) => data.venue as VirtuosoVenueDetailsFragment,
  });

  const handleSetStep = (i: number) => {
    setStep(i);
  };

  return (
    <div className="pt-5 pb-10 c-container-sm">
      {step === 0 && data && (
        <EditVenueForm handleSetStep={handleSetStep} data={data} />
      )}
      {step === 1 && (
        <>
          <div className="pt-40">
            <div className="max-w-xl p-6 px-10 py-12 mx-auto space-y-6 rounded-xl bg-base-200 dark:bg-dark-base-200">
              <div className="flex items-center justify-center">
                <img
                  src="/assets/logo/tick.png"
                  alt="tick"
                  className="block w-16 h-16"
                />
              </div>
              <div className="py-4 pb-6 space-y-2 border-b border-quarternary dark:border-dark-quarternary/40">
                <h2
                  data-testid="update-venue-success-msg"
                  className="text-xl text-center color-heading"
                >
                  Your Venue has been successfuly updated.
                </h2>
                <p className="text-center">
                  You can check this venue in your venues and also publish it in
                  the marketplace
                </p>
              </div>
              <div className="py-6 pt-2 space-y-4">
                <h3 className="mb-4 text-xl text-center color-heading">
                  Uploaded Venues
                </h3>
                <div className="flex items-center justify-between">
                  <h4>Desktop</h4>
                  <p>Lorem Ipsum</p>
                </div>
                <div className="flex items-center justify-between">
                  <h4>Android</h4>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
              <div>
                <Link
                  href={`/venue/${id}`}
                  className="flex items-center justify-center c-btn-primary"
                >
                  Back to Venue
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
