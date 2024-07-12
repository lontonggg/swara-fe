'use client';

import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import Link from 'next/link';

interface CommentProps {
  comment: {
    id: string;
    UserName: string;
    Comment: string;
    UserRole: string;
    UserEmail: string;
  };
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className='flex items-center w-full bg-gray-100 rounded-2xl px-4 py-2'>
      <div className='flex gap-4 items-center'>
        <FaRegCircleUser className='text-primary md:text-4xl' />
        <div className='text-xs sm:text-s md:text-base'>
          <h2 className='font-medium flex items-center'>
            {comment.UserRole === 'law_expert' ? (
              <Link href={`https://mail.google.com/mail/?view=cm&fs=1&to=${comment.UserEmail}`}>
                {comment.UserName}
              </Link>
            ) : (
              comment.UserName
            )}
            {comment.UserRole === 'law_expert' && (
              <span className='ml-2 text-xs font-medium text-white bg-primary rounded-full px-2 py-[0px]'>Ahli Hukum</span>
            )}
          </h2>
          <p>{comment.Comment}</p>
        </div>
      </div>
    </div>
  );
};
