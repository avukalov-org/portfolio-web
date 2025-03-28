import type { Metadata } from 'next';

import { domAnimation, LazyMotion } from 'framer-motion';

import Navbar from '@/components/navbar';

import './globals.css';
import Footer from '@/components/footer';

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
      <body className={`text-violet-950 antialiased`}>
        <LazyMotion strict features={domAnimation}>
          <header className="sticky top-0 shadow-2xl">
            <div className="z-50 h-16 bg-white px-4 sm:px-8 md:h-20 md:px-12 lg:px-24 xl:px-48 2xl:px-96">
              <Navbar />
            </div>
          </header>
          <main className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 2xl:px-96">
            {children}
          </main>
          <footer className="h-16 bg-gray-100 px-4 sm:px-8 md:h-20 md:px-12 lg:px-24 xl:px-48 2xl:px-96">
            <Footer />
          </footer>
        </LazyMotion>
      </body>
    </html>
  );
}
