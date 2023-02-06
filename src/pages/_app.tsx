import "../styles/globals.css";

import type { AppProps } from "next/app";
import ErrorBoundary from "../components/organisms/errorBoundary/ErrorBoundary";
import Loader from "../components/atoms/loader/Loader";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { store } from "../redux/store";

//MyApp component (main component)
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Toaster />
      <Loader />
      <SessionProvider session={pageProps.session}>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </SessionProvider>
    </Provider>
  );
};

export default MyApp;
