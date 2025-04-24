// src/components/SuccessPage.jsx

import Link from 'next/link';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ActiveSubscription = () => {
  return (
    <div className="flex justify-center min-h-screen pt-40">
      <div className="p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center gap-y-4">
          <FaCheckCircle className="text-6xl text-green-500" />
          <h2 className="mt-4 text-2xl font-bold">Subscription Active!</h2>
          <p className="">
            You have an active subscription. Enjoy all the benefits and
            features.
          </p>
          <Link
            href={'/'}
            className="flex items-center justify-center mt-8 c-btn-primary"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActiveSubscription;
