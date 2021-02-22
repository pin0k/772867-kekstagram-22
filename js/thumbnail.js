import {getRandomInteger, createDataList} from './data.js';

const pictureSection = document.querySelector('.pictures');


const thumbnailSection = document.createElement('section');
thumbnailSection.classList.add('img-thubmnail');

const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('div');
const fragment = document.createDocumentFragment();


createDataList.forEach((element, index) => {
  const newThumbnail = template.cloneNode(true);

  newThumbnail.querySelector('img').src = element.url;
  newThumbnail.querySelector('.picture__comments').textContent = element.likes;
  //newThumbnail.querySelector('.picture__likes').textContent = element.comments[getRandomInteger(1,6)].message;
  console.log(element.comments[index]);

  fragment.appendChild(newThumbnail);
});

thumbnailSection.appendChild(fragment);


pictureSection.appendChild(thumbnailSection);
