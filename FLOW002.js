/**
 * Mohammed Sohail
 * sohailsameja@gmail.com
 */

process.stdin.resume();
process.stdin.setEncoding("utf8");

const fs = require("fs");
const chunk = fs.readFileSync("/dev/stdin").toString();

function main(input) {
    const inputLines = input.split("\n");
    const testCases = inputLines[0];

    inputLines.shift();

    for (let i = 0; i < testCases; i++) {
        const individualLine = inputLines[i].split("");
        
        console.log(parseInt(individualLine[0] % individualLine[1]));
    }
}

main(chunk);