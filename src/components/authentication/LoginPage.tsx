'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:mx-10 lg:mx-24 xl:mx-44'>
        <div className='h-screen flex flex-col justify-center px-8 sm:px-32 md:px-10 xl:px-20 gap-3'>
          <h1 className='text-xl sm:text-3xl font-bold text-primary'>Selamat datang!</h1>
          <p className='text-xs lg:text-base'>
            Belum punya akun?{' '}
            <Link href="/register">
              <span className='font-semibold text-primary hover:text-primary/80 transition-colors duration-300'>
                Daftar
              </span>
            </Link>
          </p>
          <button
            type='submit'
            className='border border-primary rounded-xl text-primary p-2 font-semibold mt-3 transition-opacity duration-300 hover:opacity-75'
          >
            <div className='text-xs lg:text-base flex items-center justify-center gap-2'>
              <FcGoogle />
              Masuk dengan Google
            </div>
          </button>
          <div className='text-xs lg:text-base flex items-center my-2'>
            <hr className='flex-grow border-t border-gray-300' />
            <span className='mx-2 text-gray-500'>atau masuk dengan email anda</span>
            <hr className='flex-grow border-t border-gray-300' />
          </div>
          <form className='text-xs lg:text-base flex flex-col'>
            <label htmlFor='email' className='font-semibold mb-2'>
              Alamat Email
            </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Email Address'
              className='border border-black rounded-xl sm:rounded-2xl p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            />
            
            <label htmlFor='password' className='font-semibold mt-4 mb-2'>
              Password
            </label>
            <div className='relative'>
              <input 
                type={showPassword ? 'text' : 'password'} 
                id='password' 
                name='password' 
                placeholder='Password' 
                className='border border-black rounded-xl sm:rounded-2xl p-2 sm:p-3 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              />
              <button 
                type='button' 
                onClick={togglePasswordVisibility} 
                className='absolute inset-y-0 right-3 flex items-center text-gray-600'
              >
                {showPassword ? <AiOutlineEyeInvisible className='text-2xl'/> : <AiOutlineEye className='text-2xl'/>}
              </button>
            </div>
            
            <button
              type='submit'
              className='bg-primary rounded-xl text-white p-2 font-semibold mt-6 transition-opacity duration-300 hover:opacity-75'
            >
              Masuk
            </button>
          </form>
        </div>
        <div className='hidden md:flex flex-col justify-center items-center'>
          <Image src='/login/login.png' width={500} height={500} alt='login' />
        </div>
      </div>
    </div>
  )
}
