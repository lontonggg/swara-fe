import React, { useState, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaRegCircleUser } from 'react-icons/fa6';
import { MdInsertEmoticon } from 'react-icons/md';
import { IoImageOutline } from 'react-icons/io5';
import EmojiPicker from 'emoji-picker-react';
import Image from 'next/image';
import Link from 'next/link';

export const SampaikanIsu: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const maxCharacters = 3000;
  const maxImages = 4;
  const maxTitleCharacters = 80;

  const handleInputFocus = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleEmojiClick = (emojiData: any) => {
    if (text.length + emojiData.emoji.length <= maxCharacters) {
      setText((prevText) => prevText + emojiData.emoji);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
      setShowEmojiPicker(false);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxCharacters) {
      setText(e.target.value);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isPopupVisible && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isPopupVisible]);

  const getCounterColor = (length: number, maxLength: number) => {
    if (length < maxLength * 0.6) {
      return 'text-black';
    } else if (length < maxLength * 0.9) {
      return 'text-yellow-500';
    } else {
      return 'text-red-500';
    }
  };

  const onDrop = (acceptedFiles: File[]) => {
    if (images.length + acceptedFiles.length <= maxImages) {
      setImages((prevImages) => [...prevImages, ...acceptedFiles]);
      setErrorMessage('');
    } else {
      setErrorMessage(`You can only upload up to ${maxImages} images.`);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: { 'image/*': [] } });

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className='flex items-center justify-between gap-10 border-2 border-gray-300 rounded-3xl py-4 lg:py-8 px-4 lg:px-16 bg-white shadow-md'>
        <div className='flex items-center'>
          <h1 className='text-xl lg:text-3xl font-semibold'>Hai, <span className='text-primary'>User</span>!</h1>
        </div>
        <div className='flex-1'>
          <input 
            type='text' 
            placeholder='Sampaikan isu terkini...' 
            className='w-full p-2 border-2 border-gray-300 rounded-xl md:px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm lg:text-xl' 
            onFocus={handleInputFocus}
            ref={inputRef}
          />
        </div>
      </div>

      {isPopupVisible && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-50 z-40 flex items-center justify-center'>
          <div className='bg-white rounded-3xl p-6 sm:p-8 w-11/12 md:w-2/3 lg:w-1/2 shadow-lg relative h-2/3 sm:h-1/1'>
            <button
              className='absolute top-4 right-4 text-primary text-2xl'
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <h2 className='text-xl sm:text-2xl font-bold mb-4'>Sampaikan Isu</h2>
            <div className='relative mb-4 text-sm sm:text-base'>
              <input
                type='text'
                placeholder='Judul isu'
                className='w-full p-2 sm:p-4 mb-1 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                maxLength={maxTitleCharacters}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className={`absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-xs md:text-sm ${getCounterColor(title.length, maxTitleCharacters)}`}>
                {title.length}/{maxTitleCharacters}
              </div>
            </div>
            <div className='relative text-sm sm:text-base'>
              <textarea
                placeholder='Sampaikan isu terkini...'
                className='w-full p-2 sm:p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none h-1/2 min-h-[27vh]'
                maxLength={maxCharacters}
                value={text}
                onChange={handleTextChange}
                ref={textareaRef}
              ></textarea>
              <button 
                type='button' 
                className='absolute bottom-6 left-4 text-primary'
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                <MdInsertEmoticon className='text-2xl' />
              </button>
              {showEmojiPicker && (
                <div
                  className='absolute bottom-12 left-4 z-50'
                  ref={emojiPickerRef}
                >
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
              )}
              <div className={`absolute bottom-4 sm:bottom-6 right-2 sm:right-4 text-xs md:text-sm ${getCounterColor(text.length, maxCharacters)}`}>
                {text.length}/{maxCharacters}
              </div>
            </div>
            {errorMessage && (
              <div className='text-red-500 text-sm mb-4'>
                {errorMessage}
              </div>
            )}
            {images.length > 0 && (
              <div className='flex gap-2 mt-4'>
                {images.map((image, index) => (
                  <div key={index} className='relative'>
                    <Image
                      src={URL.createObjectURL(image)}
                      alt={`upload-preview-${index}`}
                      className='w-20 h-20 object-cover rounded-lg'
                      width={80}
                      height={80}
                    />
                    <button
                      className='absolute top-0 right-0 text-primary rounded-full p-1 text-2xl font-bold'
                      onClick={() => removeImage(index)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className='flex justify-between mt-4'>
              <button className='flex items-center gap-2 text-primary' {...getRootProps()}>
                <IoImageOutline className='text-xl sm:text-3xl' />
                <span className='text-black text-sm sm:text-lg hover:text-primary transition duration-300'>Unggah gambar</span>
                <input {...getInputProps()} />
              </button>
            </div>
            <div className='flex justify-center mt-4'>
              <button className='text-sm sm:text-base bg-primary text-white px-6 py-2 rounded-xl font-semibold transition-opacity duration-300 hover:opacity-75'>
                Unggah
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
