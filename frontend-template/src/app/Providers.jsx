"use client";

import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from 'react-redux';
import store from '@/redux/store';
const queryclient = new QueryClient();

export default function Providers({children}) {
  return (
    <Provider store={store}>

    <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
    </Provider>
  )
}
