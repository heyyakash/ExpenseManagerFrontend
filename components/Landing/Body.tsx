import React, { useEffect } from 'react'
import Features from './Features'
import Navbar from './Navbar'

const Body = () => {

    useEffect(() => {
        window.addEventListener('scroll', textScroll)
        return () => window.removeEventListener('scroll', textScroll)
    }, [])

    const textScroll = () => {
        const text :HTMLElement = document.getElementById('text') as HTMLElement
        let val = window.scrollY
        console.log(text)
        if (text !== null) {
            text.style.marginTop = val * 1.15 + `px`
            // text?.style.scale = val
            
        }
    }


    return (
        <>
            <div className='w-full min-h-[100vh] bg-[#1c1e20]'>
                <section id="main" className='md:h-[100vh] border-b border-black rounded-b-[50px] overflow-hidden p-6 bg-black'>
                    <Navbar />
                    <div className='flex flex-col rounded-2xl w-full  '>
                        <h1 className='heading self-center' id="text">
                            Be<i>s</i>t E<i>xpens</i>e <i>A</i>p<i>p</i>
                        </h1>
                    </div>
                </section>
               <Features />
            </div>
        </>
    )
}

export default Body