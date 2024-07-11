'use client';

import React, { useEffect, useState } from 'react';
import { MainPoster } from '@/components/angkat-isu/MainPoster';
import { SampaikanIsu } from '@/components/angkat-isu/SampaikanIsu';
import { Navbar } from '@/components/common/Navbar';
import { Issue } from '@/components/angkat-isu/Issue';
import { SideBar } from '@/components/angkat-isu/SideBar';

const dummyIssues = [
  {
    UserId: '1',
    PostId: '1',
    UserName: 'Tes 1',
    Title: 'Tes 1',
    Text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    Votes: 5,
    LikedByUser: false,
    Comments: { id: '1', PostId: '1', CommentId: null, UserName: 'Komentator 1', Comment: 'Tes' }
  },
  {
    UserId: '2',
    PostId: '2',
    UserName: 'Tes 2',
    Title: 'Tes 2',
    Text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    Votes: 10,
    LikedByUser: true,
    Comments: { id: '2', PostId: '2', CommentId: null, UserName: 'Komentator 2', Comment: 'Tes' }
  },
];

export default function Page() {
  const [issues, setIssues] = useState<any[]>([]);

  useEffect(() => {
    setIssues(dummyIssues);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='flex flex-col gap-10 mt-20 py-20 px-6 md:px-20 lg:px-24 xl:px-44'>
        <div>
          <MainPoster />
        </div>
        <div>
          <SampaikanIsu />
        </div>
        <>
          <div>
            <div className='flex justify-between items-center'>
              <h1 className='text-2xl md:text-4xl font-bold text-primary'>Isu Terkini</h1>
              <select className='md:text-lg border-2 border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'>
                <option disabled hidden>Sort by</option>
                <option className='p-2'>Top Isu</option>
                <option className='p-2'>Terbaru</option>
                <option className='p-2'>Isu Anda</option>
              </select>
            </div>
          </div>
          <div>
            <div className='xl:grid grid-cols-4 gap-4 lg:overflow-hidden xl:h-[700px]'>
              <div className='col-span-3 flex flex-col gap-10 lg:overflow-y-auto lg:pr-8'>
                {issues.map((issue, index) => (
                  <Issue key={index} issue={issue} />
                ))}
              </div>
              <div className='hidden col-span-1 sticky top-10 xl:block'>
                <SideBar />
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
