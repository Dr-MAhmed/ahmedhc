"use client"; // Ensure this is at the very top

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from './Loading'; // Adjust the path if needed

const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!router) return; // This check can be optional as useRouter should not return undefined if used correctly

    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]); // Add router as a dependency

  return (
    <>
      {loading ? <Loading /> : children}
    </>
  );
};

export default LoadingWrapper;
