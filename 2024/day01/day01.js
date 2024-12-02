import { readInputFile } from '../utils/readFile.js';

let inputData;
let allNUmbers;
let list1 = [];
let list2 = [];
let sortedList1;
let sortedList2;
let distanceSum = 0;

inputData = readInputFile('./2024/day01/input.txt');
allNUmbers = inputData.split(/[\s]+/);

for (let index = 0; index < allNUmbers.length; index++) {
    if (index % 2) list2.push(allNUmbers[index])
    else list1.push(allNUmbers[index])
}

sortedList1 = [...list1].sort((a, b) => a - b);
sortedList2 = [...list2].sort((a, b) => a - b);

for (let index = 0; index < list1.length; index++) {
    distanceSum += Math.abs(sortedList1[index] - sortedList2[index]);
}

console.log(`The distance for Part 1 is: ${distanceSum}`);


////---------------------------------------Part 2-----------------------------------------------------////

let similarityScore = 0;

for (let i = 0; i < list1.length; i++) {
    let counter = 0;
    for (let j = 0; j < list2.length; j++) {
        if (list2[j] === list1[i]) {
            counter++;
        }
    }
    similarityScore += counter * list1[i];
}

console.log(`The Similarity Score for Part 2 is: ${similarityScore}`);

