// process.stdin
// process.stdout

// process.stdout.write("This is krishna ");





const questions = [
    "What is your name ?",
    "what is current ctc ?",
    "what is your e ctc ?"
]


const ask = (i = 0) => {
    process.stdout.write(` ${questions[i]}`);
    process.stdout.write(` >> `);
}

ask();

const answers = [];
process.stdin.on('data', (data) => {
    // process.stdout.write(` ${data.toString().trim()} \n\n`);
    answers.push(data.toString().trim())

    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})

process.on('exit', () => {
    const [name, cctc, ectc] = answers;
    console.log(` 
    
    Thanks for all the answers and 
        These are your answers ${name} !!

        ${cctc} and ${ectc}

        ${name} && ${cctc} && ${ectc}
    `)
})