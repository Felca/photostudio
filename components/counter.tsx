'use client'
import { useState } from "react"
import Button from "./ui/button"

export default function Counter() {
    const [count, setCount] = useState<number>(0)

    return (
        <>
        <div className="flex gap-4">
            <Button label="-" onClick={() => setCount(count-1)} />
            {count}
            <Button label="+" onClick={() => setCount(count+1)} />
        </div>
        </>
    )
}