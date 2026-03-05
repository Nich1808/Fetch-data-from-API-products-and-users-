import { SkeletonCard } from "@/components/i-skelatons/skelaton-card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductLoading(){
    return (
        <main className="container mx-auto ">
            <div className="grid grid-cols-1 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
        {Array.from({ length: 15 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
            </div>
        </main>
    )
}

