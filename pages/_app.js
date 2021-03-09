import Header from '../components/Header';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import Nav from '../components/Nav';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Nav />
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
