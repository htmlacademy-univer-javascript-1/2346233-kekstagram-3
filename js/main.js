const randomNumber = function (from, to) {
  if (from > to) {
    return null;
  }
  if (from === to) {
    return to;
  }
  if (from >= 0 && to >=0) {
  for (let i = from; i <= to, i++;) {

    const random = Math.floor(Math.random() * (to - from + 1)) + from ;

    return random
  }
}
return null;
}

console.log(randomNumber(3,3));

const isStringMax = function (str, maxValue) {
  if (str.length <= maxValue ) {
  return true
  }
  else {
    return false
  }
}
console.log(isStringMax('как дела', 10));
