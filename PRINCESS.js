/**
 * Mohammed Sohail
 * sohailsameja@gmail.com
 */

/*process.stdin.resume();
process.stdin.setEncoding("utf8");

const fs = require("fs");
const chunk = fs.readFileSync("/dev/stdin").toString();*/

const chunk = `10
madamsaddad
asadasd
sadasasdasd
asdasdsad
asadasdsadsa
asdasdsadas
asdsadsadsad
asdsadsad
racecartty
topkeke`

function main(input) {
    const inputLines = input.split("\n");
    const testCases = inputLines[0];

    inputLines.shift();

    for (var i = 0; i < testCases; i++) {
        const string = inputLines[i];
        processString(string);
    }

    function processString(input) {
        const subStringArray = [];
        const palindromesArray = [];
        const yetAnotherArray = [];

        for (var i = 0; i < input.length; i++) {
            for (var j = i + 1; j <input.length + 1; j++) {
                subStringArray.push(input.slice(i, j));
            }

            subStringArray.forEach(element => {
                if (element.length > 3 && element === element.split("").reverse().join("")) {
                    palindromesArray.push(element);
                }
            });
        }

        yetAnotherArray.push(palindromesArray[0]);

        yetAnotherArray.forEach(element => {
            if (element !== undefined) {
                console.log("YES");
            } else {
                console.log("NO");
            }
        });
    }
}

main(chunk);