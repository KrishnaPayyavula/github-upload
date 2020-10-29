const path = require('path');

// TO join the paths
const dirUploads = path.join(__dirname, "wwww", "files", "uploads");

console.log(dirUploads);


const util = require('util');

util.log(path.basename(__filename));
util.log("The anme is currnet file")



// v8 

const { getHeapStatistics } = require("v8");

util.log(getHeapStatistics())