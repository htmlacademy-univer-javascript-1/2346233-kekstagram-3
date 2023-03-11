const getRandomNumber =  (from, to) => {
  if (from > to) {
    throw new Error('from can not great than to');
  }
  if (from === to) {
    return to;
  }
  if (from >= 0 && to >=0) {
    for (let i = from; i <= to, i++;) {

      const random = Math.floor(Math.random() * (to - from + 1)) + from ;

      return random;
    }
  }
  throw new Error('negative number');
};

console.log(getRandomNumber(3,3));

const isStringMax = (str, maxValue) =>  str.length <= maxValue;

console.log(isStringMax('как дела', 10));
