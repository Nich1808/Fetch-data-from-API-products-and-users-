const baseApi = process.env.NEXT_PUBLIC_API;

export async  function getCategories(){
    const res = await fetch(`${baseApi}/api/v1/categories`);
    return await res.json()
}