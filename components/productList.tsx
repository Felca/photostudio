'use client';

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Product } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import ProductDetailCard from "./productDetail";

type Props = {
    products: Product[]
}

const categories = ["All", "Cetak", "Paket", "Frame"];

// client side
export default function ProductList({ products }: Props) {
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null) // show in list?
    const [isActiveCategory, setIsActiveCategory] = useState<string | null>(null)

    const handleFilter = (value: string) => {
        if (value === 'All') return setFilteredProducts(products)
        const filtered = products.filter(
            (prod: Product) => prod.category === value.toLocaleLowerCase()
        )
        setFilteredProducts(filtered)
    }

    const handleClick = (value: string) => {
        handleFilter(value)
        setIsActiveCategory(value)
    }

    return (
        // <div className="flex">
        //     {/* flex-col for mobile or small screen? */}
        //     {selectedProduct &&
        //         <ProductDetailCard selectedProduct={selectedProduct} />
        //     }
        <div>
            <div className="flex gap-2 m-4">
                {categories.map(c => (
                    <Button label={c} onClick={() => handleClick(c)} isActive={isActiveCategory === c} />
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 m-4 items-center">
                {filteredProducts.map((prod) => (
                    <Link key={prod.id} href={`/products/${prod.id}`}>
                        <div key={prod.id} onClick={() => setSelectedProduct(prod)}>
                            <Card product={prod} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        // </div>
    )
}