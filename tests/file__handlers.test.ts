import { expect, test } from "bun:test";
import { getTextArray, readDocument } from "../handlers/file_handlers";

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