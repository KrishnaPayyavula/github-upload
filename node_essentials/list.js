const fs = require("fs");

//  It reads the dir in synchronously
const files = fs.readdirSync("./ask");

console.log(files);

// It reads the files in asynchronous manner
fs.readdir("./ask", (err, files) => {
    if (err) {
        throw err
    }
    console.log("async ", files)
})

