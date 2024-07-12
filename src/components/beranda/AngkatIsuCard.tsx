import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export const AngkatIsuCard = () => {
    return (
        <Link href='/angkat-isu'>
            <div className='absolute -left-32 top-36 bg-white rounded-3xl shadow-lg p-6 w-60 mx-auto pb-44 -rotate-[20deg] transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2'>
                <div className='flex justify-center mb-4'>
                    <Image src='/angkat-isu/main-poster.png' width={300} height={150} alt='Angkat Isu' className='rounded-xl border-2 border-gray-300 px-8 pt-4 ' />
                </div>
                <h2 className='text-primary text-center text-2xl font-semibold mb-2'>Angkat Isu</h2>
                <p className='text-black text-justify text-xs'>
                    Bantu masyarakat dengan menyuarakan keadilan dan menegakkan hak inklusif untuk semua.
                </p>
            </div>
        </Link>
    );
}