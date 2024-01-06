function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const positions = text
    .toLowerCase()
    .split('')
    .filter(letter => alphabet.includes(letter))
    .map(letter => letterPosition(letter))

  return positions.join(' ')
}

// assumes lower case
const letterPosition = (letter) => letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1

export {
  alphabetPosition,
  letterPosition
}
