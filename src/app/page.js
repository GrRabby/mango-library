import Banner from "@/components/Banner";
import { Ban } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Banner></Banner>
    </div>
  );
}
