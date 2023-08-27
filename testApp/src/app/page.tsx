'use client';

import React, { useState } from 'react';
import { NextPage } from 'next';

interface Localization {
  [key: string]: {
    title: string;
    content: string;
  };
}

const localizations: Localization = {
  en: {
    title: 'Welcome to the Article',
    content: 'This is the content of the article in English.',
  },
  ja: {
    title: '記事へようこそ',
    content: 'これは日本語の記事の内容です。',
  },
  // Add more languages here
};

const Article: NextPage = () => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="p-[100px] flex flex-col items-center">
      <div className="mb-4">
        <button
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => handleLanguageChange('en')}
        >
          English
        </button>
        <button
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => handleLanguageChange('ja')}
        >
          Japanese
        </button>
        {/* Add more language buttons */}
      </div>
      <h1 className="text-3xl font-bold mb-4">
        {localizations[language].title}
      </h1>
      <p className="text-gray-600">{localizations[language].content}</p>
      {/* You can add the markdown content rendering here */}
    </div>
  );
};

export default Article;
