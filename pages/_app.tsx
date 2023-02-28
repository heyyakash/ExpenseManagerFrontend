import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import Sidebar from '../components/Sidebar'
import { NextComponentType, NextPageContext } from 'next'


type p  =NextComponentType<NextPageContext, any, any> & {
  getLayout?:JSX.Element
}

export default function App({ Component, pageProps }:{Component:p, pageProps:any}) {

  const queryClient = new QueryClient()

  if (Component.getLayout) {
    const Layout = Component.getLayout
    if(Layout)
    return (
      <QueryClientProvider client={queryClient}>
        <main className='flex w-full h-[100vh]'>
            <Component {...pageProps} />
        </main>

      </QueryClientProvider>
    )
  }
  return (
    <QueryClientProvider client={queryClient}>
      <main className='flex w-full h-[100vh]'>
        <Sidebar />
        <Component {...pageProps} />
      </main>

    </QueryClientProvider>
  )
}
