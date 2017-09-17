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
        const individualLine = inputLines[i];

        subStringExtract(individualLine);
    }

    function subStringExtract(str) {
        const array = [];
        const test = str.split("");

        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < str.length; j++) {
                if (i !== j) {
                    array.push(`${test[i]}${test[j]}`);
                }
            }
        }

        const duplicate = checkDuplicate(array);

        if (duplicate === false) {
            console.log("yes");
        } else {
            console.log("no");
        }

        function checkDuplicate(arr) {
            const map = {};

            for (let i = 0; i < arr.length; i++) {
                if (map[arr[i]]) {
                    return false;
                }
                map[arr[i]] = true;
            }
            return true;
        }
    }
}

main(chunk);