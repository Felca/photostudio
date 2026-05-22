'use client';

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Product } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import ProductDetailCard from "./productDetail";
import { useMediaQuery } from "usehooks-ts";

type Props = {
    products: Product[]
}

const categories = ["All", "Cetak", "Paket", "Frame"];

// client side
export default function ProductList({ products }: Props) {
    const isMobile = useMediaQuery("(max-width : 768px)")

    const [filteredProducts, setFilteredProducts] = useState(products)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
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

    if (!isMobile && !selectedProduct) {
        setSelectedProduct(products[0])
    }

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="max-w-2/3">
                {!isMobile && selectedProduct && (
                    <ProductDetailCard selectedProduct={selectedProduct} />
                )}
            </div>

            <div>
                <div className="flex gap-2 m-4">
                    {categories.map(c => (
                        <Button
                            key={c}
                            label={c}
                            onClick={() => handleClick(c)}
                            isActive={isActiveCategory === c}
                            variant="SECONDARY"
                        />
                    ))}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 m-4">
                    {filteredProducts.map((prod) => (
                        isMobile ? (
                            // mobile view
                            <Link key={prod.id} href={`/products/${prod.id}`}>
                                <Card product={prod} />
                            </Link>
                        ) : (
                            // large screen view
                            <div key={prod.id} onClick={() => setSelectedProduct(prod)}>
                                <Card product={prod} />
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}