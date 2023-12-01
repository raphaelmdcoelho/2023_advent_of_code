import { expect, test } from "bun:test";
import { readDocument, getTextArray, ConvertWordToNumber} from "../days/day_one";

test("readDocument", () => {
    const file = readDocument("fake_content.txt");
    expect(file).not.toBeNull();
});

test("getTextArray", () => {
    const text = `line1
     line2
     line3`;

    const textArray = getTextArray(text);

    expect(textArray.length).toBe(3);
});

test("ConvertWordToNumber", () => {
    const result = ConvertWordToNumber("asdftwoas3four");

    expect(result).toBe("asdf2as34")
});