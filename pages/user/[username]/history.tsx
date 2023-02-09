import { useRouter } from 'next/router'
import React from 'react'
import { useQueryClient } from 'react-query'
import { res } from '../../../types/response'

const History = () => {
    const router = useRouter()
    console.log(router.query.username)
    const queryClient = useQueryClient()
    const data=queryClient.getQueryData('spend') as res
    console.log(data)
  return (
    <div>History</div>
  )
}

export default History