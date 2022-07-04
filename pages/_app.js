import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app

    <Component {...pageProps} />
  );
}

export default MyApp;
