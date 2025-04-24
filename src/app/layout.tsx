import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OnChainGM",
  description: "OnChainGM - Farcaster Frame",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://onchaingm-teal.vercel.app/gm-icon.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://onchaingm-teal.vercel.app/gm-icon.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://onchaingm-teal.vercel.app/gm-icon.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://onchaingm-teal.vercel.app/gm-icon.png"
        />
        <link
          rel="manifest"
          href="https://onchaingm-teal.vercel.app/site.webmanifest"
        />
        {/* Farcaster */}
        <meta
          name="fc:frame"
          content='{"version":"next","imageUrl":"https://onchaingm-teal.vercel.app/gm-icon.png","button":{"title":"Say GM!","action":{"type":"launch_frame","name":"OnChainGM","url":"https://onchaingm-teal.vercel.app/","splashImageUrl":"https://onchaingm-teal.vercel.app/splash.png","splashBackgroundColor":"#222234"}}}'
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
