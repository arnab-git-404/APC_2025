"use client";

import { LoadingBarContainer } from "react-top-loading-bar";

export default function LoadingBarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LoadingBarContainer
      props={{
        color: "blue",
        height: 5,
      }}
    >
      {children}
    </LoadingBarContainer>
  );
}