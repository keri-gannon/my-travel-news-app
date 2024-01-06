import { Media } from '../page';

export const getThumbnail = (multimedia: Media[]): string => {
  return multimedia.filter((media: Media) => {
    return media.format === 'Large Thumbnail';
  })[0].url;
};
