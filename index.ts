import { solveFirstPuzzle } from "./days/day_one";
import { solveSecondPuzzle } from "./days/day_two";

console.log("Starting App...");

const runFirstDay = () => {
    return solveFirstPuzzle()
        .then(x => {
            console.log(`DAY ONE answer: ${x}`);
        }, error => {
            console.log(`You are not yet there =/, a error occured running day 1: ${error}`);
        });
}

const runSecondDay = () => {
    return solveSecondPuzzle()
        .then(x => {
            console.log(`DAY TWO answer: ${x}`);
        }, error => {
            console.log(`You are not yet there =/, a error occured running day 2: ${error}`);
        });
}

const run = async () => {
    await runFirstDay();
    await runSecondDay();

    console.log('App is finishing...');
}

run();

export { run }