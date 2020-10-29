const collectAnswers = require("./../lib/questions")


const questions = [
    "what is your name ?",
    "Where do you live ?",
    "What is your native place ?"
]


const answerEvents = collectAnswers(questions)

answerEvents.on("answer", answer => {
    // console.log(JSON.stringify(answerEvents))
    console.log(`Question Answerd : ${answer}`);
})

answerEvents.on("complete", answers => {
    console.log("Thanks you for your answers ...");
    console.log(answers);
})

answerEvents.on("complete", () => {
    process.exit();
})
