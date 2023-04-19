

const pictureTemplate = document.querySelector('#picture');
const pictures = document.querySelector('.pictures');
const fragment = new DocumentFragment();

export const  insertPhotoMiniature = (photos) => {
  photos.forEach((photo) => {
    const template = pictureTemplate.cloneNode(true);
    const img = template.querySelector('.picture__img');
    const likes = template.querySelector('.pictures__likes');
    const comments = template.querySelector('.picture__comments');
    img.src = photo.url;
    likes.textContent = photo.likes;
    comments.textContent = photo.comment;

    fragment.appendChild(template);
  });
  pictures.append(fragment);
};


