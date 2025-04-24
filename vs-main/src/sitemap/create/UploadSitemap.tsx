'use client';

import useSession from 'src/hooks/useSession';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {
  VirtuosoVenueDetailsFragment,
  GetVenuePageQuery,
  GetVirtuosoSitemapQuery,
  VirtuosoSiteMaps,
} from 'services/types/generated';
import { getVenuePage } from 'services/venue.service';
import UploadSitemapForm from './UploadSitemapForm';
import Loading from 'src/common/Loading';
import { getSitemap } from 'services/sitemap.service';

interface IUploadSitemapProps {
  editMode?: boolean;
}

export default function UploadSitemap({
  editMode = false,
}: IUploadSitemapProps) {
  const [step, setStep] = useState<number>(0);
  const { session } = useSession();
  const params = useParams();
  const id = params?.id;

  const { isLoading, data } = useQuery<
    GetVenuePageQuery,
    unknown,
    VirtuosoVenueDetailsFragment
  >(['venue', id, session?.user?.sub], getVenuePage, {
    enabled: !editMode,
    select: (data) => data.venue as VirtuosoVenueDetailsFragment,
  });

  const { isLoading: isSitemapLoading, data: sitemap } = useQuery<
    GetVirtuosoSitemapQuery,
    unknown,
    VirtuosoSiteMaps
  >(['sitemap', id], getSitemap, {
    select: (data) => data.getVirtuosoSiteMaps as VirtuosoSiteMaps,
  });

  const handleSetStep = (i: number) => {
    setStep(i);
  };

  if (isSitemapLoading || isLoading)
    return <Loading isLoading={true} fullScreen={true} alt={<></>} />;

  return (
    <div className="pt-5 pb-10 c-container-sm">
      {step === 0 && (
        <UploadSitemapForm
          handleSetStep={handleSetStep}
          data={data}
          sitemap={sitemap}
        />
      )}
      {step === 1 && (
        <>
          <div className="pt-40">
            <div className="max-w-xl p-4 px-10 py-12 mx-auto space-y-6 rounded-xl bg-base-200 dark:bg-dark-base-200 md:p-6">
              <div className="flex items-center justify-center">
                <img
                  src="/assets/logo/tick.png"
                  alt="tick"
                  className="block w-16 h-16"
                />
              </div>
              <div className="py-4 pb-6 space-y-2 border-b border-quarternary dark:border-dark-quarternary/40">
                <h2
                  className="text-xl text-center color-heading"
                  data-testid={
                    editMode
                      ? 'update-sitemap-success-msg'
                      : 'upload-sitemap-success-msg'
                  }
                >
                  Sitemap successfuly {editMode ? 'updated' : 'uploaded'}!
                </h2>
                <p className="max-w-sm mx-auto text-center">
                  You can check this Sitemap in your Inventory and also publish
                  it to the Marketplace
                </p>
              </div>
              <div>
                <Link
                  href={
                    sitemap ? `/sitemap/${sitemap.SiteMapID}` : `/venue/${id}`
                  }
                  className="flex items-center justify-center c-btn-primary"
                >
                  {sitemap ? 'View Sitemap' : 'Back to Venue'}
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
