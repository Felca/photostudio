import { Product } from "@/lib/data";
import Image from "next/image";

interface CardProps {
    product: Product
}

export default function Card({ product }: CardProps) {
    return (
        <div className="flex flex-col lg:max-w-80 cursor-pointer">
            {/* {product.image_url ?
                <div className="">
                    <Image
                        src={product.image_url}
                        alt={'product-image'}
                        width={40}
                        height={40}
                        className="w-full max-h-80 object-cover"
                    />
                </div>
                :
                <Image
                    src={'/placeholder.png'}
                    alt={'product-image'}
                    width={40}
                    height={40}
                    className="w-full h-fit object-cover"
                />
            } */}
            <Image
                src={'/placeholder.png'}
                alt={'product-image'}
                width={30}
                height={30}
                className="w-full max-h-fit object-cover"
            />
            <div className="p-4 mb-10 border-b shadow-md bg-white rounded-sm overflow-hidden h-36 max-h-36 flex flex-col">
                <div>{product.name}</div>
                <div className="line-clamp-1 text-gray-600">{product.description}</div>
                <div className="mt-auto text-right">Rp. {product.price}</div>
            </div>
        </div>
    )
}