'use client'

import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import { FaBuilding, FaFileAlt, FaMoneyBillWave, FaPhone, FaBalanceScale, FaGavel } from 'react-icons/fa';
import APIService from '../../services/APIService';
import Cookies from 'js-cookie';

interface IssueResponse {
  UserId: string;
  PostId: string;
  UserName: string;
  Title: string;
  Text: string;
  Images: { image: string }[];
  Votes: number;
  LikedByUser: boolean;
  Comments: Comment | null;
  IsOwner: boolean;
  Status: string;
}

const steps = [
  { label: 'Pendaftaran', icon: <FaBuilding /> },
  { label: 'Pemeriksaan Berkas', icon: <FaFileAlt /> },
  { label: 'Bayar Panjar Perkara', icon: <FaMoneyBillWave /> },
  { label: 'Panggilan Sidang', icon: <FaPhone /> },
  { label: 'Proses Persidangan', icon: <FaBalanceScale /> },
  { label: 'Putusan', icon: <FaGavel /> }
];

const statusMap: { [key: string]: number } = {
  'pendaftaran': 1,
  'pemeriksaan_berkas': 2,
  'bayar_penjar_perkara': 3,
  'panggilan_sidang': 4,
  'proses_persidangan': 5,
  'putusan': 6
};

interface IssueStatusProps {
  issueId: string;
}

export const IssueStatus: React.FC<IssueStatusProps> = ({ issueId }) => {
  const [issue, setIssue] = useState<IssueResponse | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    
    const fetchIssue = async () => {
      const token = Cookies.get('token') || '';
      try {
        const fetchedIssue = await APIService.getIssueById(token, issueId);
        setIssue(fetchedIssue);
      } catch (error) {
        setError('Failed to fetch issue');
      }
    };

    fetchIssue();
  }, [issueId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!issue) {
    return <div>Loading...</div>;
  }

  const currentStep = statusMap[issue.Status] ?? 0;

  return (
    <div className="flex flex-col items-center border-2 border-gray-300 rounded-3xl p-20 bg-white shadow-md">
      <h2 className="text-4xl font-bold text-primary mb-10">Kawal Isu</h2>
      <h1 className="text-4xl font-semibold text-black mb-20">{`"${issue.Title}"`}</h1>
      <ProgressBar steps={steps} currentStep={currentStep} />
    </div>
  );
};
