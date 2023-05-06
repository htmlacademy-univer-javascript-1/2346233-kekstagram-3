
import { getPhotos } from './data.js';
import { insertPhotoMiniature } from './drawPhotos.js';
import { showDownloadAlert } from './alert.js';
import './form.js';
import './formValidator.js';
import './effects.js';
import './size.js';


getPhotos(insertPhotoMiniature,showDownloadAlert);

