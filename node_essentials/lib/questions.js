const readline = require("readline");
const { EventEmitter } = require("events");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
module.exports = (questions, done = g => g) => {
    const answers = [];
    const [first] = questions;
    const emitter = new EventEmitter();
    const questionAnswerd = answer => {
        emitter.emit("answer", answer);
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswerd)
        } else {
            emitter.emit("complete", answers)
            done(answers)
        }
    }
    rl.question(first, questionAnswerd)
    // done(answers);
    return emitter
}
