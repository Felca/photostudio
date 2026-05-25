'use client'
import Link from "next/link"
import Button from "./button"
import { redirect } from "next/navigation"

export default function Nav() {
    return (
        <>
            <nav className="min-w-max p-2 border-b">
                <div className="flex justify-between mx-4 my-2">
                    <div className="relative flex justify-center gap-5">
                        {contents.map((content => (
                            <div
                                key={content.id}
                                className="tracking-tight cursor-pointer"
                            >
                                <Link href={`${content.href}`} className="hover:underline">{content.title}</Link>
                            </div>
                        )))}
                    </div>
                    <Button label="sign up" onClick={() => redirect('/auth/sign-up')} />
                </div>
            </nav>
        </>
    )
}

interface ContentNav {
    id: string
    href: string
    title: string
}

const contents: ContentNav[] = [
    {
        id: '1',
        href: '/',
        title: 'products',
    },
    {
        id: '2',
        href: '/orders',
        title: 'orders',
    },
]