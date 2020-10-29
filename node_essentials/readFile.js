const fs = require("fs");


//Synchronous Reading of the file
const text = fs.readFileSync("./assets/users.json", "UTF-8");

console.log(text)


// Asynchronous Reading of the file

fs.readFile("./assets/users.json", "utf-8", (error, data) => {
    if (error) throw error
    console.log(data)
});

//  For reading the image file does not require any encoding format , we can call it simply
fs.readFile("./assets/Indian_Spices.jpg", (error, data) => {
    if (error) {
        console.log(`An error has occured ${error.message}`);
        process.exit()
    }
    console.log("Image Data :->")
    console.log(data)
});

