'use client'

import { Navbar } from '@/components/common/Navbar';
import React from 'react';
import { IssueStatus } from '@/components/kawal-isu/IssueStatus';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

export default function Page({ params } : any) {
  return (
    <div className="backgroundContainer h-screen">
      <Navbar />
      <div className="flex flex-col gap-10 py-20 px-6 md:px-20 lg:px-24 xl:px-44">
        <Link href="/angkat-isu">
          <div className="flex gap-2 items-center text-primary text-xl font-semibold pt-24">
            <IoIosArrowBack className="text-2xl" />
            <h1 className="hover:underline">Kembali</h1>
          </div>
        </Link>
        {params.id && <IssueStatus issueId={params.id} />}
      </div>
    </div>
  );
}
