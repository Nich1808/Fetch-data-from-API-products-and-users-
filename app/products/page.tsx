import { Suspense } from "react";
import ProductLoading from "./loading";
import ProductList from "./product-list";

export default function ProductPage(){
    return(
         <Suspense fallback={<ProductLoading/>}>
                <ProductList/>
        </Suspense>
    )
}


