function perimeter(n) {
  const perimeters = genFibSequence(n)
    .reduce(
      (totalPerimeter, sizeOfSquare) => totalPerimeter + 4 * sizeOfSquare,
      0)
  return perimeters
}

function genFibSequence(n) {
  const fibs = [1]
  if (n >= 1) fibs.push(1)
  if (n >= 2) {
    for (let i = 1; i < n; i++) {
      fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2])
    }
  }
  return fibs
}

export {
  perimeter
}
