'use client';

import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';

interface CommentProps {
  comment: {
    id: string;
    UserName: string;
    Comment: string;
  };
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className='flex items-center w-full bg-gray-100 rounded-2xl px-4 py-2'>
      <div className='flex gap-4 items-center'>
        <FaRegCircleUser className='text-primary md:text-4xl' />
        <div className='text-xs sm:text-s md:text-base'>
          <h2 className='font-medium'>{comment.UserName}</h2>
          <p>{comment.Comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
