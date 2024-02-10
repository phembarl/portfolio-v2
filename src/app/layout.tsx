import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { quicksand } from '../styles/fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileNav from '@/components/Navbar/MobileNav';
import { keywords } from '@/data';

export const metadata: Metadata = {
  metadataBase: new URL('https://femibalogun.dev'),
  title: 'Femi Balogun',
  description:
    'Femi is a seasoned Software Engineer with about 6 years of experience actively engaged in full product life cycles, resulting in the successful launch of various applications',
  applicationName: 'Femi Balogun',
  keywords,
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
