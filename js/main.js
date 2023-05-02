
import { generatePhotos } from './data.js';
import { insertPhotoMiniature } from './drawPhotos.js';
import './formValidator.js';
import './form.js';
import './size.js';
import './effects.js';
insertPhotoMiniature(generatePhotos(25));
