'use client';
import Image from 'next/image';

type ArticlePreviewProps = {
  title: string;
  thumbnail: string;
};

function ArticlePreview({ title, thumbnail }: ArticlePreviewProps) {
  return (
    <>
      {title}
      <Image alt="" height={150} src={thumbnail} width={150} />
    </>
  );
}

export default ArticlePreview;
