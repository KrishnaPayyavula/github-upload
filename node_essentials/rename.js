const fs = require("fs");

fs.renameSync("./assets/users.json", "./assets/userDetails.json");

fs.rename("./assets/userDetails.json", "./assets/userDetails.txt", error => {
    if (error) {
        throw error
    }
})

setTimeout(() => {
    fs.unlinkSync("./assets/writeFile2.txt")
}, 4000)