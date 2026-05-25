import { createClient } from './supabase/server'
export interface Product {
  id: string
  name: string
  description?: string
  price: number
  category: string
  image_url?: string
}

export interface Categories {
  id: number
  name: string
}
export interface Products {
  id: number
  category_id: number
  name: string
  description?: string
}
export interface ProductVariants {
  id: number
  product_id: number
  variant_name?: string
  size_label?: string
  dimensions?: string
  price: number
  stock?: number
}
export interface ProductCustomizationGroups {
  id: number
  product_id: number
}
export interface CustomizationGroups {
  id: number
  name: string
}
export interface CustomizationOptions {
  id: number
  group_id: number // customization group id
  option_value: string
  extra_price?: number
}

export async function getProducts(): Promise<Product[]> {
  const supabase = await createClient()
  const { data, error } = await supabase.from('test_products').select()

  if (error) throw error
  console.log(data)

  return data as Product[]
}

export async function getProductById(product_id: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('test_products')
    .select()
    .eq('id', product_id)
    .single()

  if (error) throw error
  console.log(data)

  return data as Product
}

// vercel link:
// https://photostudio-rfs.vercel.app/
