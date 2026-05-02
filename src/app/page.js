import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import { Ban } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      <Banner></Banner>
      <Marquee></Marquee>
    </div>
  );
}
