import GlobalStyle from "@/styles/GlobalStyle";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
