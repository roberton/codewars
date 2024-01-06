const decodeMorse = function(morseCode){
  const words = morseCode.split('   ')
  const letters = words.map(letter => letter.split(' '))
  
  let readable = []
  words.forEach(word => {
    word.split(' ').forEach(letter => {
      readable.push(MORSE_CODE[letter])
    })
    readable.push(' ')
  })
  
  return readable.join('').trim()
}

export {
  decodeMorse
}
