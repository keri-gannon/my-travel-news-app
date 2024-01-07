'use client';
import Image from 'next/image';
import Link from 'next/link';

export type ArticleProps = {
  abstract: string;
  author: string;
  photo: string;
  publishedDate: string;
  title: string;
};

function Article({ title, photo }: ArticleProps) {
  return (
    <div className="border-2 border-emerald flex flex-col h-80 hover:cursor-pointer items-center p-6 rounded-md">
      <h1 className="text-center pb-3 text-xl">{title}</h1>
      <Image alt="" height={150} src={photo} width={150} />
    </div>
  );
}

export default Article;
