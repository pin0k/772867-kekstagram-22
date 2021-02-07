// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для проверки максимальной длины строки. Кекстаграм
const getValidationValue = (checkedValue, maxValue) => (checkedValue.length < maxValue) ? true : false;

//Имена авторов комментариев
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Адольф',
  'Берта',
  'Виссарион',
  'Гертруда',
  'Дональд',
  'Есения',
  'Жорж',
  'Земфира',
  'Иннконтий',
  'Симона',
  'Казимир',
  'Луиза',
  'Михаил',
  'Эльвира',
  'Никита',
  'Эсмеральда',
  'Платон'
];

//Текст для формирования комментария
const COLLECTION_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

//Функция, создающая один объект
const createElement = () => {
  const numberElement = getRandomInteger(0, 25);
  return {
    id: numberElement,
    url: 'photos/' + numberElement + '.jpg',
    description: 'Very long description of the photo',
    likes: getRandomInteger(15, 200),
    comments: new Array(6).fill().map(() => {
      return {
        id: String(numberElement) + getRandomInteger(0, 25),
        avatar: 'img/avatar' + getRandomInteger(0, 6) + '.svg',
        message: COLLECTION_TEXT[getRandomInteger(0, COLLECTION_TEXT.length)],
        name: NAMES[getRandomInteger(0, NAMES.length)]
       }
    })
  };
};

//Создание массива объектов
const readyArray = new Array(25).fill(null).map(() => createElement());
