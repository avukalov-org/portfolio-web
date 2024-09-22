import type { Metadata } from "next";
import Navbar from "@/components/navbar";

import localFont from "next/font/local";
import "./globals.css";
import TransitionProvider from "@/components/transtitionProvider";

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
        <TransitionProvider>{children}</TransitionProvider>
        {/* <header className="sticky top-0 bg-white h-16 md:h-20 shadow-lg">
          <div className="h-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
            <Navbar />
          </div>
        </header>
        <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]">
            {children}
        </div> */}
      </body>
    </html>
  );
}
