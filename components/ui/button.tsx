
type ButtonProps = {
    label: string
    onClick: () => void
}

export default function Button({label, onClick}: ButtonProps) {
    return (
        <>
        <div
            onClick={onClick}
            className="border px-3 rounded-xl hover:bg-slate-200 cursor-pointer"
        >
            {label}
        </div>
        </>
    )
}