'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:mx-10 xl:mx-44'>
      <div className='h-screen flex flex-col justify-center px-16 sm:px-32 md:px-10 lg:px-24 xl:px-20'>
        <h1 className='text-center text-3xl font-bold text-primary mb-10'>Daftar</h1>
        <form className='flex flex-col text-xs xl:text-base'>
          <label htmlFor='name' className='font-semibold my-2'>Nama Lengkap</label>
          <input 
            type='text' 
            id='name' 
            name='name' 
            placeholder='Nama Lengkap' 
            className='border border-black rounded-xl xl:rounded-2xl p-2 xl:p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' 
          />
          
          <label htmlFor='email' className='font-semibold my-2'>Alamat Email</label>
          <input 
            type='text' 
            id='email' 
            name='email' 
            placeholder='Email Address' 
            className='border border-black rounded-xl xl:rounded-2xl p-2 xl:p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' 
          />
          
          <label htmlFor='password' className='font-semibold my-2'>Password</label>
          <div className='relative'>
            <input 
              type={showPassword ? 'text' : 'password'} 
              id='password' 
              name='password' 
              placeholder='Password' 
              className='border border-black rounded-xl xl:rounded-2xl p-2 xl:p-3 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' 
            />
            <button 
              type='button' 
              onClick={togglePasswordVisibility} 
              className='absolute inset-y-0 right-3 flex items-center text-gray-600'
            >
              {showPassword ? <AiOutlineEyeInvisible className='text-2xl'/> : <AiOutlineEye className='text-2xl'/>}
            </button>
          </div>
          
          <button type='submit' className='bg-primary rounded-xl text-white p-2 font-semibold mt-6 transition-opacity duration-300 hover:opacity-75'>Buat Akun</button>
          <p className='text-center mt-3 '>Sudah punya akun? <Link href="/login"><span className='font-semibold text-primary hover:text-primary/80 transition-colors duration-300'>Masuk</span></Link></p>
        </form>
      </div>
      <div className='hidden md:flex flex-col justify-center items-center'> 
        <Image src='/register/register.png' width={500} height={500} alt='register' />
      </div>
    </div>
  )
}
