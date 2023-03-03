import { payload } from "../components/Landing/Login"


export const expenditureToday = async(user: string | string[] | undefined,date:number,month:number,year:number)=>{
    if(user!==undefined){
        let res = await fetch(`http://localhost:5000/user/userdata`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({user,date,month,year})
        })
        let result = await res.json()
        return result
    }
    return null
} 

export const login = async(payload:payload) =>{
    const res = await fetch(`http://localhost:5000/action/login`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(payload)
    })
    const result = await res.json()
    return result
}