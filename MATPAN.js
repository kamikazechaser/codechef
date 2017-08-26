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
        const prices = inputLines[i];

        inputLines.shift();

        const string = inputLines[i];

        checkMissingPangram(string, prices);
    }

    function checkMissingPangram(input, prices) {
        const totalArray = [];

        let alphabets = "abcdefghijklmnopqrstuvwxyz";
        alphabets = alphabets.split("");

        prices = prices.split(" ");
        input = input.toLowerCase();

        const missingAlphabets = [];

        for (let i = 0; i < alphabets.length; i++) {
            if (input.indexOf(alphabets[i]) == -1) {
                missingAlphabets.push(i);
            }
        }

        missingAlphabets.forEach(element => {
            const price = prices[element];
            totalArray.push(price);
        });

        const totalPrice = totalArray.reduce((a, b) => {
            return parseInt(a) + parseInt(b);
        }, 0);

        console.log(totalPrice)
    }
}

main(chunk);