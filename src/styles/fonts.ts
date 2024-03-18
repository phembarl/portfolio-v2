import {
  Quicksand,
  Merriweather,
  Chakra_Petch,
  Raleway,
  Montserrat,
  Nixie_One,
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

export const nixieOne = Nixie_One({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  fallback: ['sans-serif'],
});
