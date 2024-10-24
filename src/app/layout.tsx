import type { Metadata } from 'next';

import { domAnimation, LazyMotion } from 'framer-motion';

import Navbar from '@/components/navbar';

import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'avukalov.com',
  description: 'avukalov portfolio',
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
        <LazyMotion strict features={domAnimation}>
          <header className="sticky top-0 z-50 h-16 bg-white shadow-lg md:h-20">
            <div className="h-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
              <Navbar />
            </div>
          </header>
          <div className="lg:from-violete-300 h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-t from-fuchsia-600 to-green-50 md:h-[calc(100vh-5rem)] lg:bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] lg:via-yellow-400 lg:to-fuchsia-200">
            {children}
          </div>
        </LazyMotion>
      </body>
    </html>
  );
}
