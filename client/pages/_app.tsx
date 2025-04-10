import type { AppProps } from 'next/app'
import Layout from '../components/layout';
import { BasketProvider } from '../context/basket-context';
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasketProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BasketProvider>
  )
}

export default MyApp;
