import { GlobalStyle } from '@/styles/globalStyle'
import '@/styles/globals.css'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import { useState } from 'react'
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    //새 QueryClient 인스턴스를 만들어서 QueryClientProvider에 주입합니다, 이렇게 하면 서로 다른 사용자와 요청 간에 데이터를 공유하지 않고 구성 요소 수명 주기당 한 번만 QueryClient를 생성할 수 있습니다.
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  )
}
