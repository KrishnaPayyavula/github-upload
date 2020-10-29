const colorData = require("./assets/users.json");
const fs = require("fs");
colorData.someMoreText.forEach(element => {
    fs.appendFile("./assets/user.txt", `${element.name} : ${element.loc} : ${element.mbl} \n`, error => {
        if (error) {
            throw error
        }
    })
});