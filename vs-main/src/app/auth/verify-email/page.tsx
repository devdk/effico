import Head from 'next/head';
import Link from 'next/link';

export default function VerifyEmail() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-4">
      <Head>
        <title>Forgot Password - Virtuoso</title>
      </Head>
      <img
        src="/assets/images/hero_logo.png"
        alt="Logo"
        className="absolute -translate-x-1/2 top-6 left-1/2"
      />
      <div className="max-w-xl p-6 px-10 pt-16 mx-auto space-y-6 rounded-xl bg-base-200 dark:bg-dark-base-200">
        <div className="flex items-center justify-center">
          <img
            src="/assets/logo/tick.png"
            alt="tick"
            className="block w-16 h-16"
          />
        </div>
        <div className="py-4 pb-10 space-y-2">
          <h2 className="text-xl text-center color-heading">
            Verify your Email!
          </h2>
          <p className="text-center">
            We sent you a confirmation email. Please check your inbox, verify
            your email and get back to login.
          </p>
        </div>
        <div>
          <Link href="/auth/login" className="c-btn-link-primary">
            Back to Login
          </Link>
        </div>
        <div className="flex">
          <p>Link Expired?</p>
          <Link
            href="/auth/resend-verification"
            className="inline-block ml-2 font-semibold text-primary"
          >
            Get a new Link
          </Link>
        </div>
      </div>
    </div>
  );
}
