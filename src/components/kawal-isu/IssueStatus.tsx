import React from 'react';
import ProgressBar from './ProgressBar';
import { FaBuilding, FaFileAlt, FaMoneyBillWave, FaPhone, FaBalanceScale, FaGavel } from 'react-icons/fa';

export const IssueStatus: React.FC = () => {
  const steps = [
    { label: 'Pendaftaran', icon: <FaBuilding /> },
    { label: 'Pemeriksaan Berkas', icon: <FaFileAlt /> },
    { label: 'Bayar Panjar Perkara', icon: <FaMoneyBillWave /> },
    { label: 'Panggilan Sidang', icon: <FaPhone /> },
    { label: 'Proses Persidangan', icon: <FaBalanceScale /> },
    { label: 'Putusan', icon: <FaGavel /> }
  ];
  const currentStep = 4;

  return (
    <div className="flex flex-col items-center border-2 border-gray-300 rounded-3xl  p-20 bg-white shadow-md">
      <h2 className="text-3xl font-bold text-primary mb-10">Kawal Isu</h2>
      <ProgressBar steps={steps} currentStep={currentStep} />
    </div>
  );
};
