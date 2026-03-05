"use client";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect, use } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { insertProduct } from "@/lib/data/products";
import { CategoryType } from "@/lib/type/category-response";
import ImageUpload from "@/components/file-upload-form-1";
import { UploadImage } from "@/lib/data/images";
import { toast, ToastContainer } from "react-toastify";


export default function ProductForm({categories}:{categories:Promise<any>}) {
  const formSchema = z.object({
    title: z
    .string()
    .min(5,  "Product title at least 5 characters long" ),
    price: z
    .coerce
      .number( "This field must be a number",
      )
      .min(1,"This field is required" ),
    description: z
    .string()
    .min(1, "This field is required" ),
    categoryId: z
    .string(),
       images: z.array(z.any()).min(1, "At least 1 image is required"),

  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "Sengkim",
      price: 1,
      description: "dawdawdawd",
      categoryId: "1",
      images: [],
    },
  });

  const getCategories:CategoryType[] = use(categories);



  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log("Product data: ", values);
    // const mockProduct = {
    //     title: "Mac Mini",
    //     price: 900,
    //     description: "Mac Mini",
    //     category: 38,
    //     images: ["https://media.wired.com/photos/59e952e4f572231fe56c3937/master/w_2560%2Cc_limit/rosegold-macbook-1.jpg"]
    // }

    
    const imageFormData = new FormData();
    imageFormData.append("file", values.images[0]);

    const uploadProduct = await UploadImage(imageFormData);
    console.log(uploadProduct);
    console.log("value :" , values);
    
    const productData: ProductRequest = {
      title: values.title,
      price: values.price,
      description: values.description,
      categoryId: values.categoryId,
      images: [uploadProduct.location],
    };

    console.log(productData)

  //call insert product
    try{
      const resp = await insertProduct(productData)
      console.log(resp.status)
      if(resp.status==201){
        toast.success("Product created successfully ✅")
      }else{
        toast.error(`Failed to add product ❌ "${productData.title}" already exists.`);
      }
    }catch(error){
      toast.error("Something went wrong ❌ Please try again")
    }
  
 
  }
  
  function onReset() {
    form.reset();
    form.clearErrors();
    
  }

  return (
    <>
        <form
      onSubmit={form.handleSubmit(onSubmit)}
      onReset={onReset}
      className="space-y-8 @container"
    >
      <div className="grid grid-cols-12 gap-4">
        <Controller
          control={form.control}
          name="title"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Product title</FieldLabel>

              <Input
                key="text-input-0"
                placeholder="Macbook pro 16"
                type="text"
                className=""
                {...field}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="price"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Product price</FieldLabel>

              <Input
                key="number-input-0"
                placeholder="1000"
                type="number"
                className=""
                {...field}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="description"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Product Description</FieldLabel>

              <Textarea
                key="textarea-0"
                id="description"
                placeholder="Product description here..."
                className=""
                {...field}
              />


              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="categoryId"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Category</FieldLabel>

              <Select
                key="select-0"
                value={field.value}
                name={field.name}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Please choose category" />
                </SelectTrigger>
                <SelectContent>
                  {getCategories.map((data)=>(
                      <SelectItem key={data.id} value={data.id.toString()}>
                        {data.name}
                  </SelectItem>

                  ))}
                  {/* <SelectItem key="Clothes" value="Clothes">
                    Electronic
                  </SelectItem>

                  <SelectItem key="Food" value="Food">
                    Drink
                  </SelectItem> */}
                </SelectContent>
              </Select>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="images"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="flex w-auto!">Choose images</FieldLabel>
                
             <ImageUpload  value={field.value}
                onImagesChange={field.onChange}/>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="submit"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="hidden w-auto!">Submit</FieldLabel>

              <Button
                key="submit-button-0"
                id="submit"
                name="submit"
                className="w-full"
                type="submit"
                variant="default"
              >
                Submit
              </Button>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="reset"
          render={({ field, fieldState }) => (
            <Field
              className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
              data-invalid={fieldState.invalid}
            >
              <FieldLabel className="hidden w-auto!">Reset</FieldLabel>

              <Button
                key="reset-button-0"
                id="reset"
                name="reset"
                className="w-full"
                type="reset"
                variant="outline"
              >
                Reset
              </Button>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>
    </form>
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
