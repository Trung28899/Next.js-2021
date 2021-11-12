import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next.js Meetup Bro</title>
        <meta
          name="description"
          content="Browse huge list of highly active Meetups"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
