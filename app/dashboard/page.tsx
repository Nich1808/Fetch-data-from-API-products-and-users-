import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import ProductForm from "../forms/product-form";

export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>
      <Link href={"/photos/1"}>
          <h2>photo 1</h2>
      </Link>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
              <ProductForm />
            </div>
          </div>
    </main>
  );
}
