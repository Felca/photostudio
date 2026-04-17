import Counter from "@/components/counter"
import Button from "@/components/ui/button"
import { getProductById } from "@/lib/data"
import Link from "next/link"

type Props = {
    params: {product_id: string}
}

export default async function ProductDetail({ params }: Props) {
    const {product_id} = await params
    
    const product = await getProductById(product_id)

    if (!product) return <div>no product found...{product_id}</div>

    const isFrame = product.category.match('frame')
    const isCetak = product.category.match('cetak')
    const isPaket = product.category.match('paket')

    return (
        <>
        <div className="m-10">
            <Link href={'/products'}>
                <Button label="Back" classname="inline-block"/>
            </Link>
            
            <div className="my-10 flex items-end gap-5 border-b pb-5">
                <div className="flex flex-col gap-2">
                    <p className="text-6xl font-mono">{product.name}</p>
                    <p className="text-2xl">Rp {product.price}</p>
                </div>
                <div className="ml-auto"><Counter /></div>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laboriosam, assumenda sapiente exercitationem culpa voluptatem porro dolore soluta nobis! Nemo praesentium odit quam pariatur quibusdam ducimus enim non! Maiores, consequuntur.</p>
            <Button label="Add to cart" classname="mt-10"/>
        </div>
        </>
    )
}