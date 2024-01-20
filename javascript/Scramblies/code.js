function scramble(source, target) {
  console.log(source, target)

  const targetLetters = target.split('')
  const availableLetters = source.split('')

  return targetLetters.every(letter => {
    console.log(`letter: ${letter}, available: ${availableLetters}`)
    const index = availableLetters.indexOf(letter)
    if (index === -1) {
      console.log(`didn't find ${letter}`)
      return false
    }

    console.log(`did find ${letter}`)
    availableLetters.splice(index, 1)
    return true
  })
}


export {
  scramble
}
