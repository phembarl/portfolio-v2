import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { quicksand } from '../styles/fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileNav from '@/components/Navbar/MobileNav';

export const metadata: Metadata = {
  title: 'Femi Balogun',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
