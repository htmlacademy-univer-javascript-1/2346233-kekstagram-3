import { getRandomNumber } from './util.js';


export const MAX_PHOTOS = 25;

export const descriptions = ['зимнее утро', 'утро в саду', 'морской бриз', 'завтрак', 'Ночная тьма'];

const generatePhoto = (number) => ({
  id: number,
  url: `photos/${  number  }.jpg`,
  description: `Сборная по водному поло ${  yearNum()  }г.`,
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(0, 200),
});

export const generatePhotos = (number) => {
  const data = [];
  for (let i = 0; i < number; i++) {
    data[i] = generatePhoto(i + 1);
  }
  return data;
};

function yearNum() {
  const x = getRandomNumber(2000, 2010);
  return x;
}
