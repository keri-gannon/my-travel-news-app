'use client';
import SearchInput from './_components/SearchInput';
import Button from './_components/Button';
import { useEffect, useState } from 'react';
import { fetchNYTData } from './_utils/api';
// TODO: Show articles
// TODO: Upon click, link to article

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    fetchNYTData();
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
      <div></div>
      <div></div>
    </>
  );
}
