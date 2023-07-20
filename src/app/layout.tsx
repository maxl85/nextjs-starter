import '@/styles/index.scss';

import Footer from 'features/Footer';
import Header from 'features/Header';
import { Metadata } from 'next';
import { Alegreya, Roboto } from 'next/font/google';
import { ReactNode } from 'react';

// import ReactQueryProvider from '@/providers/react-query';
// import StoreProvider from '@/providers/store';
import { Providers } from '@/redux/provider';

const alegreya = Alegreya({
  subsets: ['cyrillic'],
  variable: '--font-alegreya',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['cyrillic'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Пицца на заказ',
  description: 'Тестовая работа для front-end разработчика от компании Вебпрактик',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${alegreya.variable} ${roboto.variable}`}>
      <body>
        <main>
          {/* <ReactQueryProvider>
            <StoreProvider>{children}</StoreProvider>
          </ReactQueryProvider> */}
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
