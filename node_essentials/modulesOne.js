


console.log(module);

require('./otherModule').log("Welcome to Social Pilot")

console.log(globalThis)
require('./otherModule').endPointUrl;

const a = require("./otherModule").smallA;
console.info(a);
const { smallC } = require("./otherModule")
console.log(smallC);

console.table(require("./otherModule").smallB)

