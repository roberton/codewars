function incrementString (string) {
  const parts = string.split(/(\d+)/)
  console.log(parts)
  const numberSuffixIndex = (parts.length > 1) ? parts[parts.length - 2] : 0
  const wordBase = parts.slice(0, Math.max(numberSuffixIndex, 1)).join('')
  console.log(wordBase)
  const oldNumberSuffix = parts[numberSuffixIndex] ? parts[numberSuffixIndex] : '0'
  console.log(oldNumberSuffix)

  const newNumber = parseInt(oldNumberSuffix, 10) + 1
  const newNumberSuffix = newNumber.toString().padStart(oldNumberSuffix.length, '0')
  return `${wordBase}${newNumberSuffix}`
}

export {
  incrementString
}
