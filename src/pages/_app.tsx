import { AppProps } from "next/app";
import GlobalStyles from "styles/global";
import AppProvider from "hooks";

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default App;
