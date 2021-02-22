import {createDataList} from './data.js';

const pictureSection = document.querySelector('.pictures');

const thumbnailSection = document.createElement('section');
thumbnailSection.classList.add('img-thubmnail');

const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('div');
const fragment = document.createDocumentFragment();

for (let i = 0; i < createDataList.length; i++) {
  const newThumbnail = template.cloneNode(true);
  newThumbnail.querySelector('img').src = createDataList[i].url;
  newThumbnail.querySelector('.picture__likes').textContent = createDataList[i].likes;
  newThumbnail.querySelector('.picture__comments').textContent = createDataList[i].comments.length;
  fragment.appendChild(newThumbnail);
}

thumbnailSection.appendChild(fragment);
pictureSection.appendChild(thumbnailSection);
