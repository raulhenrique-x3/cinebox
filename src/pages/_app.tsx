import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import "../styles/_global.scss";
import queryClient from "@/queries/queryClient";
import Head from "next/head";
import CartProvider from "@/context/Cart/CartContext";
import { cartReducer, initialCart } from "@/context/Cart/CartReducer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <CartProvider reducer={cartReducer} initialState={initialCart}>
          <Head>
            <link rel="icon" href="/logo.jpeg" />
            <title>CineBox</title>
          </Head>
          <Component {...pageProps} />
        </CartProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
