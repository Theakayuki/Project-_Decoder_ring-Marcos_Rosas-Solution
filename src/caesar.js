// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
    // you can add any code you want within this function scope
    const alphabet = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26};
    function caesar(string, shift, encode = true) {
        // your solution code here
        if (!shift || Math.abs(shift) > 25 || shift === 0) return false;
        const input = string.toLowerCase().split('');
        if (!encode) shift *= -1;
        const output = input.map((letter) => {
            if (alphabet[letter]) {
                let newLetter = alphabet[letter] + shift;
                if (newLetter > 26) newLetter -= 26;
                if (newLetter < 1) newLetter += 26;
                return Object.keys(alphabet)[newLetter - 1];
            }
            return letter;
        });
        return output.join('');
    }

    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };
