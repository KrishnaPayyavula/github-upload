const readLine = require("readline");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How what is the best that achived ?", answer => {
    console.log(`Your answer is : ${answer}`)
    process.exit()
});



