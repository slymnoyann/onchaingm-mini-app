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
          content='{"accountAssociation":{"header":"eyJmaWQiOjg3NjM4NiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDQyYzc4QTM3RjYxNjE1M0U5ZmY1RDc5RmY2MjlCNGQ5QTM5MDREMTUifQ","payload":"eyJkb21haW4iOiJvbmNoYWluZ20tdGVhbC52ZXJjZWwuYXBwIn0","signature":"MHgzNDY0MzY3M2EyMTU0Y2M4YzVhN2E4ZTkxNDNkNWIxNzMzMzZkM2M5M2JlZWM4OTllMGI4MjFkNDYwM2M0MjZjMDA5NWU2ZDYyMGViMjEyNzc2NGZlZjU0MmJjOWQ5ZDA1ZDk4OTdhYjRjZjU0ZjVjMGIyMWRmYTg4YWEzYzc3MTFj"},"frame":{"version":"1","name":"GM!","iconUrl":"https://onchaingm-teal.vercel.app/gm-icon.png","homeUrl":"https://onchaingm-teal.vercel.app/","imageUrl":"https://onchaingm-teal.vercel.app/gm-icon.png","buttonTitle":"Say GM!","splashImageUrl":"https://onchaingm-teal.vercel.app/gm-icon.png","splashBackgroundColor":"#222234"}}'
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
