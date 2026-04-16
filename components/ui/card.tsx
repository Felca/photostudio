import { Product } from "@/lib/data";

interface CardProps {
    product: Product
}

export default function Card({ product }: CardProps) {
    return (
            <div className="p-4 border-b shadow-md bg-white rounded-sm">
                <div>{product.name}</div>
                <div className="text-right">{product.price}</div>
            </div>
    )
}