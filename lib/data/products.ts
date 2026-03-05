import { REPLServer } from "repl";
import { ProductRequest } from "../type/product";

//Fetch data from api product
const baseAPI = process.env.NEXT_PUBLIC_API

//fetch products list
export async function fetchAllProducts(){
    const data = await fetch( `${baseAPI}/api/v1/products`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const response = await data.json();
    return response;
}

//Insert product to api
export async function insertProduct(product: ProductRequest){
    const data = await fetch( `${baseAPI}/api/v1/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    const response = await data.json();
    console.log(response)
    return {
        status: data.status, 
        response
    };
}


//Insert image to server