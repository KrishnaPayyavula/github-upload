// console.log(process.pid);

// console.log(process.versions.node);

// console.log(process.argv0)
// console.log(process.argv)

// const [, , firstName, lastName] = process.argv;

// console.log(`My name is ${firstName} ${lastName}`);

const user = grab("$user")

const greeting = grab("$location");

function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]
}

console.log(` ${greeting} ${user} Welcome to Netmeds`);

console.log([1, 2, 3, 2, 1].indexOf(2))