type dates = {
    year: number,
    month: number,
    date: number
}

export const datefunction = ():dates => {
    const newDate = new Date()
    const dateArr = newDate.toISOString().split('T')[0].split('-')
    const year: number = parseInt(dateArr[0])
    const month: number = parseInt(dateArr[1])
    const date: number = parseInt(dateArr[2])
    return {year,month,date}
}