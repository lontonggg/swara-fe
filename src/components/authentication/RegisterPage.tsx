'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import APIService from '../../services/APIService';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import cookie from 'js-cookie';

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  certification?: string;
}

export const RegisterPage: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const newErrors: Errors = {};

    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const passwordInput = form.elements.namedItem('password') as HTMLInputElement;
    const certificationInput = form.elements.namedItem('certification') as HTMLInputElement;

    if (!nameInput.value.trim()) {
      newErrors.name = 'Nama lengkap tidak boleh kosong';
    }
    if (!emailInput.value.trim()) {
      newErrors.email = 'Alamat email tidak boleh kosong';
    } else if (!validateEmail(emailInput.value.trim())) {
      newErrors.email = 'Alamat email tidak valid';
    }
    if (!passwordInput.value.trim()) {
      newErrors.password = 'Password harus diisi';
    } else if (passwordInput.value.length < 8) {
      newErrors.password = 'Password minimal 8 karakter';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const userData = {
        FullName: nameInput.value,
        Email: emailInput.value,
        Password: passwordInput.value,
        SignUpType: certificationInput.value ? 'law_expert': 'regular_user',
        Certificate: certificationInput?.value || null,
      };

      console.log(userData)
      const registerPromise = APIService.register(userData);

      toast.promise(
        registerPromise,
        {
          loading: 'Sedang mendaftar...',
          success: (response) => {
            if(userData.SignUpType === 'law_expert') {
                router.push('/login')
                return `Akun anda sedang diverifikasi oleh admin, ${userData.FullName}!`;
            }

            cookie.set('firstName', response.FirstName, { expires: 0.5 })
            cookie.set('token', response.Token, { expires: 0.5 });
            router.push('/')
            return `Anda berhasil terdaftar, ${response.FirstName}!`;
          },
          error: (err) => {
            return err.message || 'Gagal mendaftar';
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
  };

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

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:mx-10 xl:mx-44'>
      <div className='h-screen flex flex-col justify-center px-16 sm:px-32 md:px-10 lg:px-24 xl:px-20'>
        <h1 className='text-center text-3xl font-bold text-primary mb-10'>Daftar</h1>
        <form className='flex flex-col text-xs xl:text-base' onSubmit={validateForm}>
          <label htmlFor='name' className='font-semibold my-2'>Nama Lengkap</label>
          <input 
            type='text' 
            id='name' 
            name='name' 
            placeholder='Nama Lengkap' 
            className={`border ${errors.name ? 'border-[#FF7387]' : 'border-black'} rounded-xl xl:rounded-2xl p-2 xl:p-3 focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-[#FF7387]' : 'focus:ring-primary'} focus:border-transparent`} 
            onChange={handleInputChange}
          />
          {errors.name && <span className='text-[#FF7387] mt-1'>{errors.name}</span>}
          
          <label htmlFor='email' className='font-semibold my-2'>Alamat Email</label>
          <input 
            type='text' 
            id='email' 
            name='email' 
            placeholder='Alamat Email' 
            className={`border ${errors.email ? 'border-[#FF7387]' : 'border-black'} rounded-xl xl:rounded-2xl p-2 xl:p-3 focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-[#FF7387]' : 'focus:ring-primary'} focus:border-transparent`} 
            onChange={handleInputChange}
          />
          {errors.email && <span className='text-[#FF7387] mt-1'>{errors.email}</span>}
          
          <label htmlFor='password' className='font-semibold my-2'>Password</label>
          <div className='relative'>
            <input 
              type={showPassword ? 'text' : 'password'} 
              id='password' 
              name='password' 
              placeholder='Password' 
              className={`border ${errors.password ? 'border-[#FF7387]' : 'border-black'} rounded-xl xl:rounded-2xl p-2 xl:p-3 w-full pr-10 focus:outline-none focus:ring-2 ${errors.password ? 'focus:ring-[#FF7387]' : 'focus:ring-primary'} focus:border-transparent`} 
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
          
          <label htmlFor='certification' className='font-semibold my-2'>Tautan Sertifikat</label>
          <p className='mb-2 -mt-2 text-xs text-gray-500'>*Unggah sertifikat untuk menjadi pengguna ahli</p>
          <input 
            type='text' 
            id='certification' 
            name='certification' 
            placeholder='Tautan Sertifikat' 
            className='border border-black rounded-xl xl:rounded-2xl p-2 xl:p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' 
            onChange={handleInputChange}
          />

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
