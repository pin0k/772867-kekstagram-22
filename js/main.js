// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInteger = (min, max) => {return Math.floor(Math.random() * (max - min + 1)) + min};

// Функция для проверки максимальной длины строки. Кекстаграм
const getValidationObject = (checkedObject, maxValue) => {return (checkedObject.length < maxValue) ? true : false;};
