'use client';
import Image from 'next/image';

type ArticlePreviewProps = {
  title: string;
  thumbnail: string;
};

// TODO: Add styling for hover
// TODO: On click, navigate to article page
function ArticlePreview({ title, thumbnail }: ArticlePreviewProps) {
  return (
    <div className="border-2 border-emerald flex flex-col h-80 items-center p-6 rounded-md">
      <h1 className="text-center pb-3 text-xl">{title}</h1>
      <Image alt="" height={150} src={thumbnail} width={150} />
    </div>
  );
}

export default ArticlePreview;
