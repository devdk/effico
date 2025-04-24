'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineChevronLeft } from 'react-icons/md';
import CreateCreatorPage from './CreateCreatorPage';
import CreateVendorPage from './CreateVendorPage';
import CreateVenuePage from './CreateVenuePage';
import useIsLoggedIn from 'src/hooks/useIsLoggedIn';
import { Button } from 'src/components/ui/button';

export default function CreatePage() {
  const [step, setStep] = useState<number>(0);
  const { loggedIn, navigateToLogin } = useIsLoggedIn();

  const handleSetStep = (i: number) => {
    setStep(i);
  };

  return (
    <>
      {step === 0 && (
        <>
          <Link href="/pages" className="text-lg font-bold">
            <MdOutlineChevronLeft className="inline text-2xl" /> Back to Pages
          </Link>
          <div className="grid gap-10 pt-8 pb-28 md:pb-0 md:pt-40 md:grid-cols-3">
            <div className="p-6 space-y-4 rounded-xl bg-base-200 dark:bg-dark-base-200">
              <div className="py-6 h-60">
                <img
                  src="/assets/logo/creator.svg"
                  alt="creator"
                  className="block w-full h-full"
                />
              </div>
              <h3 className="text-lg text-center">Creator Page</h3>
              <p className="pb-4 text-center">
                A space for artists, performers, and event organizers to design
                their virtual events. Share your creative vision, organize event
                details, and connect with your audience to make it all happen.
              </p>
              <Button
                className="w-full"
                data-testid="create-creator-page-btn"
                onClick={loggedIn ? () => handleSetStep(1) : navigateToLogin}
              >
                Continue
              </Button>
            </div>
            <div className="p-6 space-y-4 rounded-xl bg-base-200 dark:bg-dark-base-200">
              <div className="py-6 h-60">
                <img
                  src="/assets/logo/venue.svg"
                  alt="creator"
                  className="block w-full h-full"
                />
              </div>
              <h3 className="text-lg text-center">Venue Page</h3>
              <p className="pb-4 text-center">
                The perfect hub for showcasing your virtual venue, powered by
                Unreal Engine. Highlight its design, atmosphere, and features to
                show why it’s the ideal location for immersive events.
              </p>
              <Button
                className="w-full"
                data-testid="create-venue-page-btn"
                onClick={loggedIn ? () => handleSetStep(2) : navigateToLogin}
              >
                Continue
              </Button>
            </div>
            <div className="p-6 space-y-4 rounded-xl bg-base-200 dark:bg-dark-base-200">
              <div className="py-6 h-60">
                <img
                  src="/assets/logo/vendor.svg"
                  alt="creator"
                  className="block w-full h-full"
                />
              </div>
              <h3 className="text-lg text-center">Vendor Page</h3>
              <p className="pb-4 text-center">
                A showcase for brands to display their unique offerings—stages,
                in-game items, avatar clothing, and more. Make your products
                shine and reach audiences looking to enhance their virtual
                experiences.
              </p>
              <Button
                className="w-full"
                data-testid="create-vendor-page-btn"
                onClick={loggedIn ? () => handleSetStep(3) : navigateToLogin}
              >
                Continue
              </Button>
            </div>
          </div>
        </>
      )}
      {step === 1 && <CreateCreatorPage handleSetStep={handleSetStep} />}
      {step === 2 && <CreateVenuePage handleSetStep={handleSetStep} />}
      {step === 3 && <CreateVendorPage handleSetStep={handleSetStep} />}
    </>
  );
}
