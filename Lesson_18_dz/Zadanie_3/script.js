const numbers = [15, 22, 3, 10, 5, 33, 2, 19];

let minValue = numbers[0]; // Предполагаем, что первый элемент минимальный

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
        minValue = numbers[i];
    }
}

console.log(`Минимальное значение в массиве: ${minValue}`);