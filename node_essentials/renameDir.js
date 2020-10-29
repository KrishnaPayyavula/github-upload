const { error } = require("console");
const fs = require("fs");


fs.renameSync("./assets", "./ASSETS");


setTimeout(() => {
    fs.rename("./ASSETS", "./assets", error => {
        if (error) throw error
    })
    console.log("File Renamed")
}, 3000)

fs.mkdir("./Krishna", (error) => {
    if (error) throw error
})

setTimeout(() => {
    fs.rmdir("./Krishna", error => {
        if (error) throw error
    })
    console.log("Folder Removed")
}, 3000)