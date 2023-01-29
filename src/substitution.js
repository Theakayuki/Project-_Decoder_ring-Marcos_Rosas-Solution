// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
    // you can add any code you want within this function scope
    // normal alphabet for reference wish I could use a map but array just made more sense
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
        // check for missing alphabet or wrong length
        if (!alphabet || alphabet.length !== 26) return false;
        const inputArray = input.toLowerCase().split('');
        const alphabetArray = alphabet.toLowerCase().split('');
        // check for duplicate letters in alphabet using a set
        const alphabetSet = new Set(alphabetArray);
        if (alphabetSet.size !== 26) return false;
        // check if encoding or decoding
        if (encode) {
            
            // map over every letter in inputArray
            const outputArray = inputArray.map((letter) => {
                
                // check if the letter is in alphabet
                if (alphabetArray.indexOf(letter) !== -1) {
                    
                    // return the letter in alphabetNormal
                    return alphabetArray[alphabetNormal.indexOf(letter)];
                }
                return letter;
            });
            return outputArray.join('');
        } else {
            
            // map over every letter in inputArray
            const outputArray = inputArray.map((letter) => {
                
                // check if the letter is in alphabet
                if (alphabet.indexOf(letter) !== -1) {
                    
                    // return the letter in alphabetNormal
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
