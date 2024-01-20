function sumPairs(ints, s) {
  const foundInts = new Set()

  for (let i = 0; i < ints.length; i++) {
    const element = ints[i]
    const neededForPair = s - element

    if (foundInts.has(neededForPair)) {
      return [neededForPair, element]
    }
    foundInts.add(element)
  }

  return undefined
}

export {
  sumPairs
}
