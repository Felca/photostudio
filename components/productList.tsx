
'use client';

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Product } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";

type Props = {
    products: Product[]
}

// client side
export default function ProductList({products}: Props) {
    const [filteredProducts, setFilteredProducts] = useState(products)

    const handleFilter = (value: string) => {
        const filtered = products.filter(
            (prod: Product) => prod.category === value
        )
        setFilteredProducts(filtered)
    }

    return (
        <>
        <div>
            <div className="flex gap-2 m-4">
                <Button label='All' onClick={() => setFilteredProducts(products)} />
                <Button label='cetak' onClick={() => handleFilter('cetak')} />
                <Button label='paket' onClick={() => handleFilter('paket')} />
                <Button label='frame' onClick={() => handleFilter('frame')} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 m-4 items-center">
                {filteredProducts.map((prod) => (
                    <Link key={prod.id} href={`/products/${prod.id}`}>
                        <div key={prod.id}>
                            <Card product={prod} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </>
    ) 
}