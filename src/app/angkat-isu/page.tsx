'use client';

import React, { useEffect, useState } from 'react';
import { MainPoster } from '@/components/angkat-isu/MainPoster';
import { SampaikanIsu } from '@/components/angkat-isu/SampaikanIsu';
import { Navbar } from '@/components/common/Navbar';
import { Issue } from '@/components/angkat-isu/Issue';
import { SideBar } from '@/components/angkat-isu/SideBar';
import Footer from '@/components/common/Footer';
import APIService from '../../services/APIService';
import { ClipLoader } from 'react-spinners';
import Cookies from 'js-cookie';

export default function Page() {
  const [issues, setIssues] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const token = Cookies.get('token') || '';
        const response = await APIService.getIssues(token);
        setIssues(response);
      } catch (error) {
        console.error('Failed to fetch issues:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  console.log(issues);

  return (
    <div className='backgroundContainer'>
      <Navbar />
      <div className='flex flex-col gap-10 mt-20 py-20 px-6 md:px-20 lg:px-24 xl:px-44'>
        <div>
          <MainPoster />
        </div>
        <div>
          <SampaikanIsu />
        </div>
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
        {loading ? (
          <div className='flex justify-center items-center h-full'>
            <ClipLoader size={50} color={'#C80036'} loading={loading} style={{ borderWidth: '5px' }} />
          </div>
        ) : (
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
        )}
      </div>
      <div className='px-6 md:px-20 lg:px-24 xl:px-44 mb-16'>
        <Footer />
      </div>
    </div>
  );
}
