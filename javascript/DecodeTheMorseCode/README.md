# Decode The Morse Code

## Metadata
ID: 54b724efac3d5402db00065e
URL: https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
Difficulty: 6 kyu

## Notes
Hard to do locally as it relies on a dictionary which is injected into the environment.

I did like this solution (which is similar but nice use of sub-functions)
```
decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}
```
