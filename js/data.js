import {NAMES, COLLECTION_TEXT} from './util.js';

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const createElement = () => {
  const numberElement = getRandomInteger(1, 25);
  return {
    id: numberElement,
    url: 'photos/' + numberElement + '.jpg',
    description: 'Very long description of the photo',
    likes: getRandomInteger(15, 200),
    comments: new Array(numberElement).fill().map(() => {
      return {
        id: String(numberElement) + getRandomInteger(1, 25),
        avatar: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
        message: COLLECTION_TEXT[getRandomInteger(1, COLLECTION_TEXT.length)],
        name: NAMES[getRandomInteger(1, NAMES.length)],
      }
    }),
  };
};

const createDataList = new Array(25).fill(null).map(() => createElement());

export {getRandomInteger, createDataList};
