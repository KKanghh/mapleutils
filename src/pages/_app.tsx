import GlobalStyle from "@/styles/GlobalStyle";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { Provider } from "react-redux";
import store from "@/store";
import ReactModal from "react-modal";
import Modal from "@/components/Modal/Modal";

function App({ Component, pageProps }: AppProps) {
  ReactModal.setAppElement("#modal");
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div id="modal">
        <Modal />
      </div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
