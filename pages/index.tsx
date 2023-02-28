import React from 'react'
import Body from '../components/Landing/Body'

const index = () => {
  return <Body />
}

export default index

index.getLayout = ({children}:{children:JSX.Element})=>{
  return <>{children}</>
}