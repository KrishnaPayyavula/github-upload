const fs = require("fs");

if (fs.existsSync("storage-files")) {
    console.log("Already the folder name exists")
} else {
    fs.mkdir("storage-files", error => {
        if (error) {
            throw error
        }
        console.log("Folder/Directory Created ")
    })
}

