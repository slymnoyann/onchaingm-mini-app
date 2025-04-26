"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { sdk } from "@farcaster/frame-sdk";
import { useEffect } from "react";
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

  useEffect(() => {
    sdk.actions.ready();
  }, []);

  useEffect(() => {
    init().then(() => {});
  }, [isConnected]);

  if (!isConnected) return;

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
