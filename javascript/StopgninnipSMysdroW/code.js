function spinWords(string) {
  const words = string.split(' ')
  const processedWords = words.map(word => spinWordIfLongEnough(word, 5))
  return processedWords.join(' ')
}

function spinWordIfLongEnough(word, minLengthToSpin) {
  if (word.length < minLengthToSpin) {
    return word
  }
  return word.split('').reverse().join('')
}

export {
  spinWords,
  spinWordIfLongEnough
}
