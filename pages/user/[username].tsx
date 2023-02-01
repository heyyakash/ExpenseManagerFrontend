import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import Main from '../../components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Expense Tracker</title>
        <meta name="description" content="Expense Tracker web app powered by Telegram" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex w-full h-[100vh]'>
        <Sidebar />
        <Main />
      </main>
    </>
  )
}
