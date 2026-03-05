"use client"

import { fetchAllProducts } from "@/lib/data/products"
import { ProductResponse } from "@/lib/type/product"
import Link from "next/link"
import { use } from "react"
import { ProductCard } from "./product-card"

export default function ProductListClient({fetchProducts}: {fetchProducts : Promise<ProductResponse[]>}){
    //recieved data froom server to client component

    const products = use(fetchProducts)
    console.log('public in client', products)
    return(
          <main className="container mx-auto">
            <section className="grid grid-cols-1 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    products.map((product, index) => (
                       <Link href={`/products/${product.id}`} key={index}> 
                           <ProductCard
                        key={index}
                        images={[product.images[0]]}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                         />
                    </Link>
                        
                    )
                       
                    )

                }
                


               
            </section>
        </main>
    )
}