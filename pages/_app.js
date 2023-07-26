import "../styles/globals.scss";
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
// import { LoadingComponent } from "../components/Loading/Loading";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Loading /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
