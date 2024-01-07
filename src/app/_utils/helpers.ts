import { Media } from '../page';

export enum MediaFormats {
  LargeThumbnail = 'Large Thumbnail',
  ThreeByTwoSmallAt2X = 'threeByTwoSmallAt2X',
}

export const getPhoto = (multimedia: Media[], format: MediaFormats): string => {
  return multimedia.filter((media: Media) => {
    return media.format === format;
  })[0].url;
};
