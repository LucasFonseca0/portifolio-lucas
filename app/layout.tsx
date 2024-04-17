import type { Metadata } from "next";
import {Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight:["400","500","600","700"],
  variable: "--font-Poppins"
})

export const metadata: Metadata = {
  title: "Lucas Portfolio",
  description: "Lucas Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
