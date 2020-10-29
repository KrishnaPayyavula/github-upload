console.log(__dirname);
console.log(__filename);
let fileNamePath = __filename.split("\\");
let fileName = fileNamePath.pop()
console.log(fileName);

const path = require("path");


// basename is a functions which get base name from the fullpath
console.log(`The file name is ${path.basename(__filename)}`)


