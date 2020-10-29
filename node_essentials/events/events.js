const events = require("events");
const { emit } = require("process");

const emitter = new events.EventEmitter();

emitter.on("CustomEvent", (message, user) => {
    console.log(`${user} :  ${message}`)
});

// emitter.emit("CustomEvent", "Hi Krishna", "Welcome to node js Class");


process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit") {
        emitter.emit("CustomEvent", "Good Bye", "Process");
        process.exit();
    }
    emitter.emit("CustomEvent", input, "Terminal");
})


