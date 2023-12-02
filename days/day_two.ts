import { getTextArray, getTextFromFile, readDocument } from "../handlers/file_handlers";

const maximumRed = 12;
const maximumBlue = 14;
const maximumGreen = 13;

const processLines = (textArray: string[]) => {
    let result: number[] = [];
    let partTwoResult: number = 0;
    for (const line of textArray) {

        const endTitle = line.indexOf(':');
        const title = line.substring(5, endTitle)

        const contentRow = line.substring(endTitle + 2);

        const arrayOfGames = contentRow.split(';');

        let totalBlue = 0;
        let totalRed = 0;
        let totalGreen = 0;
        for (const game of arrayOfGames) {
            const gameArray = game.trim().split(',');

            ({ totalRed, totalBlue, totalGreen } = CalculateColorValues(gameArray, totalRed, totalBlue, totalGreen));
        }

        if (totalRed > maximumRed)
            result.push(parseInt(title));

        if (totalGreen > maximumGreen)
            result.push(parseInt(title));

        if (totalBlue > maximumBlue)
            result.push(parseInt(title));

        const totalPower = totalRed * totalBlue * totalGreen;
        partTwoResult += totalPower;
    }

    const numberOfRecords = Array.from(Array(textArray.length + 1).keys())
    const validRecords = numberOfRecords.filter((v) => {
        if (!result.includes(v) && v != undefined)
            return v;
    });

    var sumOfValidRecords = validRecords.reduce((p, c) => p + c);

    return `part I result: ${sumOfValidRecords} - part II result: ${partTwoResult}`;
}

const solveSecondPuzzle = async (partOne: boolean) => {
    const file = readDocument("./inputs/cube_games.txt");
    const text = await getTextFromFile(file);
    const textArray = getTextArray(text);
    return processLines(textArray);
}

function CalculateColorValues(gameArray: string[], totalRed: number, totalBlue: number, totalGreen: number) {
    const { redIndex, blueIndex, greenIndex } = getColorPositionIndexes(gameArray);

    if (redIndex > -1)
        totalRed = getNumberFromString(gameArray, redIndex) > totalRed ? getNumberFromString(gameArray, redIndex) : totalRed;

    if (blueIndex > -1)
        totalBlue = getNumberFromString(gameArray, blueIndex) > totalBlue ? getNumberFromString(gameArray, blueIndex) : totalBlue;

    if (greenIndex > -1)
        totalGreen = getNumberFromString(gameArray, greenIndex) > totalGreen ? getNumberFromString(gameArray, greenIndex) : totalGreen;

    return { totalRed, totalBlue, totalGreen };
}

function getNumberFromString(gameArray: string[], indexColor: number): number {
    return parseInt(gameArray?.at(indexColor)?.trim().match(/\d+/g));
}

function getColorPositionIndexes(gameArray: string[]) {
    const redIndex = findElementPositionFromArray(gameArray, "red");
    const blueIndex = findElementPositionFromArray(gameArray, "blue");
    const greenIndex = findElementPositionFromArray(gameArray, "green");
    return { redIndex, blueIndex, greenIndex };
}

function findElementPositionFromArray(gameArray: string[], color: string) {
    return gameArray.findIndex(element => element.includes(color));
}

export { solveSecondPuzzle }

