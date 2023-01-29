// Write your tests here!
const { expect } = require("chai");
const {polybius} = require("../src/polybius");

describe("polybius", () => {
    it("should return false if the length of all numbers is odd", () => {
        const input = "443242335212541";
        const actual = polybius(input, encode = false);
        expect(actual).to.be.false;
    });

    it("should ignore capital letters", () => {
        const input = "Hello World";
        const expected = "3251131343 2543241341";
        const actual = polybius(input, encode = true);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message, before and after encoding or decoding", () => {
        const input = "3251131343 2543241341";
        const expected = "hello world";
        const actual = polybius(input, encode = false);
        expect(actual).to.equal(expected);
    });

    it("should translate the letters i and j to 42 when encoding", () => {
        const input = "ij";
        const expected = "4242";
        const actual = polybius(input, encode = true);
        expect(actual).to.equal(expected);
    });

    it("should translate 42 to (i/j) when decoding", () => {
        const input = "42";
        const expected = "(i/j)";
        const actual = polybius(input, encode = false);
        expect(actual).to.equal(expected);
    });
});
