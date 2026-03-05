import ProductForm from "@/app/forms/product-form";
import { getCategories } from "@/lib/data/categories";


export default function LoginPage() {
  const categories = getCategories();
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <ProductForm categories={categories}/>
      </div>
    </div>
  )
}