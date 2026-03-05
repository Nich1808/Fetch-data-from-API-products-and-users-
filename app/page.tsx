import ProductListClient from "@/components/i-tech-cards/product-list-client";
import { fetchAllProducts } from "@/lib/data/products";
import { Metadata } from "next";


export const metadata: Metadata={
  title: 'ishop-Home',
  description: 'iShop provides all electronic devices'
}


export default function Home() {
  const products = fetchAllProducts()
  return (
  //  <main>
  //   <h1 className="bg-amber-200">Hello World</h1>
  //  <div className="grid grid-cols-3">
  //    <Card
  //   source={"/profile.png"}
  //   title={"Streamlining your design process today."}
  //   desc={"In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations."}
  //   />

  //    <Card
  //   source={"/girl.png"}
  //   title={"Streamlining your design process today."}
  //   desc={"In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations."}
  //   />

  //   <Card
  //   source={"/girl1.png"}
  //   title={"Streamlining your design process today."}
  //   desc={"In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations."}
  //   />
  //  </div>
   
   
  //  </main>
  <main>
    <ProductListClient fetchProducts={products}/>

  </main>
  );
}
