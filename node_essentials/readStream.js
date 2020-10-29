const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.txt", "UTF-8")
let fileData = ""
readStream.on("data", data => {
    console.log(`Data from the file is ${data}`)
})

readStream.once("data", data => {
    console.log("___________");
    console.log(data)
    console.log("___________");
    fileData += data
})

readStream.on("end", () => {
    console.log("Finished Reading the file")
    console.log(fileData)
})