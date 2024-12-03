import { readInputFile, splitLines, splitAndTrim } from "../utils/readFile.js";

let levels;
let levelNumbers = [];
let safeCount = 0;

levels = splitLines(readInputFile('./2024/day02/input.txt'));

for (let index = 0; index < levels.length; index++) {
    let numbersString = splitAndTrim(levels[index]);
    let numbers = [];

    for (const number of numbersString) {
        numbers.push(parseInt(number));
    }

    levelNumbers.push(numbers);
}


levelNumbers.forEach(level => {
    if (isSafe(level)) {
        safeCount++;
    }
});


console.log(`There are ${safeCount} safe levels`)

function isSafe(arr) {
    let ascending = true;
    let descending = true;

    for (let i = 0; i < arr.length - 1; i++) {
        let diff = arr[i + 1] - arr[i];

        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
            return false;
        }

        if (diff < 0) {
            ascending = false;
        }
        if (diff > 0) {
            descending = false;
        }
    }
    return ascending || descending;
}


//==================================PART 2==============================================//