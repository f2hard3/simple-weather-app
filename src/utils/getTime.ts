export type Response = {
    year: number
    month: number
    day: number
    hour: number
    minute: number
    seconds: number
    milliSeconds: number
    dateTime: string
    date: string
    time: string
    timeZone: string
    dayOfWeek: string
    dstActive: boolean
}

export const timeTag = 'time'

export const getTime = async (timeZone: string): Promise<Response> => {
    const res = await fetch(
        `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`,
        { next: { tags: [timeTag] } }
    )
    if (!res.ok) throw new Error('cannot get time information')

    return res.json()
}