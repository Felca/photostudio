import { createClient } from './supabase/server'
export interface Product {
  id: string
  name: string
  description?: string
  price: number
  category: string
  image_url?: string
}

export type OrderItem = {
  product: Product | null
  count: number
}
export interface Order {
  product_items: OrderItem[]
  // created_at?: string
}

export interface User {
  id: string
  orders: Order[]
}

export async function getProducts(): Promise<Product[]> {
  const supabase = await createClient()
  const { data, error } = await supabase.from('products').select()

  if (error) throw error
  // console.log(data)

  return data as Product[]
}

export async function getProductById(product_id: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('products')
    .select()
    .eq('id', product_id)
    .single()

  if (error) throw error
  //   console.log(data)

  return data as Product
}

// vercel link:
// https://photostudio-rfs.vercel.app/