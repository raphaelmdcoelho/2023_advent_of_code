const readDocument = (filePath: string | URL) => {
    return Bun.file(filePath);
}

const getTextFromFile = async (file: any) => {
    return await file.text();
}

const getTextArray = (text: string) => {
    return text.split('\n');
}

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

const getNumberArrayFromString = (phrase: string) => {
    // Comment this line, to get the first answer:
    phrase = ConvertWordToNumber(phrase);

    const numbers = phrase.match(/\d+/g);
    return numbers?.toString();
}

const solveFirstPuzzle = async () => {
    const file = readDocument("./inputs/calibration_input.txt");
    const text = await getTextFromFile(file);
    const textArray = getTextArray(text);

    let twoDigits = [];
    for(const phrase of textArray)
    {
        const numbers = getNumberArrayFromString(phrase);
        twoDigits.push(parseInt('' + numbers?.at(0) + numbers?.at(numbers.length -1)));
    }

    return twoDigits.reduce((p, c) => { 
        return p + c });
}

export { readDocument, getTextFromFile, getTextArray, getNumberArrayFromString, solveFirstPuzzle, ConvertWordToNumber };