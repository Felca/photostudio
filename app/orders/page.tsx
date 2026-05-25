import { getProductById } from "@/lib/data"

export default async function OrderPage() {
    const prod = await getProductById('7d10ecd1-6d10-45f8-b8e6-39cdd6b5a92a')
    const order_item: any = {
        product: prod,
        count: 4
    }
    const orders: any = {
        id: '1',
        product_items: [order_item, order_item]
    }
    console.log(orders.product_items)
    
    return (
        <div className="mt-10">
            <div className="flex flex-col gap-4">
                {orders.product_items && orders.product_items.map(({order, idx}: any) => (
                    <div key={idx} className="flex flex-col border-b p-4">
                        <div><strong>{order.product?.name}</strong></div>
                        <div>Quantity: {order.count}</div>
                        <div className="ml-auto">Rp {order.product && (order.product.price) * order.count}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}