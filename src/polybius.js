// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
    const encodingHash = {
        a: '11',
        b: '21',
        c: '31',
        d: '41',
        e: '51',
        f: '12',
        g: '22',
        h: '32',
        i: '42',
        j: '42',
        k: '52',
        l: '13',
        m: '23',
        n: '33',
        o: '43',
        p: '53',
        q: '14',
        r: '24',
        s: '34',
        t: '44',
        u: '54',
        v: '15',
        w: '25',
        x: '35',
        y: '45',
        z: '55',
    };
    const decodingHash = {
        11: 'a',
        21: 'b',
        31: 'c',
        41: 'd',
        51: 'e',
        12: 'f',
        22: 'g',
        32: 'h',
        42: '(i/j)',
        52: 'k',
        13: 'l',
        23: 'm',
        33: 'n',
        43: 'o',
        53: 'p',
        14: 'q',
        24: 'r',
        34: 's',
        44: 't',
        54: 'u',
        15: 'v',
        25: 'w',
        35: 'x',
        45: 'y',
        55: 'z',
    };
    // These are the two objects that I will be using to encode and decode the input. I have the table to figure out the values of the letters. Made with the provided square.

    function polybius(input, encode = true) {
        let inputLower = input.toLowerCase();
        // This is to ignore capital letters
        let inputArray = inputLower.split('');
        let outputArray = [];
        if (encode) {
            // Loop through the array of characters
            for (let char of inputArray) {
                // If the character is a space, push it into the output array
                if (char === ' ') {
                    outputArray.push(char);
                } else {
                    // Otherwise, push the encoded character into the output array
                    outputArray.push(encodingHash[char]);
                }
            }

            // Join the output array into a string and return it
            return outputArray.join('');
        } else {
            // Find and keep spaces location in the input array
            const indexOfSpaces = [];
            const inputArrayNoSpaces = inputArray.filter((char) => char !== ' ');
            for (let i = 0; i < inputArray.length; i++) {
                if (inputArray[i] === ' ') {
                    indexOfSpaces.push(i);
                }
            }
            const indexAfterDecode = [];
            indexOfSpaces.forEach((value, index, array) => nonAlphaCorrection(value, index, array, indexAfterDecode));

            console.log(indexAfterDecode);
            // checks if input is even so it can be decoded
            if (inputArrayNoSpaces.length % 2 !== 0) return false;
            // decode
            for (let i = 0; i < inputArrayNoSpaces.length; i += 2) {
                // checking against the decoding hash and building the output array
                outputArray.push(decodingHash[inputArrayNoSpaces[i] + inputArrayNoSpaces[i + 1]]);
            }
            // add spaces back in using the indexOfSpaces array
            if (indexAfterDecode.length > 0) {
                for (let i = 0; i < indexAfterDecode.length; i++) {
                        outputArray.splice(indexAfterDecode[i], 0, ' ');
                }
            }
            // return the output array as a string
            return outputArray.join('');
        }
    }

    function nonAlphaCorrection(value, currentIndex, array, resultArray) {
        if (currentIndex === 0) {
            resultArray.push(value / 2);
        } else {
            resultArray.push(
                ((value - 1) - array[currentIndex - 1]) / 2 + resultArray[currentIndex - 1] + 1
            );
        }
    }

    return {
        polybius,
    };
})();

module.exports = { polybius: polybiusModule.polybius };
