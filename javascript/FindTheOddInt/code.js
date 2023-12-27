function findOdd(ints) {
  const frequencies = ints.reduce((acc, cur) => {
    if (acc.has(cur)) {
      acc.set(cur, acc.get(cur) + 1)
    } else {
      acc.set(cur, 1)
    }
    return acc
  },
  new Map())

  const isOdd = (number) => number % 2 === 1
  const oddNumbers = [...frequencies].filter(([number, frequency]) => isOdd(frequency))

  return oddNumbers[0][0]
}


export {
  findOdd
}
