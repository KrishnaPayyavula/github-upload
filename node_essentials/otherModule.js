var url = 'https://myLogger.io/krishna';
function log(message) {

    console.log("Krishna" + message);
}


let a = "A";
let b = { name: "Krishna" };
let c = "C";

module.exports.log = log;
module.exports.endPointUrl = url;
module.exports.smallA = a;
module.exports.smallB = b;
module.exports.smallC = c;