import {getRandomNumber,isStringMax,getPhotos} from './util.js';
import {MAX_PHOTOS, generatePhotos} from './data.js';
getRandomNumber(0,3);
isStringMax('HEllo',3);
import './formValidator.js';

import { insertPhotoMiniature } from './drawPhotos.js';
// eslint-disable-next-line no-unused-vars
const massiveOfPhotos = Array.from({length:MAX_PHOTOS}, getPhotos);

//Задание 7 часть 2
insertPhotoMiniature(generatePhotos(25));
