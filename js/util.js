

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


export {getRandomNumber, isStringMax};

export const isEscapeKey = (evt) => evt.key === 'Escape';

