import React from 'react'

const index = () => {
  return (
    <></>
  )
}

export default index

index.getLayout = ({children}:{children:JSX.Element})=>{
  return <>{children}</>
}