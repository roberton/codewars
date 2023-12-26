function incrementString (string) {
  const segments = string.trim().split(/(\d+)/).filter(segment => segment.length > 0)

  const numberSuffixIndex = calcNumberSuffixIndex(segments)
  const stringBase = numberSuffixIndex === -1 ? segments[0] : segments.slice(0, numberSuffixIndex).join('')

  const oldNumberSuffix = segments[numberSuffixIndex] ? segments[numberSuffixIndex] : '0'

  const newNumber = parseInt(oldNumberSuffix, 10) + 1
  const newNumberSuffix = newNumber.toString().padStart(oldNumberSuffix.length, '0')
  return `${stringBase}${newNumberSuffix}`
}

// given list of string segments, return index of segment containing number to be incremented
// if no such number, return -1
function calcNumberSuffixIndex(stringSegments) {
  if (stringSegments.length === 1 && isNaN(stringSegments[0])) {
    return -1
  }
  return stringSegments.length - 1
}

export {
  incrementString,
  calcNumberSuffixIndex
}
