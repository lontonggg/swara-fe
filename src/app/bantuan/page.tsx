'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Navbar } from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

interface Errors {
  nama?: string
  email?: string
  subjek?: string
  pesan?: string
}

export default function Page() {
  const [errors, setErrors] = useState<Errors>({})

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const newErrors: Errors = {}

    const namaInput = form.elements.namedItem('nama') as HTMLInputElement
    const emailInput = form.elements.namedItem('email') as HTMLInputElement
    const subjekInput = form.elements.namedItem('subjek') as HTMLInputElement
    const pesanInput = form.elements.namedItem('pesan') as HTMLTextAreaElement

    if (!namaInput.value.trim()) {
      newErrors.nama = 'Nama lengkap tidak boleh kosong'
    }
    if (!emailInput.value.trim()) {
      newErrors.email = 'Alamat email tidak boleh kosong'
    } else if (!validateEmail(emailInput.value.trim())) {
      newErrors.email = 'Alamat email tidak valid'
    }
    if (!subjekInput.value.trim()) {
      newErrors.subjek = 'Subjek pesan tidak boleh kosong'
    }
    if (!pesanInput.value.trim()) {
      newErrors.pesan = 'Pesan tidak boleh kosong'
    }

    setErrors(newErrors)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors }
      if (value.trim()) {
        delete newErrors[name as keyof Errors]
      } else {
        newErrors[name as keyof Errors] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
      }
      return newErrors
    })
  }

  return (
    <div className='backgroundContainer'>
      <Navbar />
      <div className='flex flex-col gap-10 mt-20 py-20 px-6 md:px-20 lg:px-24 xl:px-44'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='hidden md:flex flex-col items-center justify-center p-20'>
            <Image src='/bantuan/bantuan.png' width={500} height={500} alt='main-poster' />
          </div>
          <div className='flex flex-col items-center justify-center md:px-10 gap-6 pt-8 md:pt-0'>
            <h1 className='text-4xl text-primary font-bold'>Hubungi Kami</h1>
            <p className='text-2xl leading-relaxed text-justify'>
              Jika Anda memiliki pertanyaan, membutuhkan bantuan hukum, atau ingin berdiskusi lebih lanjut, jangan ragu untuk menghubungi kami.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          <div className='border-2 border-gray-300 rounded-3xl py-8 px-16 bg-white shadow-md mt-10 md:mt-0 md:col-span-2'>
            <form className='space-y-4' onSubmit={validateForm}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='nama' className='font-semibold my-2'>Nama Lengkap</label>
                  <input
                    type='text'
                    id='nama'
                    name='nama'
                    placeholder='Masukkan nama lengkap Anda'
                    className={`border ${errors.nama ? 'border-[#FF7387]' : 'border-primary'} rounded-xl p-2 focus:outline-none focus:ring-2 ${errors.nama ? 'focus:ring-[#FF7387]' : 'focus:ring-primary'} focus:border-transparent w-full`}
                    onChange={handleInputChange}
                  />
                  {errors.nama && <span className='text-[#FF7387] mt-1'>{errors.nama}</span>}
                </div>
                <div>
                  <label htmlFor='email' className='font-semibold my-2'>Alamat Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Masukkan Email Anda'
                    className={`border ${errors.email ? 'border-[#FF7387]' : 'border-primary'} rounded-xl p-2 focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-[#FF7387]' : 'focus:ring-primary'} focus:border-transparent w-full`}
                    onChange={handleInputChange}
                  />
                  {errors.email && <span className='text-[#FF7387] mt-1'>{errors.email}</span>}
                </div>
              </div>
              <div>
                <label htmlFor='subjek' className='font-semibold my-2'>Subjek Pesan</label>
                <input
                  type='text'
                  id='subjek'
                  name='subjek'
                  placeholder='Masukkan subjek pesan'
                  className={`border ${errors.subjek ? 'border-[#FF7387]' : 'border-primary'} rounded-xl p-2 focus:outline-none focus:ring-2 ${errors.subjek ? 'focus:ring-[#FF7387]' : 'focus:ring-primary'} focus:border-transparent w-full`}
                  onChange={handleInputChange}
                />
                {errors.subjek && <span className='text-[#FF7387] mt-1'>{errors.subjek}</span>}
              </div>
              <div>
                <label htmlFor='pesan' className='font-semibold my-2'>Pesan</label>
                <textarea
                  id='pesan'
                  name='pesan'
                  placeholder='Masukkan pesan'
                  className={`border ${errors.pesan ? 'border-[#FF7387]' : 'border-primary'} rounded-xl p-2 focus:outline-none focus:ring-2 ${errors.pesan ? 'focus:ring-[#FF7387]' : 'focus:ring-primary'} focus:border-transparent w-full h-64 max-h-64 overflow-y-auto resize-none`}
                  onChange={handleInputChange}
                ></textarea>
                {errors.pesan && <span className='text-[#FF7387]'>{errors.pesan}</span>}
              </div>
              <div className='flex justify-center'>
                <button
                  type='submit'
                  className='bg-primary rounded-xl text-white p-2 font-semibold mt-6 transition-opacity duration-300 hover:opacity-75 w-32'
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
          <div className='border-2 border-gray-300 rounded-3xl py-8 px-8 bg-white shadow-md mt-10 md:mt-0 flex flex-col items-center  space-y-8'>
            <h2 className='text-2xl font-bold text-primary mb-4'>Layanan Pelanggan</h2>
            <div className='space-y-6 w-full text-justify'>
              <div className='flex items-center'>
                <div className='bg-primary rounded-full p-3 text-white'>
                  <FaEnvelope className='text-xl' />
                </div>
                <span className='ml-4 text-base'>swarawebs@gmail.com</span>
              </div>
              <div className='flex items-center'>
                <div className='bg-primary rounded-full p-3 text-white'>
                  <FaMapMarkerAlt className='text-xl' />
                </div>
                <span className='ml-4 text-base'>Jl. Grand Jagakarsa, RT.9/RW.7, Jagakarsa, Kec. Jagakarsa, Kota Jakarta Selatan, DKI Jakarta 12620</span>
              </div>
              <div className='flex items-center'>
                <div className='bg-primary rounded-full p-3 text-white'>
                  <FaPhoneAlt className='text-xl' />
                </div>
                <span className='ml-4 text-base'>+6281234567890</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
