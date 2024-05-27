import type { Metadata } from "next";
import {Poppins } from "next/font/google";

import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight:["400","500","600","700"],
  variable: "--font-Poppins"
})

export const metadata: Metadata = {
  title: "Lucas Portfolio",
  description: "Lucas Portfolio",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      
        <body className={`${poppins.className} bg-black text-white`}>
      <NextUIProvider>
          {children}
      </NextUIProvider>
      <Analytics />
          </body>
    </html>
  );
}
