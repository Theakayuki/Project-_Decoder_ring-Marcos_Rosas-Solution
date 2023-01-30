# Decoder Ring

## Description

This project is to test encoding and decoding with simple ciphers using javascript, in a TDD node environment.

<details><summary>Installation & Running</summary>
install steps:

1. install packages with:

```sh
npm i
```

2. To test the packages with mocha:

```sh
npm test
```

3. To work with the ciphers use:

```sh
npm start
```



</details>

## File structure

📦Project-_Decoder_ring-Marcos_Rosas-Solution
 ┣ 📂scripts - Contains the cipher functions going to frontend.
 ┃ ┣ 📜caesar.js
 ┃ ┣ 📜polybius.js
 ┃ ┣ 📜setup.js
 ┃ ┗ 📜substitution.js
 ┣ 📂src - Contains the cipher functions
 ┃ ┣ 📜caesar.js
 ┃ ┣ 📜polybius.js
 ┃ ┗ 📜substitution.js
 ┣ 📂test - Tests for the ciphers to make sure that they work as intended.
 ┃ ┣ 📜caesar.submission.test.js
 ┃ ┣ 📜caesar.test.js
 ┃ ┣ 📜polybius.submission.test.js
 ┃ ┣ 📜polybius.test.js
 ┃ ┣ 📜substitution.submission.test.js
 ┃ ┗ 📜substitution.test.js
 ┣ 📜.gitignore
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜Readme.md

### Ciphers

#### Caesar

The Caesar cipher is one of the earliest known and simplest ciphers. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

example:

```js
let normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
let shiftedAlphabet = "defghijklmnopqrstuvwxyzabc";
```

#### Polybius

The Polybius square is a device invented by the ancient Greek historian and geographer Polybius for fractionating plaintext characters so that they can be represented by a smaller set of symbols. It is a special case of the fractionation method. The Polybius square is a 5×5 table of letters, usually omitting the letter "J" and filling the table with the remaining 24 letters of the alphabet. The letters "I" and "J" are usually combined into a single letter "I/J" in the 5×5 table.

example:

|  | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| 1 | a | b | c | d | e |
| 2 | f | g | h | i/j | k |
| 3 | l | m | n | o | p |
| 4 | q | r | s | t | u |
| 5 | v | w | x | y | z |

#### Substitution

The Substitution cipher used in this project is provided by the user. The user provides a key that is used to encode and decode the message. The key is a string of 26 unique characters, where each character in the alphabet is replaced with the corresponding character in the key. For example, if the key is "xoyqmcgrukswaflnthdjpzibev", then the alphabet a would be encoded as x, b would be encoded as o, and so on.

example:

| a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z |
|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
| x | o | y | q | m | c | g | r | u | k | s | w | a | f | l | n | t | h | d | j | p | z | i | b | e | v |
