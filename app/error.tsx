"use client";

import { useEffect, startTransition } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleRetry = () => {
    startTransition(() => {
      router.refresh(); 
      reset();
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="bg-red-50 p-6 rounded-2xl">
        <h2 className="text-2xl font-bold text-red-600 mb-2">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">
          {error.message || "An unexpected issue occurred while loading data."}
        </p>
        <button
          onClick={handleRetry}
          className="bg-black cursor-pointer text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );
}