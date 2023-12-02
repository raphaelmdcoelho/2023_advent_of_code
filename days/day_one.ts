import { getTextArray, getTextFromFile, readDocument } from "../handlers/file_handlers";

const ConvertWordToNumber = (phrase: string) => {
    phrase = phrase.replace(/nineight/g, '98');
    phrase = phrase.replace(/oneight/g, '18');
    phrase = phrase.replace(/oneight/g, '18');
    phrase = phrase.replace(/sevenine/g, '79');
    phrase = phrase.replace(/eightwo/g, '82');
    phrase = phrase.replace(/eighthree/g, '83');
    phrase = phrase.replace(/twone/g, '21');
    phrase = phrase.replace(/threeight/g, '38');
    phrase = phrase.replace(/fiveight/g, '58');
    phrase = phrase.replace(/one/g, '1');
    phrase = phrase.replace(/two/g, '2');
    phrase = phrase.replace(/three/g, '3');
    phrase = phrase.replace(/four/g, '4');
    phrase = phrase.replace(/five/g, '5');
    phrase = phrase.replace(/six/g, '6');
    phrase = phrase.replace(/seven/g, '7');
    phrase = phrase.replace(/eight/g, '8');
    phrase = phrase.replace(/nine/g, '9');

    return phrase
}

const getNumberArrayFromStringPart1 = (phrase: string) => {
    const numbers = phrase.match(/\d+/g);
    return numbers?.toString();
}

const getNumberArrayFromStringPart2 = (phrase: string) => {
    phrase = ConvertWordToNumber(phrase);

    const numbers = phrase.match(/\d+/g);
    return numbers?.toString();
}

const solveFirstPuzzle = async () => {
    const file = readDocument("./inputs/calibration_input.txt");
    const text = await getTextFromFile(file);
    const textArray = getTextArray(text);

    let twoDigitsPart1 = [];
    let twoDigitsPart2 = [];
    for (const phrase of textArray) {
        const numbersPart1 = getNumberArrayFromStringPart1(phrase);
        const numbersPart2 = getNumberArrayFromStringPart2(phrase);

        twoDigitsPart1.push(parseInt('' + numbersPart1?.at(0) + numbersPart1?.at(numbersPart1.length - 1)));
        twoDigitsPart2.push(parseInt('' + numbersPart2?.at(0) + numbersPart2?.at(numbersPart2.length - 1)));
    }

    const part1Result = twoDigitsPart1.reduce((p, c) => p + c);
    const part2Result = twoDigitsPart2.reduce((p, c) => p + c);

    return `Part I result: ${part1Result} - part II result: ${part2Result}`
}

export { getNumberArrayFromStringPart1, getNumberArrayFromStringPart2, solveFirstPuzzle, ConvertWordToNumber };