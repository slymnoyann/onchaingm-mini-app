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

function Page() {
  const { isConnected } = useAccount();

  useEffect(() => {
    sdk.actions.ready();
  }, []);

  useEffect(() => {
    async function init() {
      await sdk.actions.openUrl("https://onchaingm.com/");
    }
    init();
  }, [isConnected]);

  if (!isConnected) return;

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex" }}></div>
  );
}
