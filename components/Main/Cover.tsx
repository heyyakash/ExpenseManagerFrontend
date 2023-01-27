import React, { useState, useEffect } from 'react'
import { MdDarkMode } from 'react-icons/md'

const Cover = () => {
    const [date, setDate] = useState<String>("")
    useEffect(() => {
        const date = (new Date()).toString().split(' ')

        setDate(date[0] + ", " + date[1] + " " + date[2])
    }, [])
    return (
        <div className='w-full h-[160px] md:h-[250px] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'>
            <div className="flex text-white items-start justify-between p-5 px-6">
                <h3 className='font-semibold'>{date}</h3>
                <div className='flex gap-4 items-center'>
                    <MdDarkMode />
                    <p className='font-semibold'>Akash Sharma</p>
                </div>
            </div>
        </div>
    )
}

export default Cover