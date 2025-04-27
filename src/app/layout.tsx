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
  description: "OnChainGM",
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
          href="https://onchaingm.com/gm-icon.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://onchaingm.com/gm-icon.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://onchaingm.com/gm-icon.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://onchaingm.com/gm-icon.png"
        />
        <link rel="manifest" href="https://onchaingm.com/site.webmanifest" />
        {/* Farcaster */}
        {/* Eklenecek Meta Tag, content kısmı farcaster.json dosyasındaki frame kısmının string hali olmalı. */}
        <meta
          name="fc:frame"
          content='{"version":"next","imageUrl":"https://onchaingm.com/frame.png","button":{"title":"Visit OnChainGM","action":{"type":"launch_frame","name":"OnChainGM","url":"https://onchaingm.com/","splashImageUrl":"https://onchaingm.com/gm-icon.png","splashBackgroundColor":"#222234"}}}'
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
