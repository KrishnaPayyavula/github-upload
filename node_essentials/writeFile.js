const fs = require("fs");

const someText = `

    # this is sample file for learning how to write the text to a file.

    we can write the file with the following options

    * fs.readdir
    * fs.readFile
    * fs.writeFile
`;


// Synchronus File writing 
fs.writeFileSync("./assets/writeFile1.txt", someText)

//  This fucntion works asynchronously and takes filename, text , options , callBack(Error) as arguements and returns any error if it finds the error
fs.writeFile("./assets/writeFile2.txt", someText.trim().toLocaleUpperCase(), (err) => {
    if (err) {
        throw err
    }
})