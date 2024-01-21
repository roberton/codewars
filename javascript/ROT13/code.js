function rot13(originalStr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  const rotateLetter = (letter) => {
    const isUpperCaseLetter = alphabet.toUpperCase().includes(letter)

    if (alphabet.includes(letter.toLowerCase())) {
      const oldLetterIndex = letter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)
      const newLetterIndex = (oldLetterIndex + 13) % 26
      const newLetter = alphabet[newLetterIndex]
      return isUpperCaseLetter ? newLetter.toUpperCase() : newLetter
    }
    return letter
  }

  const rotatedStr = originalStr
    .split('')
    .map(letter => rotateLetter(letter))
    .join('')

  return rotatedStr
}

export {
  rot13
}
