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
      <body className={`font-mono antialiased`}>
        <LazyMotion strict features={domAnimation}>
          <header className="sticky top-0 z-50 h-16 bg-white shadow-lg md:h-20">
            <div className="3xl:px-96 h-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 2xl:px-64">
              <Navbar />
            </div>
          </header>
          <div className="prose lg:prose-xl h-[calc(100vh-4rem)] md:h-[calc(100dvh-5rem)]">
            {children}
          </div>
        </LazyMotion>
      </body>
    </html>
  );
}
