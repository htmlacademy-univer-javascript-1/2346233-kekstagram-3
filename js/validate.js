import { getLength } from './util.js';

const form = document.querySelector('.img-upload__form');
export const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

pristine.addValidator(document.querySelector('.text__description'), validateComment, 'Ограничение: 20-140 символов!');


export function validateComment(str) {
  return !getLength(str, 19) && getLength(str, 140);
}


form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
