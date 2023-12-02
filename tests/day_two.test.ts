import { expect, test } from "bun:test";
import { CalculateColorValues, findElementPositionFromArray, getColorPositionIndexes, getNumberFromString } from "../days/day_two";


test("findElementPositionFromArray", () => {
    let result = findElementPositionFromArray(["1 red", "5 blue"], "red");

    expect(result).toBe(0);
});

test("getColorPositionIndexes", () => {
    const { redIndex, blueIndex, greenIndex } = getColorPositionIndexes(["1 red", "5 blue", "10 green"]);

    expect(redIndex).toBe(0);
    expect(blueIndex).toBe(1);
    expect(greenIndex).toBe(2);
});

test("getNumberFromString", () => {
    const result = getNumberFromString(["1 red", "5 blue", "10 green"], 2);

    expect(result).toBe(10);
});

test("CalculateColorValues", () => {
    let totalRed = 0;
    let totalBlue = 0;
    let totalGreen = 0;
    ({ totalRed, totalBlue, totalGreen } = CalculateColorValues(["1 red", "5 blue", "10 green"], totalRed, totalBlue, totalGreen));

    expect(totalRed).toBe(1);
    expect(totalBlue).toBe(5);
    expect(totalGreen).toBe(10);
});