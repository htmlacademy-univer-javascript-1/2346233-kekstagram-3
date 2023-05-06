

const sizeUp = document.querySelector('.scale__control--bigger');
const sizeDown = document.querySelector('.scale__control--smaller');
export const changheFieldSize = document.querySelector('.scale__control--value');
const imgElement = document.querySelector('.img-upload__preview');


sizeUp.addEventListener('click', () => {
  const currentValue = parseInt(changheFieldSize.value, 10);
  let newValue = currentValue + 25;
  if (newValue > 100) {
    newValue = 100;
    imgElement.style = `transform: scale(${parseInt(changheFieldSize.value, 10) / 100})`;
  }
  changheSize(newValue);
});

sizeDown.addEventListener('click', () => {
  const currentValue = parseInt(changheFieldSize.value, 10);
  let newValue = currentValue - 25;
  if (newValue < 25) {
    newValue = 25;
    imgElement.style = `transform: scale(${parseInt(changheFieldSize.value, 10) / 100})`;
  }
  changheSize(newValue);
});

function changheSize(value) {
  changheFieldSize.value = `${value}%`;
  imgElement.style = `transform: scale(${value / 100})`;
}

function resetScale() {
  changheSize(100);
}

export {resetScale};
