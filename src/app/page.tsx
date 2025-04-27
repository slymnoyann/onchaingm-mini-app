"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { sdk } from "@farcaster/frame-sdk";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";

import { WagmiProvider } from "wagmi";
import { config } from "./wagmi.ts";

const queryClient = new QueryClient();

function Provider() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Page />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default Provider;

async function init() {
  await sdk.actions.openUrl("https://onchaingm.com/");
}

enum MobileState {
  LOADING = 0,
  MOBILE = 1,
  DESKTOP = 2,
}

function Page() {
  const { isConnected } = useAccount();
  const [mobileState, setMobileState] = useState<MobileState>(
    MobileState.LOADING
  );

  useEffect(() => {
    sdk.actions.ready();

    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Warpcast/i.test(
        userAgent
      );

    setMobileState(mobile ? MobileState.MOBILE : MobileState.DESKTOP);
  }, []);

  useEffect(() => {
    if (mobileState == MobileState.MOBILE) {
      init().then(() => {});
    }
  }, [isConnected, mobileState]);

  return (
    <>
      {(() => {
        switch (mobileState) {
          case MobileState.MOBILE:
            return <Mobile />;
          case MobileState.DESKTOP:
            return (
              <iframe
                src="https://onchaingm.com"
                style={{
                  width: "100%",
                  height: "100vh",
                  border: "none",
                }}
                title="OnChainGM"
              />
            );
          case MobileState.LOADING:
          default:
            return (
              <div className="w-screen h-screen flex justify-center items-center text-4xl">
                Loading...
              </div>
            );
        }
      })()}
    </>
  );
}

function Mobile() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">Please Visit OnChainGM Website!</p>
        <button
          onClick={async () => await init()}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Visit website.
        </button>
      </div>
    </div>
  );
}
