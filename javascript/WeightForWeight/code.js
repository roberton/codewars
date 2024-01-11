function orderWeight(weightString) {
  const weights = weightString.split(' ')
  weights.sort(calcOrderWeight)

  console.log(weights)
  // console.log(sortedWeights)

  return weights.join(' ')
}

const calcOrderWeight = (lhs, rhs) => {
  const lhsOrderWeight = lhs.split('').reduce((acc, cur) => acc + parseInt(cur, 10), 0)
  const rhsOrderWeight = rhs.split('').reduce((acc, cur) => acc + parseInt(cur, 10), 0)
  // const lhsOrderWeight = lhs.length
  // const rhsOrderWeight = rhs.length
  // const lhsOrderWeight = parseInt(lhs, 10)
  // const rhsOrderWeight = parseInt(rhs, 10)
  // const lhsOrderWeight = parseInt(lhs[0], 10)
  // const rhsOrderWeight = parseInt(rhs[0], 10)

  console.log(`${lhs}: ${lhsOrderWeight} - ${rhs}: ${rhsOrderWeight}`)
  return rhs - lhs
}

export {
  orderWeight
}
