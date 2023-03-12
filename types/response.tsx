export type commons = {
    amount:number,
    created_at:string,
    id:number,
    telegram:string,
    year:number
}

export type yearlySpendObject = commons

export type monthlySpendObject = commons &{
    month: number
}

export type dailySpendObject = monthlySpendObject &{
    date:number,
    month:number,
    category:string
}

export type dailySpendCurrentMonthObject = monthlySpendObject &{
    category:string
}

export type res = {
    resultDaily:dailySpendObject[],
    resultMonthly:monthlySpendObject[],
    resultYearly:yearlySpendObject[]
    resultDailyCurrentMonth:dailySpendCurrentMonthObject[]
}


export type loginResponse = {
    status:boolean,
    msg:string,
    token:string,
    first_name:string,
    last_name:string,
    telegram_id:string
}