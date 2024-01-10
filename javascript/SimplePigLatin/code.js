function pigIt(str) {
  const pigWord = (word) => {
    if (word.length === 1) return word
    return word.slice(1) + word[0] + 'ay'
  }

  return str
    .split(' ')
    .map(word => pigWord(word))
    .join(' ')
}

export {
  pigIt
}
