'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '../../page';
import { getPhoto, MediaFormats } from '@/app/_utils/helpers';

export type ArticleProps = {
  article: Article;
};

function ArticleComponent({
  article: { abstract, author, multimedia, publishedDate, title },
}: ArticleProps) {
  return (
    <div className="border-2 border-emerald flex flex-col h-80 hover:cursor-pointer items-center p-6 rounded-md">
      <h1 className="text-center pb-3 text-xl">{title}</h1>
      <Image
        alt=""
        height={150}
        src={getPhoto(multimedia, MediaFormats.ThreeByTwoSmallAt2X)}
        width={150}
      />
      <h4>By: {author}</h4>
      <h4>Published on {publishedDate}</h4>
      <p>{abstract}</p>
    </div>
  );
}

export default ArticleComponent;
