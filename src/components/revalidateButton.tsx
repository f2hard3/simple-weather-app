'use client'

type Props = {
    tag: string
}

export function RevalidateButton({ tag }: Props) {
    
    const handleClick = async () => {
        const res = await fetch(`/api/revalidate?tag=${tag}`, { method: "POST" })
        const json = await res.json()
        console.log(json)
    }
    
    return <button onClick={handleClick}>Clear cache</button>
}