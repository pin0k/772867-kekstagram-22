import {getRandomInteger, createDataList} from './data.js';

const windowFullSize = document.querySelector('.big-picture');

windowFullSize.classList.remove('hidden');
document.querySelector('body').classList.add('modal-open');

windowFullSize.querySelector('.social__comment-count').classList.add('hidden');
windowFullSize.querySelector('.comments-loader').classList.add('hidden');

const socialCommentList = windowFullSize.querySelector('.social__comments');

createDataList.forEach((element) => {
  windowFullSize.querySelector('.big-picture__img img').src = element.url;
  windowFullSize.querySelector('.likes-count').textContent = element.likes;
  windowFullSize.querySelector('.comments-count').textContent = element.comments.length;
  windowFullSize.querySelector('.social__caption').textContent = element.description;
  const newSocialCommentItem = socialCommentList.querySelector('.social__comment').cloneNode(true);
  newSocialCommentItem.querySelector('img').src = element.comments[getRandomInteger(1,6)].avatar;
  newSocialCommentItem.querySelector('img').alt = element.comments[getRandomInteger(1,6)].name;
  newSocialCommentItem.querySelector('.social__text').textContent = element.comments[getRandomInteger(1,6)].message;
  socialCommentList.appendChild(newSocialCommentItem);
});
