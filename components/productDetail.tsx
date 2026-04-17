import { Product } from "@/lib/data"
import Link from "next/link"
import Button from "./ui/button"
import Dropdown from "./dropdown"
import Counter from "./counter"
import { XIcon } from "lucide-react"

type Props = {
    selectedProduct: Product
}

export default function ProductDetailCard({ selectedProduct }: Props) {
    const isFrame = selectedProduct.category.match('frame')
    const isCetak = selectedProduct.category.match('cetak')
    const isPaket = selectedProduct.category.match('paket')

    return (
        <>
            <div className={"m-10 max-h-125"}>
                <Link href={'/products'}>
                    <Button label="Back" classname="inline-block" />
                </Link>

                <div className="my-10 flex items-end gap-5 border-b pb-5">
                    <div className="flex flex-col gap-2">
                        <p className="text-6xl font-mono">{selectedProduct.name}</p>
                        <p className="text-2xl">Rp {selectedProduct.price}</p>
                    </div>
                    <div className="ml-auto"><Counter /></div>
                </div>

                {isFrame &&
                    <div className="flex flex-col justify-center w-full mb-10">
                        <Dropdown placeholder={"Choose size"} items={[
                            { label: 'Choose a size..', value: null },
                            { label: '10R', value: '10R' },
                            { label: '16R', value: '16R' },
                            { label: '36R', value: '36R' },
                        ]} />
                    </div>
                }

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laboriosam, assumenda sapiente exercitationem culpa voluptatem porro dolore soluta nobis! Nemo praesentium odit quam pariatur quibusdam ducimus enim non! Maiores, consequuntur.</p>
                <Button label="Yipee" classname="mt-10 py-2 text-center" />
            </div>
        </>
    )
}