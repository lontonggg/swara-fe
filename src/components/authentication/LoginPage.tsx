'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import APIService from '@/services/APIService'
import { toast } from 'react-hot-toast'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { GoogleLogin } from '@react-oauth/google';

interface Errors {
  email?: string;
  password?: string;
}

export const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  const validateForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const newErrors: Errors = {};

    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const passwordInput = form.elements.namedItem('password') as HTMLInputElement;

    if (!emailInput.value.trim()) {
      newErrors.email = 'Alamat email tidak boleh kosong';
    } else if (!validateEmail(emailInput.value.trim())) {
      newErrors.email = 'Alamat email tidak valid';
    }
    if (!passwordInput.value.trim()) {
      newErrors.password = 'Password tidak boleh kosong';
    } else if (passwordInput.value.length < 8) {
      newErrors.password = 'Password minimal 8 karakter';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const userData = {
        Email: emailInput.value,
        Password: passwordInput.value,
      };
    
      const loginPromise = APIService.login(userData);
    
      toast.promise(
        loginPromise,
        {
          loading: 'Sedang masuk...',
          success: (response) => {
            Cookies.set('token', response.Token, { expires: 0.5 });
            Cookies.set('firstName', response.FirstName, { expires: 0.5 });
            router.push('/')
            return `Selamat datang, ${response.FirstName}!`;
          },
          error: (err) => {
            return err.message || 'Gagal masuk!';
          },
        },
        {
          style: {
            zIndex: 9999,
            fontSize: '18px',
            padding: '14px',
          },
        }
      );
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (value.trim()) {
        delete newErrors[name as keyof Errors];
      } else {
        newErrors[name as keyof Errors] = `${name.charAt(0).toUpperCase() + name.slice(1)} tidak boleh kosong`;
      }
      return newErrors;
    });
  };

  const responseMessage = async (response: any) => {
    const { credential } = response;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/google-auth/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ credential })
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data)
        Cookies.set('token', data.tokens, { expires: 0.5 });
        Cookies.set('firstName', data.FirstName, { expires: 0.5 })
        router.push('/');
        toast.success('Login berhasil dengan Google!');
      } else {
        const errorData = await res.json();
        toast.error(errorData.error || 'Login gagal!');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Login gagal!');
    }
  };

  const errorMessage = () => {
    toast.error('Login dengan Google gagal!');
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:mx-10 lg:mx-24 xl:mx-44'>
        <div className='h-screen flex flex-col justify-center px-8 sm:px-32 md:px-10 xl:px-32 gap-3'>
          <h1 className='text-xl sm:text-3xl font-bold text-primary'>Selamat datang!</h1>
          <p className='text-xs lg:text-base'>
            Belum punya akun?{' '}
            <Link href="/register">
              <span className='font-semibold text-primary hover:text-primary/80 transition-colors duration-300'>
                Daftar
              </span>
            </Link>
          </p>
          <div className='flex items-center justify-center w-full mt-2'>
            <GoogleLogin
              onSuccess={responseMessage}
              onError={errorMessage}
              size='large'
              width={1000}
            />
          </div>
          <div className='text-xs lg:text-base flex items-center my-2'>
            <hr className='flex-grow border-t border-gray-300' />
            <span className='mx-2 text-gray-500'>atau masuk dengan email anda</span>
            <hr className='flex-grow border-t border-gray-300' />
          </div>
          <form className='text-xs lg:text-base flex flex-col' onSubmit={validateForm}>
            <label htmlFor='email' className='font-semibold mb-2'>
              Alamat Email
            </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Alamat Email'
              className={`border ${errors.email ? 'border-[#FF7387]' : 'border-black'} rounded-xl sm:rounded-2xl p-2 sm:p-3 focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-[#FF7387]' : 'focus:ring-primary'} focus:border-transparent`}
              onChange={handleInputChange}
            />
            {errors.email && <span className='text-[#FF7387] mt-1'>{errors.email}</span>}
            
            <label htmlFor='password' className='font-semibold mt-4 mb-2'>
              Password
            </label>
            <div className='relative'>
              <input 
                type={showPassword ? 'text' : 'password'} 
                id='password' 
                name='password' 
                placeholder='Password' 
                className={`border ${errors.password ? 'border-[#FF7387]' : 'border-black'} rounded-xl sm:rounded-2xl p-2 sm:p-3 w-full pr-10 focus:outline-none focus:ring-2 ${errors.password ? 'focus:ring-[#FF7387]' : 'focus:ring-primary'} focus:border-transparent`}
                onChange={handleInputChange}
              />
              <button 
                type='button' 
                onClick={togglePasswordVisibility} 
                className='absolute inset-y-0 right-3 flex items-center text-gray-600'
              >
                {showPassword ? <AiOutlineEyeInvisible className='text-2xl'/> : <AiOutlineEye className='text-2xl'/>}
              </button>
            </div>
            {errors.password && <span className='text-[#FF7387] mt-1'>{errors.password}</span>}
            
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

export default LoginPage;
