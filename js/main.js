// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для проверки максимальной длины строки. Кекстаграм
const getValidationValue = (checkedValue, maxValue) => (checkedValue.length < maxValue) ? true : false;
