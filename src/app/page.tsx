import { MainPoster } from "@/components/beranda/MainPoster";
import Footer from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import Image from "next/image";
import { AngkatIsuCard } from "@/components/beranda/AngkatIsuCard";
import { CariTahuCard } from "@/components/beranda/CariTahuCard";
import { BantuanCard } from "@/components/beranda/BantuanCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="backgroundContainer">
      <Navbar />
      <div className="flex flex-col justify-center mt-44 px-8 xl:px-64">
        <MainPoster />
        <div className="text-2xl border-2 border-gray-300 rounded-3xl py-8 px-16 bg-white shadow-md mt-10 md:mt-0 text-center font-medium">
          Sebagai mayoritas yang <span className="text-primary">belum memahami hukum</span>, kita punya tanggung jawab besar untuk menciptakan keadilan yang inklusif bagi seluruh masyarakat indonesia.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:flex flex-col items-center justify-center p-20">
            <Image src="/beranda/bagaimana.png" width={500} height={500} alt="main-poster" />
          </div>
          <div className="flex flex-col items-center justify-center md:px-10 gap-6 pt-8 md:pt-0">
            <h1 className="text-4xl text-black font-semibold leading-relaxed">Bagaimana Upaya kita untuk mewujudkannya?</h1>
          </div>
        </div>
        <div
          className="relative flex justify-between text-2xl rounded-3xl py-28 px-20 bg-white shadow-md mt-10 text-center font-medium overflow-hidden"
          style={{ backgroundImage: `url('/beranda/background.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <Image src="/common/logo-light.png" width={300} height={300} alt="main-poster" />
          <div className="flex flex-col -my-10 mx-20 relative">
            <h1 className="text-4xl text-white font-semibold">#KeadilanUntukSemua</h1>
            <AngkatIsuCard />
            <CariTahuCard />
            <BantuanCard />
          </div>
        </div>
        <div className="flex items-center justify-center py-20">
          <h1 className="text-5xl font-semibold text-center leading-relaxed"><span className="text-primary">SWA</span>RA menghadirkan <br></br> <span className="text-primary">3 solusi</span></h1>
          <Image src="/beranda/lampu.png" width={300} height={300} alt="main-poster" />
        </div>
        <div className="relative flex flex-col gap-6 border-2 border-gray-300 rounded-3xl p-16 bg-white shadow-md mt-10 md:mt-0 font-semibold text-left overflow-hidden my-10">
          <h1 className="text-primary text-5xl">Angkat Isu</h1>
          <p className="text-2xl font-semibold">Cari tau isu terkini dan <br></br>bantu <span className="text-primary">SWA</span>RA-kan!</p>
          <Link href="/angkat-isu">
            <button className='font-semibold bg-primary text-lg py-2 px-4 xl:px-8 rounded-2xl text-white transition-opacity duration-300 hover:opacity-75 mb-32'>
            Cobain yuk!
            </button>
          </Link>
          <Image src="/beranda/angkat-isu.png" width={400} height={400} alt="main-poster" className="absolute left-[400px]"/>
          <Image src="/beranda/angkat-isu.png" width={400} height={400} alt="main-poster" className="absolute -right-[60px] -top-[500px]"/>
        </div>
        <div className="relative flex flex-col gap-6 border-2 border-gray-300 rounded-3xl p-16 bg-white shadow-md mt-10 md:mt-0 font-semibold text-center overflow-hidden my-10">
          <h1 className="text-primary text-5xl">Cari Tau</h1>
          <p className="text-2xl font-semibold">Pelajari hak-hak Anda dan<br></br>bagaimana melaporkannya!</p>
          <Link href="/cari-tau">
            <button className='font-semibold bg-primary text-lg py-2 px-4 xl:px-8 rounded-2xl text-white transition-opacity duration-300 hover:opacity-75 mb-48'>
            Cobain yuk!
            </button>
          </Link>
          <Image src="/beranda/cari-tau.png" width={400} height={400} alt="main-poster" className="absolute left-[400px] top-[300px]"/>
          <Image src="/beranda/cari-tau.png" width={400} height={400} alt="main-poster" className="absolute -left-[100px] bottom-[200px] -rotate-[10deg]"/>
          <Image src="/beranda/cari-tau-1.png" width={400} height={400} alt="main-poster" className="absolute -right-[100px] -top-[60px] -rotate-[20deg]"/>
        </div>
        <div className="relative flex flex-col justify-center gap-6 border-2 border-gray-300 rounded-3xl p-16 pl-[600px] bg-white shadow-md mt-10 md:mt-0 font-semibold text-left overflow-hidden my-10">
          <h1 className="text-primary text-5xl mt-16">Bantuan</h1>
          <p className="text-2xl font-semibold">Hubungi kami untuk mendapatkan bantuan hukum</p>
          <Link href="/bantuan">
            <button className='font-semibold bg-primary text-lg py-2 px-4 xl:px-8 rounded-2xl text-white transition-opacity duration-300 hover:opacity-75 mb-16'>
            Cobain yuk!
            </button>
          </Link>
          <Image src="/beranda/bantuan.png" width={400} height={400} alt="main-poster" className="absolute left-[100px] bottom-[50px] -rotate-[10deg]"/>
        </div>
        <div className="my-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
