export function getToday(): string {
    const date = new Date()
    const year = date.getFullYear()
    let day: string | number = date.getDate()
    let month: string | number = date.getMonth() + 1
    let hours: string | number = date.getHours()
    let minutes: string | number = date.getMinutes()
    if (day < 10) {
        day = `0${day}`
    }
    if (month < 10) {
        month = `0${month}`
    }
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    return `${year}-${month}-${day}T${hours}:${minutes}`
}