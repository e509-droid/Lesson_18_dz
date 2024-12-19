const numbers = [3, 11, 7, 9, 18, 4, 21, 12, 16, 23, 6, 19];

console.log("Числа от 8 до 20:");
for (let num of numbers) {
    if (num > 8 && num < 20) {
        console.log(`Подходящее число: ${num}`);
    }
}
