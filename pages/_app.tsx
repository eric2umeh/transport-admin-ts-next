import type { AppProps } from 'next/app';
import Aos from 'aos';
import { useEffect } from 'react';
import SrollTop from '../components/common/ScrollTop';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'aos/dist/aos.css';
import '../styles/index.scss';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/apollo';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap');
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <main>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
          <SrollTop />
        </ApolloProvider>
      </Provider>
    </main>
  );
}
