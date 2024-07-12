import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const BantuanCard = () => {
    return (
        <Link href='/bantuan'>
            <div className='absolute -right-32 top-36 bg-white rounded-3xl shadow-lg p-6 w-60 mx-auto pb-44 rotate-[20deg] z-20 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2'>
                <div className='flex justify-center mb-4'>
                    <Image src='/bantuan/bantuan.png' width={300} height={150} alt='Bantuan' className='rounded-xl border-2 border-gray-300 px-6 ' />
                </div>
                <h2 className='text-primary text-center text-2xl font-semibold mb-2'>Bantuan</h2>
                <p className='text-black text-justify text-xs'>
                    Jika Anda memiliki pertanyaan, membutuhkan bantuan hukum, atau ingin berdiskusi lebih lanjut, jangan ragu untuk menghubungi kami.
                </p>
            </div>
        </Link>
    );
}
