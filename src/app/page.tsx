import Link from "next/link";
import style from "./style.module.css"
import { getCurrentWeather } from "@/utils/getCurrentWeather";
import { getTime, timeTag } from "@/utils/getTime";
import { RevalidateButton } from "@/components/revalidateButton";

export default async function Home() {
  const res = await getCurrentWeather("seoul")
  const time = await getTime(res.location.tz_id)

  return (
    <>
      <h1>Simple Weather App</h1>
      <h3>{time.dateTime}</h3>
      <ul className={style.list}>
        <li>
          <Link href={"/seoul?kind=temperature"}>Seoul</Link>
          <span>{res.current.condition.text}</span>
        </li>
        <li><Link href={"/tokyo?kind=temperature"}>Tokyo</Link></li>
        <li><Link href={"/london?kind=temperature"}>London</Link></li>
      </ul>
      <RevalidateButton tag={timeTag}/>      
    </>
  )
}
