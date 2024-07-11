import React, { useState, useRef, useEffect } from 'react';
import { IoImageOutline } from 'react-icons/io5';
import { MdInsertEmoticon } from 'react-icons/md';

export const SampaikanIsu: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const maxCharacters = 3000;
  const maxTitleCharacters = 80;

  const handleInputFocus = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
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
              <div className={`absolute bottom-4 sm:bottom-6 right-2 sm:right-4 text-xs md:text-sm ${getCounterColor(text.length, maxCharacters)}`}>
                {text.length}/{maxCharacters}
              </div>
            </div>
            <div className='flex justify-between mt-4'>
              <button className='flex items-center gap-2 text-primary'>
                <IoImageOutline className='text-xl sm:text-3xl' />
                <span className='text-black text-sm sm:text-lg hover:text-primary transition duration-300'>Unggah gambar</span>
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