import { Quicksand, Merriweather } from 'next/font/google';

export const quicksand = Quicksand({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const merriweather = Merriweather({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
});
