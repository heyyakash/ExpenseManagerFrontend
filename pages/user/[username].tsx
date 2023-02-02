import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import Main from '../../components/Main'
import { datefunction } from '../../helper/datefunction'
import { expenditureToday } from '../../apis/fetch'
import { res } from '../../types/response'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'

export default function Home({res}:{res:res}) {
  const router = useRouter()
  const fetchData = async () => {
    const username = router.query.username as string
    const { date, month, year } = datefunction()
    const res = await expenditureToday(username.toString(), date, month, year)
    return res
  }
  const {data} = useQuery('spend',fetchData,{initialData:res})
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
        <Main  />
      </main>
    </>
  )
}


export async function getServerSideProps({params}:{params:any}){
  const { date, month, year } = datefunction()
  const res = await expenditureToday(params.username, date, month, year)
  return {
      props:{
          res
      }
  }
  
}