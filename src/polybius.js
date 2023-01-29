// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
    // you can add any code you want within this function scope
    const encodingHash = { a: '11', b: '21', c: '31', d: '41', e: '51', f: '12', g: '22', h: '32', i: '42', j: '42', k: '52', l: '13', m: '23', n: '33', o: '43', p: '53', q: '14', r: '24', s: '34', t: '44', u: '54', v: '15', w: '25', x: '35', y: '45', z: '55' };
    const decodingHash = { 11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e', 12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k', 13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p', 14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u', 15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z' };

    function polybius(input, encode = true) {
        // I will be using the encodingHash and decodingHash objects to encode and decode the input since I have the table to figure out there values.
        // we will be preserving spaces
        let inputLower = input.toLowerCase();
        let inputArray = inputLower.split('');
        let outputArray = [];
        if (encode) {
            for (let char of inputArray) {
                if (char === ' ') {
                    outputArray.push(char);
                } else {
                    outputArray.push(encodingHash[char]);
                }
            }
            return outputArray.join('');
        } else {
            // check for odd number of numbers
            const indexsOfSpaces = [];
            const inputArrayNoSpaces = inputArray.filter((char) => char !== ' ');
            for (let i=0; i<inputArray.length; i++) {
                if (inputArray[i] === ' ') {
                    indexsOfSpaces.push(i/2);
                }
            }
            if (inputArrayNoSpaces.length % 2 !== 0) return false;
            // decode
            for (let i=0; i<inputArrayNoSpaces.length; i+=2) {
                outputArray.push(decodingHash[inputArrayNoSpaces[i] + inputArrayNoSpaces[i+1]]);
            }
            // add spaces back in
            if (indexsOfSpaces.length > 0) {
                for (let index of indexsOfSpaces) {
                    outputArray.splice(index, 0, ' ');
                }
            }

            return outputArray.join('');
        }
    }

    return {
        polybius,
    };
})();

module.exports = { polybius: polybiusModule.polybius };
