'use client';
import { useEffect, useState } from 'react';
import { ArticlePreview, Button, SearchInput } from '@/app/_components';

export type Media = {
  format: string;
  url: string;
};

export type Article = {
  abstract: string;
  author: string;
  multimedia: Media[];
  publishedDate: string;
  title: string;
  thumbnail: string;
};

async function getNYTData(params = {}) {
  const baseURL = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.NEXT_PUBLIC_NYT_API_KEY}`;
  const res = await fetch(baseURL, params);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default function Home() {
  const [articles, setArticles] = useState<any[]>([]);
  const [articlesToDisplay, setArticlesToDisplay] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNYTData();
        setArticles(result.results);
        setArticlesToDisplay(result.results);
      } catch (error) {
        console.error('Error');
      }
    };

    fetchData();
  }, []);

  // Resetting to display all articles when search query is empty
  // and the articles to display is not equal to the total articles
  useEffect(() => {
    if (
      searchQuery.length === 0 &&
      articles.length !== articlesToDisplay.length
    ) {
      setArticlesToDisplay(articles);
    }
  }, [articles, articlesToDisplay, searchQuery]);

  const getMatchingArticles = () => {
    const matchingArticles = articles.filter(({ title }) => {
      return title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setArticlesToDisplay(matchingArticles);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !!searchQuery.length) {
      getMatchingArticles();
    }
  };

  return (
    <>
      <h1 className="font-semibold pt-10 text-center text-4xl">
        News and Trends
      </h1>
      <div className="flex justify-end pt-4">
        <div className="max-w-72 pr-2">
          <SearchInput
            handleKeyDown={handleKeyDown}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className="pr-2">
          <Button
            onClick={getMatchingArticles}
            isDisabled={!searchQuery.length}
            text="Search"
          />
        </div>
      </div>
      {!!articlesToDisplay.length && (
        <div className="gap-4 grid grid-cols-3 p-12">
          {articlesToDisplay.map((article) => (
            <div className="col-span-1 p-2" key={article.title}>
              <ArticlePreview article={article} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
