'use client';
import { useEffect, useState } from 'react';
import { ArticlePreview, Button, Pagination, SearchInput } from './_components';
import { getThumbnail } from './_utils/helpers';

export type Media = {
  format: string;
  url: string;
};

export type Article = {
  title: string;
  multimedia: Media[];
};

async function getNYTData(params = {}) {
  const baseURL =
    'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=vtG2wr3s1y2OYDGc42z0Ej7H22o782X6';
  const res = await fetch(baseURL, params);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default function Home() {
  const articlesPerPage = 4;
  const [articles, setArticles] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNYTData();
        setArticles(result.results);
      } catch (error) {
        console.error('Error');
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="font-semibold pt-10 text-center text-4xl">
        Travel News and Trends
      </h1>
      <div className="flex justify-end pt-4">
        <div className="max-w-72 pr-2">
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className="pr-2">
          <Button isDisabled={!searchQuery.length} text="Search" />
        </div>
      </div>
      {!!articles.length && (
        <>
          {articles.map((article, index) => (
            <ArticlePreview
              key={index}
              thumbnail={getThumbnail(article.multimedia)}
              title={article.title}
            />
          ))}
          <Pagination total={Math.round(articles.length / articlesPerPage)} />
        </>
      )}
    </>
  );
}
