function scramble(source, target) {
  console.log(source.length, target.length)
  // console.log(source, target)

  const sortLetters = (a, b) => a.charCodeAt(0) - b.charCodeAt(0)

  const targetLetters = target.split('').sort(sortLetters)
  const availableLetters = source.split('').sort(sortLetters)
  let availableStart = 0

  return targetLetters.every((letter, targetIndex) => {
    const index = availableLetters.indexOf(letter, availableStart)
    if (index === -1) {
      return false
    }
    if ((target.length - targetIndex) > (source.length - index)) {
      return false
    }

    availableStart = index + 1
    return true
  })
}


export {
  scramble
}
