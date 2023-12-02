import { expect, test } from "bun:test";
import { ConvertWordToNumber, getNumberArrayFromStringPart1, getNumberArrayFromStringPart2, solveFirstPuzzle } from "../days/day_one";

test("ConvertWordToNumber", () => {
    const result = ConvertWordToNumber("asdftwoas3four");

    expect(result).toBe("asdf2as34")
});

test("getNumberArrayFromStringPart1", () => {
    const result = getNumberArrayFromStringPart1("asdftwoas3four");

    expect(result).toBe("3");
});

test("getNumberArrayFromStringPart2", () => {
    const result = getNumberArrayFromStringPart2("asdftwoas3four");

    expect(result).toBe("2,34");
});

test("solveFirstPuzzle", () => {
    let result = solveFirstPuzzle();

    expect(result).not.toBeNull();
});