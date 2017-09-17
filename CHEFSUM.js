const chunk = `2
3
1 2 3
4
2 1 3 1`;

function main(input) {
    const inputLines = input.split("\n");
    const testCases = inputLines[0];
  
    inputLines.shift();
  
    for (let i = 0; i < testCases; i++) {
        const arraylength = inputLines[i];
        
        inputLines.shift();
      
        const testCase = inputLines[i];
      
        act(testCase);
    }

    function act(data) {
        const x = data.split(" ");
        
        for (let i = 0; i < x.length; i++) {
            const y = parseInt(x.length) - 1;

            if (i === 0) {
                
            }

            console.log("i " + i + " y" + y);
        }
    }
}

main(chunk)