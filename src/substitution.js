// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
    // you can add any code you want within this function scope
    // normal alphabet for reference
    const alphabetNormal = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];
    function substitution(input, alphabet, encode = true) {
        // your solution code here
        if (!alphabet || alphabet.length !== 26) return false;
        const inputArray = input.toLowerCase().split('');
        const alphabetArray = alphabet.toLowerCase().split('');
        // check for duplicate letters in alphabet
        const alphabetSet = new Set(alphabetArray);
        if (alphabetSet.size !== 26) return false;
        // check if encoding or decoding
        if (encode) {
            const outputArray = inputArray.map((letter) => {
                if (alphabetArray.indexOf(letter) !== -1) {
                    return alphabetArray[alphabetNormal.indexOf(letter)];
                }
                return letter;
            });
            return outputArray.join('');
        } else {
            
            const outputArray = inputArray.map((letter) => {
                if (alphabet.indexOf(letter) !== -1) {
                    return alphabetNormal[alphabetArray.indexOf(letter)];
                }
                return letter;
            });
            return outputArray.join('');
        }
    }

    return {
        substitution,
    };
})();

module.exports = { substitution: substitutionModule.substitution };
