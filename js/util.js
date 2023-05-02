import { MAX_PHOTOS,descriptions } from './data.js';

const getRandomNumber =  (from, to) => {
  if (from > to) {
    throw new Error('from can not great than to');
  }
  if (from === to) {
    return to;
  }
  if (from >=0 && to >=0) {
    for (let i = from; i < to, i+=1;) {
      from = Math.ceil(from);
      to = Math.floor(to);

      const random = Math.floor(Math.random() * (to - from + 1)) + from ;

      return random;
    }
  } else {
    throw new Error('negative number');
  }
};


const isStringMax = (str, maxValue) =>  str.length <= maxValue;

const getPhotos = () => ({
  id: getRandomNumber(1,MAX_PHOTOS),
  url: `photos/${getRandomNumber(1,MAX_PHOTOS)}.jpg`,
  description: descriptions[getRandomNumber(0,4)],
  likes: getRandomNumber(15,200),
  comments: getRandomNumber(0,200),
});

export {getRandomNumber, isStringMax, getPhotos};

export const isEscapeKey = (evt) => evt.key === 'Escape';

