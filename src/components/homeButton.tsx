'use client'

import { useRouter } from "next/navigation"

export function HomeButton() {
    const router = useRouter()
    const handleClick = () => {
        router.push("/")
    }
    
    return <button onClick={handleClick}>Home</button>
}