import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import Layout from '../components/Layout/Layout';
import client from '../graphql-config';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp
