'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Article } from '../page';

type ArticleContextType = {
  selectedArticle: Article | null;
  setArticle: (article: Article) => void;
};

// Create a context with an initial default value (null in this case)
const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

const { Provider } = ArticleContext;

export const ArticleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const setArticle = (article: any) => {
    setSelectedArticle(article);
  };

  return (
    <Provider value={{ selectedArticle, setArticle }}>{children}</Provider>
  );
};

export const useArticleContext = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error('useArticleContext must be used within an ArticleProvider');
  }
  return context;
};
