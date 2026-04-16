import { getProductById } from "@/lib/data"

type Props = {
    params: {product_id: string}
}

export default async function ProductDetail({ params }: Props) {
    const {product_id} = await params
    
    const product = await getProductById(product_id)

    if (!product) return <div>no product found...{product_id}</div>

    return (
        <>
        <div>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Rp {product.price}</p>
            <p>{product.category}</p>
        </div>
        </>
    )
}