
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

getRandomNumber(0,3);


import { getRandomNumber,isStringMax,getPhotos} from './util.js';
import {MAX_PHOTOS} from './data.js';
getRandomNumber(0,3);
isStringMax('HEllo',3);

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

getRandomNumber(0,3);


const isStringMax = (str, maxValue) =>  str.length <= maxValue;

isStringMax('как дела', 10);

const MAX_PHOTOS = 25;

const descriptions = ['зимнее утро', 'утро в саду', 'морской бриз', 'завтрак', 'Ночная тьма'];

const getPhotos = () => ({
  id: getRandomNumber(1,MAX_PHOTOS),
  url: `photos/${getRandomNumber(1,MAX_PHOTOS)}.jpg`,
  description: descriptions[getRandomNumber(0,4)],
  likes: getRandomNumber(15,200),
  comments: getRandomNumber(0,200),
});


// eslint-disable-next-line no-unused-vars
const massiveOfPhotos = Array.from({length:MAX_PHOTOS}, getPhotos);
