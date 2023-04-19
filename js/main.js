import {getRandomNumber,isStringMax,getPhotos} from './util.js';
import {MAX_PHOTOS} from './data.js';
getRandomNumber(0,3);
isStringMax('HEllo',3);
// eslint-disable-next-line no-unused-vars
const massiveOfPhotos = Array.from({length:MAX_PHOTOS}, getPhotos);
