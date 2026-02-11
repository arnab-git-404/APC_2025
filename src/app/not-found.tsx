import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { HiHome } from "react-icons/hi";

export default async function NotFound() {
  const domain = process.env.NEXT_PUBLIC_APP_URL!;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="font-bricolage font-bold text-8xl md:text-9xl text-[#FF69B4] mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {`Oops! Page not found`}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto">
            {`The page you are looking for does not exist on ${domain}`}
          </p>
        </div>

        <Button
          asChild
          size="lg"
          className="bg-[#FF69B4] hover:bg-[#FF1493] text-white font-bricolage font-semibold text-lg px-8 py-6 rounded-full shadow-[0px_8px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[0px_6px_0px_rgba(0,0,0,1)] transition-all duration-200"
        >
          <Link href="/" className="flex items-center gap-2">
            <HiHome className="w-5 h-5" />
            Return to Home
          </Link>
        </Button>

        <div className="mt-12">
          <p className="text-sm text-gray-500">
            Lost? {`Let's`} get you back on track.
          </p>
        </div>
      </div>
    </div>
  );
}