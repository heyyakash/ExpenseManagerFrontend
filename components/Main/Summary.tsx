import React from 'react'
import Box from './Box'
import Graph from './Graph'

const Summary = () => {
    return (
        <div className='-mt-[3rem] md:-mt-[5rem] mx-auto md:mx-0 flex flex-col md:flex-row items-start space-between gap-4'>
            <div className="grid grid-cols-1 grid-rows-1 gap-6 place-items-center">
                <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-6 grid-rows-3 md:grid-rows-1 md:px-10'>
                    <Box title="January" amount={1200} arrowup={true} link="report" />
                    <Box title="Today" amount={30} arrowup={false} link="report" />
                    <Box title="This Year" amount={30000} arrowup={true} link="report" />
                </div>
               <Graph />
            </div>

        </div>
    )
}

export default Summary