import Card from "@/components/i-tech-cards/card";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <h1 className="bg-amber-200">Hello World</h1>
   <div className="grid grid-cols-3">
     <Card
    source={"/profile.png"}
    title={"Streamlining your design process today."}
    desc={"In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations."}
    />

     <Card
    source={"/girl.png"}
    title={"Streamlining your design process today."}
    desc={"In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations."}
    />

    <Card
    source={"/girl1.png"}
    title={"Streamlining your design process today."}
    desc={"In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations."}
    />
   </div>
   
   
   </main>
  );
}
