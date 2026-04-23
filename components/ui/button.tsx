
type ButtonProps = {
    label: string
    onClick?: () => void
    classname?: string
    children?: React.ReactNode
    isActive?: boolean
    variant?: string
}

export default function Button({ label, onClick, classname, children, isActive, variant }: ButtonProps) {
    let variantStyles = ""

    switch (variant) {
        case 'PRIMARY':
            variantStyles = "bg-black text-white hover:shadow-md"
            break
        case 'SECONDARY':
            variantStyles = "border"
            break
    }

    return (
        <div
            onClick={onClick}
            className={`border px-3 rounded-md cursor-pointer ${variantStyles}
                ${classname} ${isActive ? isActiveClass : "hover:bg-slate-200"}`
            }
        >
            {label}
            {children}
        </div>
    )
}

const isActiveClass = 'bg-slate-300'