import { getProducts } from "@/lib/data";
import { Suspense } from "react";
import ProductList from "@/components/productList";

// server side
export default async function ProductPage() {
    const products = await getProducts();

    if (!products) return <div>No products....</div>

    return (
        <Suspense fallback={<div>loading...</div>}>
            <div className="m-2">
                <ProductList products={products} />
            </div>
        </Suspense>
    )
}
