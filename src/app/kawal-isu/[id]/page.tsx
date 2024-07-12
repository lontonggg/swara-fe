import { Navbar } from '@/components/common/Navbar'
import React from 'react'
import Image from 'next/image'
import { IssueStatus } from '@/components/kawal-isu/IssueStatus'
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'

export default function page() {
  return (
    <div className='backgroundContainer'>
        <Navbar />
        <div className='flex flex-col gap-10 py-20 px-6 md:px-20 lg:px-24 xl:px-44'>
            <Link href='/angkat-isu'>
            <div className='flex gap-2 items-center text-primary text-xl font-semibold pt-24'>
                <IoIosArrowBack className='text-2xl' />
                <h1 className='hover:underline'>Kembali</h1>
            </div>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex flex-col items-center justify-center md:px-10 gap-6 pt-8 md:pt-0'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-5xl font-bold leading-normal'>Jangan Biarkan Isu Kita <span className='text-primary'>Terabaikan</span></h1>
                    <p className='text-xl mt-4 leading-normal'>Pastikan setiap isu mendapatkan pengawasan dan transparansi penuh dalam proses hukum.</p>
                </div>
                </div>
                <div className='hidden md:flex flex-col items-center justify-center p-20'>
                <Image src='/kawal-isu/kawal-isu.png' width={500} height={500} alt='main-poster'/>
                </div>
            </div>
            <IssueStatus />
        </div>
    </div>
  )
}
