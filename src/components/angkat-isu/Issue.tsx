'use client';

import React, { useState, useRef } from 'react';
import { FaRegCircleUser, FaRegCommentDots } from 'react-icons/fa6';
import { HiOutlinePresentationChartLine, HiOutlineSpeakerphone } from 'react-icons/hi';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { PiPaperPlaneRight } from 'react-icons/pi';
import { Comment } from './Comment';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import APIService from '../../services/APIService'; 
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

interface Comment {
    id: string;
    PostId: string;
    CommentId: string | null;
    UserName: string;
    Comment: string;
    UserRole: string;
    UserEmail: string;
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
        Comments: Comment[];
        Images: { image: string }[];
    };
}

export const Issue: React.FC<IssueProps> = ({ issue }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [comment, setComment] = useState('');
    const [votes, setVotes] = useState(issue.Votes);
    const [likedByUser, setLikedByUser] = useState(issue.LikedByUser);
    const [comments, setComments] = useState<Comment[]>(issue.Comments || []);
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const commentInputRef = useRef<HTMLInputElement>(null);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const handleAutofill = (text: string) => {
        setComment(text);
        commentInputRef.current?.focus();
    };

    const truncatedText = issue.Text.length > 200 ? issue.Text.substring(0, 200) + '...' : issue.Text;

    const focusCommentInput = () => {
        commentInputRef.current?.focus();
    };

    const handleLike = async () => {
        const token = Cookies.get('token') || '';
        if (!token) {
            setShowLoginPopup(true);
            return;
        }

        if (likedByUser) {
            try {
                setVotes(votes - 1);
                setLikedByUser(false);
                await APIService.dislikeIssue(token, issue.PostId);
            } catch (error) {
                console.error('Gagal mengangkat isu:', error);
            }
        } else {
            try {
                setVotes(votes + 1);
                setLikedByUser(true);
                await APIService.likeIssue(token, issue.PostId);
            } catch (error) {
                console.error('Gagal mengangkat isu:', error);
            }
        }
    };

    const handlePostComment = async () => {
        const token = Cookies.get('token') || '';
        if (!token) {
            setShowLoginPopup(true);
            return;
        }

        const postCommentPromise = APIService.postComment(token, issue.PostId, comment);
        
        toast.promise(
            postCommentPromise,
            {
                loading: 'Menambahkan komentar...',
                success: 'Komentar berhasil ditambahkan!',
                error: 'Gagal menambahkan komentar!',
            },
            {
                style: {
                    zIndex: 9999,
                    fontSize: '18px',
                    padding: '14px',
                },
            }
        );

        try {
            const response = await postCommentPromise;
            setComments((prevComments) => [...prevComments, response]);
            setComment('');
        } catch (error) {
            console.error('Gagal menambahkan komentar!', error);
        }
    };

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
            <div className='my-8'>
                {issue.Images.length > 0 ? (
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                        {issue.Images.map((img, idx) => (
                            <div key={idx} className='relative flex flex-col items-center justify-center w-full h-full bg-black'>
                                <Image
                                    src={img.image}
                                    alt={`image-${idx}`}
                                    layout='responsive'
                                    height={400}
                                    width={400}
                                    objectFit='cover'
                                />
                            </div>
                        ))}
                    </Carousel>
                ) : (
                   <h1></h1>
                )}
            </div>
            <div className='text-sm sm:text-base'>
                {votes > 0 ? (
                    <p>Sudah <span className='text-primary font-bold text-xl'>{votes}</span> orang Naikkan Isu!</p>
                ) : (
                    <p className='font-medium'>Belum ada yang <span className='text-primary'>Naikan Isu!</span></p>
                )}
            </div>
            <div className='flex items-center my-4'>
                <hr className='flex-grow border-t border-gray-400' />
            </div>
            <div className='grid gap-2 grid-cols-2 md:flex md:gap-0 justify-between font-semibold'>
                <button
                    className='flex items-center gap-2 md:gap-3 text-sm md:text-base text-gray-500 hover:text-primary transition-colors duration-300'
                    onClick={focusCommentInput}
                >
                    <FaRegCommentDots className='text-2xl md:text-3xl' />
                    Komentar
                </button>
                <div 
                    className={`flex items-center gap-2 md:gap-3 text-sm md:text-base cursor-pointer ${likedByUser ? 'text-primary hover:text-primary/80 transition-colors duration-300' : 'text-gray-500 hover:text-primary transition-colors duration-300'}`}
                    onClick={handleLike}
                >
                    <MdKeyboardDoubleArrowUp className='text-2xl md:text-3xl' />
                    Naikkan Isu
                </div>
                <Link href={'/bantuan'}>
                    <div className='flex items-center gap-2 md:gap-3 text-sm md:text-base text-gray-500 hover:text-primary transition-colors duration-300'>
                        <HiOutlineSpeakerphone className='text-2xl md:text-3xl' />
                        Laporkan
                    </div>
                </Link>
                <Link href={'/kawal-isu/' + issue.PostId}>
                    <div className='flex items-center gap-2 md:gap-3 text-sm md:text-base text-gray-500 hover:text-primary transition-colors duration-300'>
                        <HiOutlinePresentationChartLine className='text-2xl md:text-3xl ' />
                        Kawal Isu
                    </div>
                </Link>
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
                    ref={commentInputRef}
                    className='w-full border-2 border-gray-300 p-2 rounded-2xl pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base'
                    placeholder='Tambahkan komentar anda...'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button 
                    className='absolute right-3 top-1/2 transform -translate-y-1/2'
                    onClick={handlePostComment}
                >
                    <PiPaperPlaneRight className='text-2xl' />
                </button>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                {comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div>
            {showLoginPopup && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='fixed inset-0 bg-gray-900 bg-opacity-50 z-40'
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className='fixed inset-0 flex items-center justify-center z-50'
                    >
                        <div className='bg-white rounded-3xl p-8 w-11/12 md:w-2/3 lg:w-1/3 shadow-lg relative'>
                            <button
                                className='absolute top-4 right-4 text-primary text-2xl'
                                onClick={() => setShowLoginPopup(false)}
                            >
                                &times;
                            </button>
                            <div className='text-center'>
                                <h2 className='text-xl font-bold mb-4'>Masuk terlebih dahulu!</h2>
                                <p className='mb-4'>Anda harus masuk terlebih dahulu untuk mengakses fitur ini.</p>
                                <Link href='/login'>
                                    <button className='bg-primary text-white px-6 py-2 rounded-xl font-semibold transition-opacity duration-300 hover:opacity-75'>
                                        Masuk
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </div>
    );
};
