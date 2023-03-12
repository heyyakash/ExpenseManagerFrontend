import React from 'react'

type Expense = {
    date:string
    type:string 
    money:number
}

const ExpenseBox = ({date, type, money}:Expense) => {
    return (
        <div className='w-[98%] text-xl p-5 box font-semibold flex items-center justify-between bg-slate-900'>
            <span>{date}</span>
            <span>{type}</span>
            <span>₹ {money}</span>
        </div>
    )
}

export default ExpenseBox