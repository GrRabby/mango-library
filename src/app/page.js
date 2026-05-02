import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import FeaturedBooks from "@/components/FeaturedBooks";
export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      <Banner></Banner>
      <Marquee></Marquee>
      <FeaturedBooks></FeaturedBooks>
    </div>
  );
}
