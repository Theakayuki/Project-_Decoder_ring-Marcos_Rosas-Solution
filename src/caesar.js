// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
    // you can add any code you want within this function scope
    const alphabet = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26};
    function caesar(string, shift, encode = true) {
        // Checks that shift is a number between -25 and 25, and not 0
        if (!shift || Math.abs(shift) > 25 || shift === 0) return false;

        // Converts the string to lowercase and splits it into an array
        const input = string.toLowerCase().split('');

        // Checks whether to encode or decode the message
        if (!encode) shift *= -1;

        // Maps through each letter in the input, and checks if it's a letter that can be encoded
        // If it can be encoded, it finds the new letter in the alphabet, and returns it
        // If it can't be encoded, it returns the original letter
        const output = input.map((letter) => {
            if (alphabet[letter]) {
                let newLetter = alphabet[letter] + shift;
                // Checks if the new letter is outside the alphabet, and adjusts it if it is
                if (newLetter > 26) newLetter -= 26;
                if (newLetter < 1) newLetter += 26;
                // Converts the new letter to a string and returns it
                return Object.keys(alphabet)[newLetter - 1];
            }
            return letter;
        });

        // Joins the array into a string and returns it
        return output.join('');
    }

    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };
