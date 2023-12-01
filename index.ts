import { solveFirstPuzzle } from "./days/day_one";

console.log("Starting App...");

const runFirstDay = () => {
    solveFirstPuzzle()
    .then(x => {
        console.log(`First date answer: ${x}`);
        console.log('App is finishing...');
    }, error => {
        console.log(`You are not yet there =/, a error occured: ${error}`);
    });
}

const run = () => {
    runFirstDay();
}

run();

export { run }