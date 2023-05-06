import { isEscapeKey } from './util.js';
import { changheFieldSize, resetScale } from './size.js';
import { validateComment } from './formValidator.js';
import { openUploadError, openUploadSuccess } from './api.js';
import { oldEffect } from './effects.js';


const BACKEND_URL = 'https://27.javascript.pages.academy/kekstagram-simple';
const imgElement = document.querySelector('.img-upload__preview');
const addButton = document.querySelector('#upload-file');
const escapeButton = document.querySelector('#upload-cancel');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');


function cleanForm() {
  addButton.value = '';
  hashtag.value = '';
  comment.value = '';
  imgElement.classList.remove(oldEffect);
  imgElement.classList.add('effects__preview--none');
  imgElement.style = `transform: scale(${parseInt(changheFieldSize.value, 10) / 100})`;
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!validateComment(comment.value)) {
    return;
  }
  const formData = new FormData(evt.target);
  fetch(
    BACKEND_URL,
    {
      method: 'POST',
      body: formData,
    }
  )
    .then((response) => {
      if (response.ok) {
        closeWindow();
        openUploadSuccess();
      } else {
        openUploadError();
      }
    })
    .catch(openUploadError);
});

const onEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindow();
  }
};

function openWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.body.addEventListener('keydown', onEscapeKeydown);
}

function closeWindow() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydown);
  cleanForm();
  resetScale();
}

addButton.addEventListener('change', () => { openWindow(); });

escapeButton.addEventListener('click', () => {closeWindow(); });
