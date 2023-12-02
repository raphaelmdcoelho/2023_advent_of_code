import { getTextArray, getTextFromFile, readDocument } from "../handlers/file_handlers";

const maximumRed = 12;
const maximumBlue = 14;
const maximumGreen = 13;

const processLines = (textArray: string[]) => {
    let result: number[] = [];
    let partTwoResult: number = 0;
    for (const line of textArray) {

        const endTitlePosition = line.indexOf(':');
        const gameId = line.substring(5, endTitlePosition)

        const row = line.substring(endTitlePosition + 2);

        const arrayOfGames = row.split(';');

        let totalBlue = 0;
        let totalRed = 0;
        let totalGreen = 0;
        for (const turns of arrayOfGames) {
            const turn = turns.trim().split(',');

            ({ totalRed, totalBlue, totalGreen } = CalculateColorValues(turn, totalRed, totalBlue, totalGreen));
        }

        if (totalRed > maximumRed)
            result.push(parseInt(gameId));

        if (totalGreen > maximumGreen)
            result.push(parseInt(gameId));

        if (totalBlue > maximumBlue)
            result.push(parseInt(gameId));

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

const solveSecondPuzzle = async () => {
    const file = readDocument("./inputs/cube_games.txt");
    const text = await getTextFromFile(file);
    const textArray = getTextArray(text);
    return processLines(textArray);
}

function CalculateColorValues(turn: string[], totalRed: number, totalBlue: number, totalGreen: number) {
    const { redIndex, blueIndex, greenIndex } = getColorPositionIndexes(turn);

    if (redIndex > -1)
        totalRed = getNumberFromString(turn, redIndex) > totalRed ? getNumberFromString(turn, redIndex) : totalRed;

    if (blueIndex > -1)
        totalBlue = getNumberFromString(turn, blueIndex) > totalBlue ? getNumberFromString(turn, blueIndex) : totalBlue;

    if (greenIndex > -1)
        totalGreen = getNumberFromString(turn, greenIndex) > totalGreen ? getNumberFromString(turn, greenIndex) : totalGreen;

    return { totalRed, totalBlue, totalGreen };
}

function getNumberFromString(gameArray: string[], indexColor: number): number {
    return parseInt(gameArray?.at(indexColor)?.trim().match(/\d+/g));
}

function getColorPositionIndexes(turn: string[]) {
    const redIndex = findElementPositionFromArray(turn, "red");
    const blueIndex = findElementPositionFromArray(turn, "blue");
    const greenIndex = findElementPositionFromArray(turn, "green");
    return { redIndex, blueIndex, greenIndex };
}

function findElementPositionFromArray(turn: string[], color: string) {
    return turn.findIndex(element => element.includes(color));
}

export { solveSecondPuzzle, findElementPositionFromArray, getColorPositionIndexes, getNumberFromString, CalculateColorValues }

