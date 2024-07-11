import React from 'react';
import { FaBalanceScale } from 'react-icons/fa';
import { HiOutlineFire } from 'react-icons/hi';

const dummyIssues = [
  {
    title: 'lorem ipsum dolor sit amet',
    author: 'By User',
  },
  {
    title: 'lorem ipsum dolor sit amet',
    author: 'By User',
  },
  {
    title: 'lorem ipsum dolor sit amet',
    author: 'By User',
  },
];

export const SideBar = () => {
  return (
    <div className='flex flex-col border-2 border-gray-300 rounded-3xl p-8 bg-white shadow-md'>
      <div className='flex items-center justify-center text-xl font-semibold text-center pb-4'>
        <HiOutlineFire className='text-primary font-extrabold text-2xl mr-2' />
        <h1>Isu Populer</h1>
      </div>
      {dummyIssues.map((issue, index) => (
        <div className='flex items-start py-4' key={index}>
          <div className='flex items-center justify-center w-10 h-10'>
            <FaBalanceScale className='text-2xl text-primary' />
          </div>
          <div className='ml-4'>
            <p className='font-medium'>{issue.title}</p>
            <p className='text-gray-500 text-xs pt-1'>{issue.author}</p>
          </div>
        </div>
      ))}
      <br />
      <button className='font-semibold bg-primary text-sm py-2 px-4 xl:px-8 rounded-2xl text-white transition-opacity duration-300 hover:opacity-75'>
        Lihat Lainnya
      </button>
    </div>
  );
};
