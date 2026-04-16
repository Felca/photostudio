import Link from "next/link"

export default function Nav() {
    return (
        <>
        <nav className="min-w-max p-2 border-b">
            <div className="relative flex justify-center gap-5">
                {contents.map((content => (
                    <div 
                        key={content.id}
                        className="tracking-tight cursor-pointer"
                    >
                        <Link href={'/'} className="hover:underline">{content.title}</Link>
                    </div>
                )))}
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
        title: 'Item',
    },
    {
        id: '2',
        href: '/',
        title: 'Item',
    },
    {
        id: '3',
        href: '/',
        title: 'Item',
    },
]