const waitTime = 3000;
const waitInterval = 500;

let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100)
    // console.log(` waiting ${currentTime / 1000} seconds..`)
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Wating ... ${p} %`);
}

console.log(`setting for ${waitTime / 1000} seconds \n`);

const timerFinished = () => {
    console.log("Done");
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);

}

const interval = setInterval(incTime, waitInterval);

setTimeout(timerFinished, waitTime);

