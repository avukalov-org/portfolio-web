import type { Metadata } from "next";
import Navbar from "@/components/navbar";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "avukalov.com",
  description: "avukalov portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 bg-white shadow-lg h-16 md:h-20">
          <div className="h-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
            <Navbar />
          </div>
        </header>
        <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]">
          <div className="h-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
