function countBits(n) {
  const binaryString = n.toString(2)
  const stringOfOnes = binaryString.replaceAll('0', '')
  return stringOfOnes.length
}

function countBitsUsingReduce(n) {
  const binaryString = n.toString(2)
  return binaryString
    .split('')
    .reduce(
      (count, bit) => count + (bit === '1' ? 1 : 0),
      0)

}

export {
  countBits
}
