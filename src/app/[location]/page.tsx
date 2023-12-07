import { HomeButton } from "@/components/homeButton"
import { getForecast } from "@/utils/getForecast"

type Props = {
    params: {
        location: string
    }
    searchParams: {
        kind: string
    }
}

function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export function generateMetadata({ params, searchParams }: Props) {
    const capitalizedLocation = capitalize(params.location)
    return {
        title: `${capitalizedLocation}'s weather`,
        description: `${capitalizedLocation}'s ${searchParams.kind} data`
    }
}


export default async function Location({ params }: Props) {
    const res = await getForecast(params.location)
    
    return (
    <>
        <h1>{`${capitalize(params.location)}'s 3-day forecast`}</h1>
        <ul>
            {res.forecast.forecastday.map((f) => 
                (<li key={f.date}>{f.date}: {f.day.avgtemp_c}</li>)
            )}
        </ul>
        <HomeButton />
    </>
    )
}
