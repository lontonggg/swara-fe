import React, { useState } from 'react';
import { AiFillFileText, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsExclamationCircle } from 'react-icons/bs';
import { FaArrowRightLong, FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/common/Footer';

export const JeratHukumPelaku = () => {
  const [currentContainer1, setCurrentContainer1] = useState(0);
  const [currentContainer2, setCurrentContainer2] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    section1: true,
    section2: true,
    section3: true,
  });

  const handlePrev1 = () => {
    if (currentContainer1 > 0) {
      setCurrentContainer1((prev) => prev - 1);
    }
  };

  const handleNext1 = () => {
    if (currentContainer1 < 8) {
      setCurrentContainer1((prev) => prev + 1);
    }
  };

  const handlePrev2 = () => {
    if (currentContainer2 > 0) {
      setCurrentContainer2((prev) => prev - 1);
    }
  };

  const handleNext2 = () => {
    if (currentContainer2 < 10) {
      setCurrentContainer2((prev) => prev + 1);
    }
  };

  const toggleSectionVisibility = (section: keyof typeof visibleSections) => { 
    setVisibleSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const renderContent1 = () => {
    switch (currentContainer1) {
      case 0:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 281</h1>
            <p className='mt-6'>
              Diancam dengan pidana penjara paling lama 2 tahun 8 bulan atau pidana denda paling banyak Rp4,5 juta [3]:
            </p>
            <ol className='list-decimal ml-6 mt-2'>
              <li>Barang siapa dengan sengaja dan terbuka melanggar kesusilaan;</li>
              <li>Barang siapa dengan sengaja dan di depan orang lain yang ada di situ bertentangan dengan kehendaknya, melanggar kesusilaan.</li>
            </ol>
          </div>
        );
      case 1:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 289</h1>
            <p className='mt-6'>
              Barang siapa dengan kekerasan atau ancaman kekerasan memaksa seorang untuk melakukan atau membiarkan dilakukan perbuatan cabul, diancam karena melakukan perbuatan yang menyerang kehormatan kesusilaan, dengan pidana penjara paling lama 9 tahun.
            </p>
          </div>
        );
      case 2:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 290</h1>
            <p className='mt-6'>
              Diancam dengan pidana penjara paling lama 7 tahun:
            </p>
            <ol className='list-decimal ml-6 mt-2'>
              <li>Barang siapa melakukan perbuatan cabul dengan seorang, padahal diketahuinya bahwa orang itu pingsan atau tidak berdaya;</li>
              <li>Barang siapa melakukan perbuatan cabul dengan seorang padahal diketahuinya atau sepatutnya harus diduganya, bahwa umurnya belum 15 tahun atau kalau umurnya tidak jelas, yang bersangkutan belum waktunya untuk dikawin;</li>
              <li>Barang siapa membujuk seseorang yang diketahuinya atau sepatutnya harus diduganya bahwa umurnya belum 15 tahun atau kalau umurnya tidak jelas yang bersangkutan belum waktunya untuk dikawin, untuk melakukan atau membiarkan dilakukan perbuatan cabul, atau bersetubuh di luar perkawinan dengan orang lain.</li>
            </ol>
          </div>
        );
      case 3:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 291</h1>
            <p className='mt-6'>
              Diancam dengan pidana penjara paling lama 12 tahun:
            </p>
            <ol className='list-decimal ml-6 mt-2'>
              <li>Jika salah satu kejahatan berdasarkan pasal 286, 287, 289, dan 290 mengakibatkan luka-luka berat;</li>
              <li>Jika salah satu kejahatan berdasarkan pasal 285, 286, 287, 289 dan 290 mengakibatkan kematian dijatuhkan pidana penjara paling lama 15 tahun.</li>
            </ol>
          </div>
        );
      case 4:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 292</h1>
            <p className='mt-6'>
              Orang dewasa yang melakukan perbuatan cabul dengan orang lain sesama kelamin, yang diketahuinya atau sepatutnya harus diduganya belum dewasa, diancam dengan pidana penjara paling lama 5 tahun.
            </p>
          </div>
        );
      case 5:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 293</h1>
            <p className='mt-6'>
              Barang siapa dengan memberi atau menjanjikan uang atau barang, menyalahgunakan perbawa yang timbul dari hubungan keadaan, atau dengan penyesatan sengaja menggerakkan seorang belum dewasa dan baik tingkah-lakunya untuk melakukan atau membiarkan dilakukan perbuatan cabul dengan dia, padahal tentang belum kedewasaannya, diketahui atau selayaknya harus diduganya, diancam dengan pidana penjara paling lama 5 tahun.
            </p>
            <p className='mt-4'>
              Penuntutan hanya dilakukan atas pengaduan orang yang terhadap dirinya dilakukan kejahatan itu.
            </p>
            <p className='mt-4'>
              Tenggang waktu tersebut dalam pasal 74 bagi pengaduan ini adalah masing-masing 9 bulan dan 12 bulan.
            </p>
          </div>
        );
      case 6:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 294</h1>
            <p className='mt-6'>
              Diancam dengan pidana penjara paling lama 7 tahun:
            </p>
            <ol className='list-decimal ml-6 mt-2'>
              <li>Barang siapa melakukan perbuatan cabul dengan anaknya, anak tirinya, anak angkatnya, anak di bawah pengawasannya yang belum dewasa, atau dengan orang yang belum dewasa yang pemeliharaannya, pendidikan atau penjagaannya diserahkan kepadanya ataupun dengan bujangnya atau bawahannya yang belum dewasa;</li>
              <li>Pejabat yang melakukan perbuatan cabul dengan orang yang karena jabatan adalah bawahannya, atau dengan orang yang penjagaannya dipercayakan atau diserahkan kepadanya;</li>
              <li>Pengurus, dokter, guru, pegawai, pengawas atau pesuruh dalam penjara, tempat pekerjaan negara, tempat pendidikan, rumah piatu, rumah sakit, rumah sakit jiwa atau lembaga sosial, yang melakukan perbuatan cabul dengan orang yang dimasukkan ke dalamnya.</li>
            </ol>
          </div>
        );
      case 7:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 295</h1>
            <p className='mt-6'>
              Diancam dengan pidana penjara paling lama 5 tahun:
            </p>
            <ol className='list-decimal ml-6 mt-2'>
              <li>Barang siapa dengan sengaja menyebabkan atau memudahkan dilakukannya perbuatan cabul oleh anaknya, anak tirinya, anak angkatnya, atau anak di bawah pengawasannya yang belum dewasa, atau oleh orang yang belum dewasa yang pemeliharaannya, pendidikan atau penjagaannya diserahkan kepadanya, ataupun oleh bujangnya atau bawahannya yang belum cukup umur, dengan orang lain;</li>
              <li>Barang siapa dengan sengaja menghubungkan atau memudahkan perbuatan cabul, kecuali yang tersebut dalam butir 1 di atas, yang dilakukan oleh orang yang diketahuinya belum dewasa atau yang sepatutnya harus diduganya demikian, dengan orang lain.</li>
            </ol>
            <p className='mt-4'>
              Jika yang bersalah melakukan kejahatan itu sebagai pencarian atau kebiasaan, maka pidana dapat ditambah sepertiga.
            </p>
          </div>
        );
      case 8:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 296</h1>
            <p className='mt-6'>
              Diancam dengan pidana penjara paling lama 1 tahun atau pidana denda paling banyak kategori II, yaitu Rp10 juta setiap orang yang:
            </p>
            <ol className='list-decimal ml-6 mt-2'>
              <li>Melanggar kesusilaan di muka umum; atau</li>
              <li>Melanggar kesusilaan di muka orang lain yang hadir tanpa kemauan orang yang hadir tersebut.</li>
            </ol>
          </div>
        );
      default:
        return null;
    }
  };

  const renderContent2 = () => {
    switch (currentContainer2) {
      case 0:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 406</h1>
            <p className='mt-6'>
              Dipidana dengan pidana penjara paling lama 1 tahun atau pidana denda paling banyak kategori II, yaitu Rp10 juta [4] setiap orang yang:
            </p>
            <ol className='list-[lower-alpha] ml-6 mt-2'>
              <li>melanggar kesusilaan di muka umum; atau</li>
              <li>melanggar kesusilaan di muka orang lain yang hadir tanpa kemauan orang yang hadir tersebut.</li>
            </ol>
            <h1 className='text-2xl font-bold pt-6'>Pasal 406 huruf a</h1>
            <p className='mt-6'>
              {`Yang dimaksud dengan "melanggar kesusilaan" adalah melakukan perbuatan mempertunjukkan ketelanjangan, alat kelamin, dan aktivitas seksual yang bertentangan dengan nilai-nilai yang hidup dalam masyarakat di tempat dan waktu perbuatan tersebut dilakukan.`}
            </p>
          </div>
        );
      case 1:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 414</h1>
            <p className='mt-6'>
              (1) Setiap orang yang melakukan perbuatan cabul terhadap orang lain yang berbeda atau sama jenis kelaminnya:
            </p>
            <ol className='list-[lower-alpha] ml-6 mt-2'>
              <li>di depan umum, dipidana dengan pidana penjara paling lama 1 tahun 6 bulan atau pidana denda paling banyak kategori III, yaitu Rp50 juta;[5]</li>
              <li>secara paksa dengan kekerasan atau ancaman kekerasan, dipidana dengan pidana penjara paling lama 9 tahun; atau</li>
              <li>yang dipublikasikan sebagai muatan pornografi, dipidana dengan pidana penjara paling lama 9 tahun.</li>
            </ol>
            <p className='mt-2'>
              (2) Setiap orang dengan kekerasan atau ancaman kekerasan memaksa orang lain untuk melakukan perbuatan cabul terhadap dirinya, dipidana dengan pidana penjara paling lama 9 tahun.
            </p>
          </div>
        );
      case 2:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 415</h1>
            <p className='mt-6'>
              Dipidana dengan pidana penjara paling lama 9 tahun, setiap orang yang:
            </p>
            <ol className='list-[lower-alpha] ml-6 mt-2'>
              <li>melakukan perbuatan cabul dengan seseorang yang diketahui orang tersebut pingsan atau tidak berdaya; atau</li>
              <li>melakukan perbuatan cabul dengan seseorang yang diketahui atau patut diduga anak.</li>
            </ol>
            <h1 className='text-2xl font-bold pt-6'>Penjelasan Pasal 415</h1>
            <p className='mt-6'>
              {`Yang dimaksud dengan "perbuatan cabul" adalah kontak seksual yang berkaitan dengan nafsu birahi, kecuali perkosaan.`}
            </p>
          </div>
        );
      case 3:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 416</h1>
            <p className='mt-6'>
              Jika salah satu tindak pidana sebagaimana dimaksud dalam Pasal 414 dan Pasal 415 mengakibatkan luka berat, dipidana dengan pidana penjara paling lama 12 tahun.
            </p>
            <p className='mt-2'>
              Jika salah satu tindak pidana sebagaimana dimaksud dalam Pasal 414 dan Pasal 415 mengakibatkan matinya orang, dipidana dengan pidana penjara paling lama 15 tahun.
            </p>
          </div>
        );
      case 4:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 417</h1>
            <p className='mt-6'>
              Setiap orang yang memberi atau berjanji akan memberi hadiah menyalahgunakan wibawa yang timbul dari hubungan keadaan atau dengan penyesatan menggerakkan orang yang diketahui atau patut diduga anak, untuk melakukan perbuatan cabul atau membiarkan terhadap dirinya dilakukan perbuatan cabul, dipidana dengan pidana penjara paling lama 9 tahun.
            </p>
            <h1 className='text-2xl font-bold pt-6'>Penjelasan Pasal 417</h1>
            <p className='mt-6'>
              Tindak pidana dalam ketentuan ini adalah perbuatan menggerakkan seseorang yang belum dewasa, belum kawin, dan berkelakuan baik untuk melakukan perbuatan cabul atau persetubuhan dengannya atau membiarkan terhadap dirinya dilakukan perbuatan cabul.
            </p>
          </div>
        );
      case 5:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 418</h1>
            <p className='mt-6'>
              Setiap orang yang melakukan percabulan dengan anak kandung, anak tirinya, anak angkatnya, atau anak di bawah pengawasannya yang dipercayakan padanya untuk diasuh atau dididik, dipidana dengan pidana penjara paling lama 12 tahun.
            </p>
            <p className='mt-2'>
              Dipidana dengan pidana penjara paling lama 12 tahun:
            </p>
            <ol className='list-[lower-alpha] ml-6 mt-2'>
              <li>Pejabat yang melakukan percabulan dengan bawahannya atau dengan orang yang dipercayakan atau diserahkan padanya untuk dijaga; atau</li>
              <li>dokter, guru, pegawai, pengurus, atau petugas pada Lembaga pemasyarakatan, lembaga negara, tempat latihan karya, rumah pendidikan, rumah yatim dan/atau piatu, rumah sakit jiwa, atau panti sosial yang melakukan perbuatan cabul dengan orang yang dimasukkan ke lembaga, rumah, atau panti tersebut.</li>
            </ol>
            <h1 className='text-2xl font-bold pt-6'>Penjelasan Pasal 418 ayat</h1>
            <p className='mt-6'>
              Tindak pidana yang diatur dalam ketentuan ini dikenal dengan inses.
            </p>
          </div>
        );
      case 6:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 419</h1>
            <p className='mt-6'>
              Setiap orang yang menghubungkan atau memudahkan orang lain berbuat cabul atau bersetubuh dengan orang yang diketahui atau patut diduga anak, dipidana dengan pidana penjara paling lama 7 tahun.
            </p>
            <p className='mt-2'>
              Jika tindak pidana sebagaimana dimaksud pada ayat (1) dilakukan terhadap anak kandung, anak tiri, anak angkat, atau anak di bawah pengawasannya yang dipercayakan padanya untuk diasuh, dipidana dengan pidana penjara paling lama 9 tahun.
            </p>
          </div>
        );
      case 7:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 420</h1>
            <p className='mt-6'>
              Setiap orang yang menghubungkan atau memudahkan orang lain melakukan perbuatan cabul, dipidana dengan pidana penjara paling lama 2 tahun.
            </p>
          </div>
        );
      case 8:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 421</h1>
            <p className='mt-6'>
              Jika tindak pidana sebagaimana dimaksud dalam Pasal 419 atau Pasal 420 dilakukan sebagai kebiasaan atau untuk menarik keuntungan sebagai mata pencaharian pidananya dapat ditambah 1/3.
            </p>
            <h1 className='text-2xl font-bold pt-6'>Penjelasan Pasal 421</h1>
            <p className='mt-6'>
              Ketentuan ini dimaksudkan untuk memberantas tempat pelacuran.
            </p>
          </div>
        );
      case 9:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 422</h1>
            <p className='mt-6'>
              Setiap orang yang menggerakkan, membawa, menempatkan, atau menyerahkan anak kepada orang lain untuk melakukan percabulan, pelacuran, atau perbuatan melanggar kesusilaan lainnya, dipidana dengan pidana penjara paling lama 9 tahun.
            </p>
            <p className='mt-2'>
              Jika tindak pidana sebagaimana dimaksud pada ayat (1) dilakukan dengan menjanjikan anak memperoleh pekerjaan atau janji lainnya, dipidana dengan pidana penjara paling lama 10 tahun.
            </p>
            <h1 className='text-2xl font-bold pt-6'>Penjelasan Pasal 422</h1>
            <p className='mt-6'>
              Termasuk Tindak Pidana ini adalah mengirimkan laki-laki atau perempuan yang belum dewasa itu ke daerah lain atau ke luar negeri guna melakukan pelacuran atau perbuatan lain yang melanggar kesusilaan.
            </p>
          </div>
        );
      case 10:
        return (
          <div className='text-xl leading-relaxed'>
            <h1 className='text-2xl font-bold'>Pasal 423</h1>
            <p className='mt-6'>
              Tindak pidana sebagaimana dimaksud dalam Pasal 414 sampai dengan Pasal 422 merupakan tindak pidana kekerasan seksual.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='flex flex-col justify-center gap-10'>
      <div className='relative border-2 border-gray-300 rounded-3xl py-4 px-10 bg-white shadow-md mt-10 md:mt-0'>
        <button
          onClick={() => toggleSectionVisibility('section1')}
          className='absolute top-8 right-8 text-3xl'
        >
          {visibleSections.section1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        <div className='flex items-start py-4'>
          <div className='flex items-center justify-center w-10 h-10'>
            <AiFillFileText className='text-2xl text-primary -mt-2' />
          </div>
          <div className='ml-4'>
            <h1 className='font-semibold text-2xl mb-4'>Jerat Hukum Pelaku Dalam KUHP</h1>
          </div>
        </div>
        <AnimatePresence>
          {visibleSections.section1 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className='mt-6'>
                <div className='relative border-2 border-gray-300 rounded-3xl bg-white shadow-md mb-12'>
                  <h2 className='text-2xl font-semibold bg-primary text-white p-4 rounded-t-2xl text-center'>
                    KUHP
                    <button
                      onClick={() => toggleSectionVisibility('section2')}
                      className='absolute top-4 right-4 text-xl'
                    >
                      {visibleSections.section2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                  </h2>
                  <AnimatePresence>
                    {visibleSections.section2 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className='flex justify-between items-center p-10'>
                          {renderContent1()}
                        </div>
                        <div className='flex justify-center items-center mb-6 text-primary text-4xl gap-16'>
                          <button
                            onClick={handlePrev1}
                            disabled={currentContainer1 === 0}
                            className={`${currentContainer1 === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                          >
                            <FaCircleArrowLeft />
                          </button>
                          <div className='text-xl'>
                            {currentContainer1 + 1} / 9
                          </div>
                          <button
                            onClick={handleNext1}
                            disabled={currentContainer1 === 8}
                            className={`${currentContainer1 === 8 ? 'opacity-50 cursor-not-allowed' : ''}`}
                          >
                            <FaCircleArrowRight />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className='relative border-2 border-gray-300 rounded-3xl bg-white shadow-md mb-8'>
                  <h2 className='text-2xl font-semibold bg-primary text-white p-4 rounded-t-2xl text-center'>
                    UU 1/2023
                    <button
                      onClick={() => toggleSectionVisibility('section3')}
                      className='absolute top-4 right-4 text-xl'
                    >
                      {visibleSections.section3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                  </h2>
                  <AnimatePresence>
                    {visibleSections.section3 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className='flex justify-between items-center p-10'>
                          {renderContent2()}
                        </div>
                        <div className='flex justify-center items-center mb-6 text-primary text-4xl gap-16'>
                          <button
                            onClick={handlePrev2}
                            disabled={currentContainer2 === 0}
                            className={`${currentContainer2 === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                          >
                            <FaCircleArrowLeft />
                          </button>
                          <div className='text-xl'>
                            {currentContainer2 + 1} / 11
                          </div>
                          <button
                            onClick={handleNext2}
                            disabled={currentContainer2 === 10}
                            className={`${currentContainer2 === 10 ? 'opacity-50 cursor-not-allowed' : ''}`}
                          >
                            <FaCircleArrowRight />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='relative p-6 border-2 border-gray-300 rounded-3xl bg-white shadow-md mb-6 text-xl text-justify'>
        <div className='flex items-start py-4'>
          <div className='flex items-center justify-center w-10 h-10'>
            <AiFillFileText className='text-2xl text-primary -mt-2' />
          </div>
          <div className='ml-4 leading-relaxed'>
            <h1 className='font-semibold mb-4 text-2xl'>Jerat Hukum Pelaku Dalam KUHP</h1>
            <button
              onClick={() => toggleSectionVisibility('section2')}
              className='absolute top-8 right-7 text-3xl'
            >
              {visibleSections.section2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
            <AnimatePresence>
              {visibleSections.section2 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='text-justify leading-relaxed'
                >
                  <p>Dalam hukum pidana di Indonesia sebenarnya tidak ada istilah pelecehan seksual, melainkan dikenal dengan istilah perbuatan cabul dan kejahatan terhadap kesusilaan/tindak pidana kesusilaan. Tindakan-tindakan ini diatur dalam KUHP lama yang masih berlaku pada saat artikel ini diterbitkan serta dalam UU 1/2023 tentang KUHP baru yang akan mulai berlaku tiga tahun setelah tanggal diundangkan, yakni pada tahun 2026.</p>
                  <p>Dalam UU TPKS, pelecehan seksual adalah salah satu bentuk tindak pidana kekerasan seksual yang terdiri atas pelecehan seksual fisik dan pelecehan seksual non-fisik [7] sebagai berikut:</p>
                  <ol className='list-decimal ml-6 mt-2 leading-relaxed'>
                    <li className='leading-relaxed'>
                      Pelecehan seksual non-fisik adalah perbuatan seksual secara nonfisik yang ditujukan terhadap tubuh, keinginan seksual, dan/atau organ reproduksi dengan maksud merendahkan harkat dan martabat seseorang berdasarkan seksualitas dan/atau kesusilaannya. [8] Adapun contoh perbuatan seksual secara nonfisik adalah pernyataan, gerak tubuh, atau aktivitas yang tidak patut dan mengarah kepada seksualitas dengan tujuan merendahkan atau mempermalukan. [9] Lalu, berdasarkan Pasal 5 UU TPKS, orang yang melakukan pelecehan seksual non-fisik bisa dipidana penjara maksimal 9 bulan dan/atau denda maksimal Rp10 juta.
                    </li>
                    <li className='leading-relaxed'>
                      Pelecehan seksual fisik terdiri dari tiga bentuk yaitu: [10]
                      <ul className='list-disc ml-6'>
                        <li>Perbuatan seksual fisik yang ditujukan terhadap tubuh, keinginan seksual, dan/atau organ reproduksi dengan maksud merendahkan harkat dan martabat seseorang berdasarkan seksualitas dan/atau kesusilaannya. Menurut Pasal 6a UU TPKS, orang yang melakukan perbuatan ini dapat dipidana penjara maksimal 4 tahun dan/atau denda maksimal Rp50 juta.</li>
                        <li>Perbuatan seksual fisik yang ditujukan terhadap tubuh, keinginan seksual, dan/atau organ reproduksi dengan maksud menempatkan seseorang di bawah kekuasaannya secara melawan hukum, baik di dalam maupun di luar perkawinan. Orang yang melakukan perbuatan ini berpotensi dipidana penjara maksimal 12 tahun dan/atau denda maksimal Rp30 juta, sebagaimana diatur dalam Pasal 6b UU TPKS.</li>
                        <li>Penyalahgunaan kedudukan, wewenang, kepercayaan, atau perbawa yang timbul dari tipu muslihat atau hubungan keadaan atau memanfaatkan kerentanan, ketidaksetaraan atau ketergantungan seseorang, memaksa atau dengan penyesatan menggerakkan orang itu untuk melakukan atau membiarkan dilakukan persetubuhan atau perbuatan cabul dengannya atau orang lain. Menurut Pasal 6c UU TPKS, perbuatan ini dapat dipidana penjara maksimal 12 tahun dan/atau denda maksimal Rp300 juta.</li>
                      </ul>
                    </li>
                  </ol>
                  <p className='leading-relaxed mt-4'>Sebagai informasi, jika merujuk pada asas lex specialis derogat legi generali, maka ketentuan yang berlaku adalah UU TPKS karena merupakan peraturan yang secara khusus mengatur tentang pelecehan seksual. Walau demikian, dalam praktiknya penyidik dapat mengenakan pasal berlapis terhadap suatu tindak pidana yang memenuhi unsur-unsur pelecehan seksual sebagaimana diatur dalam KUHP dan UU 1/2023 serta UU TPKS. Artinya, jika unsur-unsur tindak pidananya terpenuhi, penyidik dapat menggunakan pasal-pasal tersebut.</p>
                  <div className='flex items-center justify-center mt-8'>
                    <div className='flex items-center gap-6'>
                        <BsExclamationCircle className='text-primary text-3xl' />
                        <p className='text-black font-semibold'>Seluruh data diambil dari hukumonline.com</p>
                        <BsExclamationCircle className='text-primary text-3xl' />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        </div>
      </div>
      <div className='relative border-2 border-gray-300 rounded-3xl py-20 bg-primary bg-opacity-20 shadow-md mt-10 md:mt-0 overflow-hidden'>
        <Image src='/cari-tau/timbangan.png' width={300} height={300} alt='main-poster' className='absolute -left-20 top-0'/>
        <Image src='/cari-tau/palu.png' width={150} height={150} alt='main-poster' className='absolute -right-5 bottom-0'/>
        <h1 className='text-center text-3xl font-semibold leading-normal'>Membutuhkan bantuan lebih?<br />Bicara dengan ahli yuk!</h1>
        <Link href='/bantuan'>
          <div className='text-3xl flex items-center justify-center gap-2 font-semibold text-primary mt-8 text-center'>
            <p className='hover:underline'>Hubungi kami</p>
            <FaArrowRightLong />
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};
