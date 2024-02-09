import {
  Quicksand,
  Merriweather,
  Chakra_Petch,
  Raleway,
  Montserrat,
} from 'next/font/google';

export const quicksand = Quicksand({
  weight: ['400', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

export const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

export const merriweather = Merriweather({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

export const chakraPetch = Chakra_Petch({
  weight: ['400', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['sans-serif'],
});
