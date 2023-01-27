import React, { useEffect, useState } from 'react'
import Composition from './Main/Composition'
import Cover from './Main/Cover'
import Summary from './Main/Summary'


const Main = () => {
  
  
  return (
    <div className='grow'>
      <Cover />
      <div className='flex gap-2 md:flex-row pb-10 flex-col'>
      <Summary />
      <Composition />
      </div>
    </div>
  )
}

export default Main