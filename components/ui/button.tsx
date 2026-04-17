
type ButtonProps = {
    label: string
    onClick?: () => void
    classname?: string
}

export default function Button({label, onClick, classname}: ButtonProps) {
    return (
        <>
        <div
            onClick={onClick}
            className={`border px-3 rounded-md hover:bg-slate-200 cursor-pointer ${classname}`}
        >
            {label}
        </div>
        </>
    )
}