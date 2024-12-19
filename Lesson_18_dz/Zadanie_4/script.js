const array = [12, 24, 36, 48, 60, 72];

const updateIndex = 4;
const newValue = 99;

if (updateIndex >= 0 && updateIndex < array.length) {
    console.log(`Изначальный массив: ${array}`);
    array[updateIndex] = newValue;
    console.log(`Обновленный массив: ${array}`);
} else {
    console.log(`Ошибка: Индекс ${updateIndex} находится вне диапазона массива.`);
}