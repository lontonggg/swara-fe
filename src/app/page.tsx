import { InformationSection } from "@/components/beranda/InformationSection";
import { MainPoster } from "@/components/beranda/MainPoster";
import { Navbar } from "@/components/common/Navbar";

export default function Home() {
  return (
    <div className="backgroundContainer">
      <Navbar />
      <div className="flex flex-col justify-center mt-44 px-8 xl:px-64">
        <MainPoster />
        <InformationSection />
      </div>
    </div> 
  );
}
