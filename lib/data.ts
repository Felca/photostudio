import { createClient } from './supabase/server'

// export interface Product {
//     id: string
//     category_id?: string | null
//     subcategory_id?: string | null
//     name: string
//     description?: string | null;
//     price: number
//     is_available: boolean
//     created_at: Date
//     image_url?: string | null
// }

export interface Product {
  id: string
  name: string
  description?: string
  price: string
  category: string
  image_url?: string
}

export interface Order {
  product_items: [
    {
      product: Product
      count: number
    },
  ]
}

export interface User {
  id: string
  Order: Order | null
}

export async function getProducts(): Promise<Product[]> {
  const supabase = await createClient()
  const { data, error } = await supabase.from('Products').select()

  if (error) throw error
  // console.log(data)

  return data as Product[]
}

export async function getProductById(product_id: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('Products')
    .select()
    .eq('id', product_id)
    .single()

  if (error) throw error
  //   console.log(data)

  return data as Product
}
