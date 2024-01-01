function findOutlier(integers) {
  let odds = []
  let evens = []

  integers.forEach(integer => isOdd(integer) ? odds.push(integer) : evens.push(integer))

  return (odds.length === 1) ? odds[0] : evens[0]
}

const isOdd = (integer) => integer % 2 !== 0

export {
  findOutlier
}
