'use client';

import React, { useState } from 'react';
import { BsExclamationCircle } from 'react-icons/bs';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Footer from '@/components/common/Footer';

interface VisibleSectionsState {
  pembuktian: boolean;
  saksi: boolean;
  alatBukti: boolean;
}

export const Pembuktian: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<VisibleSectionsState>({
    pembuktian: true,
    saksi: true,
    alatBukti: true,
  });

  const toggleSectionVisibility = (section: keyof VisibleSectionsState) => {
    setVisibleSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col gap-6 content-section'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='relative border-2 border-gray-300 rounded-3xl py-4 px-10 bg-white shadow-md mt-10 md:mt-0 text-xl'
      >
        <button onClick={() => toggleSectionVisibility('pembuktian')} className='absolute top-8 right-8 text-3xl'>
          {visibleSections.pembuktian ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        <div className='flex items-start py-4'>
          <div className='flex items-center justify-center w-10 h-10'>
           <svg viewBox="-4.76 0 46.084 46.084" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(-732.357 -380.776)"> <path d="M752.373,390.809c-2.632-10.793-9.121-9.449-9.121-9.449h-.263s-6.752-1.344-9.384,9.449,2.632,22.551,2.632,22.551h6.24" fill="none" stroke="#C80036" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3042000000000002"></path> <line x2="6" transform="translate(743.477 413.36)" stroke-width="2.3042000000000002" stroke="#C80036" stroke-linecap="round" stroke-linejoin="round" fill="none"></line> <path d="M742.713,426.36h3.238c3.237,0,3.526-4.369,3.526-4.369V416.36h-13v5.631s-.24,4.369,3,4.369Z" fill="none" stroke="#C80036" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3042000000000002"></path> <circle cx="10.955" cy="10.955" r="10.955" transform="translate(741.612 391.53)" fill="none" stroke="#C80036" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3042000000000002"></circle> <circle cx="7.747" cy="7.747" r="7.747" transform="translate(744.821 394.739)" fill="none" stroke="#C80036" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3042000000000002"></circle> <path d="M760.324,410.222a11.178,11.178,0,0,1-1.9,1.545l5.72,5.72a2.438,2.438,0,0,0,3.443-3.443l-5.72-5.72A11.179,11.179,0,0,1,760.324,410.222Z" fill="none" stroke="#C80036" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3042000000000002"></path> </g> </g></svg>
          </div>
          <div className='ml-4 leading-relaxed'>
            <h1 className='font-semibold mb-4 text-2xl'>Pembuktian</h1>
          </div>
        </div>
        <AnimatePresence>
          {visibleSections.pembuktian && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="ml-8"
            >
              <p>Pembuktian pelecehan seksual dalam hukum pidana adalah berdasarkan <b>Pasal 184 KUHAP</b>, menggunakan 5 macam alat bukti, yaitu:</p>
              <div className='grid grid-cols-5 mt-12 font-semibold'>
                <div className='flex flex-col items-center'>
                  <svg fill="#C80036" height="60px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002" stroke="#C80036"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <circle cx="255.934" cy="41.647" r="41.647"></circle> </g> </g> <g> <g> <path d="M357.529,143.885c-0.13-26.09-21.463-47.317-47.554-47.317h-19.77c-3.764,9.763-22.024,57.118-25.787,66.877l6.03-28.404 c0.417-1.966,0.115-4.017-0.854-5.778l-8.17-14.859l7.249-13.184c1.081-1.965-0.343-4.378-2.589-4.378H246.17 c-2.243,0-3.671,2.41-2.589,4.378l7.264,13.212l-8.185,14.886c-0.951,1.727-1.26,3.735-0.876,5.67l5.224,28.457 c-2.815-7.302-22.28-59.933-24.957-66.876h-20.167c-26.091,0-47.56,21.226-47.691,47.315v54.55 c4.562-3.23,9.988-5.136,15.991-5.136h24.211v-0.001v-49.212v-0.002c0.012-2.232,1.828-4.034,4.059-4.027 c2.232,0.007,4.037,1.818,4.037,4.049v49.192c12.252,0,94.512,0,106.439,0v-49.495c0-2.359,1.911-4.27,4.27-4.27 s4.27,1.911,4.27,4.27c0,0.092-0.001,0.187-0.006,0.283v49.212h22.323c6.862,0,13.151,2.487,18.024,6.599L357.529,143.885z"></path> </g> </g> <g> <g> <path d="M339.788,215.56H170.182c-3.157,0-5.726,2.569-5.726,5.725v90.208c0,3.157,2.569,5.726,5.726,5.726h43.856 c0,8.655,0,159.609,0,164.671h-25.896c-4.165,0-7.542,3.377-7.542,7.542v15.028c0,4.166,3.377,7.542,7.542,7.542h135.97 c4.172,0,7.542-3.383,7.542-7.542v-15.028c0-4.165-3.377-7.542-7.542-7.542h-25.896V317.219h41.571 c3.157,0,5.726-2.569,5.726-5.726v-90.209C345.512,218.128,342.944,215.56,339.788,215.56z M317.345,252.766H192.685 c-4.61,0-8.348-3.738-8.348-8.348s3.738-8.348,8.348-8.348h124.661c4.61,0,8.348,3.738,8.348,8.348 S321.956,252.766,317.345,252.766z"></path> </g> </g> </g></svg>
                  <p className='mt-2'>Keterangan Saksi</p>
                </div>
                <div className='flex flex-col items-center'>
                  <svg fill="#C80036" height="60px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 256" enable-background="new 0 0 236 256"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M117.5,2c-12.47,0-22.63,10.16-22.63,22.63c0,12.46,10.06,22.62,22.63,22.62c12.37,0,22.62-10.16,22.62-22.62 C140.12,12.16,129.97,2,117.5,2z M146,52H89c-15.59,0-28,13.41-28,29v32h20V86c0-1.71,1.29-3,3-3s3,1.29,3,3v27h61V86 c0-1.71,1.29-3,3-3s3,1.29,3,3v27h20V81C174,65.51,161.49,52,146,52z M2,118v27h23v109h185V145h24v-27H2z M120.89,231.21 c-25.39,1.47-47.26-17.76-48.8-43.08c-1.62-25.4,17.68-47.27,43.08-48.74c25.4-1.69,47.19,17.62,48.73,43.01 C165.59,207.8,146.29,229.67,120.89,231.21z M153.56,192.83c0,0-5.29-5.07-6.02-9.91c-0.74-4.92,0.81-10.21-0.15-14.32 c-0.95-3.59-6.24-5.57-8.15-8.73c-1.83-3.08-6.16-6.61-6.31-7.41c-0.14-1.1,2.35-1.54,2.79-1.32c1.1-0.37,2.28-0.44,3.08-0.59 c-5.28-3.23-11.23-5.14-17.54-5.73l0.15,1.99l0.95,2.2c0,0-2.2,2.93-2.93,3.08c-0.59,0-1.98-0.59-1.98-0.59l-2.35-2.2l-2.35-2.49 l-3.16-1.18c-3.52,0.88-6.97,2.06-10.13,3.67c0.08,0.37,0.22,0.96,0.22,1.54c1.69-0.73,3.53-1.32,5.07-2.13 c0.58-0.22,2.93,1.47,3.67,1.91c-0.81,1.03-4.33,3.75-4.48,5.14c-0.07,0.59,1.54,1.32,1.54,2.13c0,1.17,0.22,1.83,0.22,3.15 c0.66-0.58,3.97-4.25,4.55-4.25c2.86-1.1,8,3.52,8.59,5.14c0.59,1.54-4.48,5.65-6.83,8.14c-1.9,1.84-5.57,3.23-4.25,5.73 c0.44,0.8,2.57,4.33,1.17,5.8c-1.32,1.17-3.52-1.77-4.11-2.5c-2.05-2.13-5.94-0.95-8.73-0.95c0.22,3.89-0.81,9.17,2.93,11.67 c3.67,2.34,5.07,3.59,9.18,5.13c3.08,1.18,11.15-2.57,13.87-0.95c3.67,2.35,6.83,4.48,11.08,6.02c1.91,0.59,7.64,4.11,6.24,6.6 c-1.17,1.84-2.05,3.53-2.79,5.51c-0.73,1.83-2.57,4.33-4.11,5.72c-1.76,1.54-3.59,4.26-4.55,7.05c7.85-1.91,14.83-6.24,20.33-12.48 c4.99-5.65,8.15-12.18,9.54-19.37C155.9,193.56,153.56,192.83,153.56,192.83z M116.93,216.83c-1.98-1.4-3.74-2.94-5.65-4.48 c-0.59-0.44-2.42-4.18-2.2-4.92c1.1-2.05,1.1-3.52,1.54-5.72c0.37-2.87-1.03-3.53-3.38-4.85c-3.67-1.98-6.97-4.84-10.35-7.04 c-1.76-1.18-4.11-2.13-4.84-4.11c-0.59-2.06-1.1-4.7-2.5-6.32c-3.52-4.33-3.08-7.63-3.08-13.13c0-1.4-1.1-2.94-1.32-4.92 c-5.87,7.63-8.22,16.73-7.49,26.42c0.74,10.72,5.51,20.7,13.66,27.89c6.9,6.02,15.48,9.54,24.44,10.13 C116.93,222.33,120.01,219.03,116.93,216.83z"></path> </g></svg>
                  <p className='mt-2'>Keterangan Ahli</p>
                </div>
                <div className='flex flex-col items-center'>
                  <svg viewBox="0 0 24 24" height="60px" width="60px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c80036"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9463 1.25H13.0537C14.1865 1.24998 15.1123 1.24996 15.8431 1.34822C16.6071 1.45093 17.2694 1.67321 17.7981 2.2019C18.3268 2.7306 18.5491 3.39294 18.6518 4.15689C18.7023 4.53259 18.7268 4.95979 18.7388 5.44015C19.797 5.61086 20.6642 5.94692 21.3588 6.64144C22.1071 7.3898 22.4392 8.33875 22.5969 9.51117C22.75 10.6504 22.75 12.106 22.75 13.9438V14.0566C22.75 15.8944 22.75 17.35 22.5969 18.4892C22.4392 19.6616 22.1071 20.6106 21.3588 21.359C20.6104 22.1073 19.6614 22.4394 18.489 22.5971C17.3498 22.7502 15.8942 22.7502 14.0564 22.7502H9.94359C8.10583 22.7502 6.65019 22.7502 5.51098 22.5971C4.33856 22.4394 3.38961 22.1073 2.64124 21.359C1.89288 20.6106 1.56076 19.6616 1.40314 18.4892C1.24997 17.35 1.24998 15.8944 1.25 14.0566V13.9438C1.24998 12.106 1.24997 10.6504 1.40314 9.51117C1.56076 8.33875 1.89288 7.3898 2.64124 6.64144C3.33576 5.94692 4.20302 5.61086 5.26124 5.44015C5.27316 4.95979 5.29771 4.53259 5.34822 4.15689C5.45093 3.39294 5.67321 2.7306 6.2019 2.2019C6.7306 1.67321 7.39293 1.45093 8.15689 1.34822C8.88775 1.24996 9.81348 1.24998 10.9463 1.25ZM5.25 6.96613C4.51901 7.11288 4.05575 7.34825 3.7019 7.7021C3.27869 8.12531 3.02502 8.70495 2.88976 9.71104C2.75159 10.7387 2.75 12.0934 2.75 14.0002C2.75 15.907 2.75159 17.2617 2.88976 18.2893C3.02502 19.2954 3.27869 19.8751 3.7019 20.2983C4.12511 20.7215 4.70476 20.9752 5.71085 21.1104C6.73851 21.2486 8.09318 21.2502 10 21.2502H14C15.9068 21.2502 17.2615 21.2486 18.2892 21.1104C19.2952 20.9752 19.8749 20.7215 20.2981 20.2983C20.7213 19.8751 20.975 19.2954 21.1102 18.2893C21.2484 17.2617 21.25 15.907 21.25 14.0002C21.25 12.0934 21.2484 10.7387 21.1102 9.71104C20.975 8.70495 20.7213 8.12531 20.2981 7.7021C19.9443 7.34825 19.481 7.11288 18.75 6.96613V8.1265C18.75 8.17264 18.75 8.21822 18.7501 8.26327C18.7509 9.04932 18.7516 9.67194 18.4904 10.2297C18.2291 10.7874 17.7504 11.1855 17.146 11.6881C17.1114 11.7169 17.0763 11.746 17.0409 11.7756L16.2837 12.4066C15.3973 13.1452 14.6789 13.7439 14.0448 14.1517C13.3843 14.5765 12.7411 14.8449 12 14.8449C11.2589 14.8449 10.6157 14.5765 9.95518 14.1517C9.32112 13.7439 8.60272 13.1452 7.71637 12.4066L6.95912 11.7756C6.92368 11.746 6.88864 11.7169 6.85401 11.6881C6.2496 11.1855 5.77086 10.7874 5.50963 10.2297C5.2484 9.67194 5.24906 9.04932 5.2499 8.26326C5.24995 8.21822 5.25 8.17264 5.25 8.1265L5.25 6.96613ZM8.35676 2.83484C7.75914 2.91519 7.4661 3.05902 7.26256 3.26256C7.05902 3.4661 6.91519 3.75914 6.83484 4.35676C6.75159 4.97595 6.75 5.80029 6.75 7V8.1265C6.75 9.11781 6.76657 9.37686 6.86801 9.59345C6.96946 9.81003 7.15786 9.9886 7.9194 10.6232L8.63903 11.2229C9.57199 12.0004 10.2197 12.5384 10.7666 12.8901C11.2959 13.2306 11.6549 13.3449 12 13.3449C12.3451 13.3449 12.7041 13.2306 13.2334 12.8901C13.7803 12.5384 14.428 12.0004 15.361 11.2229L16.0806 10.6232C16.8421 9.9886 17.0305 9.81003 17.132 9.59345C17.2334 9.37686 17.25 9.11781 17.25 8.1265V7C17.25 5.80029 17.2484 4.97595 17.1652 4.35676C17.0848 3.75914 16.941 3.4661 16.7374 3.26256C16.5339 3.05902 16.2409 2.91519 15.6432 2.83484C15.0241 2.75159 14.1997 2.75 13 2.75H11C9.80029 2.75 8.97595 2.75159 8.35676 2.83484ZM9.25 6C9.25 5.58579 9.58579 5.25 10 5.25H14C14.4142 5.25 14.75 5.58579 14.75 6C14.75 6.41422 14.4142 6.75 14 6.75H10C9.58579 6.75 9.25 6.41422 9.25 6ZM10.25 9C10.25 8.58579 10.5858 8.25 11 8.25H13C13.4142 8.25 13.75 8.58579 13.75 9C13.75 9.41422 13.4142 9.75 13 9.75H11C10.5858 9.75 10.25 9.41422 10.25 9Z" fill="#c80036"></path> </g></svg>
                  <p className='mt-2'>Surat</p>
                </div>
                <div className='flex flex-col items-center'>
                  <svg viewBox="0 0 24 24" height="60px" width="60px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#C80036"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20" stroke="#C80036" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  <p className='mt-2'>Petunjuk</p>
                </div>
                <div className='flex flex-col items-center'>
                  <svg viewBox="-1.87 -1.87 50.41 50.41" height="60px" width="60px" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(-925.977 -31.193)"> <path d="M948.5,41.915a6.765,6.765,0,0,0,1.044-5.569,5.873,5.873,0,0,0-3.885-4.379c-3.856-1.179-7.347,1.989-7.347,6.055a6.6,6.6,0,0,0,1.216,3.857,1.773,1.773,0,0,1-.42,2.555,12,12,0,0,0-5.768,9.48c-.061.677.419,1.446,1.035,1.446h19.3c.616,0,1.1-.769,1.034-1.446a11.843,11.843,0,0,0-5.73-9.37A1.885,1.885,0,0,1,948.5,41.915Z" fill="none" stroke="#C60036" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.7333600000000002"></path> <path d="M939.55,41.913a1.755,1.755,0,0,1-.444,2.521,11.859,11.859,0,0,0-5.825,10.573" fill="none" stroke="#C60036" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.7333600000000002"></path> <rect width="34" height="6" rx="1" transform="translate(926.477 55.36)" stroke-width="3.7333600000000002" stroke="#C60036" stroke-linecap="round" stroke-linejoin="round" fill="none"></rect> <rect width="25" height="16" transform="translate(931.477 61.36)" stroke-width="3.7333600000000002" stroke="#C60036" stroke-linecap="round" stroke-linejoin="round" fill="none"></rect> </g> </g></svg>
                  <p className='mt-2'>Keterangan Terdakwa</p>
                </div>
              </div>
              <div className='flex items-center justify-center mt-12 mb-8'>
                <div className='flex items-center gap-6'>
                  <BsExclamationCircle className='text-primary text-3xl' />
                  <p className='text-black font-semibold'>Seluruh data diambil dari hukumonline.com</p>
                  <BsExclamationCircle className='text-primary text-3xl' />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='relative border-2 border-gray-300 rounded-3xl py-4 px-10 bg-white shadow-md mt-10 md:mt-0 text-xl'
      >
        <button onClick={() => toggleSectionVisibility('saksi')} className='absolute top-8 right-8 text-3xl'>
          {visibleSections.saksi ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        <div className='flex items-start py-4'>
          <div className='flex items-center justify-center'>
            <svg fill="#C80036" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 256" enable-background="new 0 0 236 256"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M117.5,2c-12.47,0-22.63,10.16-22.63,22.63c0,12.46,10.06,22.62,22.63,22.62c12.37,0,22.62-10.16,22.62-22.62 C140.12,12.16,129.97,2,117.5,2z M146,52H89c-15.59,0-28,13.41-28,29v32h20V86c0-1.71,1.29-3,3-3s3,1.29,3,3v27h61V86 c0-1.71,1.29-3,3-3s3,1.29,3,3v27h20V81C174,65.51,161.49,52,146,52z M2,118v27h23v109h185V145h24v-27H2z M120.89,231.21 c-25.39,1.47-47.26-17.76-48.8-43.08c-1.62-25.4,17.68-47.27,43.08-48.74c25.4-1.69,47.19,17.62,48.73,43.01 C165.59,207.8,146.29,229.67,120.89,231.21z M153.56,192.83c0,0-5.29-5.07-6.02-9.91c-0.74-4.92,0.81-10.21-0.15-14.32 c-0.95-3.59-6.24-5.57-8.15-8.73c-1.83-3.08-6.16-6.61-6.31-7.41c-0.14-1.1,2.35-1.54,2.79-1.32c1.1-0.37,2.28-0.44,3.08-0.59 c-5.28-3.23-11.23-5.14-17.54-5.73l0.15,1.99l0.95,2.2c0,0-2.2,2.93-2.93,3.08c-0.59,0-1.98-0.59-1.98-0.59l-2.35-2.2l-2.35-2.49 l-3.16-1.18c-3.52,0.88-6.97,2.06-10.13,3.67c0.08,0.37,0.22,0.96,0.22,1.54c1.69-0.73,3.53-1.32,5.07-2.13 c0.58-0.22,2.93,1.47,3.67,1.91c-0.81,1.03-4.33,3.75-4.48,5.14c-0.07,0.59,1.54,1.32,1.54,2.13c0,1.17,0.22,1.83,0.22,3.15 c0.66-0.58,3.97-4.25,4.55-4.25c2.86-1.1,8,3.52,8.59,5.14c0.59,1.54-4.48,5.65-6.83,8.14c-1.9,1.84-5.57,3.23-4.25,5.73 c0.44,0.8,2.57,4.33,1.17,5.8c-1.32,1.17-3.52-1.77-4.11-2.5c-2.05-2.13-5.94-0.95-8.73-0.95c0.22,3.89-0.81,9.17,2.93,11.67 c3.67,2.34,5.07,3.59,9.18,5.13c3.08,1.18,11.15-2.57,13.87-0.95c3.67,2.35,6.83,4.48,11.08,6.02c1.91,0.59,7.64,4.11,6.24,6.6 c-1.17,1.84-2.05,3.53-2.79,5.51c-0.73,1.83-2.57,4.33-4.11,5.72c-1.76,1.54-3.59,4.26-4.55,7.05c7.85-1.91,14.83-6.24,20.33-12.48 c4.99-5.65,8.15-12.18,9.54-19.37C155.9,193.56,153.56,192.83,153.56,192.83z M116.93,216.83c-1.98-1.4-3.74-2.94-5.65-4.48 c-0.59-0.44-2.42-4.18-2.2-4.92c1.1-2.05,1.1-3.52,1.54-5.72c0.37-2.87-1.03-3.53-3.38-4.85c-3.67-1.98-6.97-4.84-10.35-7.04 c-1.76-1.18-4.11-2.13-4.84-4.11c-0.59-2.06-1.1-4.7-2.5-6.32c-3.52-4.33-3.08-7.63-3.08-13.13c0-1.4-1.1-2.94-1.32-4.92 c-5.87,7.63-8.22,16.73-7.49,26.42c0.74,10.72,5.51,20.7,13.66,27.89c6.9,6.02,15.48,9.54,24.44,10.13 C116.93,222.33,120.01,219.03,116.93,216.83z"></path> </g></svg>
          </div>
          <div className='ml-4 leading-relaxed text-justify'>
            <h1 className='font-semibold mb-4 text-2xl'>Saksi</h1>
            <AnimatePresence>
              {visibleSections.saksi && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>Terkait saksi, Mahkamah Konstitusi melalui Putusan MK 65/2010 memperluas makna definisi saksi dalam KUHAP, sehingga yang dimaksud dengan saksi termasuk pula orang yang dapat memberikan keterangan dalam rangka penyidikan, penuntutan dan peradilan suatu tindak pidana yang tidak selalu ia dengar sendiri, ia lihat sendiri dan ia alami sendiri (hal. 92).</p>
                  <br />
                  <p>Sehingga, dalam hal terjadi pelecehan seksual, bukti-bukti tersebut di atas dapat digunakan sebagai alat bukti. Untuk kasus terkait percabulan atau perkosaan, biasanya menggunakan salah satu alat buktinya berupa Visum et Repertum. Menurut Kamus Hukum oleh J.C.T. Simorangkir, Rudy T. Erwin dan J.T. Prasetyo, Visum et Repertum adalah surat keterangan/laporan dari seorang ahli mengenai hasil pemeriksaannya terhadap sesuatu, misalnya terhadap mayat dan lain-lain dan ini dipergunakan untuk pembuktian di pengadilan.</p>
                  <br />
                  <p>Meninjau pada definisi di atas, maka Visum et Repertum dapat digunakan sebagai alat bukti surat, sebagaimana diatur dalam Pasal 187 huruf c KUHAP. Penggunaan Visum et Repertum sebagai alat bukti, diatur juga dalam Pasal 133 ayat (1) KUHAP:</p>
                  <br />
                  <p>Dalam hal penyidik untuk kepentingan peradilan menangani seorang korban baik luka, keracunan ataupun mati yang diduga karena peristiwa yang merupakan tindak pidana, ia berwenang mengajukan permintaan keterangan ahli kepada ahli kedokteran kehakiman atau dokter dan atau ahli lainnya.</p>
                  <br />
                  <p>Apabila visum memang tidak menunjukkan adanya tanda kekerasan, maka sebaiknya dicari alat bukti lain yang bisa membuktikan tindak pidana tersebut. Pada akhirnya, hakim yang akan memutus apakah terdakwa bersalah atau tidak berdasarkan pembuktian di pengadilan.</p>
                  <div className='flex items-center justify-center mt-8 mb-8'>
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
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='relative border-2 border-gray-300 rounded-3xl py-4 px-10 bg-white shadow-md mt-10 md:mt-0 text-xl'
      >
        <button onClick={() => toggleSectionVisibility('alatBukti')} className='absolute top-8 right-8 text-3xl'>
          {visibleSections.alatBukti ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        <div className='flex items-start py-4'>
          <div className='flex items-center justify-center mt-2'>
            <svg fill="#C80036" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="#C80036" stroke-width="7.68"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(1 1)"> <g> <g> <path d="M395.8,101.4h-17.067V84.333c0-5.12-3.413-8.533-8.533-8.533h-17.067c-1.707,0-3.413,0.853-5.12,1.707 c-11.947,9.387-29.013,9.387-40.96,0c-1.707-0.853-3.413-1.707-5.12-1.707h-25.6c-5.12,0-8.533,3.413-8.533,8.533v29.245 c-0.55,1.169-0.853,2.525-0.853,4.035c0,5.973-2.56,10.24-7.68,13.653c-5.12,2.56-10.24,3.413-15.36,0.853l-66.56-42.667 c0-0.853-0.853-0.853-0.853-0.853c-17.067-7.68-34.987-5.973-49.493,5.12c-7.68,6.827-12.8,17.067-12.8,28.16v79.36 c0,23.893,11.093,32.427,17.067,34.987c5.973,2.56,18.773,5.12,36.693-10.24c0.853-0.853,1.707-0.853,2.56-0.853l29.013,10.88 V280.6c0,28.16,5.973,59.733,52.053,59.733H267.8V383c0,5.12,3.413,8.533,8.533,8.533V434.2c0,5.12,3.413,8.533,8.533,8.533h25.6 v25.6c0,5.12,3.413,8.533,8.533,8.533h51.2c5.12,0,8.533-3.413,8.533-8.533v-17.067H395.8c5.12,0,8.533-3.413,8.533-8.533v-51.2 c0-5.12-3.413-8.533-8.533-8.533h-17.067v-76.8V186.733v-17.067H395.8c5.12,0,8.533-3.413,8.533-8.533v-51.2 C404.333,104.813,400.92,101.4,395.8,101.4z M361.667,297.667H344.6v-102.4h17.067V297.667z M267.8,208.92l-98.987-38.4 c-2.56-0.853-4.267-4.267-4.267-7.68v-5.973c0-5.12,1.707-8.533,3.413-10.24c2.56-2.56,5.973-3.413,8.533-3.413 c0.853,0,1.707,0,1.707,0.853l89.6,56.32V208.92z M173.933,208.067c-0.853,0-1.707,0-2.56,0c-5.12,0-9.387,1.707-13.653,5.12 c0,0.853-0.853,0.853-0.853,0.853c-7.68,6.827-14.507,9.387-18.773,7.68c-4.267-1.707-6.827-9.387-6.827-19.627v-79.36 c0-5.973,2.56-11.093,6.827-14.507c11.093-9.387,23.04-6.827,31.573-3.413l66.56,42.667c0,0.853,0.853,0.853,0.853,0.853 c9.387,5.12,21.333,4.267,30.72-0.853v32.078l-81.067-50.851c0-0.853-0.853-0.853-0.853-0.853 c-8.533-4.267-20.48-1.707-29.013,5.973c-5.12,5.12-8.533,13.653-8.533,23.04v5.973c0,11.093,5.973,20.48,15.36,23.893 L267.8,227.4v15.653l-92.16-34.133C175.64,208.067,174.787,208.067,173.933,208.067z M251.587,323.267 c-26.453,0-34.987-11.093-34.987-42.667v-38.187l35.636,13.364c-7.04,5.38-12.511,13.854-17.716,29.943 c-1.707,5.12,0.853,9.387,5.12,11.093c0.853,0.853,1.707,0.853,2.56,0.853c3.413,0,6.827-2.56,7.68-7.68 c5.822-16.171,9.197-21.064,17.92-24.715v57.995H251.587z M293.4,425.667v-34.133c9.387,0,17.067,7.68,17.067,17.067v17.067 H293.4z M361.667,459.8h-34.133v-25.6v-25.6c0-18.773-15.36-34.133-34.133-34.133h-8.533V331.8V255v-34.133v-26.453V92.867 h14.507c17.067,11.093,39.253,11.093,56.32,0h5.973v17.067v51.2V178.2h-25.6c-5.12,0-8.533,3.413-8.533,8.533V306.2 c0,5.12,3.413,8.533,8.533,8.533h25.6v76.8v51.2V459.8z M387.267,400.067V434.2h-8.533v-34.133H387.267z M387.267,152.6h-8.533 v-34.133h8.533V152.6z"></path> <path d="M336.067,161.133c5.12,0,8.533-3.413,8.533-8.533V127c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533v25.6 C327.533,157.72,330.947,161.133,336.067,161.133z"></path> <path d="M447-1H63c-5.12,0-8.533,3.413-8.533,8.533V50.2V447c0,34.987,29.013,64,64,64h273.067c34.987,0,64-29.013,64-64V50.2 V7.533C455.533,2.413,452.12-1,447-1z M71.533,16.067h366.08v25.6H71.533V16.067z M390.68,493.933H118.467 c-25.6,0-46.933-21.333-46.933-46.933V58.733h366.08V447C437.613,472.6,417.133,493.933,390.68,493.933z"></path> </g> </g> </g> </g></svg>
          </div>
          <div className='ml-4 leading-relaxed text-justify'>
            <h1 className='font-semibold mb-4 text-2xl leading-relaxed'>Alat Bukti</h1>
            <AnimatePresence>
              {visibleSections.alatBukti && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>Adapun alat bukti dalam UU TPKS, diatur dalam Pasal 24 yang berbunyi sebagai berikut:</p>
                  <ol className='list-decimal ml-6 leading-relaxed'>
                    <li>
                      Alat bukti yang sah dalam pembuktian Tindak Pidana Kekerasan Seksual terdiri atas:
                      <ul className='list-disc ml-6 leading-relaxed'>
                        <li>alat bukti sebagaimana dimaksud dalam hukum acara pidana;</li>
                        <li>alat bukti lain berupa informasi elektronik dan/atau dokumen elektronik sebagaimana diatur dalam ketentuan peraturan perundang-undangan; dan barang bukti yang digunakan untuk melakukan tindak pidana atau sebagai hasil Tindak Pidana Kekerasan Seksual dan/atau benda atau barang yang berhubungan dengan tindak pidana tersebut.</li>
                      </ul>
                    </li>
                    <li>
                      Termasuk alat bukti keterangan Saksi yaitu hasil pemeriksaan terhadap Saksi dan/atau Korban pada tahap penyidikan melalui perekaman elektronik.
                    </li>
                    <li>
                      Termasuk alat bukti surat yaitu:
                      <ul className='list-[lower-alpha] ml-6 leading-relaxed'>
                        <li>surat keterangan psikolog klinis dan/atau psikiater/dokter spesialis kedokteran jiwa;</li>
                        <li>rekam medis;</li>
                        <li>hasil pemeriksaan forensik; dan/atau</li>
                        <li>hasil pemeriksaan rekening bank.</li>
                      </ul>
                    </li>
                  </ol>
                  <div className='flex items-center justify-center mt-8 mb-8'>
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='relative border-2 border-gray-300 rounded-3xl py-20 bg-primary bg-opacity-20 shadow-md mt-10 md:mt-0 overflow-hidden'
      >
        <Image src='/cari-tau/timbangan.png' width={300} height={300} alt='main-poster' className='absolute -left-20 top-0' />
        <Image src='/cari-tau/palu.png' width={150} height={150} alt='main-poster' className='absolute -right-5 bottom-0' />
        <h1 className='text-center text-3xl font-semibold leading-normal'>Membutuhkan bantuan lebih?<br />Bicara dengan ahli yuk!</h1>
        <Link href='/bantuan'>
          <div className='text-3xl flex items-center justify-center gap-2 font-semibold text-primary mt-8 text-center'>
            <p className='hover:underline'>Hubungi kami</p>
            <FaArrowRightLong />
          </div>
        </Link>
      </motion.div>
      <Footer />
    </motion.div>
  );
};
