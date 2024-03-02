import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-2 sm:px-5 md:px-10 lg:px-16 text-white bg-black">
      {/* <Navbar /> */}
      <News />
    </main>
  );
}
