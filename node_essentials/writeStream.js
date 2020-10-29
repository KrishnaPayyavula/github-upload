
//  This will write to a terminal
process.stdout.write("Hello")

const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/autoWrittenFile.txt", "UTF-8");
const writeUpdatedStream = fs.createWriteStream("./assets/IndSpices.png");
const writeUpdatedStream2 = fs.createWriteStream("./assets/IndSpices.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/Indian_Spices.jpg");
writeStream.write("Hello Har_sha");
writeStream.write(" World\n");

readStream.on("data", data => {
    writeUpdatedStream.write(data)
})
readStream.pipe(writeUpdatedStream2)

process.stdin.on("data", data => {
    writeStream.write(data)
})