function solution(under) {
  if (under < 0) {
    return 0
  }

  return Array.from({ length: under }, (_, i) => i)
    .filter(num => num % 3 === 0 || num % 5 === 0)
    .reduce((acc, cur) => acc + cur, 0)
}

export {
  solution
}
