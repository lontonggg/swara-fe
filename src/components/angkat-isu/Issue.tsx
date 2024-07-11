'use client';

import React, { useState } from 'react';
import { FaRegCircleUser, FaRegCommentDots } from 'react-icons/fa6';
import { HiOutlinePresentationChartLine, HiOutlineSpeakerphone } from 'react-icons/hi';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { PiPaperPlaneRight } from 'react-icons/pi';
import Comment from './Comment';

interface Comment {
  id: string;
  PostId: string;
  CommentId: string | null;
  UserName: string;
  Comment: string;
}

interface IssueProps {
  issue: {
    UserId: string;
    PostId: string;
    UserName: string;
    Title: string;
    Text: string;
    Votes: number;
    LikedByUser: boolean;
    Comments: Comment;
  };
}

export const Issue: React.FC<IssueProps> = ({ issue }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [comment, setComment] = useState('');

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAutofill = (text: string) => {
    setComment(text);
  };

  const truncatedText = issue.Text.length > 200 ? issue.Text.substring(0, 200) + '...' : issue.Text;

  console.log(issue.Comments)

  return (
    <div className='flex flex-col border-2 border-gray-300 rounded-3xl p-4 md:p-8 bg-white shadow-md'>
      <div className='flex gap-4 items-center mb-4'>
        <FaRegCircleUser className='md:text-4xl text-primary' />
        <h2 className='md:text-2xl font-bold'>{issue.UserName}</h2>
      </div>
      <h1 className='text-xl md:text-2xl font-bold mb-4'>{issue.Title}</h1>
      <p className='text-sm md:text-base text-justify'>
        {isExpanded ? issue.Text : truncatedText}
        {issue.Text.length > 100 && (
          <button onClick={toggleReadMore} className='text-primary ml-2'>
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </p>
      <div className='bg-gray-200 h-[200px] md:h-[400px] my-8'>
        {/* Image Here */}
      </div>
      <div className='text-sm sm:text-base'>
        { issue.Votes > 0 ? (
            <p>Sudah <span className='text-primary font-bold text-xl'>{issue.Votes}</span> orang Naikkan Isu!</p> 
          ) : (
            <p className='font-medium'>Belum ada yang <span className='text-primary'>Naikan Isu!</span></p>
          ) 
        }
      </div>
      
      
      <div className='flex items-center my-4'>
        <hr className='flex-grow border-t border-gray-400' />
      </div>
      <div className='grid gap-2 grid-cols-2 md:flex md:gap-0 justify-between font-semibold'>
        <div className='flex items-center gap-2 md:gap-3 text-sm md:text-base hover:text-primary/80 transition-colors duration-300'>
          <FaRegCommentDots className='text-2xl md:text-3xl text-primary' />
          Komentar
        </div>
        <div className='flex items-center gap-2 md:gap-3 text-sm md:text-base hover:text-primary/80 transition-colors duration-300'>
          <MdKeyboardDoubleArrowUp className='text-2xl md:text-3xl text-primary' />
          Naikkan Isu
        </div>
        <div className='flex items-center gap-2 md:gap-3 text-sm md:text-base hover:text-primary/80 transition-colors duration-300'>
          <HiOutlineSpeakerphone className='text-2xl md:text-3xl text-primary' />
          Laporkan
        </div>
      
        <div className='flex items-center gap-2 md:gap-3 text-sm md:text-base hover:text-primary/80 transition-colors duration-300'>
            <HiOutlinePresentationChartLine className='text-2xl md:text-3xl text-primary ' />
            Kawal Isu
        </div>
      </div>
      <div className='flex sm:grid grid-cols-3 gap-2 justify-between font-medium mt-4 text-gray-500 text-xs sm:text-base md:text-base'>
        <button onClick={() => handleAutofill('Bantu viralkan!')} className='border-2 border-gray-300 rounded-xl md:py-2 py-2 px-2 md:px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'>
          Bantu viralkan!
        </button>
        <button onClick={() => handleAutofill('Bagaimana kelanjutannya?')} className='border-2 border-gray-300 rounded-xl py-1 px-2 md:py-2 md:px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'>
          Bagaimana kelanjutannya?
        </button>
        <button onClick={() => handleAutofill('Berharap ada titik terang')} className='border-2 border-gray-300 rounded-xl py-1 px-2 md:py-2 md:px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'>
          Berharap ada titik terang
        </button>
      </div>
      <div className='mt-6 relative'>
        <input 
          className='w-full border-2 border-gray-300 p-2 rounded-2xl pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base' 
          placeholder='Tambahkan komentar anda...'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className='absolute right-3 top-1/2 transform -translate-y-1/2'>
          <PiPaperPlaneRight className='text-2xl' />
        </button>
      </div>
      {issue.Comments? (
        <div className='mt-4'>
          <Comment comment={issue.Comments} />
        </div>
      ) : null}
    </div>
  );
};