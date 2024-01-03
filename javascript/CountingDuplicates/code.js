function duplicateCount(text) {
  const duplicates = new Set()
  const seen = new Set()

  text.split('')
    .map(element => element.toLowerCase())
    .forEach(element => {
      if (seen.has(element)) {
        duplicates.add(element)
      } else {
        seen.add(element)
      }});

  return duplicates.size
}

export {
  duplicateCount
}
