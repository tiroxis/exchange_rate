'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ExchangeRateList } from "@/components/ExchangeRate/ExchangeRateList";

const queryClient = new QueryClient()

export default function Page(){
    return (
        <QueryClientProvider client={queryClient}>
            <ExchangeRateList />
        </QueryClientProvider>
    )
}