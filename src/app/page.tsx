import { InformationSection } from "@/components/beranda/InformationSection";
import { MainPoster } from "@/components/beranda/MainPoster";
import Footer from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center mt-44 px-8 xl:px-64">
        <MainPoster />
        <InformationSection />
        <Footer />
      </div>
    </div> 
  );
}
