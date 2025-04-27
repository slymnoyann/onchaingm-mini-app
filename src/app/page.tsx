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

function Page() {
  const { isConnected } = useAccount();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    sdk.actions.ready();
    
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);
    setIsMobile(mobile);

    if (mobile) {
      window.location.href = "https://onchaingm.com";
    }
  }, []);

  useEffect(() => {
    if(isMobile){
      init().then(() => {});
  }

  }, [isConnected]);

  if (!isConnected) return;

  if(isMobile) return (
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

  return <iframe
      src="https://onchaingm.com"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
      title="OnChainGM"
    />
}
