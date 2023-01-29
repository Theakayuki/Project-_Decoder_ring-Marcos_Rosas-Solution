// Write your tests here!
const { caesar } = require("../src/caesar");
const {expect} = require("chai");

describe("caesar", () => {
    it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present.", () => {
        const input = "thinkful";
        const shift = 48;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });
    it("should ignore capital letters. (For example, the results of A Message and a message should be the same.)", () => {
        const inputCap = "Thinkful";
        const inputLow = "thinkful";
        const shift = 8;
        const actualCap = caesar(inputCap, shift);
        const actualLow = caesar(inputLow, shift);
        expect(actualCap).to.equal(actualLow);
    });
    it("should maintain spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
        const input = "a message";
        const shift = 8;
        const actual = caesar(input, shift);
        const expected = "i umaaiom";
        expect(actual).to.equal(expected);
    });

    it('should be ok with spaces', () => {
        const input = 'lots of spaces';
        const shift = 8;
        const actual = caesar(input, shift);
        const expected = 'twba wn axikma';
        expect(actual).to.equal(expected);
    });
});