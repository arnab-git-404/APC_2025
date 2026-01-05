// "use client";

// import { useEffect } from "react";
// import { usePathname, useSearchParams } from "next/navigation";
// import { useLoadingBar } from "react-top-loading-bar";

// export default function LoadingBarNavigation() {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const { complete } = useLoadingBar();

//   useEffect(() => {
//     // Complete the loading bar when the page finishes loading
//     complete();
//   }, [pathname, searchParams, complete]);

//   return null;
// }



"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLoadingBar } from "react-top-loading-bar";

export default function LoadingBarNavigation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { complete } = useLoadingBar();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a timeout to force complete after 10 seconds (in case page never loads)
    timeoutRef.current = setTimeout(() => {
      console.warn("Loading bar forced to complete after timeout");
      complete();
    }, 10000);

    // Complete the loading bar when page loads successfully
    complete();

    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname, searchParams, complete]);

  // Handle errors globally
  useEffect(() => {
    const handleError = () => {
      console.error("Page loading error detected");
      complete();
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleError);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleError);
    };
  }, [complete]);

  return null;
}