'use client';
import Image from 'next/image';
import Link from 'next/link';
import { kebabCase } from 'lodash';
import { Article } from '@/app/page';
import { MediaFormats, getPhoto } from '@/app/_utils/helpers';
import { useArticleContext } from '@/app/_context/ArticleContext';

type ArticlePreviewProps = {
  article: Article;
};

function ArticlePreview({ article }: ArticlePreviewProps) {
  const { multimedia, title } = article;
  const { setArticle } = useArticleContext();
  const hyphenatedTitle = kebabCase(title);

  const handleClick = () => {
    setArticle(article);
  };

  return (
    <Link
      href={`/article/${encodeURIComponent(hyphenatedTitle)}`}
      onClick={handleClick}
    >
      <div className="border-2 border-emerald flex flex-col h-80 hover:cursor-pointer items-center p-6 rounded-md">
        <h1 className="text-center pb-3 text-xl">{title}</h1>
        <Image
          alt=""
          height={150}
          src={getPhoto(multimedia, MediaFormats.LargeThumbnail)}
          width={150}
        />
      </div>
    </Link>
  );
}

export default ArticlePreview;
