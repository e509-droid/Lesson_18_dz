const words = ["Я", "буду", "хорошим", "программистом"];

let longestWord = "";

for (let word of words) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}

console.log(`Самое длинное слово: ${longestWord}`);