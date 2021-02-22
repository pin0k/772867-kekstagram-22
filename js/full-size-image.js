import {createDataList} from './data.js';

const userModalElement = document.querySelector('.big-picture');
const userModalOpenElement = document.querySelectorAll('.picture');
const userModalCloseElement = userModalElement.querySelector('.big-picture__cancel');

userModalOpenElement.forEach((element, i) => {
  element.addEventListener('click', () => {
    userModalElement.classList.remove('hidden');
    userModalElement.querySelector('.social__comment-count').classList.add('hidden');
    userModalElement.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');

    userModalElement.querySelector('.big-picture__img img').src = element.querySelector('img').src;
    userModalElement.querySelector('.likes-count').textContent = element.querySelector('.picture__likes').textContent;
    userModalElement.querySelector('.comments-count').textContent = element.querySelector('.picture__comments').textContent;

    const socialCommentList = userModalElement.querySelector('.social__comments');

    for (let j=1; j < createDataList.length; j++) {
      const newSocialCommentItem = socialCommentList.querySelector('.social__comment').cloneNode(true);
      newSocialCommentItem.querySelector('img').src = createDataList[j].comments[0].avatar;
      newSocialCommentItem.querySelector('img').alt = createDataList[j].comments[0].name;
      newSocialCommentItem.querySelector('.social__text').textContent = createDataList[i].comments[0].message;
      socialCommentList.appendChild(newSocialCommentItem);
    }

    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        userModalElement.classList.add('hidden');
      }
    });
  });

  userModalCloseElement.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 13) {
      userModalElement.classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
    }
  });
});

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});
