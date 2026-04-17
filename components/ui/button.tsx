
type ButtonProps = {
    label: string
    onClick?: () => void
    classname?: string
    children?: React.ReactNode
    isActive?: boolean
}

export default function Button({label, onClick, classname, children, isActive}: ButtonProps) {
    return (
        <>
        <div
            onClick={onClick}
            className={`border px-3 rounded-md cursor-pointer ${classname} ${isActive ? isActiveClass : "hover:bg-slate-200"}`}
        >
            {label}
            {children}
        </div>
        </>
    )
}

const isActiveClass = 'bg-slate-300'