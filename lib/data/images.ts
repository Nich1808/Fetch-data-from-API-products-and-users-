import { AArrowDownIcon } from "lucide-react";

    
const baseApi = process.env.NEXT_PUBLIC_API;
    export async function UploadImage(images:FormData){
      const res = await fetch(`${baseApi}/api/v1/files/upload`,{
        method:"POST",
        body:images
      });
      return await res.json();
    }
    
    