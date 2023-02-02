const head ={
    apikey:process.env.NEXT_PUBLIC_SUPABASE_KEY,
    Authorization:process.env.NEXT_PUBLIC_SUPABASE_AUTH
}

type headers = HeadersInit &{
    apikey:string,
    Authorization:string
}

export const expenditureToday = async(user: string | string[] | undefined,date:number,month:number,year:number)=>{
    if(user!==undefined){
    let res = await fetch(`https://srhzlwxqryucqsogslue.supabase.co/rest/v1/Expenditure_All?telegram_id=eq.${user}&date=eq.${date}&month=eq.${month}&year=eq.${year}`,
    {
        headers:head as headers
    })
    const resultDaily = await res.json();
    res = await fetch(`https://srhzlwxqryucqsogslue.supabase.co/rest/v1/Expenditure_All?telegram_id=eq.${user}&month=eq.${month}&year=eq.${year}`,
    {
        headers:head as headers
    })
    const resultDailyCurrentMonth = await res.json();

    res = await fetch(`https://srhzlwxqryucqsogslue.supabase.co/rest/v1/Expenditure_Monthy?telegram_id=eq.${user}&month=eq.${month}&year=eq.${year}`,
        {headers:head as headers})
    const resultMonthly = await res.json()

    res = await fetch(`https://srhzlwxqryucqsogslue.supabase.co/rest/v1/Expenditure_Yearly?telegram_id=eq.${user}&year=eq.${year}`,{
        headers:head as headers
        })
    const resultYearly = await res.json()
    return {resultDaily,resultMonthly,resultYearly,resultDailyCurrentMonth}
    }

} 