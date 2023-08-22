import "@/styles/globals.css";
import Layout from "../components/Layout";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <SessionProvider session={pageProps.session}>
        <StateContext>
          <Layout>
            <Toaster />
            <Component {...pageProps} />
          </Layout>
        </StateContext>
      </SessionProvider>
    </NextUIProvider>
  );
}
