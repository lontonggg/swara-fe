'use client'

import { Navbar } from '@/components/common/Navbar';
import React from 'react';
import { IssueStatus } from '@/components/kawal-isu/IssueStatus';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Page({ params }: any) {
  return (
    <motion.div
      className="backgroundContainer h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Navbar />
      <motion.div
        className="flex flex-col gap-10 py-20 px-6 md:px-20 lg:px-24 xl:px-44"
        variants={itemVariants}
      >
        <Link href="/angkat-isu">
          <div className="flex gap-2 items-center text-primary text-xl font-semibold pt-24">
            <IoIosArrowBack className="text-2xl" />
            <h1 className="hover:underline">Kembali</h1>
          </div>
        </Link>
        {params.id && <IssueStatus issueId={params.id} />}
      </motion.div>
    </motion.div>
  );
}
