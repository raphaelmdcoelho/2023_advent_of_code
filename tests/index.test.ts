import { expect, spyOn, test } from "bun:test";
import { run } from "..";
const spyConsole = spyOn(console, 'log');

test("runFirstDay", () => {
    run();
    
    expect(spyConsole).toHaveBeenCalledTimes(2);
});