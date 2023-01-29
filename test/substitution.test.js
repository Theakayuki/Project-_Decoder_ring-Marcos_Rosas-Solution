const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe('substitution', () => {
    it('Should be ok with spaces', () => {
        const input = 'You are an excellent spy';
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitution(input, 'xoyqmcgrukswaflnthdjpzibev');
        expect(actual).to.equal(expected);
    });

    it('Should be ok with special characters', () => {
        const input = 'y&ii$r&';
        const expected = 'message';
        const actual = substitution(input, '$wae&zrdxtfcygvuhbijnokmpl', false);
        expect(actual).to.equal(expected);
    });

    it('should be false if substitute alphabet is too short', () => {
        const input = 'message';
        const actual = substitution(input, 'short');
        expect(actual).to.be.false;
    });

    it('should be false if substitute alphabet is too long', () => {
        const input = 'message';
        const actual = substitution(input, 'toolongxoyqmcgrukswaflnthdjpzibev');
        expect(actual).to.be.false;
    });

    it('should be false if duplicate characters are in alphabet', () => {
        const input = 'message';
        const actual = substitution(input, 'xoyqmcgrukswaflnthdjpzibevx');
        expect(actual).to.be.false;
    });
});
