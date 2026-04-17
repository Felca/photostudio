'use client'
import { useState } from "react"
import Button from "./ui/button"

export default function Counter() {
    const [count, setCount] = useState<number>(0)

    return (
        <>
        <div className="flex gap-4">
            <Button label="-" onClick={() => setCount(prev => Math.max(0, prev - 1))} />
            {count}
            <Button label="+" onClick={() => setCount(prev => Math.min(prev+1, 99))} />
        </div>
        </>
    )
}