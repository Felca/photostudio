import { Product } from "@/lib/data";
import Image from "next/image";

interface CardProps {
    product: Product
}

export default function Card({ product }: CardProps) {
    return (
        <>
        <div className="flex flex-col max-w-72">
        {/* {product.image_url &&
            <div className="">
                <Image 
                    src={product.image_url} 
                    alt={'product-image'} 
                    width={40}
                    height={40}
                    // fill
                    className="w-full h-fit object-cover"
                />
            </div> 
        } */}
        <div className="p-4 mb-10 border-b shadow-md bg-white rounded-sm">
            <div>{product.name}</div>
            <div className="line-clamp-1">{product.description}</div>
            <div className="text-right">{product.price}</div>
        </div>
        </div>
        </>
    )
}