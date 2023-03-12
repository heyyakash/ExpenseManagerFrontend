import Head from 'next/head'
import Sidebar from '../../../components/Sidebar'
import Main from '../../../components/Main'
import { datefunction } from '../../../helper/datefunction'
import { expenditureToday } from '../../../apis/fetch'
import { res } from '../../../types/response'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Home({res}:{res:res}) {
  const router = useRouter()
  const [user,setUser] = useState()
  const fetchData = async () => {
    const username = router.query.username as string
    const { date, month, year } = datefunction()
    const res = await expenditureToday(username.toString(), date, month, year)
    return res
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userSession') as string)
    if(!user) router.push('/')
    else setUser(user)
  }, [])
  
 

  const {data} = useQuery('spend',fetchData,{initialData:res})
  return (
    <>
      <Head>
        <title>Expense Tracker</title>
        <meta name="description" content="Expense Tracker web app powered by Telegram" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
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