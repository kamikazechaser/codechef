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
        const individualLine = inputLines[i].split(" ");
        
        calculateFastestMeans(individualLine[0], individualLine[1], individualLine[2], (ctx) => {
            console.log(ctx);
        });
    }
}

function calculateFastestMeans(n, stairsVelocity, elevatorVelocity, callback) {
    const stairsConstant = Math.sqrt(2);
    const stairsTime = (n * stairsConstant) / stairsVelocity;

    const elevatorTime = (2 * n) / elevatorVelocity;

    if (elevatorTime < stairsTime) {
        return callback("Elevator");
    } else {
        return callback("Stairs");
    }
}

main(chunk);