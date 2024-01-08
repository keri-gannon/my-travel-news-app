'use client';
import Image from 'next/image';
import { Media } from '../../page';
import { getPhoto, MediaFormats } from '@/app/_utils/helpers';
import { useArticleContext } from '../../_context/ArticleContext';

function ArticleComponent() {
  const { selectedArticle } = useArticleContext();
  return (
    <div className="border-2 border-emerald flex flex-col h-80 items-center p-6 rounded-md">
      <h1 className="text-center pb-3 text-xl">{selectedArticle?.title}</h1>
      <Image
        alt=""
        height={150}
        src={getPhoto(
          selectedArticle?.multimedia as Media[],
          MediaFormats.ThreeByTwoSmallAt2X
        )}
        width={150}
      />
      <p>{selectedArticle?.abstract}</p>
    </div>
  );
}

export default ArticleComponent;
