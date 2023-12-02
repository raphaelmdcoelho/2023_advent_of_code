const readDocument = (filePath: string | URL) => {
    return Bun.file(filePath);
}

const getTextFromFile = async (file: any) => {
    return await file.text();
}

const getTextArray = (text: string) => {
    return text.split('\n');
}

export { readDocument, getTextFromFile, getTextArray }