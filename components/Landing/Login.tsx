import React, { useState } from 'react'
// import {GrCircleInformation} from 'react-icons/gr'
import {HiOutlineInformationCircle} from 'react-icons/hi'
import { login } from '../../apis/fetch'

export interface payload {
    userid:string,
    password:string
}

const Login = () => {
    const [userid, setUserid] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin =async (e: React.SyntheticEvent)  => {
        e.preventDefault()
        const data: payload = {userid,password}
        const res = await login(data)
        console.log(res)
    }

    return (
        <section id="login" className='p-10 w-full'>
            <div className='w-full min-h-[90vh] bg-black/40 rounded-xl p-6 flex flex-col items-center justify-center'>
                <h1 className='heading text-5xl'>
                    L<i>og</i>in
                </h1>
                <form onSubmit={handleLogin} action="" className='mt-4'>
                    {/* <div clas></div> */}
                    <label htmlFor="id" className='text-slate-400 block mt-4 mb-2'>Telegram Id</label>
                    <input value = {userid} onChange = {(e)=>setUserid(e.target.value)} type="text" required id="id" name="id" placeholder='Telegram Id' className='bg-slate-500/40 text-white h-14 p-4 rounded-xl' />

                    <label htmlFor="password" className='text-slate-400 block mt-4 mb-2'>Generated password</label>
                    <input value = {password} onChange = {(e)=>setPassword(e.target.value)} type="password" required id="password" name="password" placeholder='Password' className='bg-slate-500/40 text-white h-14 p-4 rounded-xl' />

                    <input type = "submit" className='text-black bg-white mt-6 h-14 p-4 rounded-xl trans hover:bg-green-400 hover:text-white font-bold block w-full cursor-pointer' value = "Login" />
                </form>
                <p className='text-slate-300 mt-4 w-[350px] text-center'>
                    <HiOutlineInformationCircle className = "text-white inline " /> To generate a new password message /pwd to the bot. You'll receive new password.
                </p>
            </div>
        </section>
    )
}

export default Login